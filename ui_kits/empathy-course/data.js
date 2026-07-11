// ─────────────────────────────────────────────────────────────
// Lumina Empathy Course — full curriculum data.
// Lesson types: 'read' (heading + body[]), 'quiz' (question/options/answer/explain),
// 'reflect' (prompt). window.LuminaData.
// ─────────────────────────────────────────────────────────────
window.LuminaData = {
  user: { name: 'Mira Jensen', initials: 'MJ' },
  prompt: 'Describe a time you felt genuinely understood by someone. What made that possible?',

  modules: [
    {
      id: 1, n: 'Module 1', title: 'Introduction to Empathy', icon: 'Heart',
      desc: "What empathy is — and what it isn't. Distinguishing sympathy, empathy, and compassion through the lens of modern psychology.",
      lessons: [
        { id: '1-1', type: 'read', title: 'Three words we confuse', heading: 'Sympathy, empathy, compassion',
          body: [
            "We use these three words as if they were interchangeable. They are not. Sympathy notices another person's pain from a distance — \u201cI'm sorry that happened to you.\u201d Empathy steps closer — it is the capacity to sense what another person feels and to understand why.",
            "Compassion adds a third movement: the wish to help, and the willingness to act on it. Empathy without compassion can exhaust us; compassion without empathy can miss the mark. This course builds both, deliberately."
          ] },
        { id: '1-2', type: 'read', title: 'Empathy is a skill', heading: 'Not a trait you either have or lack',
          body: [
            "The most important idea in this course is also the most hopeful: empathy is not a fixed personality trait. It is a set of skills — attention, perspective taking, emotional regulation, and responsive communication — and skills can be practised.",
            "Decades of research show measurable change. People who train in these habits become more accurate at reading others and more steady under emotional pressure. You are not stuck with the empathy you started with."
          ] },
        { id: '1-3', type: 'quiz', title: 'Knowledge check', question: 'Which best distinguishes empathy from sympathy?',
          options: [
            'Empathy is feeling sorry for someone from a distance',
            'Empathy is sensing and understanding what another feels; sympathy observes their pain from outside',
            'They mean the same thing',
            'Sympathy always includes a wish to help'
          ], answer: 1,
          explain: "Empathy moves closer — it senses and understands another's experience. Sympathy notices from a distance. Compassion is the one that adds the wish to help." },
        { id: '1-4', type: 'reflect', title: 'Reflection', prompt: 'When in your life has someone shown you empathy rather than sympathy? What was different about how it felt?' },
      ],
    },
    {
      id: 2, n: 'Module 2', title: 'The Neuroscience of Connection', icon: 'Brain',
      desc: 'How mirror neurons, the default mode network, and affective resonance shape our capacity to understand others.',
      lessons: [
        { id: '2-1', type: 'read', title: 'The social brain', heading: 'We are wired to attune',
          body: [
            "Long before language, our survival depended on reading one another. The brain devotes vast resources to social cognition: tracking faces, tone, posture, and intention. When we say empathy is natural, this is what we mean — the hardware is there.",
            "But hardware is not destiny. The same circuits strengthen with use and quiet with neglect. Attention is the dial."
          ] },
        { id: '2-2', type: 'read', title: 'Resonance, not merging', heading: 'Feeling with — without losing yourself',
          body: [
            "Affective resonance lets us feel a version of what another feels. Healthy empathy keeps a thread of separateness: you sense my distress without drowning in it. That boundary is what makes sustained care possible.",
            "When the boundary collapses, we burn out. Module 5 returns to this in difficult conversations."
          ] },
        { id: '2-3', type: 'quiz', title: 'Knowledge check', question: 'Why does keeping a sense of separateness matter in empathy?',
          options: [
            'It makes you care less, which is the goal',
            'It prevents emotional burnout and keeps sustained care possible',
            'It has no real effect',
            'It blocks you from understanding others'
          ], answer: 1,
          explain: 'Resonance means feeling with someone while staying distinct from them. That thread of separateness is exactly what protects against burnout and lets care last.' },
        { id: '2-4', type: 'reflect', title: 'Reflection', prompt: 'Recall a time you felt someone else\u2019s emotion strongly. Did you stay separate, or get swept up? What helped, or what would have?' },
      ],
    },
    {
      id: 3, n: 'Module 3', title: 'Perspective Taking', icon: 'Eye',
      desc: "Cognitive and affective strategies for genuinely stepping into another person's frame of reference.",
      lessons: [
        { id: '3-1', type: 'read', title: 'What does it mean to truly listen?', heading: 'Attention comes before words',
          body: [
            "Empathy begins before we speak. It begins in the quality of our attention — in how we hold space for another person's experience before we name, judge, or respond. Perspective taking is the deliberate act of setting aside our own frame of reference long enough to inhabit someone else's.",
            "In this module we distinguish cognitive empathy \u2014 understanding what another person thinks \u2014 from affective empathy, feeling alongside them. Both are skills, and both can be strengthened with practice."
          ] },
        { id: '3-2', type: 'read', title: 'The ladder of inference', heading: 'How we leap from fact to story',
          body: [
            "We rarely respond to what actually happened. We respond to the story we built about it — climbing, in milliseconds, from observable data to selected details to interpretation to conclusion. The ladder of inference names that climb.",
            "Perspective taking means climbing back down: returning to what was actually observable, and asking what other stories could fit the same facts. The other person almost always has a story in which they are reasonable."
          ] },
        { id: '3-3', type: 'quiz', title: 'Knowledge check', question: 'A colleague replies to your message with one word: \u201cFine.\u201d You feel dismissed. What does the ladder of inference suggest?',
          options: [
            'Your first interpretation is the truth — they are dismissive',
            'You climbed from one observable fact to a conclusion; other stories could fit the same word',
            'You should reply with one word back',
            'Their feeling is more valid than yours'
          ], answer: 1,
          explain: "\u201cFine\u201d is the only observable data. \u201cThey're dismissing me\u201d is a conclusion you climbed to. Climbing back down means asking what else could explain that one word \u2014 they're busy, drained, focused." },
        { id: '3-4', type: 'reflect', title: 'Practice: reframing a conflict',
          prompt: 'Recall a recent disagreement. Describe the same moment as the other person might have told it \u2014 in a version where they are reasonable. What changes?' },
        { id: '3-5', type: 'read', title: 'The generous interpretation', heading: 'A discipline, not a feeling',
          body: [
            "Choosing the generous interpretation is not naivety and it is not pretending. It is a discipline: holding open the possibility that the person you find difficult is responding to something you cannot yet see.",
            "You will be wrong sometimes. But the generous interpretation costs little and opens the one door that defensiveness slams shut \u2014 the chance to actually understand."
          ] },
        { id: '3-6', type: 'reflect', title: 'Reflection', prompt: 'Who in your life is hardest to extend a generous interpretation to? What might they be responding to that you can\u2019t yet see?' },
      ],
    },
    {
      id: 4, n: 'Module 4', title: 'Active Listening Skills', icon: 'Mic',
      desc: 'The practical habits of attention — reflecting, paraphrasing, and holding silence — that signal genuine presence.',
      lessons: [
        { id: '4-1', type: 'read', title: 'Listening to understand', heading: 'Not listening to reply',
          body: [
            "Most of us listen with half our attention on what we'll say next. Active listening reverses that: the whole of your attention rests on understanding, and your response waits until understanding arrives.",
            "It sounds simple. It is not easy. The habits below make it concrete."
          ] },
        { id: '4-2', type: 'read', title: 'Reflect, paraphrase, hold silence', heading: 'Three habits of presence',
          body: [
            "Reflecting names what you notice: \u201cIt sounds like that landed hard.\u201d Paraphrasing returns the content in your own words, so the speaker hears that they were received. Holding silence resists the urge to fill space \u2014 it lets the other person reach the thing under the first thing.",
            "Used together, these signal genuine presence more than any clever reply could."
          ] },
        { id: '4-3', type: 'quiz', title: 'Knowledge check', question: 'A friend pauses mid-sentence, eyes welling. What does \u201cholding silence\u201d ask of you?',
          options: [
            'Quickly reassure them so they stop feeling bad',
            'Change the subject to something lighter',
            'Resist filling the space, and let them reach what\u2019s underneath',
            'Offer your own similar story right away'
          ], answer: 2,
          explain: 'Holding silence means tolerating the discomfort of a pause so the other person can go deeper. Rushing to reassure or redirect often closes the door they were about to open.' },
        { id: '4-4', type: 'reflect', title: 'Practice', prompt: 'Think of your last real conversation. Where were you listening to reply instead of to understand? What would you do differently?' },
      ],
    },
    {
      id: 5, n: 'Module 5', title: 'Empathy in Difficult Conversations', icon: 'Dialogue',
      desc: 'Staying regulated and connected when stakes are high, emotions run hot, and disagreement is real.',
      lessons: [
        { id: '5-1', type: 'read', title: 'Regulate, then relate', heading: 'You cannot offer what you don\u2019t have',
          body: [
            "When stakes rise, our own nervous system reacts first. Empathy in hard moments starts with noticing your own activation and settling it \u2014 a breath, a pause, a name for what you feel \u2014 before you turn toward the other person.",
            "You cannot offer steadiness you do not have. Regulate, then relate."
          ] },
        { id: '5-2', type: 'reflect', title: 'Reflection', prompt: 'In your hardest conversations, what is the first sign that you\u2019ve lost your own footing? What helps you find it again?' },
      ],
    },
  ],

  sessions: [
    { id: 's1', practitioner: 'Dr. Elena Reyes', focus: 'Perspective Taking', date: 'Thu, Jun 19', time: '4:00 PM', initials: 'ER', tone: 'accent', status: 'upcoming' },
    { id: 's2', practitioner: 'Sam Okafor, LCSW', focus: 'Active Listening Practice', date: 'Tue, Jun 24', time: '11:00 AM', initials: 'SO', tone: 'primary', status: 'available' },
    { id: 's3', practitioner: 'Dr. Elena Reyes', focus: 'Difficult Conversations', date: 'Mon, Jun 30', time: '2:30 PM', initials: 'ER', tone: 'accent', status: 'available' },
  ],
};
