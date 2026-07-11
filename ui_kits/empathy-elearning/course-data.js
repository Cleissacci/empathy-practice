// ════════════════════════════════════════════════════════════════
// Lumina — "The Empathy Practice" interactive e-learning module.
// Structure & flow modeled on a linear Articulate-style storyboard:
// cover → objectives → agenda → [module sections w/ tabs, hotspots,
// drag-drop, reflections] → knowledge check (scored) → results →
// summary → completion.  window.COURSE.
// ════════════════════════════════════════════════════════════════
window.COURSE = (function () {
  const objectives = [
    'Compose a generous interpretation of a teammate — climbing back down the ladder of inference to author a response that stays curious instead of reacting.',
    'Construct a reflective response that names the feeling underneath and shows the other person they were received, before reassuring or fixing.',
    'Devise a way through a heated moment that regulates your own activation first, then turns toward the other person without escalating.',
    'Integrate perspective-taking, active listening, and self-regulation into one unscripted, high-stakes conversation.',
  ];

  const agenda = [
    { n: '01', title: 'Introduction to Empathy', icon: 'Heart', blurb: 'Three words we confuse — and why empathy is a skill, not a trait.' },
    { n: '02', title: 'The Neuroscience of Connection', icon: 'Brain', blurb: 'How the social brain attunes us to one another.' },
    { n: '03', title: 'Perspective Taking', icon: 'Eye', blurb: 'Stepping into another person\u2019s frame of reference.' },
    { n: '04', title: 'Active Listening', icon: 'Mic', blurb: 'The practical habits of genuine presence.' },
    { n: '05', title: 'Difficult Conversations', icon: 'Dialogue', blurb: 'Staying connected when the stakes are high.' },
  ];

  const summary = [
    'Empathy is a skill — built from attention, perspective taking, regulation, and responsive communication.',
    'Empathy senses and understands; sympathy observes from a distance; compassion adds the wish to help.',
    'Healthy empathy keeps a thread of separateness — feeling with, without merging.',
    'Perspective taking means climbing back down the ladder of inference to what was actually observable.',
    'In difficult conversations, regulate yourself first — then relate.',
  ];

  // ── Knowledge-check questions ──
  const quiz = [
    { id: 'q1', q: 'What best distinguishes empathy from sympathy?',
      options: [
        'Empathy feels sorry for someone from a distance',
        'Empathy senses and understands what another feels; sympathy observes their pain from outside',
        'They mean the same thing',
      ], answer: 1,
      right: 'Empathy moves closer — it senses and understands. Sympathy notices from a distance; compassion adds the wish to help.',
      wrong: 'Empathy moves closer than sympathy: it senses and understands another\u2019s experience rather than observing it from outside.' },
    { id: 'q2', q: 'Why does keeping a sense of separateness matter in empathy?',
      options: [
        'It makes you care less, which is the goal',
        'It prevents burnout and keeps sustained care possible',
        'It blocks you from understanding others',
      ], answer: 1,
      right: 'Resonance means feeling with someone while staying distinct. That thread of separateness is what protects against burnout.',
      wrong: 'Separateness isn\u2019t about caring less — it\u2019s the boundary that lets you feel with someone without drowning, so care can last.' },
    { id: 'q3', q: 'A colleague replies to your message with one word: \u201cFine.\u201d You feel dismissed. What does the ladder of inference suggest?',
      options: [
        'Your first interpretation is the truth — they are dismissive',
        'You climbed from one fact to a conclusion; other stories could fit the same word',
        'You should reply with one word back',
      ], answer: 1,
      right: '\u201cFine\u201d is the only data. \u201cThey\u2019re dismissing me\u201d is a conclusion you climbed to — climb back down and ask what else could explain it.',
      wrong: 'The ladder of inference says you leapt from one word to a conclusion. Climbing back down means considering other stories that fit the same fact.' },
    { id: 'q4', q: 'A friend pauses mid-sentence, eyes welling. What does \u201cholding silence\u201d ask of you?',
      options: [
        'Quickly reassure them so they stop feeling bad',
        'Change the subject to something lighter',
        'Resist filling the space, and let them reach what\u2019s underneath',
      ], answer: 2,
      right: 'Holding silence means tolerating the pause so the other person can go deeper. Rushing to reassure often closes the door they were about to open.',
      wrong: 'Holding silence isn\u2019t about reassuring or redirecting — it\u2019s tolerating the pause so they can reach what\u2019s underneath.' },
    { id: 'q5', q: 'In a heated moment, what does \u201cregulate, then relate\u201d ask you to do first?',
      options: [
        'Settle your own nervous system before turning toward the other person',
        'Win the point before emotions take over',
        'Match their intensity so they feel heard',
      ], answer: 0,
      right: 'You can\u2019t offer a steadiness you don\u2019t have. Notice and settle your own activation first — then turn toward them.',
      wrong: 'Regulate, then relate: settle your own activation first. You can\u2019t offer a steadiness you don\u2019t yet have.' },
  ];

  // ── Empathy rubrics for the AI roleplays (one per practised skill) ──
  // Each criterion is graded by the AI coach after the learner ends the conversation.
  const RUBRIC = {
    generous: [
      { key: 'no_assume', label: 'Resisted assuming the worst', desc: 'Didn\u2019t read the message as a slight, a pattern, or a verdict about the relationship.' },
      { key: 'warmth', label: 'Led with warmth, not blame', desc: 'Opened with care or concern rather than guilt-tripping or scorekeeping.' },
      { key: 'curious', label: 'Stayed curious about their side', desc: 'Left room for what they couldn\u2019t see — wondered or gently asked what was going on.' },
      { key: 'open_door', label: 'Kept the door open', desc: 'Made it easy to reconnect, with no pressure or strings attached.' },
    ],
    reflecting: [
      { key: 'named', label: 'Named the feeling underneath', desc: 'Reflected the emotion under the words — overlooked, unseen, discouraged.' },
      { key: 'no_reassure', label: 'Didn\u2019t rush to reassure', desc: 'Avoided \u201cI\u2019m sure it\u2019s fine\u201d — which quietly closes the door.' },
      { key: 'no_fix', label: 'Held off on fixing', desc: 'Resisted jumping to advice or solutions before understanding landed.' },
      { key: 'received', label: 'Showed they were received', desc: 'Made the person feel genuinely heard before moving anywhere.' },
    ],
    regulate: [
      { key: 'self_first', label: 'Regulated yourself first', desc: 'Steadied your own activation — a breath, a pause — before responding.' },
      { key: 'no_escalate', label: 'Didn\u2019t escalate', desc: 'Didn\u2019t match the sharpness, defend, or push to \u201cwin\u201d the point.' },
      { key: 'toward', label: 'Turned toward, not away', desc: 'Stayed connected and open rather than going cold or combative.' },
      { key: 'acknowledge', label: 'Acknowledged their view', desc: 'Recognised their perspective as real, even while holding your own.' },
    ],
  };

  // ── The linear slide sequence ──
  const slides = [
    // INTRO
    { id: 'cover', type: 'cover', section: 'Welcome' },
    { id: 'objectives', type: 'objectives', section: 'Objectives', objectives },
    { id: 'agenda', type: 'agenda', section: 'Course Agenda', agenda },

    // MODULE 1
    { id: 'm1_div', type: 'section', section: 'Module 1', n: 'Module 01', title: 'Introduction to Empathy', icon: 'Heart',
      photo: { id: 'photo-m1', src: 'assets/images/photo_m1.png', hint: 'Two people in warm conversation' },
      blurb: 'What empathy is — and what it isn\u2019t.' },
    { id: 'm1_c1', type: 'content', section: 'Module 1', eyebrow: 'Module 01 · Introduction',
      title: 'Three words we confuse', sub: 'Sympathy, empathy, compassion',
      body: [
        'We use these three words as if they were interchangeable. They are not — and the difference shapes how we show up for the people around us.',
        'Explore each one below. You\u2019ll need to open all three to continue.',
      ] },
    { id: 'm1_tabs', type: 'tabs', section: 'Module 1', gate: true,
      eyebrow: 'Module 01 · Introduction', title: 'Three movements of care',
      tabs: [
        { label: 'Sympathy', body: 'Noticing another person\u2019s pain from a distance — \u201cI\u2019m sorry that happened to you.\u201d It acknowledges, but stays outside.' },
        { label: 'Empathy', body: 'Stepping closer: sensing what another person feels, and understanding why. It is the heart of this course — and it is learnable.' },
        { label: 'Compassion', body: 'Empathy plus a third movement — the wish to help, and the willingness to act on it. Empathy without compassion can exhaust us; compassion without empathy can miss the mark.' },
      ] },
    { id: 'm1_c2', type: 'content', section: 'Module 1', eyebrow: 'Module 01 · Introduction',
      title: 'Empathy is a skill', sub: 'Not a trait you either have or lack',
      body: [
        'The most important idea in this course is also the most hopeful: empathy is not a fixed personality trait. It is a set of skills — attention, perspective taking, emotional regulation, and responsive communication.',
        'Decades of research show measurable change. People who train these habits become more accurate at reading others and steadier under emotional pressure. You are not stuck with the empathy you started with.',
      ], pull: 'You are not stuck with the empathy you started with.' },

    // MODULE 2
    { id: 'm2_div', type: 'section', section: 'Module 2', n: 'Module 02', title: 'The Neuroscience of Connection', icon: 'Brain',
      photo: { id: 'photo-m2', src: 'assets/images/photo_m2.png', hint: 'Faces attuned to each other' },
      blurb: 'How the social brain attunes us to one another.' },
    { id: 'm2_c1', type: 'content', section: 'Module 2', eyebrow: 'Module 02 · Neuroscience',
      title: 'The social brain', sub: 'We are wired to attune',
      body: [
        'Long before language, our survival depended on reading one another. The brain devotes vast resources to social cognition — tracking faces, tone, posture, and intention.',
        'But hardware is not destiny. The same circuits strengthen with use and quiet with neglect. Attention is the dial.',
      ] },
    { id: 'm2_hot', type: 'hotspots', section: 'Module 2', gate: true,
      eyebrow: 'Module 02 · Neuroscience', title: 'Three systems behind connection',
      intro: 'Select each card to learn how it shapes our capacity to understand others. Open all three to continue.',
      cards: [
        { label: 'Mirror neurons', icon: 'Brain', detail: 'Cells that fire both when you act and when you watch another act — a neural bridge that lets us grasp intention and feel a flicker of what we observe.' },
        { label: 'Default mode network', icon: 'Eye', detail: 'The brain\u2019s \u201csocial\u201d resting network — active when we think about other people\u2019s minds, recall the past, or imagine how someone else might feel.' },
        { label: 'Affective resonance', icon: 'Heart', detail: 'The body\u2019s echo of someone else\u2019s state: feeling a version of what another feels. It is what makes empathy visceral rather than merely intellectual.' },
      ] },
    { id: 'm2_c2', type: 'content', section: 'Module 2', eyebrow: 'Module 02 · Neuroscience',
      title: 'Resonance, not merging', sub: 'Feeling with — without losing yourself',
      body: [
        'Affective resonance lets us feel a version of what another feels. Healthy empathy keeps a thread of separateness: you sense my distress without drowning in it.',
        'That boundary is exactly what makes sustained care possible. When it collapses, we burn out — a theme we return to in the final module.',
      ], pull: 'Healthy empathy keeps a thread of separateness.' },

    // MODULE 3
    { id: 'm3_div', type: 'section', section: 'Module 3', n: 'Module 03', title: 'Perspective Taking', icon: 'Eye',
      photo: { id: 'photo-m3', src: 'assets/images/photo_m3.png', hint: 'Someone seeing from another’s view' },
      blurb: 'Stepping into another person\u2019s frame of reference.' },
    { id: 'm3_c1', type: 'content', section: 'Module 3', eyebrow: 'Module 03 · Perspective Taking',
      title: 'What does it mean to truly listen?', sub: 'Attention comes before words',
      body: [
        'Empathy begins before we speak. It begins in the quality of our attention — in how we hold space for another person\u2019s experience before we name, judge, or respond.',
        'Perspective taking is the deliberate act of setting aside our own frame of reference long enough to inhabit someone else\u2019s.',
      ] },
    { id: 'm3_c2', type: 'content', section: 'Module 3', eyebrow: 'Module 03 · Perspective Taking',
      title: 'The ladder of inference', sub: 'How we leap from fact to story',
      body: [
        'We rarely respond to what actually happened. We respond to the story we built about it — climbing, in milliseconds, from observable data to interpretation to conclusion.',
        'Perspective taking means climbing back down: returning to what was observable, and asking what other stories could fit the same facts. The other person almost always has a story in which they are reasonable.',
      ] },
    { id: 'm3_drag', type: 'dragdrop', section: 'Module 3', gate: true,
      eyebrow: 'Module 03 · Perspective Taking',
      title: 'Perspective-taking, or reacting from your frame?',
      intro: 'Sort each response into the category that best describes it. Assign all four, then check your answers.',
      cats: [
        { id: 'persp', label: 'Perspective-taking' },
        { id: 'react', label: 'Reacting from your frame' },
      ],
      items: [
        { id: 'd1', text: 'Asking \u201cwhat might they be seeing that I\u2019m not?\u201d', cat: 'persp' },
        { id: 'd2', text: 'Deciding the short reply means they\u2019re angry at you', cat: 'react' },
        { id: 'd3', text: 'Pausing to picture how they would tell the same story', cat: 'persp' },
        { id: 'd4', text: 'Concluding they\u2019re wrong before they finish speaking', cat: 'react' },
      ],
      feedback: 'Perspective-taking gets curious about the other story; reacting from your frame locks in the first interpretation. The difference is a pause and a question.' },
    { id: 'm3_scenario', type: 'roleplay', section: 'Module 3', gate: true, eyebrow: 'Module 03 · Practice it',
      title: 'Roleplay: the last-minute cancel',
      device: 'The generous interpretation', icon: 'Eye', skill: 'Perspective Taking',
      rubric: RUBRIC.generous,
      character: { name: 'Maya', role: 'A close friend', initial: 'M', gender: 'female' },
      setup: 'An hour before dinner, your close friend Maya texts to cancel. You\u2019d been looking forward to it all week. Reply to Maya directly — the way you actually would.',
      opening: 'Hey… I can\u2019t make it tonight. I\u2019m so sorry to do this last minute.',
      goal: 'Hold a generous interpretation: stay curious and warm about what you can\u2019t see, instead of reacting to the cancellation.',
      persona: 'You are Maya, texting a close friend an hour before a dinner you\u2019d both planned. The hidden truth: a work crisis blew up your evening and you feel awful and a bit overwhelmed — but you won\u2019t volunteer all of that unless the friend is warm and curious. You are not angry; you feel guilty and a little fragile. If the friend reacts with warmth, curiosity, or care, you soften and open up about what\u2019s really going on. If they guilt-trip you, keep score, or assume the worst, you get defensive, terse, and pull back. Text like a real friend would — casual, short.',
      coachIntro: 'You held a generous interpretation when you stayed warm and curious about what Maya couldn\u2019t show you — rather than reacting to the cancel itself.' },

    // MODULE 4
    { id: 'm4_div', type: 'section', section: 'Module 4', n: 'Module 04', title: 'Active Listening', icon: 'Mic',
      photo: { id: 'photo-m4', src: 'assets/images/photo_m4.png', hint: 'One person listening intently' },
      blurb: 'The practical habits of genuine presence.' },
    { id: 'm4_c1', type: 'content', section: 'Module 4', eyebrow: 'Module 04 · Active Listening',
      title: 'Listening to understand', sub: 'Not listening to reply',
      body: [
        'Most of us listen with half our attention on what we\u2019ll say next. Active listening reverses that: the whole of your attention rests on understanding, and your response waits until understanding arrives.',
        'It sounds simple. It is not easy. Three concrete habits make it real.',
      ] },
    { id: 'm4_tabs', type: 'tabs', section: 'Module 4', gate: true,
      eyebrow: 'Module 04 · Active Listening', title: 'Three habits of presence',
      tabs: [
        { label: 'Reflect', body: 'Name what you notice — \u201cIt sounds like that landed hard.\u201d Reflecting shows the other person their experience registered with you.' },
        { label: 'Paraphrase', body: 'Return the content in your own words, so the speaker hears that they were genuinely received — not just heard.' },
        { label: 'Hold silence', body: 'Resist the urge to fill the space. Silence lets the other person reach the thing under the first thing they said.' },
      ] },
    { id: 'm4_scenario', type: 'roleplay', section: 'Module 4', gate: true, eyebrow: 'Module 04 · Practice it',
      title: 'Roleplay: feeling overlooked',
      device: 'Reflecting', icon: 'Mic', skill: 'Active Listening',
      rubric: RUBRIC.reflecting,
      character: { name: 'Devon', role: 'A colleague', initial: 'D', gender: 'male' },
      setup: 'A colleague, Devon, catches you after a meeting. His voice is tight. Listen — and respond the way you actually would.',
      opening: 'I just feel like… no one even reads my reports. I spend days on them and it\u2019s like they vanish.',
      goal: 'Use reflecting: name the feeling underneath, show Devon he was received — before any reassurance or fixing.',
      persona: 'You are Devon, a conscientious colleague who just admitted, voice tight, that you feel no one reads your reports. The hidden truth: you feel invisible and are starting to doubt whether your work matters here — but you\u2019ll only say so if the other person makes you feel genuinely heard. If they reflect what you\u2019re feeling and show they get it, you relax and reveal more of what\u2019s really bothering you. If they reassure you (\u201cI\u2019m sure people read them\u201d) or jump to fixes (\u201ctry making them shorter\u201d), you feel dismissed, deflate, and go quiet or a bit defensive. Speak like a real coworker — natural, a little vulnerable.',
      coachIntro: 'You were reflecting when you named what Devon was feeling and showed it landed — before reassuring or fixing anything.' },

    // MODULE 5
    { id: 'm5_div', type: 'section', section: 'Module 5', n: 'Module 05', title: 'Difficult Conversations', icon: 'Dialogue',
      photo: { id: 'photo-m5', src: 'assets/images/photo_m5.png', hint: 'A hard but caring exchange' },
      blurb: 'Staying connected when the stakes are high.' },
    { id: 'm5_c1', type: 'content', section: 'Module 5', eyebrow: 'Module 05 · Difficult Conversations',
      title: 'Regulate, then relate', sub: 'You cannot offer what you don\u2019t have',
      body: [
        'When stakes rise, our own nervous system reacts first. Empathy in hard moments starts with noticing your own activation and settling it — a breath, a pause, a name for what you feel — before you turn toward the other person.',
        'You cannot offer a steadiness you do not have. Regulate, then relate.',
      ], pull: 'Regulate, then relate.' },
    { id: 'm5_scenario', type: 'roleplay', section: 'Module 5', gate: true, eyebrow: 'Module 05 · Practice it',
      title: 'Roleplay: the heat of the moment',
      device: 'Regulate, then relate', icon: 'Dialogue', skill: 'Difficult Conversations',
      rubric: RUBRIC.regulate,
      character: { name: 'Priya', role: 'A peer', initial: 'P', gender: 'female' },
      setup: 'In front of the team, your peer Priya challenges a decision you made — sharply. Your chest tightens; the urge to win is strong. Respond the way you actually would.',
      opening: 'Honestly? I don\u2019t get how you landed on this. It feels like nobody asked the people who actually have to live with it.',
      goal: 'Practise \u201cregulate, then relate\u201d: settle your own activation first, don\u2019t escalate, and turn toward Priya rather than defending or winning.',
      persona: 'You are Priya, challenging a peer\u2019s decision in front of the team, sharply. The hidden truth: you feel unheard and worried the decision will land on your team — underneath the sharpness is frustration, not malice. If the other person stays steady, doesn\u2019t fight back, and acknowledges your perspective, you de-escalate and become more reasonable and collaborative. If they match your intensity, defend reflexively, or try to \u201cwin,\u201d you dig in and sharpen further. Speak like a frustrated-but-decent colleague — direct, charged, but human.',
      coachIntro: 'You practised \u201cregulate, then relate\u201d when you steadied yourself first and turned toward Priya — instead of matching the heat or rushing to defend.' },

    // CAPSTONE — bring every practised skill together in one real conversation
    { id: 'cap_div', type: 'section', section: 'Capstone', variant: 'quiz', n: 'Capstone', icon: 'Award',
      photo: { id: 'photo-cap', src: 'assets/images/photo_cap.png', hint: 'Two colleagues in a real, hard conversation' },
      title: 'The Capstone', blurb: 'One real conversation that asks for everything you’ve practised.' },
    { id: 'capstone', type: 'capstone', section: 'Capstone', gate: true, capstone: true, passing: 70,
      eyebrow: 'A conversation that matters',
      title: 'Riley wants to talk',
      skill: 'Empathy in practice', device: 'everything at once', icon: 'Award',
      character: { name: 'Riley', role: 'A teammate', initial: 'R', gender: 'female' },
      setup: 'Riley asks to talk. Word just came down that the role you both knew was opening went to someone else — not Riley — and you were close to the decision. This calls for all of it: meet Riley where they are, listen for what’s underneath, and stay steady if it turns hard. Give it a real back-and-forth.',
      opening: 'Hey — do you have a minute? I just heard about the role. I… yeah. I think I just needed to hear it from you.',
      goal: 'Bring it together: hold a generous interpretation, reflect what’s underneath before fixing, and stay regulated and turned-toward if it gets difficult.',
      persona: 'You are Riley, a capable, committed teammate who just learned you were passed over for a role you wanted and quietly expected. You are talking to the learner, a peer who was close to the decision. Move naturally through three phases based ENTIRELY on how the learner treats you; never label the phases out loud. PHASE 1 — guarded: you arrive hurt but masking it as “it’s fine.” If the learner gets defensive, justifies the decision, or treats you as difficult, you go cold and terse. If they offer warmth and a generous read of you, with no judgment, you soften. PHASE 2 — opening up: once you feel they are genuinely for you, you reveal what’s underneath — feeling invisible, doubting your future here, wondering whether the work mattered. You open up more when they reflect your feelings; you deflate if they rush to reassure or fix. PHASE 3 — the challenge: at some point you push back directly and with heat: “Be honest — did you even advocate for me, or was this decided before I had a say?” If the learner stays steady, owns their part, and acknowledges your view, you de-escalate toward repair; if they match your heat or get defensive, it escalates and stays unresolved. Speak like a real, hurt-but-decent colleague, 1–3 sentences.',
      coachIntro: 'This was everything at once — reading Riley generously, listening for what was underneath, and staying steady when it turned hard.',
      rubric: [
        { skill: 'Perspective Taking', key: 'generous', label: 'Held a generous interpretation', desc: 'Read Riley’s hurt charitably instead of as someone being difficult.' },
        { skill: 'Perspective Taking', key: 'curious', label: 'Stayed curious about their world', desc: 'Wondered about Riley’s experience rather than defending the decision.' },
        { skill: 'Active Listening', key: 'named', label: 'Named the feeling underneath', desc: 'Reflected what Riley was really feeling — overlooked, uncertain, unseen.' },
        { skill: 'Active Listening', key: 'no_fix', label: 'Didn’t rush to fix or reassure', desc: 'Stayed with Riley before jumping to solutions or pep talks.' },
        { skill: 'Difficult Conversations', key: 'regulate', label: 'Stayed regulated under pressure', desc: 'Kept steady when challenged — didn’t match the heat or get defensive.' },
        { skill: 'Difficult Conversations', key: 'toward', label: 'Turned toward and acknowledged', desc: 'Owned their part and recognised Riley’s perspective as legitimate.' },
      ] },

    // CLOSE
    { id: 'summary', type: 'summary', section: 'Summary', summary },
    { id: 'complete', type: 'complete', section: 'Complete' },
  ];

  // ── Table-of-contents groups (left sidebar). Each maps to one or more sections. ──
  const toc = [
    { key: 'intro', label: 'Introduction', icon: 'Home', sections: ['Welcome', 'Objectives', 'Course Agenda'] },
    { key: 'm1', label: 'Introduction to Empathy', icon: 'Heart', sections: ['Module 1'] },
    { key: 'm2', label: 'Neuroscience of Connection', icon: 'Brain', sections: ['Module 2'] },
    { key: 'm3', label: 'Perspective Taking', icon: 'Eye', sections: ['Module 3'] },
    { key: 'm4', label: 'Active Listening', icon: 'Mic', sections: ['Module 4'] },
    { key: 'm5', label: 'Difficult Conversations', icon: 'Dialogue', sections: ['Module 5'] },
    { key: 'kc', label: 'Capstone Challenge', icon: 'Award', sections: ['Capstone'] },
    { key: 'end', label: 'Summary & Certificate', icon: 'Check', sections: ['Summary', 'Complete'] },
  ];

  // ── STORY MODE ── second-person overrides: you, a brand-new manager, in five chapters. ──
  const story = {
    cover: {
      eyebrow: 'An interactive story',
      tagline: 'On Monday, you become a manager for the first time. Everything you learn about people, you learn the hard way.',
      footnote: 'A five-chapter story, told in second person. You make the calls — the lessons follow. Progress saves on this device.',
    },
    objectives: { objectives: [
      'Build a generous read of a teammate when their message stings — climbing down from your first story to a reply that stays curious.',
      'Craft a response that names what someone is really feeling and lands as “I get it” — before you reassure or fix.',
      'Find your way through a heated moment — steadying yourself first, then turning toward the other person instead of winning.',
      'Pull it all together in one unscripted, high-stakes conversation when it matters most.',
    ] },
    agenda: { agenda: [
      { n: 'Ch. 1', title: 'The Promotion', icon: 'Heart', blurb: 'Your first 1-on-1, and three words you keep mixing up.' },
      { n: 'Ch. 2', title: 'Why It\u2019s Hard to Listen', icon: 'Brain', blurb: 'You want to be present. Your own head gets in the way.' },
      { n: 'Ch. 3', title: 'The Terse Reply', icon: 'Eye', blurb: 'One word from Maya. A dozen stories in your head.' },
      { n: 'Ch. 4', title: 'What Devon Wasn\u2019t Saying', icon: 'Mic', blurb: 'The junior who keeps insisting he\u2019s \u201cfine.\u201d' },
      { n: 'Ch. 5', title: 'The Hard Conversation', icon: 'Dialogue', blurb: 'You and Priya, and the meeting you\u2019ve dreaded.' },
    ] },
    m1_div: { n: 'Chapter One', title: 'The Promotion', blurb: 'You wanted this. So why does your first 1-on-1 feel harder than any deadline?' },
    m1_c1: { eyebrow: 'Chapter One \u00b7 Your first 1-on-1', title: 'Three words you keep mixing up', sub: 'Across the table from Maya',
      body: [
        'Maya has carried your team\u2019s hardest projects for two years. In your first 1-on-1 as her manager you ask how she\u2019s doing, and she says, \u201cIt\u2019s fine.\u201d You tell her you\u2019re sorry it\u2019s been a stressful quarter \u2014 and realise you have no real idea what she feels.',
        'That gap has names. Sympathy notices her strain from across the table. Empathy crosses the table to understand it. Compassion adds the part that helps: the willingness to do something about it.',
      ] },
    m1_tabs: { title: 'Three movements, one conversation' },
    m1_c2: { eyebrow: 'Chapter One \u00b7 Driving home', title: 'It can be learned', sub: 'You are not a \u201cnatural.\u201d Good.',
      body: [
        'Driving home, you replay the 1-on-1 and wince. You were never the \u201cpeople person\u201d \u2014 for years you assumed empathy was a personality you either had or didn\u2019t.',
        'Here is the relief you didn\u2019t expect: it\u2019s a skill. Attention, perspective taking, regulation, response \u2014 all trainable.',
      ], pull: 'You can get better at this \u2014 starting with Maya.' },
    m2_div: { n: 'Chapter Two', title: 'Why It\u2019s Hard to Listen', blurb: 'You want to be present. Your own head keeps getting in the way.' },
    m2_c1: { eyebrow: 'Chapter Two \u00b7 In the standup', title: 'You, half-listening', sub: 'Caught in the act',
      body: [
        'Devon is mid-sentence and you notice your attention has slid sideways \u2014 you\u2019re already drafting your reply, planning the next agenda item, half-watching the clock.',
        'It isn\u2019t that you don\u2019t care. Your social brain is built to attune to people; right now it\u2019s spending its whole budget on you. Attention is the dial \u2014 and it\u2019s pointed the wrong way.',
      ] },
    m2_hot: { intro: 'While Devon talks, three systems are firing in your head. Open each to see what\u2019s really going on \u2014 open all three to continue.' },
    m2_c2: { eyebrow: 'Chapter Two \u00b7 11pm', title: 'Feeling with, not drowning', sub: 'You take it all home',
      body: [
        'That night you can\u2019t sleep. Maya\u2019s stress has become your stress; Devon\u2019s worry is now yours too. You\u2019ve absorbed the whole team and have nothing left to give back.',
        'Healthy empathy keeps a thread of separateness \u2014 you feel with people without dissolving into them. That boundary isn\u2019t coldness. It\u2019s what lets you keep showing up.',
      ], pull: 'Feel with them. Don\u2019t drown with them.' },
    m3_div: { n: 'Chapter Three', title: 'The Terse Reply', blurb: 'One word from Maya. A dozen stories in your head.' },
    m3_c1: { eyebrow: 'Chapter Three \u00b7 A message arrives', title: 'What you do before you reply', sub: 'Maya, on Slack',
      body: [
        'You send Maya a long, careful note about the new project. Three hours later, one word comes back: \u201cFine.\u201d Your stomach drops. She\u2019s angry. She\u2019s checked out. She\u2019s about to quit.',
        'Notice what just happened: you built an entire story from a single word. Perspective taking starts by setting that story down long enough to wonder what hers might be.',
      ] },
    m3_c2: { eyebrow: 'Chapter Three \u00b7 The ladder', title: 'How you climbed from \u201cFine\u201d to \u201cshe\u2019s quitting\u201d', sub: 'The ladder of inference',
      body: [
        'In a quarter of a second you climbed: \u201cFine\u201d \u2192 she\u2019s curt \u2192 she\u2019s upset with me \u2192 she\u2019s disengaged \u2192 she\u2019s leaving. Each rung felt like fact. None of it was.',
        'Climbing back down means returning to what you actually know \u2014 one word, sent on a busy afternoon \u2014 and asking which other stories fit it just as well.',
      ] },
    m3_drag: { intro: 'Here are the reactions running through your head about Maya\u2019s reply. Sort each into the category it belongs to, then check your answers.' },
    m3_scenario: { title: 'Roleplay: Maya cancels', skill: 'Perspective Taking',
      character: { name: 'Maya', role: 'Your report', initial: 'M', gender: 'female' },
      setup: 'An hour before your 1-on-1, Maya — who has carried your team\u2019s hardest projects — messages to cancel. As her new manager, reply to her directly.',
      opening: 'Hi — really sorry, but I can\u2019t make our 1-on-1 today. Can we reschedule?',
      goal: 'Hold a generous interpretation: stay curious and warm about what you can\u2019t see in Maya\u2019s day, rather than reading the cancel as avoidance.',
      persona: 'You are Maya, a high-performing employee messaging your new manager an hour before your 1-on-1 to cancel. The hidden truth: you\u2019re quietly burnt out and a personal thing came up today, but you\u2019re wary of being seen as struggling and won\u2019t volunteer it unless your manager feels safe and genuinely curious. If the manager responds with warmth and no pressure, you relax and hint at what\u2019s really going on. If they make it about prioritisation, sound annoyed, or assume you\u2019re avoiding them, you get guarded and formal. Write like a capable but tired employee — brief, professional, a little careful.',
      coachIntro: 'You held a generous interpretation when you stayed warm and curious about what Maya couldn\u2019t show you — rather than reacting to the cancel itself.' },
    m4_div: { n: 'Chapter Four', title: 'What Devon Wasn\u2019t Saying', blurb: 'The junior who keeps insisting he\u2019s \u201cfine.\u201d' },
    m4_c1: { eyebrow: 'Chapter Four \u00b7 One-on-one', title: 'Listening to understand Devon', sub: 'Not listening to reply',
      body: [
        'Devon, your most anxious report, says his work is \u201cgoing fine\u201d \u2014 but his shoulders are up at his ears. The old you would have said \u201cgreat!\u201d and moved on.',
        'Instead you slow down. The whole of your attention rests on understanding him, and your advice waits until you actually do. Three habits make that real.',
      ] },
    m4_tabs: { title: 'Three habits, with Devon in front of you' },
    m4_scenario: { title: 'Roleplay: Devon, finally honest', skill: 'Active Listening',
      character: { name: 'Devon', role: 'Your report', initial: 'D', gender: 'male' },
      setup: 'Halfway through your 1-on-1, Devon — your most anxious report, shoulders up at his ears — finally says something real. Respond the way you would.',
      opening: 'I guess I just feel like… no one even reads my reports. I don\u2019t know if any of it matters.',
      goal: 'Use reflecting: name the feeling underneath, show Devon he was received — before any reassurance or advice.',
      persona: 'You are Devon, an anxious junior employee who just admitted to your manager, quietly, that you feel no one reads your reports. The hidden truth: you\u2019re doubting whether you belong on the team and you\u2019re bracing to be brushed off. If your manager reflects what you\u2019re feeling and shows they truly get it, you exhale and open up more. If they reassure you (\u201cI\u2019m sure people read them\u201d) or jump to fixes, you read it as being managed, deflate, and retreat to \u201cit\u2019s fine, never mind.\u201d Speak like an anxious but earnest junior — tentative, a bit self-protective.',
      coachIntro: 'You were reflecting when you named what Devon was feeling and showed it landed — before reassuring or fixing anything.' },
    m5_div: { n: 'Chapter Five', title: 'The Hard Conversation', blurb: 'You and Priya, and the meeting you\u2019ve dreaded all week.' },
    m5_c1: { eyebrow: 'Chapter Five \u00b7 The meeting', title: 'Regulate, then relate', sub: 'Priya was your peer last month',
      body: [
        'Priya \u2014 your friend, your equal until the promotion \u2014 challenges your decision in front of the team, her voice sharp. Your face goes hot. Every instinct says win this.',
        'Empathy here starts with you. You notice the heat, take one breath, name it to yourself \u2014 and only then turn toward Priya. You can\u2019t offer a steadiness you don\u2019t have.',
      ], pull: 'Regulate yourself first. Then relate.' },
    m5_scenario: { title: 'Roleplay: the heat with Priya', skill: 'Difficult Conversations',
      character: { name: 'Priya', role: 'Your peer', initial: 'P', gender: 'female' },
      setup: 'In front of the team, Priya — your friend and equal until last month\u2019s promotion — challenges your decision, sharply. Your chest tightens. Respond the way you would.',
      opening: 'I\u2019m just going to say it — I don\u2019t agree with this call, and I don\u2019t think you ran it past any of us first.',
      goal: 'Practise \u201cregulate, then relate\u201d: settle your own activation first, don\u2019t escalate, and turn toward Priya rather than defending or winning.',
      persona: 'You are Priya, challenging a newly-promoted peer\u2019s decision in front of the team, sharply. The hidden truth: the promotion stung, you feel sidelined, and you\u2019re worried the decision ignores your team\u2019s reality — under the edge is hurt, not malice. If your former-peer-now-manager stays steady, doesn\u2019t fight back, and acknowledges your perspective, you soften and get more reasonable. If they pull rank, defend reflexively, or try to win, you sharpen and it gets personal. Speak like a sharp, hurt, but fundamentally decent colleague.',
      coachIntro: 'You practised \u201cregulate, then relate\u201d when you steadied yourself first and turned toward Priya — instead of matching the heat or rushing to defend.' },
    cap_div: { title: 'The Capstone', blurb: 'Six months in. The hardest conversation of your management so far.' },
    capstone: { title: 'The conversation you\u2019ve been dreading',
      skill: 'Empathy in practice',
      character: { name: 'Theo', role: 'Your report', initial: 'T', gender: 'male' },
      setup: 'Six months into managing, your hardest moment lands. The team-lead role went to someone outside the team \u2014 not Theo, who has carried your toughest projects and assumed it was his. He\u2019s asked to talk. Bring everything: meet him where he is, listen for what\u2019s underneath, and stay steady when it turns hard. Give it a real back-and-forth.',
      opening: 'Thanks for making time. I\u2019ll be honest \u2014 I\u2019ve been sitting with this since the announcement, and I don\u2019t really get it. I thought\u2026 I thought it was going to be me.',
      goal: 'Bring it together: hold a generous interpretation, reflect what\u2019s underneath before fixing, and stay regulated and turned-toward when it gets difficult.',
      persona: 'You are Theo, a dedicated employee who just learned the team-lead role you assumed was yours went to an outside hire. You are talking to your manager \u2014 the learner \u2014 who was part of that decision. Move naturally through three phases based ENTIRELY on how your manager treats you; never label the phases out loud. PHASE 1 \u2014 guarded: you arrive hurt but masking it, half-expecting to be managed. If the manager gets defensive or corporate, you go quiet and cold. If they are warm and read you generously, you soften. PHASE 2 \u2014 opening up: once you feel they are genuinely for you, you reveal what\u2019s underneath \u2014 feeling invisible, questioning your future, wondering whether the years of hard work counted. You open up more when they reflect your feelings; you deflate if they rush to reassure or fix. PHASE 3 \u2014 the challenge: at some point you push back directly and with heat: \u201cBe honest \u2014 did you even fight for me? Or was this decided before I had a chance?\u201d If the manager stays steady, owns their part, and acknowledges your view, you de-escalate toward repair; if they pull rank, get defensive, or dismiss you, it escalates and stays unresolved. Speak like a hurt-but-decent report, 1\u20133 sentences.',
      coachIntro: 'This was everything at once \u2014 reading Theo generously, listening for what was underneath, and staying steady when it turned hard.' },
    summary: { summary: [
      'Empathy is a skill you can lead with \u2014 attention, perspective taking, regulation, response.',
      'Sympathy watches from across the table; empathy crosses it; compassion does something about it.',
      'Feel with your team without drowning in their stress \u2014 keep the thread of separateness.',
      'When a teammate\u2019s message stings, climb back down the ladder to what you actually know.',
      'In hard conversations, regulate yourself first \u2014 then relate.',
    ] },
  };

  // ── Narration script per slide (spoken via the browser's speech synthesis). ──
  function narrationFor(s) {
    if (!s) return '';
    switch (s.type) {
      case 'cover': return 'Welcome to The Empathy Practice, a module from the Lumina Empathy Course. Empathy is a skill — learnable, practicable, and transformative. When you are ready, select start module.';
      case 'objectives': return 'Your learning objectives. By the end of this module, you will be able to: ' + s.objectives.join(' ');
      case 'agenda': return 'This course moves through five sections. ' + s.agenda.map((a) => a.title).join('. ') + '. You will move through these in order, each building on the one before.';
      case 'section': return s.n + '. ' + s.title + '. ' + (s.blurb || '');
      case 'content': return s.title + '. ' + (s.sub ? s.sub + '. ' : '') + s.body.join(' ') + (s.pull ? ' ' + s.pull : '');
      case 'tabs': return s.title + '. Select each tab to hear and explore each idea.';
      case 'hotspots': return s.title + '. ' + (s.intro || '');
      case 'dragdrop': return s.title + '. ' + (s.intro || '');
      case 'reflect': return s.title + '. ' + s.prompt;
      case 'scenario': return s.title + '. ' + s.scenario + ' ' + (s.quote || '') + ' ' + s.question;
      case 'roleplay': case 'capstone': return s.title + '. ' + (s.setup || '') + ' ' + (s.character ? s.character.name + ' begins: ' + s.opening : '');
      case 'question': return 'Question ' + (s.index + 1) + ' of ' + s.total + '. ' + s.data.q + ' Your options are: ' + s.data.options.join('. ') + '.';
      case 'results': return 'Knowledge check results. Review your score below.';
      case 'summary': return 'Key takeaways to carry with you. ' + s.summary.join(' ');
      case 'complete': return 'Beautifully done. You have completed The Empathy Practice. That consistency is exactly how empathy is built — one practised habit at a time.';
      default: return '';
    }
  }

  return { slides, quiz, agenda, objectives, summary, meta: { title: 'The Empathy Practice', subtitle: 'A Lumina Empathy Course module', passing: 80 }, toc, narrationFor, story };
})();
