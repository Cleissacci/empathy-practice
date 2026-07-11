// Shared left sidebar for the Empathy Course app.
function Sidebar({ active, onNavigate, onLogout }) {
  const { Logo, Avatar } = window.LuminaDesignSystem_f39716;
  const { Home, Award, Calendar, Reflect, LogOut } = window.Icons;
  const items = [
    { key: 'dashboard', label: 'Dashboard', Icon: Home },
    { key: 'reflections', label: 'Reflections', Icon: Reflect },
    { key: 'sessions', label: 'Sessions', Icon: Calendar },
    { key: 'certificate', label: 'Certificate', Icon: Award },
  ];
  return (
    <aside style={{
      width: 248, flexShrink: 0, background: 'var(--color-surface)',
      borderRight: '1px solid var(--color-border-light)',
      display: 'flex', flexDirection: 'column', padding: '24px 16px',
      height: '100%', boxSizing: 'border-box',
    }}>
      <div style={{ padding: '0 8px 24px' }}><Logo size={32} /></div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map(({ key, label, Icon }) => {
          const on = active === key;
          return (
            <button key={key} onClick={() => onNavigate(key)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px',
              borderRadius: 'var(--radius-lg)', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', fontWeight: 600,
              background: on ? 'var(--color-primary-subtle)' : 'transparent',
              color: on ? 'var(--color-primary)' : 'var(--color-text-secondary)',
              transition: 'all var(--transition-base)', textAlign: 'left', width: '100%',
            }}>
              <Icon size={18} stroke={on ? 'var(--color-primary)' : 'var(--color-text-muted)'} />
              {label}
            </button>
          );
        })}
      </nav>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '10px 8px',
          borderTop: '1px solid var(--color-border-light)', paddingTop: 16,
        }}>
          <Avatar size="md" initials={window.LuminaData.user.initials} />
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>{window.LuminaData.user.name}</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>Certificate Track</div>
          </div>
        </div>
        <button onClick={onLogout} style={{
          display: 'flex', alignItems: 'center', gap: 10, padding: '9px 12px',
          borderRadius: 'var(--radius-lg)', border: 'none', cursor: 'pointer', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--color-text-muted)',
        }}>
          <LogOut size={16} stroke="var(--color-text-muted)" /> Sign out
        </button>
      </div>
    </aside>
  );
}
window.Sidebar = Sidebar;
