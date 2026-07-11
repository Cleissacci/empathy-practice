// ════════════════════════════════════════════════════════════════
// Lumina — AI-powered empathy ROLEPLAY.
// Two ways to practise the same scenario, chosen per-scenario at the top:
//   • Call  — full phone-call UI. Speak out loud (Web Speech API, falls back
//             to typing); the partner's replies are spoken back with live captions.
//   • Chat  — the original typed conversation.
// Both append to one shared transcript and end in the SAME AI coach feedback.
// The partner warms up or closes off based on the learner's empathy.
// Attaches Roleplay to window.Interactions.  (Loaded after interactions.jsx.)
// ════════════════════════════════════════════════════════════════
(function () {
  const { Button, Badge, Alert } = window.LuminaDesignSystem_f39716;
  const I = window.Icons;
  const hasAI = () => typeof window !== 'undefined' && window.claude && typeof window.claude.complete === 'function';
  // Offline fallback: a scripted branching engine + local scorer (no API).
  const hasScripted = () => typeof window !== 'undefined' && !!window.ScriptedRoleplay;
  // The roleplay is usable if EITHER backend is present.
  const canPlay = () => hasAI() || hasScripted();
  // Gemini TTS (provided by ai-backend.js on hosted deploys). When absent
  // (Claude preview, or local file://) we speak with the browser voice instead.
  const hasAITTS = () => typeof window !== 'undefined' && window.claude && typeof window.claude.tts === 'function';
  // Each character gets a distinct Gemini prebuilt voice; fall back by gender.
  const GEMINI_VOICES = { Maya: 'Aoede', Devon: 'Charon', Priya: 'Kore', Theo: 'Iapetus', Riley: 'Leda' };
  function voiceForCharacter(ch) {
    const byName = ch && GEMINI_VOICES[ch.name];
    if (byName) return byName;
    return (ch && ch.gender) === 'male' ? 'Charon' : 'Kore';
  }
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const hasTTS = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const SR = (typeof window !== 'undefined') && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const hasSR = !!SR;

  // ── helpers ──────────────────────────────────────────────────
  function cleanReply(raw, name) {
    let t = (raw || '').trim();
    const pre = new RegExp('^' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*:\\s*', 'i');
    t = t.replace(pre, '');
    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith('\u201c') && t.endsWith('\u201d'))) t = t.slice(1, -1).trim();
    return t || '\u2026';
  }
  function parseJSON(raw) {
    if (!raw) throw new Error('empty');
    let s = String(raw).trim().replace(/^```(?:json)?/i, '').replace(/```$/, '').trim();
    const a = s.indexOf('{'), b = s.lastIndexOf('}');
    if (a !== -1 && b !== -1) s = s.slice(a, b + 1);
    return JSON.parse(s);
  }
  function transcriptOf(slide, messages, who) {
    const name = slide.character.name;
    return messages.map((m) => (m.role === 'user' ? (who || 'You') : name) + ': ' + m.text).join('\n');
  }

  async function charReply(slide, messages, channel) {
    const name = slide.character.name;
    const medium = channel === 'call'
      ? 'You are on a phone call. Speak the way someone talks out loud \u2014 contractions, natural rhythm, no emoji, no text-speak. '
      : '';
    const prompt =
      slide.persona +
      '\n\nYou are roleplaying as ' + name + ' in a one-on-one empathy training exercise. ' +
      'Stay fully in character as ' + name + '. Never break character, never give coaching, advice, or meta-commentary, never mention this is an exercise. ' +
      medium +
      'Reply in 1\u20133 short, natural sentences only. Do not wrap your reply in quotation marks. ' +
      'Let your warmth or guardedness shift believably based on how the other person is treating you.' +
      '\n\nConversation so far:\n' + transcriptOf(slide, messages) +
      '\n\nWrite ' + name + "'s next reply only:";
    if (!hasAI()) {
      // Scripted fallback — a short, natural pause so it feels like a reply.
      await wait(channel === 'call' ? 900 : 650);
      return window.ScriptedRoleplay.reply(slide, messages, channel);
    }
    const out = await window.claude.complete(prompt);
    return cleanReply(out, name);
  }

  // Speech-to-text returns an unpunctuated run-on. Restore capitalization and
  // punctuation WITHOUT changing, adding, or removing any words, so the turn
  // reads naturally and the grader judges meaning rather than transcription.
  async function punctuate(raw) {
    const text = (raw || '').trim();
    if (!text || !hasAI()) return text;
    const prompt =
      'The following is a raw voice-to-text transcript of one spoken turn. ' +
      'Add correct capitalization, punctuation, and sentence breaks so it reads naturally. ' +
      'Rules: do NOT add, remove, reorder, or change any words; keep the exact wording. ' +
      'Only insert capitalization, commas, periods, question marks, and apostrophes in contractions. ' +
      'Fix obvious split contractions (e.g. "i m" -> "I\u2019m", "dont" -> "don\u2019t"). ' +
      'Return ONLY the corrected sentence, nothing else.\n\nTranscript: ' + text;
    try {
      const out = await window.claude.complete(prompt);
      let s = String(out || '').trim().replace(/^["\u201c]|["\u201d]$/g, '').trim();
      // safety: if the model drifted and changed the word count wildly, keep raw
      const wc = (x) => x.toLowerCase().replace(/[^a-z0-9\s']/g, ' ').split(/\s+/).filter(Boolean).length;
      if (!s || Math.abs(wc(s) - wc(text)) > Math.max(2, Math.round(wc(text) * 0.25))) return text;
      return s;
    } catch (e) { return text; }
  }

  async function gradeConversation(slide, messages) {
    const name = slide.character.name;
    const transcript = messages.map((m) => (m.role === 'user' ? 'LEARNER' : name.toUpperCase()) + ': ' + m.text).join('\n');
    const rubricLines = slide.rubric.map((r) => '- ' + r.key + ': ' + r.label + ' \u2014 ' + r.desc).join('\n');
    const rubricShape = slide.rubric.map((r) => '"' + r.key + '": {"met": <true|false>, "note": "<=12 word reason"}').join(', ');
    const prompt =
      'You are a warm, precise empathy coach. A learner just practised the skill "' + slide.device + '" (' + slide.skill + ') ' +
      'by having a roleplay conversation with ' + name + '. Grade ONLY the learner\'s messages \u2014 not ' + name + '\'s.' +
      '\n\nWhat good looks like here: ' + slide.goal +
      '\n\nRubric criteria:\n' + rubricLines +
      '\n\nFull transcript:\n' + transcript +
      '\n\nIMPORTANT: the learner\u2019s turns were spoken aloud and captured by voice-to-text, then lightly auto-punctuated. ' +
      'Judge what they MEANT and how they connected with ' + name + ' \u2014 do NOT penalize punctuation, capitalization, filler words, ' +
      'small transcription glitches, or slightly run-on phrasing. Give the benefit of the doubt on wording artifacts.' +
      '\n\nReturn ONLY valid JSON (no markdown fences, no prose before or after) in exactly this shape:\n' +
      '{\n' +
      '  "score": <integer 0-100: how close the learner got to truly applying "' + slide.device + '". SCORING: if every rubric criterion is met and there is nothing meaningful left to improve, score 96-100; do not withhold points from a response that fully demonstrates the skill.>,\n' +
      '  "level": "<2-4 word verdict, e.g. Right there / Getting close / Off the mark>",\n' +
      '  "rubric": { ' + rubricShape + ' },\n' +
      '  "strengths": [ {"quote": "<a phrase the learner wrote, verbatim>", "note": "<why it worked, <=18 words>"} ],\n' +
      '  "growth": [ {"quote": "<verbatim learner phrase, or empty string if they engaged too little>", "note": "<what to try instead, <=18 words>"} ],\n' +
      '  "summary": "<2 sentences of warm, specific coaching addressed to the learner as you>",\n' +
      '  "model": "<one example of a stronger thing the learner could have said to ' + name + '>"\n' +
      '}\n' +
      'Use 1-2 items in strengths and 1-2 in growth. Quotes MUST be copied verbatim from the learner\'s own messages. ' +
      'If the learner barely engaged, score low and say so kindly.';
    if (!hasAI()) { await wait(700); return window.ScriptedRoleplay.grade(slide, messages); }
    const out = await window.claude.complete(prompt);
    const fb = parseJSON(out);
    if (!fb.rubric) fb.rubric = {};
    return fb;
  }

  // Capstone grading — integrative: scores the whole conversation across all three
  // practised skills, returns a per-skill breakdown plus the usual quotes/model.
  async function gradeCapstone(slide, messages) {
    const name = slide.character.name;
    const transcript = messages.map((m) => (m.role === 'user' ? 'LEARNER' : name.toUpperCase()) + ': ' + m.text).join('\n');
    const rubricLines = slide.rubric.map((r) => '- [' + r.skill + '] ' + r.key + ': ' + r.label + ' \u2014 ' + r.desc).join('\n');
    const rubricShape = slide.rubric.map((r) => '"' + r.key + '": {"met": <true|false>, "note": "<=12 word reason"}').join(', ');
    const skills = [];
    slide.rubric.forEach((r) => { if (skills.indexOf(r.skill) === -1) skills.push(r.skill); });
    const skillsShape = skills.map((sk) => '"' + sk + '": {"score": <0-100>, "verdict": "<3-6 words>"}').join(', ');
    const prompt =
      'You are a warm, precise empathy coach assessing a CAPSTONE roleplay. The learner had one integrated conversation with ' + name +
      ', who was passed over for a role the learner was close to deciding. A strong learner moves fluidly between three skills as the moment calls for them: ' +
      'Perspective Taking (a generous interpretation), Active Listening (reflecting the feeling before fixing), and Difficult Conversations (staying regulated and turned-toward when ' + name + ' pushes back with heat). ' +
      'Grade ONLY the learner\'s messages \u2014 not ' + name + '\'s.' +
      '\n\nRubric criteria (grouped by skill):\n' + rubricLines +
      '\n\nFull transcript:\n' + transcript +
      '\n\nIMPORTANT: the learner\u2019s turns may have been spoken aloud and captured by voice-to-text. Judge what they MEANT and how they connected \u2014 do NOT penalize punctuation, capitalization, filler words, or transcription glitches. ' +
      'Reward learners who engaged substantially and navigated the hard turn; score shallow or very short attempts low and say so kindly.' +
      '\n\nReturn ONLY valid JSON (no markdown fences, no prose) in exactly this shape:\n' +
      '{\n' +
      '  "score": <integer 0-100: overall empathy across the whole conversation. SCORING: if every rubric criterion is met and there is nothing meaningful left to improve, score 96-100; do not withhold points from a response that fully demonstrates the skills.>,\n' +
      '  "level": "<2-4 word verdict>",\n' +
      '  "skills": { ' + skillsShape + ' },\n' +
      '  "rubric": { ' + rubricShape + ' },\n' +
      '  "strengths": [ {"quote": "<verbatim learner phrase>", "note": "<why it worked, <=18 words>"} ],\n' +
      '  "growth": [ {"quote": "<verbatim learner phrase, or empty string>", "note": "<what to try instead, <=18 words>"} ],\n' +
      '  "turningPoint": "<1 sentence: name the moment it got hard and how the learner handled it>",\n' +
      '  "summary": "<2-3 sentences of warm, specific coaching addressed to the learner as you>",\n' +
      '  "model": "<one example of a masterful thing the learner could have said at the hardest moment>"\n' +
      '}\n' +
      'Use 1-2 items each in strengths and growth. Quotes MUST be copied verbatim from the learner\'s own messages.';
    if (!hasAI()) { await wait(800); return window.ScriptedRoleplay.gradeCapstone(slide, messages); }
    const out = await window.claude.complete(prompt);
    const fb = parseJSON(out);
    if (!fb.rubric) fb.rubric = {};
    if (!fb.skills) fb.skills = {};
    return fb;
  }

  // ── Readiness probe for AUTO-END ─────────────────────────────
  // After each learner turn, ask whether — ACROSS THE WHOLE CONVERSATION SO
  // FAR — the learner has now met EVERY rubric criterion, judged by MEANING
  // rather than wording. When it returns allMet, the roleplay wraps itself and
  // grades automatically (the learner reached the answer key). Cheaper and
  // stricter than a full grade, so it can run every turn; the full grade still
  // produces the feedback once we decide to end. Offline falls back to the
  // heuristic ScriptedRoleplay.ready.
  async function checkReady(slide, messages) {
    if (!messages.some((m) => m.role === 'user')) return { allMet: false };
    if (!hasAI()) {
      await wait(250);
      try { return window.ScriptedRoleplay.ready(slide, messages); } catch (e) { return { allMet: false }; }
    }
    const name = slide.character.name;
    const transcript = messages.map((m) => (m.role === 'user' ? 'LEARNER' : name.toUpperCase()) + ': ' + m.text).join('\n');
    const rubricLines = slide.rubric.map((r) => '- ' + r.key + ': ' + r.label + ' \u2014 ' + r.desc).join('\n');
    const rubricShape = slide.rubric.map((r) => '"' + r.key + '": {"met": <true|false>, "quote": "<the learner\u2019s OWN words, verbatim, that demonstrate this criterion \u2014 copy a short phrase exactly as they wrote/said it; empty string if not met>"}').join(', ');
    const prompt =
      'You are a rigorous empathy-practice evaluator. A learner is mid-way through a LIVE roleplay practising the skill "' + slide.device + '" (' + slide.skill + ') with ' + name + '. ' +
      (slide.capstone
        ? 'This is the capstone: it integrates three skills, and the learner must already have navigated the hard moment where ' + name + ' pushes back. '
        : '') +
      'Decide whether, ACROSS THE WHOLE CONVERSATION SO FAR, the learner has now met EVERY criterion below. ' +
      'Judge MEANING and EFFECT, not exact wording \u2014 a turn counts if it accomplishes the same thing the criterion describes, however it is phrased, and even if the learner spoke it aloud with rough punctuation. ' +
      'Grade ONLY the learner\u2019s turns \u2014 never ' + name + '\u2019s.' +
      '\n\nCriteria:\n' + rubricLines +
      '\n\nTranscript so far:\n' + transcript +
      '\n\nReturn ONLY valid JSON (no prose, no code fences) in exactly this shape:\n' +
      '{ "rubric": { ' + rubricShape + ' }, "allMet": <true ONLY if EVERY criterion above is clearly met> }\n' +
      'Each "quote" MUST be copied verbatim from the LEARNER\u2019s own turns (never ' + name + '\u2019s, never paraphrased). ' +
      'Be strict: if any criterion is not yet clearly demonstrated, allMet MUST be false.';
    try {
      const out = await window.claude.complete(prompt);
      const r = parseJSON(out);
      // Trust allMet only if the per-criterion map backs it up (guards drift).
      const everyMet = slide.rubric.every((cr) => r.rubric && r.rubric[cr.key] && r.rubric[cr.key].met);
      return { allMet: !!r.allMet && everyMet, rubric: r.rubric || {} };
    } catch (e) { return { allMet: false }; }
  }

  // ── speech synthesis (call mode) ─────────────────────────────
  // Voices load asynchronously; warm a cache so the first reply isn't silent.
  let _voiceCache = [];
  function refreshVoices() { try { _voiceCache = window.speechSynthesis.getVoices() || []; } catch (e) {} }
  if (hasTTS) {
    refreshVoices();
    try { window.speechSynthesis.onvoiceschanged = refreshVoices; } catch (e) {}
  }
  // Pick the most natural-sounding available voice for a gender. Browsers expose
  // wildly different sets; we SCORE each English voice by quality signals
  // (neural/natural/premium/Siri/Google) so the best installed voice wins,
  // rather than just the first match. Quality varies by OS/browser — on Edge the
  // "(Natural)" voices, on Chrome the Google network voices, on macOS the
  // Enhanced/Premium/Siri voices are the closest to ElevenLabs-style realism.
  const MALE_RE = /\bmale\b|David|Daniel|Alex|Fred|Aaron|Arthur|Oliver|\bTom\b|Rishi|Guy|Mark|Brian|Christopher|Eric|Liam|Ryan/i;
  const FEMALE_RE = /female|Samantha|Karen|Serena|Moira|Victoria|Zira|Susan|Tessa|Fiona|Aria|Jenny|Ava|Allison|Emma|Sonia|Michelle|Nora/i;
  function voiceQuality(name) {
    const n = name || '';
    let q = 0;
    if (/neural|natural/i.test(n)) q += 100;       // Edge/Azure neural voices
    if (/premium|enhanced/i.test(n)) q += 80;       // macOS premium/enhanced
    if (/siri/i.test(n)) q += 70;                   // Apple Siri voices
    if (/google/i.test(n)) q += 50;                 // Chrome network voices
    if (/online/i.test(n)) q += 30;                 // network-backed
    return q;
  }
  function genderScore(name, gender) {
    const male = MALE_RE.test(name), female = FEMALE_RE.test(name);
    if (gender === 'male') return male && !female ? 40 : (female ? -40 : 0);
    return female && !male ? 40 : (male ? -40 : 0);
  }
  function pickVoice(gender) {
    const voices = (_voiceCache && _voiceCache.length) ? _voiceCache : ((hasTTS && window.speechSynthesis.getVoices()) || []);
    const en = voices.filter((x) => /^en/i.test(x.lang));
    if (!en.length) return voices[0] || null;
    const scored = en.map((v) => {
      let s = voiceQuality(v.name) + genderScore(v.name, gender);
      if (/^en[-_]?US/i.test(v.lang)) s += 8;        // mild locale preference
      else if (/^en[-_]?GB/i.test(v.lang)) s += 4;
      // A network "natural" voice beats a robotic local one — but if nothing
      // scored on quality at all, a local voice is the safer (always-audible) pick.
      if (v.localService) s += 2;
      return { v: v, s: s };
    }).sort((a, b) => b.s - a.s);
    return scored[0].v;
  }

  // ── WebAudio (ringtone + audio unlock) ───────────────────────
  // A synthesized ringback tone needs no asset and proves whether ANY audio is
  // reaching the user. Also used to unlock/resume the AudioContext on a gesture.
  let _actx = null;
  function audioCtx() {
    if (_actx) return _actx;
    try { const AC = window.AudioContext || window.webkitAudioContext; if (AC) _actx = new AC(); } catch (e) {}
    return _actx;
  }
  function resumeAudio() { const ctx = audioCtx(); if (ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} } }
  // Plays a classic two-tone ringback cadence (ring ~2s, pause ~4s) until the
  // returned stop() is called. Returns a no-op stop if audio is unavailable.
  // SINGLETON: only one ringback can ever be live. Starting a new one (or any
  // unmount/answer) hard-stops the previous, so an orphaned loop — which would
  // keep ringing across slides forever — is impossible.
  let _ring = null; // { stop } of the currently-live ringback
  function stopRingback() {
    if (_ring) { const r = _ring; _ring = null; try { r.stop(); } catch (e) {} }
  }
  function startRingback() {
    stopRingback(); // never allow two loops at once
    const ctx = audioCtx();
    if (!ctx) return function () {};
    resumeAudio();
    let stopped = false;
    let timer = null;
    let node = null; // current { gain, oscs }
    function ringOnce() {
      if (stopped) return;
      const t0 = ctx.currentTime;
      const gain = ctx.createGain();
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(0.12, t0 + 0.05);
      gain.gain.setValueAtTime(0.12, t0 + 1.9);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 2.0);
      const oscs = [440, 480].map((f) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine'; osc.frequency.value = f;
        osc.connect(gain); osc.start(t0); osc.stop(t0 + 2.0);
        return osc;
      });
      node = { gain: gain, oscs: oscs };
      timer = setTimeout(ringOnce, 6000); // 2s ring + 4s silence
    }
    function stop() {
      stopped = true;
      if (timer) { clearTimeout(timer); timer = null; }
      // Disconnect = instant, guaranteed silence regardless of scheduled gain.
      if (node) {
        node.oscs.forEach(function (o) { try { o.stop(); } catch (e) {} try { o.disconnect(); } catch (e) {} });
        try { node.gain.disconnect(); } catch (e) {}
        node = null;
      }
    }
    const handle = { stop: stop };
    _ring = handle;
    ringOnce();
    // Returned fn clears the singleton only if it's still us, then stops.
    return function () { if (_ring === handle) _ring = null; stop(); };
  }
  // Many browsers gate speechSynthesis behind a user gesture. Call this from a
  // click/tap to unlock audio so subsequent utterances actually play.
  function unlockTTS() {
    if (!hasTTS) return;
    try {
      const u = new SpeechSynthesisUtterance(' ');
      u.volume = 0; u.rate = 2;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  // ── small UI bits ────────────────────────────────────────────
  function Avatar({ initial, tone }) {
    const bg = tone === 'self' ? 'var(--color-primary)' : 'var(--color-accent-subtle)';
    const fg = tone === 'self' ? '#fff' : 'var(--color-accent)';
    const fs = String(initial).length > 1 ? 11 : 16;
    return (
      <div style={{ width: 34, height: 34, flexShrink: 0, borderRadius: '50%', background: bg, color: fg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: fs, fontWeight: 600, letterSpacing: fs < 12 ? '0.02em' : 0 }}>{initial}</div>
    );
  }
  function Dots() {
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 2px' }}>
        {[0, 1, 2].map((i) => (
          <span key={i} className="rp-dot" style={{ animationDelay: i * 0.18 + 's' }} />
        ))}
      </div>
    );
  }
  // Celebratory confetti burst for the auto-grade “You’ve got it” card.
  // Lightweight DOM pieces animated with the Web Animations API; self-cleans on
  // unmount and respects reduced-motion.
  function Confetti({ count }) {
    const ref = React.useRef(null);
    React.useEffect(() => {
      const host = ref.current;
      if (!host) return undefined;
      const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return undefined;
      const colors = ['#2A5C6B', '#C4956A', '#4caf72', '#7BB6C4', '#E8C9A0', '#1A2E35'];
      const n = count || 90;
      const fall = (host.clientHeight || 360) + 60;
      const pieces = [];
      for (let i = 0; i < n; i++) {
        const el = document.createElement('div');
        const size = 6 + Math.random() * 8;
        const rect = Math.random() > 0.5;
        el.style.cssText = 'position:absolute;top:-24px;left:' + (Math.random() * 100) + '%;width:' + size + 'px;height:' + (rect ? size * 0.45 : size) + 'px;background:' + colors[i % colors.length] + ';border-radius:' + (rect ? '1px' : '50%') + ';opacity:0.95;will-change:transform;';
        host.appendChild(el);
        const drift = (Math.random() * 2 - 1) * 140;
        const rot = (Math.random() * 2 - 1) * 720;
        const anim = el.animate(
          [{ transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
           { transform: 'translate(' + drift + 'px,' + fall + 'px) rotate(' + rot + 'deg)', opacity: 0.85 }],
          { duration: 1700 + Math.random() * 1500, delay: Math.random() * 260, easing: 'cubic-bezier(0.18,0.6,0.36,1)', fill: 'forwards' }
        );
        pieces.push({ el: el, anim: anim });
      }
      return () => { pieces.forEach((p) => { try { p.anim.cancel(); } catch (e) {} if (p.el.parentNode) p.el.parentNode.removeChild(p.el); }); };
    }, []);
    return <div ref={ref} aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 4 }} />;
  }

  function Bubble({ m, name, initial }) {
    const self = m.role === 'user';
    return (
      <div style={{ display: 'flex', flexDirection: self ? 'row-reverse' : 'row', gap: 10, alignItems: 'flex-end' }}>
        <Avatar initial={initial} tone={self ? 'self' : 'char'} />
        <div style={{ maxWidth: '78%' }}>
          {!self && <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.03em', color: 'var(--color-text-muted)', margin: '0 0 3px 2px' }}>{name}</div>}
          <div style={{
            padding: '11px 15px', borderRadius: 16, fontSize: 15.5, lineHeight: 1.5,
            background: self ? 'var(--color-primary)' : 'var(--color-surface-alt)',
            color: self ? '#fff' : 'var(--color-text-primary)',
            borderBottomRightRadius: self ? 5 : 16, borderBottomLeftRadius: self ? 16 : 5,
            border: self ? 'none' : '1px solid var(--color-border-light)', whiteSpace: 'pre-wrap',
          }}>{m.text}</div>
        </div>
      </div>
    );
  }

  function Meter({ score, level }) {
    const s = Math.max(0, Math.min(100, score | 0));
    return (
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-text-secondary)' }}>How close you got</span>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 9 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 600, color: 'var(--color-primary)' }}>{s}<span style={{ fontSize: 16, color: 'var(--color-text-muted)' }}>%</span></span>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-accent)' }}>{level || ''}</span>
          </span>
        </div>
        <div style={{ height: 12, borderRadius: 999, background: 'var(--color-primary-subtle)', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: s + '%', borderRadius: 999, background: 'linear-gradient(90deg, var(--color-primary-muted), var(--color-primary) 60%, var(--color-accent))', transition: 'width 900ms cubic-bezier(0.22,1,0.36,1)' }} />
        </div>
      </div>
    );
  }

  function QuoteRow({ q, tone }) {
    const ok = tone === 'strength';
    return (
      <div style={{ display: 'flex', gap: 11, padding: '11px 0', borderTop: '1px solid var(--color-border-light)' }}>
        <div style={{ width: 24, height: 24, flexShrink: 0, marginTop: 1, borderRadius: '50%', background: ok ? 'var(--color-success-sub)' : 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {ok ? <I.Check size={13} stroke="var(--color-success)" /> : <I.CornerUpLeft size={13} stroke="var(--color-accent)" />}
        </div>
        <div style={{ minWidth: 0 }}>
          {q.quote ? <p style={{ margin: '0 0 3px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16.5, lineHeight: 1.35, color: 'var(--color-text-primary)' }}>{'\u201c' + q.quote + '\u201d'}</p>
            : <p style={{ margin: '0 0 3px', fontSize: 14, fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{'You didn\u2019t get to this in the conversation.'}</p>}
          <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{q.note}</p>
        </div>
      </div>
    );
  }

  // ── Feedback panel ───────────────────────────────────────────
  function Feedback({ slide, fb, onRetry, via }) {
    const strengths = Array.isArray(fb.strengths) ? fb.strengths : [];
    const growth = Array.isArray(fb.growth) ? fb.growth : [];
    return (
      <div>
        <div style={{ marginBottom: 16 }}><Badge tone="teal" dot>{'Practice \u00b7 ' + slide.device}</Badge></div>
        <div style={{ display: 'flex', gap: 13, alignItems: 'flex-start', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '15px 17px', marginBottom: 20 }}>
          <div style={{ width: 34, height: 34, flexShrink: 0, borderRadius: '50%', background: 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <I.Sparkles size={17} stroke="var(--color-primary)" />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.25 }}>This was practice{fb.level ? ' \u2014 ' : ''}<span style={{ color: 'var(--color-accent)' }}>{fb.level || ''}</span></div>
            <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--color-text-secondary)', marginTop: 3 }}>No score here — just coaching. Run it as many times as you like; only the Capstone is recorded.</div>
          </div>
        </div>

        {/* rubric */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '6px 18px', marginBottom: 18 }}>
          {slide.rubric.map((r) => {
            const row = (fb.rubric && fb.rubric[r.key]) || {};
            const met = !!row.met;
            return (
              <div key={r.key} style={{ display: 'flex', gap: 12, padding: '13px 0', borderBottom: '1px solid var(--color-border-light)' }}>
                <div style={{ width: 22, height: 22, flexShrink: 0, marginTop: 1, borderRadius: '50%', background: met ? 'var(--color-success)' : 'transparent', border: met ? 'none' : '2px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {met && <I.Check size={13} stroke="#fff" />}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: met ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>{r.label}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--color-text-muted)', marginTop: 2 }}>{row.note || r.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* quotes */}
        {strengths.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-success)', marginBottom: 2 }}>What worked</div>
            {strengths.map((q, i) => <QuoteRow key={i} q={q} tone="strength" />)}
          </div>
        )}
        {growth.length > 0 && (
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 2 }}>What to reach for</div>
            {growth.map((q, i) => <QuoteRow key={i} q={q} tone="growth" />)}
          </div>
        )}

        {fb.summary && <Alert variant="info" title={slide.character.name + ' \u2014 in review'}>{fb.summary}</Alert>}

        {fb.model && (
          <div style={{ marginTop: 16, background: 'var(--color-accent-subtle)', border: '1px solid var(--color-accent-muted, var(--color-border))', borderRadius: 'var(--radius-xl)', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
              <I.Sparkles size={16} stroke="var(--color-accent)" />
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>A stronger turn might be</span>
            </div>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, color: 'var(--color-text-primary)' }}>{'\u201c' + fb.model + '\u201d'}</p>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          <Button variant="ghost" iconLeft={<I.RotateCcw size={16} />} onClick={onRetry}>{via === 'call' ? 'Try the call again' : 'Try the conversation again'}</Button>
        </div>
      </div>
    );
  }

  // ── Capstone feedback panel ──────────────────────────────────
  function SkillCard({ name, data }) {
    const sc = Math.max(0, Math.min(100, (data && data.score) | 0));
    const tone = sc >= 70 ? 'var(--color-success)' : sc >= 45 ? 'var(--color-accent)' : 'var(--color-text-muted)';
    return (
      <div style={{ flex: '1 1 150px', minWidth: 0, background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-lg)', padding: '14px 15px' }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.02em', color: 'var(--color-text-secondary)', marginBottom: 8, minHeight: 30 }}>{name}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 600, color: tone }}>{sc}</span>
          <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>%</span>
        </div>
        <div style={{ height: 6, borderRadius: 999, background: 'var(--color-primary-subtle)', overflow: 'hidden', marginBottom: 8 }}>
          <div style={{ height: '100%', width: sc + '%', borderRadius: 999, background: tone, transition: 'width 800ms cubic-bezier(0.22,1,0.36,1)' }} />
        </div>
        <div style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--color-text-muted)' }}>{(data && data.verdict) || ''}</div>
      </div>
    );
  }

  function CapstoneFeedback({ slide, fb, onRetry, reflection, onReflect, attempts, bestScore }) {
    const strengths = Array.isArray(fb.strengths) ? fb.strengths : [];
    const growth = Array.isArray(fb.growth) ? fb.growth : [];
    const pass = (fb.score | 0) >= (slide.passing || 70);
    const MAX_ATTEMPTS = 2;
    const used = attempts || 1;
    const locked = pass || used >= MAX_ATTEMPTS;   // passing or out of attempts ends it
    const recorded = Math.max(bestScore | 0, fb.score | 0);
    const skillOrder = [];
    slide.rubric.forEach((r) => { if (skillOrder.indexOf(r.skill) === -1) skillOrder.push(r.skill); });
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
          <Badge tone="teal" dot>Capstone evaluation</Badge>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>{'Attempt ' + used + ' of ' + MAX_ATTEMPTS + ' \u00b7 recorded to your record'}</span>
        </div>

        <div style={{ display: 'flex', gap: 14, alignItems: 'center', background: pass ? 'var(--color-success-sub)' : 'var(--color-accent-subtle)', border: '1px solid ' + (pass ? 'var(--color-success)' : 'var(--color-border)'), borderRadius: 'var(--radius-xl)', padding: '16px 18px', marginBottom: 18 }}>
          <div style={{ width: 44, height: 44, flexShrink: 0, borderRadius: '50%', background: pass ? 'var(--color-success)' : 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {pass ? <I.Award size={22} stroke="#fff" /> : <I.RotateCcw size={20} stroke="#fff" />}
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 21, fontWeight: 500, color: 'var(--color-text-primary)' }}>
              {pass ? 'Capstone passed \u2014 ' : 'Keep practising \u2014 '}<span style={{ color: pass ? 'var(--color-success)' : 'var(--color-accent)' }}>{fb.score | 0}%</span>
              <span style={{ fontSize: 14, color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>{fb.level ? '  \u00b7  ' + fb.level : ''}</span>
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--color-text-secondary)', marginTop: 2 }}>
              {pass
                ? 'You brought the skills together in a real, hard conversation.'
                : locked
                  ? 'That was your final attempt. Your best score \u2014 ' + recorded + '% \u2014 is what\u2019s recorded.'
                  : 'You need ' + (slide.passing || 70) + '% to pass. Review the coaching, then take your final attempt.'}
            </div>
          </div>
        </div>

        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', marginBottom: 10 }}>Across the three skills</div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
          {skillOrder.map((sk) => <SkillCard key={sk} name={sk} data={fb.skills && fb.skills[sk]} />)}
        </div>

        {fb.turningPoint && (
          <div style={{ display: 'flex', gap: 11, background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '14px 16px', marginBottom: 18 }}>
            <I.Dialogue size={18} stroke="var(--color-accent)" />
            <div><span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--color-accent)' }}>The turning point.</span> <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{fb.turningPoint}</span></div>
          </div>
        )}

        {skillOrder.map((sk) => (
          <div key={sk} style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--color-text-muted)', margin: '0 0 4px 2px' }}>{sk}</div>
            <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '4px 18px' }}>
              {slide.rubric.filter((r) => r.skill === sk).map((r) => {
                const row = (fb.rubric && fb.rubric[r.key]) || {};
                const met = !!row.met;
                return (
                  <div key={r.key} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--color-border-light)' }}>
                    <div style={{ width: 22, height: 22, flexShrink: 0, marginTop: 1, borderRadius: '50%', background: met ? 'var(--color-success)' : 'transparent', border: met ? 'none' : '2px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {met && <I.Check size={13} stroke="#fff" />}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontSize: 14.5, fontWeight: 700, color: met ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>{r.label}</div>
                      <div style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--color-text-muted)', marginTop: 2 }}>{row.note || r.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {strengths.length > 0 && (
          <div style={{ margin: '16px 0' }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-success)', marginBottom: 2 }}>What worked</div>
            {strengths.map((q, i) => <QuoteRow key={i} q={q} tone="strength" />)}
          </div>
        )}
        {growth.length > 0 && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 2 }}>What to reach for</div>
            {growth.map((q, i) => <QuoteRow key={i} q={q} tone="growth" />)}
          </div>
        )}

        {fb.summary && <Alert variant={pass ? 'success' : 'info'} title={slide.character.name + ' \u2014 in review'}>{fb.summary}</Alert>}

        {fb.model && (
          <div style={{ marginTop: 16, background: 'var(--color-accent-subtle)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '16px 18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
              <I.Sparkles size={16} stroke="var(--color-accent)" />
              <span style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '0.03em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>A masterful turn at the hard moment</span>
            </div>
            <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, lineHeight: 1.4, color: 'var(--color-text-primary)' }}>{'\u201c' + fb.model + '\u201d'}</p>
          </div>
        )}

        <div style={{ marginTop: 18 }}>
          <label style={{ display: 'block', fontSize: 14.5, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 7 }}>Before you finish, name one thing you’ll carry into your next hard conversation.</label>
          <textarea value={reflection || ''} onChange={(e) => onReflect(e.target.value)} rows={2} placeholder="Write it down in your own words…"
            style={{ width: '100%', boxSizing: 'border-box', resize: 'vertical', minHeight: 64, padding: '11px 14px', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--color-border)', background: 'var(--color-surface)', fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.5, color: 'var(--color-text-primary)', outline: 'none' }} />
        </div>

        {!locked && (
          <div style={{ marginTop: 18 }}>
            <Button variant="primary" iconLeft={<I.RotateCcw size={16} />} onClick={onRetry}>Take your final attempt</Button>
          </div>
        )}
      </div>
    );
  }

  // ── Mode toggle (per scenario) ───────────────────────────────
  function ModeToggle({ mode, onMode }) {
    const opts = [
      { id: 'call', label: 'Call', icon: <I.Phone size={15} /> },
      { id: 'chat', label: 'Chat', icon: <I.MessageSquare size={15} /> },
    ];
    return (
      <div style={{ display: 'inline-flex', padding: 3, gap: 3, background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-full)' }}>
        {opts.map((o) => {
          const on = mode === o.id;
          return (
            <button key={o.id} onClick={() => onMode(o.id)} aria-pressed={on}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 7, height: 34, padding: '0 16px', borderRadius: 'var(--radius-full)', cursor: 'pointer', border: 'none',
                fontFamily: 'var(--font-body)', fontSize: 13.5, fontWeight: 700, letterSpacing: '0.01em',
                background: on ? 'var(--color-primary)' : 'transparent', color: on ? '#fff' : 'var(--color-text-secondary)', transition: 'background var(--transition-base)' }}>
              {React.cloneElement(o.icon, { stroke: on ? '#fff' : 'var(--color-text-muted)' })}
              {o.label}
            </button>
          );
        })}
      </div>
    );
  }

  // ── "Walk me through it" — how to operate the call ───────────
  function HowToCall({ c, onDismiss, narrate, canNarrate, skill, capstone }) {
    const name = (c && c.name) || 'your partner';
    const introHeading = capstone ? 'Everything comes together here' : 'Welcome to the roleplay';
    const introBody = capstone
      ? 'One unscripted conversation that draws on it all \u2014 perspective taking, active listening, and staying steady in a hard moment. Here\u2019s how the call works.'
      : 'Here you\u2019ll put what you\u2019ve learned about ' + (skill || 'empathy') + ' into practice \u2014 a real, unscripted conversation. Here\u2019s how the call works.';
    const introSay = capstone
      ? 'Welcome to the capstone roleplay. This is where everything comes together. In one unscripted conversation, you will draw on perspective taking, active listening, and staying steady in a difficult moment. Here is how the call works.'
      : 'Welcome to the roleplay simulation. Here you will put what you have learned about ' + (skill || 'empathy') + ' into practice, in a real, unscripted conversation. Here is how the call works.';
    const STEPS = [
      { key: 'answer', n: 1, title: 'Answer the call', body: 'Tap the green button to pick up \u2014 ' + name + ' is calling, and the conversation begins the moment you answer.', say: 'First, tap the green button to answer. The conversation starts the moment you pick up.' },
      { key: 'talk', n: 2, title: 'Take your turn', body: 'Tap the mic and speak out loud, then tap again to send. Prefer typing? A text box is always there as a fallback.', say: 'On your turn, tap the microphone and speak out loud, then tap it again to send. You can also type your reply instead.' },
      { key: 'listen', n: 3, title: 'Hear them out', body: name + ' replies in their own voice with live captions. Replay the last line or mute the voice with these controls.', say: name + ' replies in their own voice, with live captions. Replay the last line, or mute the voice, with these controls.' },
      { key: 'end', n: 4, title: 'End for feedback', body: 'Made your point? Tap the red button to hang up and get instant, personalized coaching on your empathy.', say: 'When you have made your point, tap the red button to hang up and get instant, personalized coaching.' },
    ];
    const [phase, setPhase] = React.useState('intro');
    const [step, setStep] = React.useState(0);
    const [paused, setPaused] = React.useState(false);
    const [done, setDone] = React.useState(false);
    const DWELL = 3800;

    // Intro: narrate the context, then roll into the control tour.
    React.useEffect(() => {
      if (phase !== 'intro' || paused) return undefined;
      let cancelled = false;
      const toTour = () => { if (!cancelled) setPhase('tour'); };
      if (canNarrate && narrate) {
        narrate(introSay, () => { if (!cancelled) toTour(); });
        const fb = setTimeout(toTour, Math.max(5200, introSay.length * 80));
        return () => { cancelled = true; clearTimeout(fb); };
      }
      const t = setTimeout(toTour, 4200);
      return () => { cancelled = true; clearTimeout(t); };
    }, [phase, paused, canNarrate]);

    // Tour: advance in sync with the narrator: speak this step's line and move on
    // when it finishes. With no narration available, fall back to a fixed dwell.
    React.useEffect(() => {
      if (phase !== 'tour' || paused || done) return undefined;
      let cancelled = false;
      const advance = () => { if (cancelled) return; if (step >= STEPS.length - 1) setDone(true); else setStep((s) => s + 1); };
      if (canNarrate && narrate) {
        narrate(STEPS[step].say, () => { if (!cancelled) advance(); });
        // safety net if the speech engine drops the utterance's end event
        const fb = setTimeout(advance, Math.max(4200, STEPS[step].say.length * 95));
        return () => { cancelled = true; clearTimeout(fb); };
      }
      const t = setTimeout(advance, DWELL);
      return () => { cancelled = true; clearTimeout(t); };
    }, [phase, step, paused, done, canNarrate]);

    const cur = STEPS[step];
    const focus = cur.key;
    const connected = step >= 1;
    const status = step === 0 ? 'Incoming call' : step === 1 ? 'Your turn' : step === 2 ? name + ' is speaking' : 'Ready to wrap up';
    const goTo = (i) => { setStep(i); setPaused(true); setDone(false); };

    // a control button in the mock; spotlit when it matches the active step
    function Ctl({ k, size, bg, icon, rot }) {
      const on = focus === k;
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, opacity: on ? 1 : 0.38, transform: on ? 'scale(1.06)' : 'scale(0.94)', transition: 'opacity .45s ease, transform .45s ease' }}>
          <span className={on ? 'rp-guide-focus' : ''}
            style={{ position: 'relative', width: size, height: size, borderRadius: '50%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: rot ? 'rotate(135deg)' : 'none', boxShadow: on ? '0 8px 22px -8px rgba(0,0,0,0.5)' : 'none', transition: 'box-shadow .4s ease' }}>
            {icon}
          </span>
        </div>
      );
    }

    return (
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        style={{ position: 'relative', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '16px 16px 14px', marginBottom: 16 }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 13, paddingRight: 28 }}>
          <span style={{ width: 30, height: 30, flexShrink: 0, borderRadius: '50%', background: 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <I.Phone size={15} stroke="var(--color-accent)" />
          </span>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>{phase === 'intro' ? 'Before you begin' : 'How this call works'}</div>
            <div style={{ fontSize: 12.5, color: 'var(--color-text-muted)', marginTop: 1 }}>{phase === 'intro' ? 'A quick introduction' : 'Step-by-step controls, narrated'}</div>
          </div>
        </div>

        {phase === 'intro' ? (
          <div key="intro" className="rp-guide-cap" style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '4px 2px 2px' }}>
            <span style={{ width: 42, height: 42, flexShrink: 0, borderRadius: '50%', background: 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <I.Sparkles size={20} stroke="var(--color-accent)" />
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 5 }}>{capstone ? 'Capstone roleplay' : ('Roleplay \u00b7 ' + (skill || 'Empathy'))}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.2, marginBottom: 7 }}>{introHeading}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>{introBody}</p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12.5, color: 'var(--color-text-muted)' }}>
                  <span className="rp-call-ring" style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }} />
                  Next: a tour of the controls
                </span>
                <Button variant="ghost" onClick={() => { setPaused(false); setPhase('tour'); }}>Skip to controls</Button>
              </div>
            </div>
          </div>
        ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, alignItems: 'stretch' }}>
          {/* animated mock of the call panel */}
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 20, padding: '18px 16px 16px', textAlign: 'center', color: '#f7f4f0', background: 'linear-gradient(180deg, #2c2723 0%, #1d1916 100%)' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, padding: '4px 11px', borderRadius: 'var(--radius-full)', background: 'rgba(247,244,240,0.1)', fontSize: 11, fontWeight: 700, letterSpacing: '0.03em', marginBottom: 13 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: connected ? 'var(--color-success, #4caf72)' : 'var(--color-accent-light)', display: 'inline-block' }} />
              {connected ? '0:14' : 'Ringing'}
            </div>
            <div style={{ position: 'relative', width: 64, height: 64, margin: '0 auto 9px' }}>
              {(step === 0 || step === 2) && <span className="rp-call-ring" style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '2px solid var(--color-accent-light)' }} />}
              <span style={{ width: 64, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'rgba(247,244,240,0.14)', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, boxShadow: '0 0 0 3px rgba(247,244,240,0.12)' }}>{(c && c.initial) || '?'}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 500 }}>{(c && c.name) || 'Partner'}</div>
            <div style={{ minHeight: 16, marginTop: 5, fontSize: 11.5, fontWeight: 700, letterSpacing: '0.03em', color: 'var(--color-accent-light)' }}>{status}</div>

            {/* control area swaps from "answer" to the connected control row */}
            <div style={{ marginTop: 14, minHeight: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              {step === 0 ? (
                <Ctl k="answer" size={56} bg="var(--color-success, #2faa5d)" icon={<I.Phone size={22} stroke="#fff" />} />
              ) : (
                <React.Fragment>
                  <Ctl k="listen" size={44} bg="rgba(247,244,240,0.14)" icon={<I.Volume2 size={18} stroke="#f7f4f0" />} />
                  <Ctl k="talk" size={58} bg={focus === 'talk' ? 'var(--color-accent)' : '#f7f4f0'} icon={<I.Mic size={22} stroke={focus === 'talk' ? '#fff' : '#1d1916'} />} />
                  <Ctl k="end" size={44} bg="var(--color-error, #d9534f)" icon={<I.Phone size={18} stroke="#fff" />} rot />
                </React.Fragment>
              )}
            </div>
          </div>

          {/* caption — re-animates on each step */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div key={step} className="rp-guide-cap">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--color-accent)', color: '#fff', fontSize: 12, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{cur.n}</span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{'Step ' + cur.n + ' of ' + STEPS.length}</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 6, lineHeight: 1.2 }}>{cur.title}</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--color-text-secondary)' }}>{cur.body}</p>
            </div>

            {/* progress dots + dismiss */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                {STEPS.map((s, i) => (
                  <button key={s.key} onClick={() => goTo(i)} aria-label={'Go to step ' + (i + 1)}
                    style={{ width: i === step ? 22 : 8, height: 8, padding: 0, borderRadius: 'var(--radius-full)', border: 'none', cursor: 'pointer', background: (done || i <= step) ? 'var(--color-accent)' : 'var(--color-border)', transition: 'width .3s ease, background .3s ease' }} />
                ))}
                <button onClick={() => setPaused((p) => !p)} aria-label={paused ? 'Play tour' : 'Pause tour'} title={paused ? 'Play' : 'Pause'}
                  style={{ marginLeft: 4, width: 26, height: 26, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {paused ? <I.Play size={13} stroke="var(--color-text-secondary)" /> : <I.Pause size={13} stroke="var(--color-text-secondary)" />}
                </button>
              </div>
              <span className={done ? 'rp-guide-cta' : ''} style={{ display: 'inline-flex', borderRadius: 'var(--radius-full)' }}>
                <Button variant={done ? 'primary' : 'ghost'} onClick={onDismiss}>{done ? 'Got it — start' : 'Got it'}</Button>
              </span>
            </div>
          </div>
        </div>
        )}

        <button onClick={onDismiss} aria-label="Dismiss instructions" title="Dismiss"
          style={{ position: 'absolute', top: 12, right: 12, width: 26, height: 26, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text-muted)' }}>
          <I.X size={15} stroke="var(--color-text-muted)" />
        </button>
      </div>
    );
  }

  // ── Setup card (shared) ──────────────────────────────────────
  function SetupCard({ slide, c }) {
    return (
      <div style={{ display: 'flex', gap: 14, background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '16px 18px', marginBottom: 16 }}>
        {React.createElement('image-slot', {
          id: 'rp-portrait-' + (c.name || 'partner'),
          src: slide.photoSrc || undefined, shape: 'circle', fit: 'cover',
          placeholder: c.name ? c.name + '\u2019s photo' : 'Add a face',
          style: { width: 56, height: 56, flexShrink: 0, display: 'block', boxShadow: '0 0 0 1px var(--color-border-light)', borderRadius: '50%' },
        })}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 3 }}>{c.name}<span style={{ fontWeight: 500, color: 'var(--color-text-muted)' }}>{c.role ? ' \u00b7 ' + c.role : ''}</span></div>
          <p style={{ fontSize: 15.5, color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>{slide.setup}</p>
          <p style={{ margin: '8px 0 0', fontSize: 13.5, color: 'var(--color-text-muted)' }}><strong style={{ color: 'var(--color-text-secondary)', fontWeight: 700 }}>Your aim:</strong> {slide.goal}</p>
        </div>
      </div>
    );
  }

  // ── Chat experience ──────────────────────────────────────────
  function ChatExperience({ c, messages, busy, grading, err, aiReady, input, onInput, onSend, onEnd }) {
    const scrollRef = React.useRef(null);
    const taRef = React.useRef(null);
    const learnerTurns = messages.filter((m) => m.role === 'user').length;
    React.useEffect(() => { const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight; }, [messages.length, busy, grading]);

    function onKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSend(); } }
    function grow(e) {
      onInput(e.target.value);
      e.target.style.height = 'auto';
      e.target.style.height = Math.min(e.target.scrollHeight, 130) + 'px';
    }
    return (
      <div>
        <div ref={scrollRef} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '18px', display: 'flex', flexDirection: 'column', gap: 14, maxHeight: 'min(46vh, 420px)', minHeight: 200, overflowY: 'auto' }}>
          {messages.map((m, i) => <Bubble key={i} m={m} name={c.name} initial={m.role === 'user' ? 'You' : c.initial} />)}
          {busy && (
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
              <Avatar initial={c.initial} tone="char" />
              <div style={{ padding: '8px 14px', borderRadius: 16, borderBottomLeftRadius: 5, background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)' }}><Dots /></div>
            </div>
          )}
        </div>

        {!aiReady && (
          <div style={{ marginTop: 12 }}>
            <Alert variant="info" title="Live roleplay">{'This conversation is powered by AI inside the Lumina learning environment. ' + c.name + '\u2019s replies appear once it\u2019s connected; you can still type your responses and end for feedback.'}</Alert>
          </div>
        )}
        {err && <div style={{ marginTop: 12 }}><Alert variant="error" title="Hmm">{err}</Alert></div>}

        <div style={{ marginTop: 14, display: 'flex', gap: 10, alignItems: 'flex-end', background: 'var(--color-surface)', border: '1.5px solid var(--color-border)', borderRadius: 'var(--radius-xl)', padding: '8px 8px 8px 14px' }}>
          <textarea
            ref={taRef} value={input} onChange={grow} onKeyDown={onKey} rows={1} disabled={busy || grading}
            placeholder={'Reply to ' + c.name + '\u2026'}
            style={{ flex: 1, resize: 'none', border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--font-body)', fontSize: 15.5, lineHeight: 1.5, color: 'var(--color-text-primary)', maxHeight: 130, padding: '6px 0' }}
          />
          <button onClick={() => onSend()} disabled={!input.trim() || busy || grading} aria-label="Send"
            style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--radius-lg)', border: 'none', cursor: input.trim() && !busy ? 'pointer' : 'default', background: input.trim() && !busy ? 'var(--color-primary)' : 'var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--transition-base)' }}>
            <I.Send size={17} stroke="#fff" />
          </button>
        </div>

        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--color-text-muted)' }}>
            <I.MessageSquare size={15} stroke="var(--color-text-muted)" />
            {learnerTurns === 0 ? 'Send a reply to begin' : learnerTurns + ' repl' + (learnerTurns === 1 ? 'y' : 'ies') + ' \u2014 end whenever you\u2019re ready'}
          </span>
          <Button variant="accent" iconRight={grading ? null : <I.Sparkles size={16} />} disabled={learnerTurns === 0 || grading || busy} onClick={onEnd}>
            {grading ? 'Reading the conversation\u2026' : 'End & get feedback'}
          </Button>
        </div>
      </div>
    );
  }

  // ── Call experience ──────────────────────────────────────────
  function CallExperience({ slide, c, messages, busy, grading, err, aiReady, onSend, onEnd }) {
    const [connected, setConnected] = React.useState(false);
    const [elapsed, setElapsed] = React.useState(0);
    const [listening, setListening] = React.useState(false);
    const [interim, setInterim] = React.useState('');
    const [speaking, setSpeaking] = React.useState(false);
    const [voiceOff, setVoiceOff] = React.useState(false);
    const [tidying, setTidying] = React.useState(false);
    const [typed, setTyped] = React.useState('');
    const [srError, setSrError] = React.useState(null);
    const recRef = React.useRef(null);
    const finalRef = React.useRef('');
    const spokenRef = React.useRef(-1);
    const voiceOffRef = React.useRef(false);
    const wantRef = React.useRef(false);
    const netRetryRef = React.useRef(0);
    const keepAliveRef = React.useRef(null);
    const ringRef = React.useRef(null);
    const aiAudioRef = React.useRef(null); // <audio> element for the Gemini TTS voice
    // When the page is embedded in a frame that denies the mic (e.g. the in-app
    // preview pane), direct SpeechRecognition can't work — but a popup window is
    // a top-level context the block doesn't apply to. We capture voice there and
    // stream the transcript back via postMessage.
    const micWinRef = React.useRef(null);
    const micNeedsPopup = React.useMemo(() => {
      try { return (window.self !== window.top) && document.featurePolicy && !document.featurePolicy.allowsFeature('microphone'); }
      catch (e) { return false; }
    }, []);
    React.useEffect(() => {
      if (!micNeedsPopup) return;
      const onMsg = (e) => {
        const d = e.data;
        if (!d || d.t !== 'lumina-mic') return;
        if (d.k === 'listening') { wantRef.current = true; setListening(true); setSrError(null); }
        else if (d.k === 'interim') { setInterim(d.text || ''); }
        else if (d.k === 'final') {
          wantRef.current = false; setListening(false); setInterim('');
          const t = (d.text || '').trim();
          if (t) { setTidying(true); punctuate(t).then((clean) => { setTidying(false); onSend(clean); }).catch(() => { setTidying(false); onSend(t); }); }
        } else if (d.k === 'error') {
          wantRef.current = false; setListening(false);
          setSrError(d.error === 'not-allowed'
            ? 'Allow the mic in the small voice window (click the mic icon in ITS address bar), then tap the mic again.'
            : d.error === 'network' ? 'Couldn’t reach the voice service — check your connection and tap the mic to retry.'
            : 'Voice hit a snag — tap the mic to retry, or type your reply below.');
        } else if (d.k === 'closed') { wantRef.current = false; setListening(false); }
      };
      window.addEventListener('message', onMsg);
      return () => {
        window.removeEventListener('message', onMsg);
        const w = micWinRef.current;
        if (w && !w.closed) { try { w.postMessage({ t: 'lumina-mic-cmd', k: 'bye' }, '*'); } catch (x) {} }
        micWinRef.current = null;
      };
    }, [micNeedsPopup, onSend]);

    const learnerTurns = messages.filter((m) => m.role === 'user').length;
    const lastChar = [...messages].reverse().find((m) => m.role === 'char');
    const lastUser = [...messages].reverse().find((m) => m.role === 'user');

    React.useEffect(() => { voiceOffRef.current = voiceOff; }, [voiceOff]);

    function stopSpeak() {
      if (hasTTS) { try { window.speechSynthesis.cancel(); } catch (e) {} }
      if (aiAudioRef.current) {
        const a = aiAudioRef.current; aiAudioRef.current = null;
        try { a.pause(); } catch (e) {}
        try { if (a.src) URL.revokeObjectURL(a.src); } catch (e) {}
      }
      if (keepAliveRef.current) { clearInterval(keepAliveRef.current); keepAliveRef.current = null; }
      setSpeaking(false);
    }
    // Dispatcher: use the natural Gemini voice when available, otherwise the
    // browser's speechSynthesis. Any TTS failure falls back to the browser voice.
    function speak(text) {
      if (voiceOffRef.current || !text) return;
      if (hasAITTS()) { speakAI(text); return; }
      speakBrowser(text);
    }
    async function speakAI(text) {
      stopSpeak();
      if (voiceOffRef.current) return;
      setSpeaking(true);
      try {
        const url = await window.claude.tts(text, voiceForCharacter(slide.character));
        if (voiceOffRef.current) { try { URL.revokeObjectURL(url); } catch (e) {} setSpeaking(false); return; }
        const a = new Audio(url);
        aiAudioRef.current = a;
        const done = () => {
          if (aiAudioRef.current === a) aiAudioRef.current = null;
          try { URL.revokeObjectURL(url); } catch (e) {}
          setSpeaking(false);
        };
        a.onended = done;
        a.onerror = () => { done(); speakBrowser(text); }; // fall back if playback fails
        a.play().catch(() => { done(); speakBrowser(text); }); // autoplay blocked, etc.
      } catch (e) {
        setSpeaking(false);
        speakBrowser(text); // network / API failure — use the browser voice
      }
    }
    function speakBrowser(text) {
      if (!hasTTS || voiceOffRef.current || !text) return;
      try { window.speechSynthesis.cancel(); } catch (e) {}
      // Chrome drops an utterance if speak() fires in the same tick as cancel(),
      // and silently truncates anything past ~15s unless resume() is pinged.
      // A short defer dodges the first bug; a keep-alive interval dodges the
      // second. Voices are warmed in refreshVoices() so the first line isn't mute.
      setTimeout(() => {
        if (voiceOffRef.current) return;
        try {
          const u = new SpeechSynthesisUtterance(text);
          const g = (slide.character && slide.character.gender) || 'female';
          u.rate = 0.98; u.pitch = g === 'male' ? 0.92 : 1.0; u.volume = 1;
          const v = pickVoice(g); if (v) { u.voice = v; u.lang = v.lang; }
          u.onstart = () => setSpeaking(true);
          u.onend = () => { setSpeaking(false); if (keepAliveRef.current) { clearInterval(keepAliveRef.current); keepAliveRef.current = null; } };
          u.onerror = () => { setSpeaking(false); if (keepAliveRef.current) { clearInterval(keepAliveRef.current); keepAliveRef.current = null; } };
          window.speechSynthesis.speak(u);
          if (keepAliveRef.current) clearInterval(keepAliveRef.current);
          keepAliveRef.current = setInterval(() => {
            try {
              if (window.speechSynthesis.speaking) { window.speechSynthesis.pause(); window.speechSynthesis.resume(); }
              else { clearInterval(keepAliveRef.current); keepAliveRef.current = null; }
            } catch (e) {}
          }, 9000);
        } catch (e) { setSpeaking(false); }
      }, 130);
    }

    // connect: the learner taps to answer (real-world feel + unlocks TTS audio).
    function answer() {
      if (ringRef.current) { ringRef.current(); ringRef.current = null; }
      stopRingback(); // kill the singleton too, in case ringRef went stale
      resumeAudio();
      unlockTTS();
      refreshVoices();
      setConnected(true);
    }
    // Ring until answered (or unmount). The slide arrives via a click, so the
    // AudioContext is already unlocked; resumeAudio() covers the rest.
    React.useEffect(() => {
      if (connected) { stopRingback(); return undefined; }
      // Wait for the slide's voiceover to finish before the phone starts ringing,
      // so the VO and ringtone never overlap. Narration kicks off ~300ms after the
      // slide change; we give it a beat to begin, then ring only once speech is idle.
      let cancelled = false, pollId = null, startId = null;
      const begin = () => { if (!cancelled && !connected) ringRef.current = startRingback(); };
      const waitForVO = () => {
        if (cancelled) return;
        const ss = window.speechSynthesis;
        if (ss && (ss.speaking || ss.pending)) { pollId = setTimeout(waitForVO, 250); }
        else { begin(); }
      };
      startId = setTimeout(waitForVO, 850);
      return () => {
        cancelled = true;
        if (pollId) clearTimeout(pollId);
        if (startId) clearTimeout(startId);
        if (ringRef.current) { ringRef.current(); ringRef.current = null; }
        stopRingback();
      };
    }, [connected]);
    React.useEffect(() => {
      return () => { if (ringRef.current) ringRef.current(); stopRingback(); wantRef.current = false; stopSpeak(); try { recRef.current && recRef.current.abort(); } catch (e) {} };
    }, []);

    // call timer
    React.useEffect(() => {
      if (!connected) return undefined;
      const iv = setInterval(() => setElapsed((e) => e + 1), 1000);
      return () => clearInterval(iv);
    }, [connected]);

    // speak each new character line (incl. the opening) once connected
    React.useEffect(() => {
      if (!connected) return;
      const lastIdx = messages.length - 1;
      if (lastIdx < 0) return;
      const m = messages[lastIdx];
      if (m.role === 'char' && lastIdx > spokenRef.current) {
        spokenRef.current = lastIdx;
        speak(m.text);
      }
    }, [connected, messages.length]);

    function fmt(s) { const m = Math.floor(s / 60), x = s % 60; return m + ':' + (x < 10 ? '0' : '') + x; }
    function replayLast() { if (lastChar) { setVoiceOff(false); voiceOffRef.current = false; speak(lastChar.text); } }

    // Build a recognizer that keeps listening through natural pauses
    // (true hold-to-talk) and only finalizes when the learner taps stop.
    function makeRec() {
      const rec = new SR();
      rec.lang = 'en-US'; rec.interimResults = true; rec.continuous = true; rec.maxAlternatives = 1;
      rec.onresult = (e) => {
        let live = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          const r = e.results[i];
          if (r.isFinal) finalRef.current += r[0].transcript + ' ';
          else live += r[0].transcript;
        }
        setInterim((finalRef.current + live).trim());
      };
      rec.onerror = (ev) => {
        const err = ev && ev.error;
        // a silent gap just ends the session — we restart it in onend; not an error
        if (err === 'no-speech' || err === 'aborted') return;
        if (err === 'network') {
          // The browser's speech engine couldn't reach its cloud service.
          // Retry a couple of times for a genuinely flaky connection; if it
          // keeps failing it's the environment (embedded preview / non-Google
          // browser) and we hand the learner the typed fallback.
          netRetryRef.current += 1;
          if (wantRef.current && netRetryRef.current <= 2) {
            try { rec.start(); return; } catch (e) {}
          }
          wantRef.current = false;
          setListening(false);
          setSrError('Couldn’t reach the voice service. This usually means the course is running inside an embedded preview or a browser without speech support — open it in a Chrome or Edge tab for voice. You can type your reply below in the meantime.');
          return;
        }
        wantRef.current = false;
        setListening(false);
        if (err === 'not-allowed' || err === 'service-not-allowed') {
          setSrError('Microphone access is blocked. Allow the mic for this page (or use the typed reply below).');
        } else {
          setSrError('Voice input hit a snag — try again, or type your reply below.');
        }
      };
      rec.onend = () => {
        // If the learner still wants to talk, the session just timed out on a
        // pause — transparently restart so holding works across silences.
        if (wantRef.current) {
          try { rec.start(); return; } catch (e) { /* fall through to finalize */ }
        }
        setListening(false);
        const t = finalRef.current.trim();
        setInterim('');
        if (t) {
          // Restore punctuation on the spoken turn before it enters the
          // transcript, so the grader judges meaning — not missing commas.
          setTidying(true);
          punctuate(t).then((clean) => { setTidying(false); onSend(clean); })
            .catch(() => { setTidying(false); onSend(t); });
        }
      };
      return rec;
    }
    function beginRec() {
      const rec = makeRec();
      recRef.current = rec;
      wantRef.current = true;
      try { rec.start(); setListening(true); }
      catch (e) { wantRef.current = false; setListening(false); setSrError('Couldn’t start the mic — type your reply below instead.'); }
    }
    function startListen() {
      if (!hasSR || busy || grading || wantRef.current) return;
      stopSpeak();
      setSrError(null);
      finalRef.current = '';
      netRetryRef.current = 0;
      setInterim('');
      if (micNeedsPopup) {
        // Route through the top-level popup (the frame here can't open the mic).
        const w = micWinRef.current;
        if (w && !w.closed) {
          try { w.postMessage({ t: 'lumina-mic-cmd', k: 'start' }, '*'); w.focus(); } catch (e) {}
        } else {
          const nw = window.open('mic.html', 'lumina-mic', 'popup,width=360,height=300');
          micWinRef.current = nw;
          if (!nw) { setSrError('Your browser blocked the voice window. Allow pop-ups for this page, then tap the mic again.'); return; }
          // mic.html auto-starts listening as soon as it loads.
        }
        return;
      }
      // Direct recognition (top-level / real tab). Prompts once, reuses grant.
      beginRec();
    }
    function stopListen() {
      if (micNeedsPopup) {
        const w = micWinRef.current;
        if (w && !w.closed) { try { w.postMessage({ t: 'lumina-mic-cmd', k: 'stop' }, '*'); } catch (e) {} }
        return;
      }
      wantRef.current = false;
      const rec = recRef.current;
      if (rec) { try { rec.stop(); } catch (e) {} }
    }
    function toggleTalk() { if (listening) stopListen(); else startListen(); }

    function sendTyped() { const t = typed.trim(); if (!t || busy || grading) return; setTyped(''); onSend(t); }
    function endCall() {
      stopSpeak(); stopListen();
      const w = micWinRef.current;
      if (w && !w.closed) { try { w.postMessage({ t: 'lumina-mic-cmd', k: 'bye' }, '*'); } catch (e) {} }
      micWinRef.current = null;
      onEnd();
    }

    const status = !connected ? 'Incoming call'
      : busy ? c.name + ' is responding\u2026'
      : tidying ? 'Got it\u2026'
      : speaking ? c.name + ' is speaking'
      : listening ? 'Listening\u2026'
      : 'Your turn';

    return (
      <div>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 26, padding: '30px 22px 22px', textAlign: 'center', color: '#f7f4f0', background: 'linear-gradient(180deg, #2c2723 0%, #1d1916 100%)', boxShadow: 'var(--shadow-lg, 0 18px 50px -12px rgba(0,0,0,0.4))' }}>
          {/* status pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 13px', borderRadius: 'var(--radius-full)', background: 'rgba(247,244,240,0.1)', fontSize: 12.5, fontWeight: 700, letterSpacing: '0.03em', marginBottom: 22 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: connected ? 'var(--color-success, #4caf72)' : 'var(--color-accent-light)', display: 'inline-block' }} />
            {connected ? fmt(elapsed) : 'Ringing'}
          </div>

          {/* avatar with rings */}
          <div style={{ position: 'relative', width: 132, height: 132, margin: '0 auto 16px' }}>
            {(speaking || !connected) && <span className="rp-call-ring" style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '2px solid var(--color-accent-light)' }} />}
            {React.createElement('image-slot', {
              id: 'rp-portrait-' + (c.name || 'partner'),
              src: slide.photoSrc || undefined, shape: 'circle', fit: 'cover',
              placeholder: (c.name || 'Add a') + '\u2019s photo',
              style: { width: 132, height: 132, display: 'block', borderRadius: '50%', boxShadow: '0 0 0 3px rgba(247,244,240,0.14)' },
            })}
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 500 }}>{c.name}</div>
          <div style={{ fontSize: 13.5, color: 'rgba(247,244,240,0.6)', marginTop: 2 }}>{c.role || ''}</div>
          <div style={{ marginTop: 12, fontSize: 13, fontWeight: 700, letterSpacing: '0.03em', color: 'var(--color-accent-light)', minHeight: 18, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            {busy ? <Dots /> : status}
          </div>

          {/* live captions */}
          <div style={{ marginTop: 18, minHeight: 76, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
            {connected && lastChar && (
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: 10 }}>
                <p style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 18, lineHeight: 1.4, color: '#f7f4f0' }}>{'\u201c' + lastChar.text + '\u201d'}</p>
                {(hasTTS || hasAITTS()) && !voiceOff && (
                  <button onClick={replayLast} disabled={speaking || busy} aria-label={'Replay line'} title="Replay"
                    style={{ flexShrink: 0, marginTop: 2, width: 28, height: 28, borderRadius: '50%', border: 'none', cursor: speaking || busy ? 'default' : 'pointer', background: 'rgba(247,244,240,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: speaking || busy ? 0.5 : 1 }}>
                    <I.RotateCcw size={14} stroke="#f7f4f0" />
                  </button>
                )}
              </div>
            )}
            {(listening || interim) && (
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.45, color: 'var(--color-accent-light)', fontStyle: 'italic' }}>
                {interim ? 'You: \u201c' + interim + '\u201d' : 'Listening\u2026 speak now'}
              </p>
            )}
            {!listening && !interim && lastUser && !busy && (
              <p style={{ margin: 0, fontSize: 13, color: 'rgba(247,244,240,0.45)' }}>{'You said: \u201c' + lastUser.text + '\u201d'}</p>
            )}
          </div>

          {/* controls */}
          {!connected ? (
            <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <button onClick={answer} aria-label="Answer call"
                style={{ width: 76, height: 76, borderRadius: '50%', border: 'none', cursor: 'pointer', background: 'var(--color-success, #2faa5d)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 24px -6px rgba(47,170,93,0.6)' }}>
                <I.Phone size={28} stroke="#fff" />
              </button>
              <span style={{ fontSize: 12.5, fontWeight: 700, color: 'var(--color-accent-light)' }}>Tap to answer</span>
            </div>
          ) : (
          <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 26 }}>
            {/* speaker mute */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <button onClick={() => { const nv = !voiceOff; setVoiceOff(nv); if (nv) stopSpeak(); }} aria-label={voiceOff ? 'Unmute voice' : 'Mute voice'} disabled={!connected}
                style={{ width: 52, height: 52, borderRadius: '50%', border: 'none', cursor: connected ? 'pointer' : 'default', background: 'rgba(247,244,240,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {voiceOff ? <I.VolumeX size={20} stroke="#f7f4f0" /> : <I.Volume2 size={20} stroke="#f7f4f0" />}
              </button>
              <span style={{ fontSize: 11, color: 'rgba(247,244,240,0.55)' }}>{voiceOff ? 'Muted' : 'Voice'}</span>
            </div>

            {/* talk (voice) */}
            {hasSR ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <button onClick={toggleTalk} disabled={!connected || busy || grading || tidying} aria-label={listening ? 'Stop & send' : 'Tap to talk'}
                  className={listening ? 'rp-mic-live' : ''}
                  style={{ position: 'relative', width: 76, height: 76, borderRadius: '50%', border: 'none', cursor: connected && !busy ? 'pointer' : 'default',
                    background: listening ? 'var(--color-accent)' : '#f7f4f0', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--transition-base)' }}>
                  <I.Mic size={28} stroke={listening ? '#fff' : '#1d1916'} />
                </button>
                <span style={{ fontSize: 11.5, fontWeight: 700, color: listening ? 'var(--color-accent-light)' : 'rgba(247,244,240,0.7)' }}>{listening ? 'Tap to send' : srError ? 'Tap to retry' : 'Tap to talk'}</span>
              </div>
            ) : (
              <div style={{ fontSize: 12, color: 'rgba(247,244,240,0.55)', maxWidth: 150, lineHeight: 1.4 }}>Voice input isn’t supported in this browser — type below.</div>
            )}

            {/* end call */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <button onClick={endCall} disabled={learnerTurns === 0 || grading || busy} aria-label="End call & get feedback"
                style={{ width: 52, height: 52, borderRadius: '50%', border: 'none', cursor: learnerTurns > 0 && !grading && !busy ? 'pointer' : 'default', background: learnerTurns > 0 ? 'var(--color-error, #d9534f)' : 'rgba(247,244,240,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: learnerTurns > 0 ? 1 : 0.5, transform: 'rotate(135deg)' }}>
                <I.Phone size={20} stroke="#fff" />
              </button>
              <span style={{ fontSize: 11, color: 'rgba(247,244,240,0.55)' }}>{grading ? 'Grading\u2026' : 'End'}</span>
            </div>
          </div>
          )}

          {/* voice error / permission notice */}
          {srError && (
            <p style={{ marginTop: 16, marginBottom: 0, fontSize: 12.5, lineHeight: 1.45, color: 'var(--color-accent-light)', maxWidth: 360, marginLeft: 'auto', marginRight: 'auto' }}>{srError}</p>
          )}

          {/* typing fallback — always available when voice is unsupported or failing */}
          {(!hasSR || srError) && (
            <div style={{ marginTop: 18, display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(247,244,240,0.1)', borderRadius: 'var(--radius-xl)', padding: '7px 7px 7px 14px' }}>
              <input value={typed} onChange={(e) => setTyped(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); sendTyped(); } }}
                placeholder={'Say something to ' + c.name + '\u2026'} disabled={busy || grading || !connected}
                style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', color: '#f7f4f0', fontFamily: 'var(--font-body)', fontSize: 15 }} />
              <button onClick={sendTyped} disabled={!typed.trim() || busy || grading} aria-label="Send"
                style={{ width: 40, height: 40, flexShrink: 0, borderRadius: 'var(--radius-lg)', border: 'none', cursor: typed.trim() ? 'pointer' : 'default', background: typed.trim() ? 'var(--color-accent)' : 'rgba(247,244,240,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <I.Send size={17} stroke="#fff" />
              </button>
            </div>
          )}
        </div>

        {!aiReady && (
          <div style={{ marginTop: 12 }}>
            <Alert variant="info" title="Live call">{'This call is powered by AI inside the Lumina learning environment. ' + c.name + '\u2019s voice comes through once it\u2019s connected; you can still take your turns and end for feedback.'}</Alert>
          </div>
        )}
        {err && <div style={{ marginTop: 12 }}><Alert variant="error" title="Hmm">{err}</Alert></div>}

        <p style={{ marginTop: 14, textAlign: 'center', fontSize: 13, color: 'var(--color-text-muted)' }}>
          {learnerTurns === 0 ? (hasSR ? 'Tap the mic and speak your first line.' : 'Type your first line to begin.') : learnerTurns + ' turn' + (learnerTurns === 1 ? '' : 's') + ' \u2014 end the call whenever you\u2019re ready for feedback.'}
        </p>
      </div>
    );
  }

  // ── Roleplay (host: shared state + mode switch) ──────────────
  function Roleplay({ slide, state, onChange, onNarrate, canNarrate }) {
    const c = slide.character || { name: 'Partner', initial: '?' };
    const st = state || { messages: [], ended: false, feedback: null };
    const messages = st.messages || [];
    const mode = st.mode || 'call';
    const [input, setInput] = React.useState('');
    const [busy, setBusy] = React.useState(false);
    const [grading, setGrading] = React.useState(false);
    const [err, setErr] = React.useState(null);
    const [showGuide, setShowGuide] = React.useState(true);
    const [callReady, setCallReady] = React.useState(false);
    // Auto-end: the brief “you’ve got it” beat shown once the learner has met
    // the whole rubric, and a guard so it only fires once per conversation.
    const [wrapping, setWrapping] = React.useState(false);
    const [autoChecking, setAutoChecking] = React.useState(false);
    const [wrapRubric, setWrapRubric] = React.useState({});
    const [wrapBusy, setWrapBusy] = React.useState(false);
    const autoFiredRef = React.useRef(false);
    const wrapFbRef = React.useRef(null);   // {fb, msgs} once the background grade lands
    const wrapWantRef = React.useRef(false); // learner pressed Continue before the grade landed

    // Re-show the walk-through (and re-arm the briefing) whenever a new scenario opens.
    React.useEffect(() => {
      setShowGuide(true); setCallReady(false); setWrapping(false); setAutoChecking(false); setWrapBusy(false); setWrapRubric({});
      autoFiredRef.current = false; wrapFbRef.current = null; wrapWantRef.current = false;
    }, [slide.id]);

    // seed opening
    React.useEffect(() => {
      if ((st.messages || []).length === 0 && slide.opening && !st.ended) {
        onChange({ messages: [{ role: 'char', text: slide.opening }], ended: false, feedback: null, mode });
      }
    }, [slide.id]);

    const aiReady = canPlay();

    async function send(textArg) {
      const text = (textArg != null ? textArg : input).trim();
      if (!text || busy || grading || autoChecking || wrapping || st.ended) return;
      const next = [...messages, { role: 'user', text }];
      if (textArg == null) setInput('');
      onChange({ ...st, messages: next });
      if (!aiReady) return;
      setBusy(true); setErr(null);
      try {
        const reply = await charReply(slide, next, mode);
        const full = [...next, { role: 'char', text: reply }];
        onChange({ ...st, messages: full });
        setBusy(false);
        maybeAutoEnd(full);
      } catch (e) { setErr(c.name + ' didn\u2019t reply \u2014 try again in a moment.'); setBusy(false); }
    }

    // After a turn lands, check whether the learner has now met the whole rubric
    // (judged by meaning, not wording). If so, play a short “you’ve got it” beat
    // and grade automatically — the manual end button stays available throughout.
    async function maybeAutoEnd(full) {
      if (autoFiredRef.current || grading) return;
      const learnerTurns = full.filter((m) => m.role === 'user').length;
      if (learnerTurns < 1) return;
      if (slide.capstone && learnerTurns < 4) return; // let the hard turn arrive first
      setAutoChecking(true);
      let res = { allMet: false };
      try { res = await checkReady(slide, full); } catch (e) {}
      setAutoChecking(false);
      if (!res.allMet || autoFiredRef.current) return;
      autoFiredRef.current = true;
      wrapFbRef.current = null;
      wrapWantRef.current = false;
      setWrapRubric(res.rubric || {});
      setWrapBusy(false);
      setWrapping(true);
      gradeForWrap(full); // grade quietly in the background so feedback is ready on Continue
    }

    // Grade while the celebration card is up; fall back to the offline scorer so
    // Continue always has feedback to show even if the AI grade fails.
    async function gradeForWrap(full) {
      let fb = null;
      try { fb = await (slide.capstone ? gradeCapstone : gradeConversation)(slide, full); }
      catch (e) {
        try { fb = slide.capstone ? window.ScriptedRoleplay.gradeCapstone(slide, full) : window.ScriptedRoleplay.grade(slide, full); } catch (e2) { fb = null; }
      }
      wrapFbRef.current = { fb: fb, msgs: full };
      if (wrapWantRef.current) finishWrap(); // learner already pressed Continue
    }

    // Continue from the celebration card -> reveal the full coaching (waiting on
    // the background grade if it has not landed yet).
    function confirmWrap() {
      if (wrapFbRef.current) finishWrap();
      else { wrapWantRef.current = true; setWrapBusy(true); }
    }
    function finishWrap() {
      const p = wrapFbRef.current;
      if (!p) return;
      setWrapBusy(false);
      if (p.fb) applyFeedback(p.fb, p.msgs);
      setWrapping(false);
    }

    function applyFeedback(fb, msgs) {
      if (onNarrate) onNarrate('');
      if (hasTTS) { try { window.speechSynthesis.cancel(); } catch (e) {} }
      if (slide.capstone) {
        const attempts = (st.attempts || 0) + 1;
        const bestScore = Math.max(st.bestScore | 0, fb.score | 0);
        onChange({ ...st, messages: msgs, ended: true, feedback: fb, attempts: attempts, bestScore: bestScore });
      } else {
        onChange({ ...st, messages: msgs, ended: true, feedback: fb });
      }
    }

    async function end(msgsArg) {
      const msgs = Array.isArray(msgsArg) ? msgsArg : messages;
      if (grading) return;
      if (onNarrate) onNarrate('');
      if (hasTTS) { try { window.speechSynthesis.cancel(); } catch (e) {} }
      setGrading(true); setErr(null);
      try {
        const fb = await (slide.capstone ? gradeCapstone : gradeConversation)(slide, msgs);
        if (slide.capstone) {
          const attempts = (st.attempts || 0) + 1;
          const bestScore = Math.max(st.bestScore | 0, fb.score | 0);
          onChange({ ...st, messages: msgs, ended: true, feedback: fb, attempts: attempts, bestScore: bestScore });
        } else {
          onChange({ ...st, messages: msgs, ended: true, feedback: fb });
        }
      } catch (e) { setErr('The feedback didn\u2019t come through \u2014 try ending again.'); }
      setGrading(false);
    }

    function retry() {
      setInput(''); setErr(null); setBusy(false); setGrading(false); setWrapping(false); setAutoChecking(false); setWrapBusy(false);
      autoFiredRef.current = false; wrapFbRef.current = null; wrapWantRef.current = false;
      onChange({ messages: slide.opening ? [{ role: 'char', text: slide.opening }] : [], ended: false, feedback: null, mode, attempts: st.attempts, bestScore: st.bestScore });
    }

    function setMode(m) {
      if (m === mode) return;
      if (hasTTS) { try { window.speechSynthesis.cancel(); } catch (e) {} }
      setErr(null);
      onChange({ ...st, mode: m });
    }

    const ended = st.ended && st.feedback;

    // Leaving the walk-through: narrate the situation first, then bring up the
    // call — “here’s the situation… now they’re calling.”
    function dismissGuide() {
      setShowGuide(false);
      const brief = (slide.setup || (slide.title + '.')) + ' Now, ' + c.name + ' is calling.';
      if (canNarrate && onNarrate) {
        let shown = false;
        const reveal = () => { if (!shown) { shown = true; setCallReady(true); } };
        onNarrate(brief, reveal);
        setTimeout(reveal, Math.max(6000, brief.length * 80));
      } else {
        setTimeout(() => setCallReady(true), 600);
      }
    }

    return (
      <div style={{ width: '100%', maxWidth: 720, margin: '0 auto' }}>
        {/* header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', marginBottom: 13 }}>
          <Badge tone="amber" dot>{slide.capstone ? slide.skill : 'Roleplay \u00b7 ' + slide.skill}</Badge>
        </div>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, color: 'var(--color-text-primary)', fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.18, margin: '0 0 14px' }}>{slide.title}</h1>

        {(ended || !showGuide) && <SetupCard slide={slide} c={c} />}

        {!ended && showGuide ? (
          <HowToCall key={slide.id} c={c} narrate={onNarrate} canNarrate={canNarrate} skill={slide.skill} capstone={slide.capstone} onDismiss={dismissGuide} />
        ) : (wrapping && !ended) ? (
          <div style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '36px 24px 28px', background: 'var(--color-success-sub)', border: '1px solid var(--color-success)', borderRadius: 'var(--radius-xl)' }}>
            <Confetti count={110} />
            <div style={{ position: 'relative', zIndex: 6 }}>
              <div className="rp-guide-cap">
                <div style={{ position: 'relative', width: 72, height: 72, margin: '0 auto 16px' }}>
                  <span className="rp-call-ring" style={{ position: 'absolute', inset: -8, borderRadius: '50%', border: '2px solid var(--color-success)' }} />
                  <span style={{ width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--color-success)' }}>
                    <I.Check size={32} stroke="#fff" />
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.15 }}>{'You\u2019ve got it'}</div>
                <p style={{ margin: '8px auto 0', maxWidth: 440, fontSize: 15, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>
                  {'You met ' + c.name + ' the way this skill asks for. Here\u2019s what you nailed, piece by piece.'}
                </p>
              </div>

              {/* piece-by-piece: the learner's own words mapped to each rubric criterion */}
              <div style={{ textAlign: 'left', maxWidth: 480, margin: '20px auto 0', background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)', padding: '6px 18px' }}>
                {slide.rubric.map((r, i) => {
                  const row = wrapRubric[r.key] || {};
                  const quote = (row.quote || '').trim();
                  return (
                    <div key={r.key} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: i < slide.rubric.length - 1 ? '1px solid var(--color-border-light)' : 'none' }}>
                      <div style={{ width: 22, height: 22, flexShrink: 0, marginTop: 1, borderRadius: '50%', background: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <I.Check size={13} stroke="#fff" />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{slide.capstone && r.skill ? r.skill + ' \u00b7 ' + r.label : r.label}</div>
                        {quote
                          ? <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16.5, lineHeight: 1.35, color: 'var(--color-text-primary)' }}>{'\u201c' + quote + '\u201d'}</p>
                          : <div style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--color-text-muted)', marginTop: 3 }}>{row.note || r.desc}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ marginTop: 22 }}>
                <Button variant="primary" disabled={wrapBusy} iconRight={wrapBusy ? null : <I.ArrowRight size={16} />} onClick={confirmWrap}>
                  {wrapBusy ? 'Preparing your coaching\u2026' : 'Continue to feedback'}
                </Button>
              </div>
            </div>
          </div>
        ) : ended ? (
          slide.capstone
            ? <CapstoneFeedback slide={slide} fb={st.feedback} onRetry={retry} reflection={st.reflection} onReflect={(v) => onChange({ ...st, reflection: v })} attempts={st.attempts || 1} bestScore={st.bestScore || 0} />
            : <Feedback slide={slide} fb={st.feedback} onRetry={retry} via={mode} />
        ) : !callReady ? (
          <div style={{ textAlign: 'center', padding: '30px 16px', background: 'var(--color-surface-alt)', border: '1px solid var(--color-border-light)', borderRadius: 'var(--radius-xl)' }}>
            <div style={{ position: 'relative', width: 84, height: 84, margin: '0 auto 12px' }}>
              <span className="rp-call-ring" style={{ position: 'absolute', inset: -6, borderRadius: '50%', border: '2px solid var(--color-accent-light)' }} />
              <span style={{ width: 84, height: 84, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'var(--color-accent-subtle)', fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 500, color: 'var(--color-accent)' }}>{c.initial || '?'}</span>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--color-text-primary)' }}>{c.name} is about to call…</div>
            <p style={{ fontSize: 14, color: 'var(--color-text-muted)', margin: '6px 0 0' }}>Take in the situation above first.</p>
            <div style={{ marginTop: 14 }}>
              <Button variant="ghost" onClick={() => { if (onNarrate) onNarrate(''); if (hasTTS) { try { window.speechSynthesis.cancel(); } catch (e) {} } setCallReady(true); }}>Skip — answer now</Button>
            </div>
          </div>
        ) : (
          <CallExperience key={'call-' + slide.id} slide={slide} c={c} messages={messages} busy={busy} grading={grading} err={err} aiReady={aiReady} onSend={send} onEnd={end} />
        )}
      </div>
    );
  }

  window.Interactions = Object.assign(window.Interactions || {}, { Roleplay, silenceAudio: function () { stopRingback(); try { window.speechSynthesis.cancel(); } catch (e) {} } });
})();
