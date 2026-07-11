import React from 'react';

const SIZES = { sm: 36, md: 44, lg: 52 };
const VARIANTS = {
  primary:   { background: 'var(--color-primary)', color: '#fff', border: '1.5px solid transparent', hoverBg: 'var(--color-primary-light)' },
  secondary: { background: 'var(--color-surface)', color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)', hoverBg: 'var(--color-primary-subtle)' },
  accent:    { background: 'var(--color-accent)', color: '#fff', border: '1.5px solid transparent', hoverBg: '#B8844F' },
  ghost:     { background: 'transparent', color: 'var(--color-text-secondary)', border: '1.5px solid var(--color-border)', hoverBg: 'var(--color-surface-alt)' },
  danger:    { background: 'var(--color-warm-rose)', color: '#fff', border: '1.5px solid transparent', hoverBg: '#A85050' },
};

/**
 * Lumina icon-only button.
 */
export function IconButton({ variant = 'ghost', size = 'md', disabled = false, onClick, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.ghost;
  const dim = SIZES[size] || SIZES.md;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: dim, height: dim, padding: 0,
        borderRadius: 'var(--radius-lg)',
        background: hover && !disabled ? v.hoverBg : v.background,
        color: v.color, border: v.border,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'all var(--transition-base)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
