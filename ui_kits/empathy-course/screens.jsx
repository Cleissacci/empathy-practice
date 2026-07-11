// Secondary screens: Reflections journal, Sessions booking, Certificate.

// ── Shared page header ──
function PageHead({ eyebrow, title, sub }) {
  return (
    <header style={{ padding: '26px 36px 0' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-accent)' }}>{eyebrow}</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 400, color: 'var(--color-text-primary)', margin: '2px 0 4px' }}>{title}</h1>
      {sub && <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0, maxWidth: 560, lineHeight: 1.6 }}>{sub}</p>}
    </header>
  );
}

// ── Reflections journal ──
function ReflectionsScreen({ state }) {
  const { Card, Badge, BreathWave } = window.LuminaDesignSystem_f39716;
  const { Reflect } = window.Icons;
  const items = [...state.reflections].reverse();
  return (
    <div style={{ flex: 1, overflowY: 'auto', height: '100%' }}>
      <PageHead eyebrow="Private journal" title="Your reflections" sub="Everything you write here is private and encrypted. Returning to your own words is part of the practice." />
      <div style={{ padding: '24px 36px', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760 }}>
        {items.length === 0 && (
          <Card variant="flat" style={{ padding: 36, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
              <Reflect size={28} stroke="var(--color-primary-muted)" />
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--color-text-primary)' }}>No reflections yet</div>
            <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 4 }}>They'll appear here as you work through the modules.</div>
          </Card>
        )}
        {items.map((r) => (
          <Card key={r.id} variant="default" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <Badge tone="teal">{r.title}</Badge>
              <span style={{ fontSize: 12, color: 'var(--color-text-muted)', fontWeight: 500 }}>{r.date || 'Today'}</span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontStyle: 'italic', color: 'var(--color-primary)', margin: '0 0 12px', lineHeight: 1.5 }}>"{r.prompt}"</p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0 }}>{r.text}</p>
          </Card>
        ))}
        {items.length > 0 && <div style={{ marginTop: 6 }}><BreathWave height={18} opacity={0.25} /></div>}
      </div>
    </div>
  );
}
window.ReflectionsScreen = ReflectionsScreen;

// ── Sessions booking ──
function SessionsScreen() {
  const { Card, Button, Badge, Avatar, Alert } = window.LuminaDesignSystem_f39716;
  const { Calendar, Clock } = window.Icons;
  const D = window.LuminaData;
  const [booked, setBooked] = React.useState(() => D.sessions.filter((s) => s.status === 'upcoming').map((s) => s.id));
  const [justBooked, setJustBooked] = React.useState(null);

  return (
    <div style={{ flex: 1, overflowY: 'auto', height: '100%' }}>
      <PageHead eyebrow="1:1 practice" title="Sessions" sub="Book a live session with a Lumina practitioner to practise the skills from your modules in real conversation." />
      <div style={{ padding: '24px 36px', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760 }}>
        {justBooked && (
          <Alert variant="success" title="Session booked">
            You're confirmed with {justBooked}. We'll email a calendar invite and a gentle reminder an hour before.
          </Alert>
        )}
        {D.sessions.map((s) => {
          const isBooked = booked.includes(s.id);
          return (
            <Card key={s.id} variant="default" style={{ padding: 20, display: 'flex', alignItems: 'center', gap: 18 }}>
              <Avatar size="lg" tone={s.tone} initials={s.initials} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 500, color: 'var(--color-text-primary)' }}>{s.practitioner}</span>
                  {isBooked && <Badge tone="success" dot>Booked</Badge>}
                </div>
                <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 8 }}>Focus: {s.focus}</div>
                <div style={{ display: 'flex', gap: 16, fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 500 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Calendar size={14} stroke="var(--color-text-muted)" /> {s.date}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><Clock size={14} stroke="var(--color-text-muted)" /> {s.time}</span>
                </div>
              </div>
              {isBooked ? (
                <Button variant="ghost" size="sm" onClick={() => { setBooked(booked.filter((b) => b !== s.id)); setJustBooked(null); }}>Cancel</Button>
              ) : (
                <Button variant="accent" size="sm" onClick={() => { setBooked([...booked, s.id]); setJustBooked(s.practitioner); }}>Book session</Button>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
window.SessionsScreen = SessionsScreen;

// ── Certificate ──
function CertificateScreen({ state, allDone, onResume }) {
  const { Card, Button, Badge, BreathWave, Logo } = window.LuminaDesignSystem_f39716;
  const { Award, ArrowRight, Download } = window.Icons;
  const D = window.LuminaData;
  const S = window.LuminaStore;
  const doneCount = D.modules.filter((m) => S.moduleDone(state, m)).length;

  if (!allDone) {
    return (
      <div style={{ flex: 1, overflowY: 'auto', height: '100%' }}>
        <PageHead eyebrow="Certificate Track" title="Your certificate" sub="Complete all five modules to earn your Lumina Empathy Practice certificate." />
        <div style={{ padding: '24px 36px', maxWidth: 620 }}>
          <Card variant="flat" style={{ padding: 36, textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--color-surface)', border: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Award size={30} stroke="var(--color-primary-muted)" />
              </div>
            </div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--color-text-primary)', marginBottom: 6 }}>{doneCount} of {D.modules.length} modules complete</div>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6, maxWidth: 380, margin: '0 auto 20px' }}>Keep going — your certificate unlocks the moment the final reflection is saved.</p>
            <Button variant="primary" iconRight={<ArrowRight size={16} />} onClick={onResume}>Resume learning</Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, overflowY: 'auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
      <div style={{ width: '100%', maxWidth: 640 }}>
        <Card variant="default" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ background: 'var(--color-primary)', padding: '36px 40px 28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 85% 15%, rgba(196,149,106,0.25) 0%, transparent 55%)' }} />
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Logo variant="reversed" size={32} />
              <Badge tone="amber" dot>Certificate Track</Badge>
            </div>
          </div>
          <div style={{ padding: '32px 40px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 10 }}>This certifies that</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 400, color: 'var(--color-text-primary)', lineHeight: 1.1 }}>{D.user.name}</div>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 420, margin: '14px auto 0' }}>
              has completed all five modules of the Lumina Empathy Course, demonstrating practised skill in perspective taking, active listening, and empathy under pressure.
            </p>
            <div style={{ maxWidth: 300, margin: '22px auto' }}><BreathWave height={26} /></div>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Button variant="accent" iconLeft={<Download size={16} />}>Download certificate</Button>
              <Button variant="secondary" onClick={onResume}>Review modules</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
window.CertificateScreen = CertificateScreen;
