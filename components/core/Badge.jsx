import React from 'react';

const TONES = {
  teal:    { background: 'var(--color-primary-subtle)', color: 'var(--color-primary)', dot: 'var(--color-primary)' },
  amber:   { background: 'var(--color-accent-subtle)', color: 'var(--color-accent)', dot: 'var(--color-accent)' },
  rose:    { background: 'var(--color-warm-rose-sub)', color: 'var(--color-warm-rose)', dot: 'var(--color-warm-rose)' },
  success: { background: 'var(--color-success-sub)', color: 'var(--color-success)', dot: 'var(--color-success)' },
  neutral: { background: 'var(--color-surface-alt)', color: 'var(--color-text-secondary)', dot: 'var(--color-text-muted)' },
};

/**
 * Lumina pill-shaped status / category badge.
 */
export function Badge({ tone = 'teal', dot = false, outline = false, children, style = {}, ...rest }) {
  const t = TONES[tone] || TONES.teal;
  const outlineStyle = {
    background: 'transparent',
    color: 'var(--color-text-secondary)',
    border: '1.5px solid var(--color-border)',
  };
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        padding: '4px 12px', borderRadius: 'var(--radius-full)',
        fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600,
        letterSpacing: '0.01em', whiteSpace: 'nowrap',
        ...(outline ? outlineStyle : { background: t.background, color: t.color }),
        ...style,
      }}
      {...rest}
    >
      {dot && !outline && (
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot, flexShrink: 0 }} />
      )}
      {children}
    </span>
  );
}
