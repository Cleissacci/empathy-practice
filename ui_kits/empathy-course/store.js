// ─────────────────────────────────────────────────────────────
// Lumina Empathy Course — progress store + persistence (plain JS).
// window.LuminaStore. State shape:
//   { completed: { [lessonId]: true }, reflections: [ {id, moduleId, lessonId, title, prompt, text, date} ], streak }
// ─────────────────────────────────────────────────────────────
(function () {
  const KEY = 'lumina-empathy-progress-v1';

  // Seed: modules 1 & 2 complete, module 3 partway (first 3 lessons), streak 12.
  function seed() {
    return {
      completed: {
        '1-1': true, '1-2': true, '1-3': true, '1-4': true,
        '2-1': true, '2-2': true, '2-3': true, '2-4': true,
        '3-1': true, '3-2': true, '3-3': true,
      },
      reflections: [
        { id: 'r0', moduleId: 1, lessonId: '1-4', title: 'Module 1 · Reflection',
          prompt: 'When in your life has someone shown you empathy rather than sympathy? What was different about how it felt?',
          text: 'My sister, after the move. She didn\u2019t try to fix it or tell me it would be fine \u2014 she just said \u201cthat sounds really lonely\u201d and stayed on the phone. I felt met, not managed.',
          date: 'Jun 14, 2026' },
      ],
      streak: 12,
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return seed();
      const parsed = JSON.parse(raw);
      return { completed: {}, reflections: [], streak: 0, ...parsed };
    } catch (e) { return seed(); }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  function reset() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    return seed();
  }

  // ── Derivations ──
  const lessonsOf = (m) => m.lessons || [];
  const completedCountIn = (state, m) => lessonsOf(m).filter((l) => state.completed[l.id]).length;
  const moduleDone = (state, m) => lessonsOf(m).length > 0 && completedCountIn(state, m) === lessonsOf(m).length;
  const moduleProgress = (state, m) => {
    const total = lessonsOf(m).length;
    return total ? Math.round((completedCountIn(state, m) / total) * 100) : 0;
  };
  const isUnlocked = (state, modules, idx) => idx === 0 || moduleDone(state, modules[idx - 1]);

  function moduleStatus(state, modules, idx) {
    const m = modules[idx];
    if (!isUnlocked(state, modules, idx)) return 'locked';
    if (moduleDone(state, m)) return 'done';
    return completedCountIn(state, m) > 0 ? 'active' : 'available';
  }

  // The single module to "resume" — first unlocked, not-done.
  function activeModule(state, modules) {
    for (let i = 0; i < modules.length; i++) {
      if (isUnlocked(state, modules, i) && !moduleDone(state, modules[i])) return modules[i];
    }
    return modules[modules.length - 1];
  }

  // First not-completed lesson in a module (or 0).
  function resumeLessonIndex(state, m) {
    const idx = lessonsOf(m).findIndex((l) => !state.completed[l.id]);
    return idx === -1 ? 0 : idx;
  }

  function totalCompleted(state, modules) {
    return modules.reduce((sum, m) => sum + completedCountIn(state, m), 0);
  }

  function stats(state, modules) {
    const done = modules.filter((m) => moduleDone(state, m)).length;
    const lessons = totalCompleted(state, modules);
    const hours = (lessons * 8 / 60).toFixed(1);
    const score = Math.min(99, 60 + lessons * 2);
    return [
      { label: 'Modules Completed', value: done, change: done > 0 ? '\u2191 keep going' : 'start anytime' },
      { label: 'Reflection Streak', value: state.streak, change: 'days in a row' },
      { label: 'Time Learning', value: hours, suffix: 'h', change: `${lessons} lessons done` },
      { label: 'Empathy Score', value: score, tone: 'accent', change: '\u2191 grows as you learn' },
    ];
  }

  window.LuminaStore = {
    load, save, reset, seed,
    moduleDone, moduleProgress, moduleStatus, isUnlocked,
    activeModule, resumeLessonIndex, completedCountIn, totalCompleted, stats,
  };
})();
