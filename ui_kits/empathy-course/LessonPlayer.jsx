// LessonPlayer — steps through a module's lessons: reading, quizzes, reflections,
// and a module-completion panel. Drives real progress via callbacks.
function LessonPlayer({ module: m, startIndex, state, onCompleteLesson, onSaveReflection, onBack, onGoModule }) {
  const { Button, Badge, Card, Alert, Radio, Textarea, ProgressBar, BreathWave } = window.LuminaDesignSystem_f39716;
  const { ChevronRight, CheckCircle, Play, Reflect, Clock, Award, ArrowRight, ArrowLeft, Lock } = window.Icons;
  const D = window.LuminaData;
  const S = window.LuminaStore;

  const lessons = m.lessons;
  const [idx, setIdx] = React.useState(Math.min(startIndex || 0, lessons.length - 1));
  const [showComplete, setShowComplete] = React.useState(false);
  const lesson = lessons[idx];

  // per-lesson local state
  const existingReflection = (lid) => state.reflections.find((r) => r.lessonId === lid);
  const [sel, setSel] = React.useState(null);
  const [checked, setChecked] = React.useState(false);
  const [note, setNote] = React.useState('');
  const [savedNote, setSavedNote] = React.useState(false);

  React.useEffect(() => {
    setSel(null); setChecked(false); setSavedNote(false);
    const ex = existingReflection(lesson.id);
    setNote(ex ? ex.text : '');
  }, [idx, m.id]);

  const isDone = (lid) => !!state.completed[lid];
  const firstIncomplete = lessons.findIndex((l) => !state.completed[l.id]);
  const reachable = (i) => i <= (firstIncomplete === -1 ? lessons.length - 1 : firstIncomplete) || isDone(lessons[i].id);

  const completedCount = lessons.filter((l) => isDone(l.id)).length;

  function advance() {
    if (idx < lessons.length - 1) {
      setIdx(idx + 1);
    } else {
      setShowComplete(true);
    }
  }

  function finishLesson() {
    onCompleteLesson(lesson.id);
    advance();
  }

  // ── Completion panel ──
  if (showComplete) {
    const modules = D.modules;
    const mi = modules.findIndex((x) => x.id === m.id);
    const next = modules[mi + 1];
    const nextUnlocked = next && S.moduleDone({ ...state }, m); // m just completed
    return (
      <div style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, overflowY: 'auto' }}>
        <Card variant="default" style={{ maxWidth: 520, width: '100%', textAlign: 'center', padding: '44px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
            <div style={{ width: 76, height: 76, borderRadius: '50%', background: 'var(--color-accent-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Award size={38} stroke="var(--color-accent)" />
            </div>
          </div>
          <Badge tone="success" dot>Module complete</Badge>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 400, color: 'var(--color-text-primary)', margin: '14px 0 8px', lineHeight: 1.2 }}>{m.title}</h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: '0 auto 18px', maxWidth: 400 }}>
            You worked through every lesson, check, and reflection. That consistency is exactly how empathy is built — one practised habit at a time.
          </p>
          <div style={{ maxWidth: 280, margin: '0 auto 26px' }}><BreathWave height={26} /></div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            {next ? (
              <Button variant="accent" iconRight={<ArrowRight size={16} />} onClick={() => onGoModule(next.id)}>
                Start {next.n}: {next.title}
              </Button>
            ) : (
              <Button variant="accent" iconLeft={<Award size={16} />} onClick={onBack}>View your certificate</Button>
            )}
            <Button variant="secondary" onClick={onBack}>Back to dashboard</Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', height: '100%' }}>
      {/* Header */}
      <header style={{ padding: '18px 36px', borderBottom: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', gap: 14, position: 'sticky', top: 0, background: 'rgba(247,244,240,0.88)', backdropFilter: 'blur(8px)', zIndex: 10 }}>
        <Button variant="ghost" size="sm" iconLeft={<ArrowLeft size={15} />} onClick={onBack}>Dashboard</Button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>
          <span>Curriculum</span><ChevronRight size={14} stroke="var(--color-text-muted)" /><span style={{ color: 'var(--color-text-secondary)' }}>{m.n}</span>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
          Lesson {idx + 1} of {lessons.length}
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 296px', gap: 32, padding: '30px 36px', maxWidth: 1120 }}>
        {/* Main */}
        <article style={{ minWidth: 0 }}>
          <Badge tone="teal" dot>{m.n} · {lesson.type === 'quiz' ? 'Knowledge check' : lesson.type === 'reflect' ? 'Reflection' : 'Lesson'}</Badge>

          {lesson.type === 'read' && (
            <>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 38, fontWeight: 400, color: 'var(--color-text-primary)', margin: '14px 0 4px', lineHeight: 1.15 }}>{lesson.title}</h1>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--color-primary-muted)', marginBottom: 22 }}>{lesson.heading}</div>
              {lesson.body.map((p, i) => (
                <p key={i} style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--color-text-secondary)', margin: '0 0 18px', maxWidth: '68ch' }}>{p}</p>
              ))}
              <div style={{ margin: '10px 0 26px' }}><BreathWave height={20} opacity={0.3} /></div>
              <Button variant="primary" iconRight={<ArrowRight size={16} />} onClick={finishLesson}>
                {idx < lessons.length - 1 ? 'Mark complete & continue' : 'Mark complete & finish module'}
              </Button>
            </>
          )}

          {lesson.type === 'quiz' && (
            <>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 400, color: 'var(--color-text-primary)', margin: '14px 0 20px', lineHeight: 1.25, maxWidth: '60ch' }}>{lesson.question}</h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 620 }}>
                {lesson.options.map((opt, i) => {
                  const isSel = sel === i;
                  const reveal = checked;
                  const right = i === lesson.answer;
                  let border = 'var(--color-border)';
                  let bg = 'var(--color-surface)';
                  if (reveal && right) { border = 'var(--color-success)'; bg = 'var(--color-success-sub)'; }
                  else if (reveal && isSel && !right) { border = 'var(--color-warm-rose)'; bg = 'var(--color-warm-rose-sub)'; }
                  else if (isSel) { border = 'var(--color-primary)'; bg = 'var(--color-primary-subtle)'; }
                  return (
                    <button key={i} onClick={() => { if (!checked || sel !== lesson.answer) { setSel(i); setChecked(false); } }}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left', width: '100%',
                        padding: '14px 16px', borderRadius: 'var(--radius-lg)', border: `1.5px solid ${border}`,
                        background: bg, cursor: 'pointer', fontFamily: 'var(--font-body)', fontSize: 15,
                        color: 'var(--color-text-primary)', transition: 'all var(--transition-base)' }}>
                      <span style={{ width: 20, height: 20, flexShrink: 0, borderRadius: '50%',
                        border: `2px solid ${isSel ? 'var(--color-primary)' : 'var(--color-border)'}`,
                        background: isSel ? 'var(--color-primary)' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {isSel && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {checked && (
                <div style={{ marginTop: 18, maxWidth: 620 }}>
                  <Alert variant={sel === lesson.answer ? 'success' : 'error'} title={sel === lesson.answer ? 'That\u2019s it' : 'Not quite — try again'}>
                    {lesson.explain}
                  </Alert>
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
                {sel !== lesson.answer ? (
                  <Button variant="primary" disabled={sel === null} onClick={() => setChecked(true)}>Check answer</Button>
                ) : (
                  <Button variant="primary" iconRight={<ArrowRight size={16} />} onClick={finishLesson}>
                    {idx < lessons.length - 1 ? 'Continue' : 'Finish module'}
                  </Button>
                )}
              </div>
            </>
          )}

          {lesson.type === 'reflect' && (
            <>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 400, color: 'var(--color-text-primary)', margin: '14px 0 6px', lineHeight: 1.2 }}>{lesson.title}</h1>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontStyle: 'italic', color: 'var(--color-primary)', margin: '0 0 20px', lineHeight: 1.5, maxWidth: '54ch' }}>"{lesson.prompt}"</p>
              <div style={{ maxWidth: 640 }}>
                <Textarea value={note} rows={6} onChange={(e) => { setNote(e.target.value); setSavedNote(false); }}
                  placeholder="There are no wrong answers — write freely." hint="Your reflections are private and encrypted." />
              </div>
              {savedNote && (
                <div style={{ marginTop: 16, maxWidth: 640 }}>
                  <Alert variant="success" title="Reflection saved">Saved to your private journal. You've maintained a {state.streak}-day reflection streak — that's meaningful consistency.</Alert>
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
                <Button variant="primary" disabled={!note.trim()} onClick={() => {
                  onSaveReflection({ id: 'r-' + lesson.id, moduleId: m.id, lessonId: lesson.id, title: `${m.n} · ${lesson.title}`, prompt: lesson.prompt, text: note.trim() });
                  setSavedNote(true);
                }}>Save reflection</Button>
                {(savedNote || existingReflection(lesson.id)) && (
                  <Button variant="accent" iconRight={<ArrowRight size={16} />} onClick={finishLesson}>
                    {idx < lessons.length - 1 ? 'Continue' : 'Finish module'}
                  </Button>
                )}
                {!savedNote && !existingReflection(lesson.id) && (
                  <Button variant="ghost" onClick={finishLesson}>Skip for now</Button>
                )}
              </div>
            </>
          )}
        </article>

        {/* Lesson list */}
        <aside>
          <div style={{ position: 'sticky', top: 92 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 12 }}>Lessons in this module</div>
            <div style={{ marginBottom: 16 }}><ProgressBar value={Math.round((completedCount / lessons.length) * 100)} label="Progress" /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {lessons.map((l, i) => {
                const done = isDone(l.id);
                const current = i === idx;
                const canJump = reachable(i);
                const TypeWord = l.type === 'quiz' ? 'Check' : l.type === 'reflect' ? 'Reflection' : 'Lesson';
                return (
                  <button key={l.id} disabled={!canJump} onClick={() => canJump && setIdx(i)}
                    style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 12px', borderRadius: 'var(--radius-lg)',
                      border: 'none', width: '100%', textAlign: 'left',
                      background: current ? 'var(--color-primary-subtle)' : 'transparent',
                      cursor: canJump ? 'pointer' : 'not-allowed', opacity: canJump ? 1 : 0.55,
                      transition: 'background var(--transition-base)' }}>
                    {done ? <CheckCircle size={18} stroke="var(--color-success)" />
                      : current ? <Play size={16} stroke="var(--color-primary)" />
                      : canJump ? <span style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid var(--color-border)', flexShrink: 0 }} />
                      : <Lock size={15} stroke="var(--color-text-muted)" />}
                    <span style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontSize: 13, fontWeight: current ? 700 : 600, color: current ? 'var(--color-primary)' : done ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>{l.title}</span>
                      <span style={{ display: 'block', fontSize: 11, color: 'var(--color-text-muted)' }}>{TypeWord}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
window.LessonPlayer = LessonPlayer;
