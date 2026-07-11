// Welcome / sign-in screen for the Empathy Course.
function LoginScreen({ onSignIn }) {
  const { Button, Input, Logo, BreathWave } = window.LuminaDesignSystem_f39716;
  const [email, setEmail] = React.useState('mira@lumina.com');
  const [pw, setPw] = React.useState('••••••••••');
  return (
    <div style={{ display: 'flex', height: '100%', background: 'var(--color-bg)' }}>
      {/* Left — brand panel */}
      <div style={{
        width: '46%', flexShrink: 0, background: 'var(--color-primary)', position: 'relative',
        overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '44px 48px',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 80% 20%, rgba(196,149,106,0.20) 0%, transparent 55%), radial-gradient(ellipse at 10% 90%, rgba(212,237,233,0.12) 0%, transparent 50%)',
        }} />
        <div style={{ position: 'relative' }}><Logo variant="reversed" size={36} /></div>
        <div style={{ position: 'relative' }}>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 300, fontStyle: 'italic',
            color: 'var(--color-text-inverse)', lineHeight: 1.2, maxWidth: 420,
          }}>
            Empathy is a skill —<br/><span style={{ color: 'var(--color-accent-light)', fontStyle: 'normal' }}>learnable, practicable, transformative.</span>
          </div>
          <div style={{ marginTop: 28, maxWidth: 380 }}><BreathWave height={28} /></div>
        </div>
        <div style={{ position: 'relative', fontSize: 12, color: 'var(--color-primary-muted)', fontWeight: 500, letterSpacing: '0.04em' }}>
          Empathy Course — Certificate Track
        </div>
      </div>
      {/* Right — form */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40 }}>
        <div style={{ width: '100%', maxWidth: 360 }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 400, color: 'var(--color-text-primary)', margin: '0 0 6px' }}>Welcome back</h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', margin: '0 0 28px', lineHeight: 1.6 }}>Pick up where you left off in Module 3.</p>
          <form onSubmit={(e) => { e.preventDefault(); onSignIn(); }} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Input label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
            <Button type="submit" size="lg" style={{ width: '100%', marginTop: 4 }}>Sign in</Button>
            <Button variant="link" type="button" style={{ alignSelf: 'center' }}>Forgot your password?</Button>
          </form>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid var(--color-border-light)', fontSize: 13, color: 'var(--color-text-muted)', textAlign: 'center' }}>
            New here? <a href="#" onClick={(e) => { e.preventDefault(); onSignIn(); }} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
}
window.LoginScreen = LoginScreen;
