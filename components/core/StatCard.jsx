import React from 'react';

/**
 * Lumina stat / metric card — a labelled number with optional change indicator.
 */
export function StatCard({ label, value, suffix = '', change = '', tone = 'primary', interactive = true, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const valueColor = tone === 'accent' ? 'var(--color-accent)' : 'var(--color-primary)';
  const changeColor = tone === 'accent' ? 'var(--color-accent)' : 'var(--color-success)';
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--color-border-light)', padding: 'var(--space-6)',
        boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: interactive && hover ? 'translateY(-1px)' : 'none',
        transition: 'all var(--transition-base)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)',
      }}>{label}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 'var(--text-4xl)', fontWeight: 400,
        color: valueColor, lineHeight: 1, marginBottom: 'var(--space-1)',
      }}>
        {value}{suffix && <span style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-body)' }}>{suffix}</span>}
      </div>
      {change && (
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: changeColor }}>{change}</div>
      )}
    </div>
  );
}
