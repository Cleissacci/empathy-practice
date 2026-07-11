import React from 'react';

const SIZES = {
  sm: { dim: 32, font: 12, family: 'var(--font-body)' },
  md: { dim: 40, font: 14, family: 'var(--font-body)' },
  lg: { dim: 56, font: 18, family: 'var(--font-display)' },
};
const TONES = {
  primary: { background: 'var(--color-primary-subtle)', color: 'var(--color-primary)' },
  accent:  { background: 'var(--color-accent-subtle)', color: 'var(--color-accent)' },
  rose:    { background: 'var(--color-warm-rose-sub)', color: 'var(--color-warm-rose)' },
};

/**
 * Lumina avatar — initials or image, always circular.
 */
export function Avatar({ size = 'md', tone = 'primary', initials = '', src = '', alt = '', style = {}, ...rest }) {
  const s = SIZES[size] || SIZES.md;
  const t = TONES[tone] || TONES.primary;
  return (
    <div
      style={{
        width: s.dim, height: s.dim, borderRadius: '50%', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', fontWeight: 700, fontSize: s.font,
        fontFamily: s.family, background: t.background, color: t.color,
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : initials}
    </div>
  );
}
