// Course dashboard — live stats, resume card, module grid, reflection prompt.
function DashboardScreen({ state, onOpenModule, onWriteReflection }) {
  const { Button, IconButton, Badge, Card, CardHeader, CardTitle, CardDescription, CardBody, CardFooter, StatCard, ProgressBar } = window.LuminaDesignSystem_f39716;
  const { Bell, Search, ArrowRight, Play, Clock } = window.Icons;
  const D = window.LuminaData;
  const S = window.LuminaStore;
  const modules = D.modules;
  const active = S.activeModule(state, modules);
  const stats = S.stats(state, modules);

  const statusBadge = (st) => {
    if (st === 'done') return <Badge tone="success" dot>Completed</Badge>;
    if (st === 'active') return <Badge tone="teal" dot>In Progress</Badge>;
    if (st === 'available') return <Badge tone="amber" dot>Ready</Badge>;
    return <Badge tone="neutral" dot>Locked</Badge>;
  };

  return (
    <div style={{ flex: 1, overflowY: 'auto', height: '100%' }}>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 36px', borderBottom: '1px solid var(--color-border-light)', position: 'sticky', top: 0, background: 'rgba(247,244,240,0.85)', backdropFilter: 'blur(8px)', zIndex: 10 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>Good afternoon</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 400, color: 'var(--color-text-primary)', margin: '2px 0 0' }}>{D.user.name.split(' ')[0]}, ready to continue?</h1>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <IconButton aria-label="Search"><Search size={20} stroke="var(--color-text-secondary)" /></IconButton>
          <IconButton aria-label="Notifications"><Bell size={20} stroke="var(--color-text-secondary)" /></IconButton>
        </div>
      </header>

      <div style={{ padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: 28 }}>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        {/* Resume — feature card */}
        <Card variant="default" style={{ display: 'flex', overflow: 'hidden' }}>
          <div style={{ flex: 1, padding: '28px 30px' }}>
            <Badge tone="teal" dot>{active.n} · {S.moduleProgress(state, active) > 0 ? 'In Progress' : 'Up next'}</Badge>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 500, color: 'var(--color-text-primary)', margin: '12px 0 8px' }}>{active.title}</h2>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: 460, margin: '0 0 18px' }}>{active.desc}</p>
            <div style={{ maxWidth: 320, marginBottom: 20 }}><ProgressBar value={S.moduleProgress(state, active)} label="Module progress" /></div>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Button variant="accent" iconLeft={<Play size={16} />} onClick={() => onOpenModule(active.id)}>Resume lesson</Button>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>
                <Clock size={15} stroke="var(--color-text-muted)" /> {active.lessons.length} lessons
              </span>
            </div>
          </div>
          <div style={{ width: 220, flexShrink: 0, background: 'var(--color-primary)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%, rgba(196,149,106,0.28) 0%, transparent 60%)' }} />
            <svg width="120" height="120" viewBox="0 0 48 48" fill="none" style={{ position: 'relative', opacity: 0.92 }}>
              <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
              <path d="M8 24 C11 20, 14 16, 17 24 C20 32, 23 28, 24 24 C25 20, 28 16, 31 24 C34 32, 37 28, 40 24" stroke="#C4956A" strokeWidth="2" strokeLinecap="round" fill="none"/>
              <circle cx="24" cy="24" r="3" fill="#fff"/>
            </svg>
          </div>
        </Card>

        {/* Module grid */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 16 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, color: 'var(--color-text-primary)', margin: 0 }}>Your curriculum</h2>
            <span style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>{S.totalCompleted(state, modules)} lessons completed</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {modules.map((m, i) => {
              const st = S.moduleStatus(state, modules, i);
              const locked = st === 'locked';
              const done = st === 'done';
              const MIcon = window.Icons[m.icon] || window.Icons.Book;
              return (
                <Card key={m.id} variant={locked ? 'flat' : 'default'} interactive={!locked} onClick={() => !locked && onOpenModule(m.id)} style={{ opacity: locked ? 0.66 : 1, display: 'flex', flexDirection: 'column' }}>
                  <CardHeader>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-lg)', background: done ? 'var(--color-success-sub)' : 'var(--color-primary-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MIcon size={20} stroke={done ? 'var(--color-success)' : 'var(--color-primary)'} />
                      </div>
                      {statusBadge(st)}
                    </div>
                    <CardTitle>{m.title}</CardTitle>
                    <CardDescription>{m.desc}</CardDescription>
                  </CardHeader>
                  <CardBody style={{ marginTop: 'auto' }}>
                    {(st === 'active') && <ProgressBar value={S.moduleProgress(state, m)} showPct={false} />}
                  </CardBody>
                  <CardFooter>
                    <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>{m.lessons.length} lessons</span>
                    {locked
                      ? <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 600 }}>Locked</span>
                      : <Button size="sm" variant={done ? 'secondary' : 'primary'}>{done ? 'Review' : st === 'active' ? 'Continue' : 'Start'}</Button>}
                  </CardFooter>
                </Card>
              );
            })}
            {/* Reflection prompt */}
            <Card variant="tinted" style={{ display: 'flex', flexDirection: 'column' }}>
              <CardHeader>
                <Badge tone="teal">Daily Reflection</Badge>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontStyle: 'italic', color: 'var(--color-primary)', lineHeight: 1.4, marginTop: 12 }}>"{D.prompt}"</div>
              </CardHeader>
              <CardFooter style={{ marginTop: 'auto', borderTop: '1px solid rgba(42,92,107,0.12)' }}>
                <span style={{ fontSize: 12, color: 'var(--color-primary-muted)', fontWeight: 600 }}>Day {state.streak} streak</span>
                <Button size="sm" iconRight={<ArrowRight size={15} />} onClick={onWriteReflection}>Reflect</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
window.DashboardScreen = DashboardScreen;
