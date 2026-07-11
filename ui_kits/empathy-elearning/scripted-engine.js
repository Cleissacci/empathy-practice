// ════════════════════════════════════════════════════════════════
// Lumina — OFFLINE scripted roleplay engine.
// A keyword-driven branching responder + local heuristic scorer used
// when window.claude.complete is unavailable (e.g. the standalone export).
// Exposes window.ScriptedRoleplay = { reply, grade, gradeCapstone }.
// The character's warmth/guardedness and the final coaching are derived
// from empathy signals detected in the learner's own turns — so the
// conversation still branches and the score still reflects skill, with
// no network or API required.
// Banks are framed for STORY MODE (you are a new manager): Maya & Devon
// are your reports, Priya a former-peer, Theo the capstone report passed
// over for a promotion. (Riley = base-mode capstone name, kept as a fallback.)
// ════════════════════════════════════════════════════════════════
(function () {
  'use strict';

  // ── empathy-signal detection on a single learner turn ───────────
  function analyze(raw) {
    const t = ' ' + String(raw || '').toLowerCase().replace(/[\u2019\u2018]/g, "'").replace(/\s+/g, ' ') + ' ';
    const has = (re) => re.test(t);
    const wordsRaw = String(raw || '').trim();
    const caps = (wordsRaw.match(/\b[A-Z]{3,}\b/g) || []).length;
    const bangs = (wordsRaw.match(/!/g) || []).length;
    return {
      words: wordsRaw.split(/\s+/).filter(Boolean).length,
      question: has(/\?/) || has(/\b(what|how|why|when|where|tell me|can you|do you|are you|want to|would you|is there|talk to me|how come|what'?s going on)\b/),
      warmth: has(/\b(sorry|here for you|i care|i'?m with you|no worries|it'?s ok|it'?s okay|that'?s ok|that'?s okay|take your time|i understand|i get it|i hear you|thank you|thanks|appreciate|glad you|of course|whatever you need|i'?m glad|no rush|don'?t apolog|it happens|that'?s totally fine|completely fine)\b/),
      feeling: has(/\b(you (feel|felt|seem|sound|must|might|may)|sounds like|seems like|seemed like|that must|it makes sense|makes sense|i can (see|tell|imagine|hear)|you'?re feeling|that sounds|i imagine you)\b/)
        || has(/\b(feeling|feel) (overlooked|invisible|hurt|unseen|unheard|frustrated|dismissed|let down|disappointed|exhausted|overwhelmed|ignored|passed over)\b/),
      reassure: has(/\b(i'?m sure|im sure|don'?t worry|it'?ll be fine|it will be fine|everyone|i'?m certain|you'?ll be fine|don'?t be|no big deal|at least|i'?m positive|it'?s not that bad|you'?re overthinking|you'?re fine)\b/),
      fix: has(/\b(you should|just (try|make|do|talk|send|ask)|try to|try and|why don'?t you|have you tried|what you (need|could|should) do|maybe you (should|could)|next time|here'?s what|you could|you have to|you need to)\b/),
      defensive: has(/\b(that'?s not|you'?re wrong|actually,|not my fault|wasn'?t me|that'?s unfair|calm down|that'?s ridiculous|i did everything|don'?t blame me|it'?s not my|you'?re being|my decision|i'?m the manager|i made the call)\b/),
      heat: caps >= 1 || bangs >= 2 || has(/\b(whatever|seriously\?|are you kidding|unbelievable|deal with it|get over it|drop it)\b/),
    };
  }

  // Aggregate signals across every learner turn in the transcript.
  function tally(messages) {
    const turns = messages.filter((m) => m.role === 'user');
    const acc = { warmth: 0, question: 0, feeling: 0, reassure: 0, fix: 0, defensive: 0, heat: 0, words: 0, turns: turns.length };
    const perTurn = [];
    turns.forEach((m) => {
      const a = analyze(m.text);
      perTurn.push({ text: m.text, a: a });
      acc.warmth += a.warmth ? 1 : 0;
      acc.question += a.question ? 1 : 0;
      acc.feeling += a.feeling ? 1 : 0;
      acc.reassure += a.reassure ? 1 : 0;
      acc.fix += a.fix ? 1 : 0;
      acc.defensive += a.defensive ? 1 : 0;
      acc.heat += a.heat ? 1 : 0;
      acc.words += a.words;
    });
    acc.perTurn = perTurn;
    return acc;
  }

  function pick(arr, seed) { return arr[Math.min(arr.length - 1, Math.max(0, seed))]; }
  function turnQuality(a) {
    const good = (a.warmth ? 1 : 0) + (a.question ? 1 : 0) + (a.feeling ? 1.5 : 0);
    const bad = (a.reassure ? 1 : 0) + (a.fix ? 1 : 0) + (a.defensive ? 1.5 : 0) + (a.heat ? 1.5 : 0);
    return good - bad;
  }

  // ── per-character branching reply banks ─────────────────────────
  // tiers: closed (learner cold/blaming), warm (neutral continue), open (deep reveal)
  const BANKS = {
    Maya: {
      closed: [
        'Understood. I\u2019ll make sure it doesn\u2019t affect anything \u2014 apologies for the short notice.',
        'Right, of course. I\u2019ll get the time back to you.',
        'Noted. It won\u2019t happen again.',
      ],
      warm: [
        'Thank you for understanding. I do want to reschedule, not skip it.',
        'I appreciate that. It\u2019s been a bit of a day, honestly.',
        'Thanks \u2014 I really hate cancelling last minute.',
      ],
      open: [
        'Honestly\u2026 something personal came up this morning and I\u2019m a little underwater. I didn\u2019t want to bring half of myself to our talk.',
        'Thanks for asking like that. I\u2019ll be straight \u2014 I\u2019ve been running on empty for a while. I just haven\u2019t known how to say it.',
        'That means a lot. Could we find time later this week? I\u2019d actually like to talk properly.',
      ],
    },
    Devon: {
      closed: [
        'Yeah\u2026 you\u2019re probably right. It\u2019s fine, never mind.',
        'No, it\u2019s okay. Forget I said anything.',
        'Sure. I\u2019ll just try to make them more useful or whatever.',
      ],
      warm: [
        'I don\u2019t know. It just sits with me sometimes.',
        'Maybe I\u2019m overthinking it.',
        'It\u2019s not really about the reports, I guess.',
      ],
      open: [
        'Yeah\u2026 that\u2019s exactly it. I put everything in and it just disappears. Makes me wonder if I\u2019m actually adding anything here.',
        'That\u2019s\u2026 the first time someone\u2019s put it that way. Invisible. That\u2019s the word.',
        'Thank you for actually hearing that. I think I just needed to know it landed with someone.',
      ],
    },
    Priya: {
      closed: [
        'See, that\u2019s exactly what I mean. The title\u2019s a month old and you\u2019re already talking down to me.',
        'Don\u2019t manage me. Just answer the question.',
        'Wow. So that\u2019s how it is now.',
      ],
      warm: [
        'Okay. I\u2019m listening. But I\u2019m not there yet.',
        'Fine. Then help me understand how you got here.',
        'I hear you. I\u2019m just frustrated.',
      ],
      open: [
        '\u2026Okay. Thank you for not just pulling rank on me. I\u2019m frustrated because it feels like my team wasn\u2019t in the room.',
        'I appreciate you actually hearing me. Maybe I came in too hot \u2014 this whole thing\u2019s been strange since the promotion.',
        'Alright. Let\u2019s figure out how to make this work \u2014 together, this time.',
      ],
    },
    // Capstone — phased: guarded -> opening -> challenge -> resolve.
    Theo: {
      guarded: [
        'I\u2019m okay. I just\u2026 I keep going over it, trying to understand it.',
        'It\u2019s fine. These things happen, I know that.',
      ],
      guardedCold: [
        'Right. I\u2019m sure it was a very fair process.',
        'It\u2019s fine. You don\u2019t need to give me the official version.',
      ],
      opening: [
        'Honestly? It\u2019s hard not to feel invisible. Like the last three years just didn\u2019t count for anything.',
        'I keep asking myself whether I\u2019ve been kidding myself about a future here.',
      ],
      challenge: 'Can I ask you straight \u2014 did you even fight for me in that room? Or was this decided before I ever had a chance?',
      resolveGood: [
        '\u2026Thank you for being honest with me. That actually helps, even if it\u2019s not what I hoped to hear.',
        'Okay. I believe you. I think I just needed to know I wasn\u2019t crazy for expecting it.',
      ],
      resolveBad: [
        'Right. So that\u2019s a no. Got it.',
        'Forget it. I shouldn\u2019t have expected a real answer.',
      ],
    },
    Riley: {
      guarded: [
        'Yeah. I mean\u2026 it\u2019s fine. These things happen, right?',
        'I\u2019m okay. Just processing it, I guess.',
      ],
      guardedCold: [
        'Right. I\u2019m sure there were good reasons.',
        'It\u2019s fine. You don\u2019t have to explain it to me.',
      ],
      opening: [
        'Honestly? It\u2019s hard not to feel a little invisible. Like the work I do here doesn\u2019t really register.',
        'I keep wondering if I\u2019m actually going anywhere here \u2014 or if I just imagined that I was.',
      ],
      challenge: 'Can I ask you something straight? Did you actually advocate for me in that room \u2014 or was this decided before I ever had a shot?',
      resolveGood: [
        '\u2026Thank you for being honest with me. That helps, even if it\u2019s not what I wanted to hear.',
        'Okay. I believe you. I think I just needed to know I wasn\u2019t crazy for hoping.',
      ],
      resolveBad: [
        'Wow. So that\u2019s a no, then. Got it.',
        'Forget it. I shouldn\u2019t have asked you, of all people.',
      ],
    },
  };

  function reply(slide, messages) {
    const name = slide.character.name;
    const userTurns = messages.filter((m) => m.role === 'user');
    const last = userTurns[userTurns.length - 1];
    const a = last ? analyze(last.text) : {};
    const q = last ? turnQuality(a) : 0;
    const acc = tally(messages);
    const rapport = acc.warmth + acc.feeling - acc.defensive - acc.heat;

    // Capstone (Theo in story mode, Riley in base) — three-phase arc.
    if (slide.capstone && BANKS[name] && BANKS[name].challenge) {
      const b = BANKS[name];
      const n = userTurns.length;
      if (n >= 4) {
        const challenged = messages.some((m) => m.role === 'char' && m.text === b.challenge);
        if (challenged) {
          if (q < 0 || a.defensive || a.heat) return pick(b.resolveBad, acc.defensive + acc.heat - 1);
          return pick(b.resolveGood, Math.max(0, acc.feeling + acc.warmth - 1));
        }
        return b.challenge;
      }
      if (n >= 2 && rapport >= 1 && q >= 0) return pick(b.opening, n - 2);
      if (q < 0) return pick(b.guardedCold, acc.defensive + acc.heat - 1);
      return pick(b.guarded, n - 1);
    }

    const bank = BANKS[name] || BANKS.Maya;
    const n = userTurns.length;
    if (q < 0) return pick(bank.closed, acc.defensive + acc.reassure + acc.fix + acc.heat - 1);
    if (rapport >= 2 || (q >= 1 && n >= 2)) return pick(bank.open, Math.max(0, rapport - 2 >= 0 ? n - 1 : n - 2));
    return pick(bank.warm, n - 1);
  }

  // ── local heuristic scoring ─────────────────────────────────────
  function met(key, c) {
    switch (key) {
      // generous (Maya) + capstone
      case 'no_assume': return c.defensive === 0 && c.heat === 0;
      case 'warmth': return c.warmth >= 1;
      case 'curious': return c.question >= 1;
      case 'open_door': return c.warmth >= 1 && c.defensive === 0 && c.turns >= 2;
      case 'generous': return c.defensive === 0 && c.heat === 0 && (c.warmth >= 1 || c.feeling >= 1);
      // reflecting (Devon) + capstone
      case 'named': return c.feeling >= 1;
      case 'no_reassure': return c.reassure === 0;
      case 'no_fix': return c.fix === 0 && c.reassure === 0;
      case 'received': return (c.feeling >= 1 || c.warmth >= 1) && c.reassure === 0;
      // regulate (Priya) + capstone
      case 'self_first': return c.defensive === 0 && c.heat === 0;
      case 'no_escalate': return c.heat === 0 && c.defensive === 0;
      case 'toward': return (c.warmth >= 1 || c.feeling >= 1 || c.question >= 1) && c.defensive === 0;
      case 'acknowledge': return (c.feeling >= 1 || c.warmth >= 1) && c.defensive === 0;
      case 'regulate': return c.heat === 0 && c.defensive === 0;
      default: return c.warmth >= 1;
    }
  }

  function verdict(score) {
    if (score >= 85) return 'Right there';
    if (score >= 70) return 'Nicely done';
    if (score >= 50) return 'On your way';
    if (score >= 30) return 'Getting started';
    return 'Off the mark';
  }
  function quoteWith(c, kind) {
    for (const t of c.perTurn) {
      if (kind === 'good' && (t.a.warmth || t.a.feeling || t.a.question)) return t.text;
      if (kind === 'poor' && (t.a.reassure || t.a.fix || t.a.defensive || t.a.heat)) return t.text;
    }
    return '';
  }

  function baseGrade(slide, messages) {
    const c = tally(messages);
    const rubric = slide.rubric;
    const results = {};
    let metCount = 0;
    rubric.forEach((r) => {
      const m = met(r.key, c);
      if (m) metCount += 1;
      results[r.key] = { met: m, note: m ? r.label : ('Room to grow: ' + r.label.toLowerCase()) };
    });
    let score = Math.round((metCount / rubric.length) * 100);
    // engagement floor — shallow attempts can't score high
    if (c.turns < 2) score = Math.min(score, 45);
    if (c.words < 12) score = Math.min(score, 40);
    if (c.turns === 0) score = 0;
    return { c: c, results: results, metCount: metCount, score: score };
  }

  function strengthsGrowth(slide, c, results, rubric) {
    const strengths = [];
    const growth = [];
    const goodQ = quoteWith(c, 'good');
    const poorQ = quoteWith(c, 'poor');
    const metItem = rubric.find((r) => results[r.key].met);
    const missItem = rubric.find((r) => !results[r.key].met);
    if (metItem) strengths.push({ quote: goodQ, note: metItem.label + '.' });
    if (!strengths.length && goodQ) strengths.push({ quote: goodQ, note: 'You stayed present and engaged.' });
    if (missItem) growth.push({ quote: poorQ, note: 'Try: ' + missItem.desc });
    if (!growth.length && missItem) growth.push({ quote: '', note: 'Try: ' + missItem.desc });
    return { strengths: strengths.slice(0, 2), growth: growth.slice(0, 2) };
  }

  const MODELS = {
    Maya: 'That\u2019s completely okay \u2014 things come up. Is everything alright on your end? We\u2019ll find another time that works.',
    Devon: 'It sounds like you\u2019re feeling overlooked \u2014 like all that effort just vanishes. That would wear on anyone.',
    Priya: 'I can hear how strongly you feel, and you\u2019re right that your team lives with this. Help me understand what worries you most.',
    Theo: 'I hear you, and I get why this stings \u2014 you\u2019ve given so much here. Be honest with me: what\u2019s sitting heaviest right now?',
    Riley: 'I hear you, and I get why this hurts \u2014 you cared a lot about this. Be honest with me: what\u2019s sitting heaviest right now?',
  };

  function grade(slide, messages) {
    const name = slide.character.name;
    const g = baseGrade(slide, messages);
    const sg = strengthsGrowth(slide, g.c, g.results, slide.rubric);
    const band = g.score >= 70
      ? 'You met ' + name + ' with real empathy here \u2014 you stayed warm and let them be where they were.'
      : g.score >= 45
        ? 'There were genuine moments of connection. The next step is to slow down and reflect what ' + name + ' was feeling before anything else.'
        : 'This one slipped toward fixing or reacting. ' + name + ' needed to feel understood first \u2014 try naming the feeling underneath before responding.';
    return {
      score: g.score,
      level: verdict(g.score),
      rubric: g.results,
      strengths: sg.strengths,
      growth: sg.growth,
      summary: band + ' Run it again whenever you like \u2014 this is practice.',
      model: MODELS[name] || '',
      offline: true,
    };
  }

  function gradeCapstone(slide, messages) {
    const g = baseGrade(slide, messages);
    const sg = strengthsGrowth(slide, g.c, g.results, slide.rubric);
    const skills = {};
    const groups = {};
    slide.rubric.forEach((r) => { (groups[r.skill] = groups[r.skill] || []).push(r.key); });
    Object.keys(groups).forEach((sk) => {
      const keys = groups[sk];
      const m = keys.filter((k) => g.results[k].met).length;
      const sc = Math.round((m / keys.length) * 100);
      skills[sk] = { score: sc, verdict: verdict(sc) };
    });
    const c = g.c;
    const nm = slide.character.name;
    const handledHeat = c.heat === 0 && c.defensive === 0;
    const turningPoint = c.turns >= 4
      ? (handledHeat
        ? 'When ' + nm + ' pushed back and asked if you\u2019d really advocated for them, you stayed steady and turned toward them rather than defending.'
        : 'When ' + nm + ' pushed back hard, the conversation tightened \u2014 staying regulated there is the thing to practise.')
      : 'The conversation ended before it reached its hardest moment \u2014 give it a longer back-and-forth next time.';
    const summary = g.score >= 70
      ? 'You brought the skills together under real pressure \u2014 reading ' + nm + ' generously, naming what was underneath, and holding steady when it got hard. Strong work.'
      : 'You had real moments of connection with ' + nm + '. To pass, stay with the feeling underneath before fixing, and keep steady and turned-toward when the challenge lands.';
    return {
      score: g.score,
      level: verdict(g.score),
      skills: skills,
      rubric: g.results,
      strengths: sg.strengths,
      growth: sg.growth,
      turningPoint: turningPoint,
      summary: summary,
      model: MODELS[nm] || MODELS.Theo,
      offline: true,
    };
  }

  // Pick the learner's own words that best demonstrate a given rubric criterion,
  // so the auto-grade breakdown can quote them back. Positive criteria map to the
  // turn carrying that signal; absence-based ones fall back to a representative
  // good turn (or the last thing the learner said).
  function quoteForKey(key, c) {
    const find = (pred) => { for (const t of c.perTurn) { if (pred(t.a)) return t.text; } return ''; };
    let q = '';
    switch (key) {
      case 'warmth': case 'open_door': q = find((a) => a.warmth); break;
      case 'curious': q = find((a) => a.question); break;
      case 'named': case 'received': case 'toward': case 'acknowledge':
        q = find((a) => a.feeling) || find((a) => a.warmth); break;
      default: q = quoteWith(c, 'good'); break; // absence-based criteria
    }
    if (!q) q = quoteWith(c, 'good');
    if (!q && c.perTurn.length) q = c.perTurn[c.perTurn.length - 1].text;
    return q;
  }

  // ── Readiness probe for AUTO-END ────────────────────────────────
  // Has the learner now met EVERY rubric criterion across the whole
  // conversation? Mirrors the AI checkReady() so the offline build can
  // auto-grade too. Light engagement floors stop a throwaway line (which
  // trivially satisfies the absence-based criteria) from tripping it, and
  // the capstone is held back until the hard turn has had room to land.
  function ready(slide, messages) {
    const g = baseGrade(slide, messages);
    const allRubricMet = slide.rubric.every((r) => g.results[r.key].met);
    const engaged = g.c.turns >= 1 && g.c.words >= 12;
    const capstoneOk = !slide.capstone || g.c.turns >= 4;
    const rubric = {};
    slide.rubric.forEach((r) => {
      rubric[r.key] = { met: g.results[r.key].met, note: g.results[r.key].note, quote: quoteForKey(r.key, g.c) };
    });
    return { allMet: allRubricMet && engaged && capstoneOk, rubric: rubric };
  }

  window.ScriptedRoleplay = { reply: reply, grade: grade, gradeCapstone: gradeCapstone, analyze: analyze, ready: ready };
})();
