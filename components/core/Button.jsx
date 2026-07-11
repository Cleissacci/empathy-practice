import React from 'react';

const SIZES = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-sm)', borderRadius: 'var(--radius-md)', minHeight: 36 },
  md: { padding: '12px 24px', fontSize: 'var(--text-base)', borderRadius: 'var(--radius-lg)', minHeight: 44 },
  lg: { padding: '16px 32px', fontSize: 'var(--text-lg)', borderRadius: 'var(--radius-xl)', minHeight: 52 },
};

const VARIANTS = {
  primary: {
    background: 'var(--color-primary)', color: '#fff', border: '1.5px solid transparent',
    boxShadow: '0 2px 8px rgba(42,92,107,0.25)',
    hoverBg: 'var(--color-primary-light)',
  },
  secondary: {
    background: 'var(--color-surface)', color: 'var(--color-primary)',
    border: '1.5px solid var(--color-primary)', boxShadow: 'none',
    hoverBg: 'var(--color-primary-subtle)',
  },
  accent: {
    background: 'var(--color-accent)', color: '#fff', border: '1.5px solid transparent',
    boxShadow: '0 2px 8px rgba(196,149,106,0.25)',
    hoverBg: '#B8844F',
  },
  ghost: {
    background: 'transparent', color: 'var(--color-text-secondary)',
    border: '1.5px solid var(--color-border)', boxShadow: 'none',
    hoverBg: 'var(--color-surface-alt)',
  },
  danger: {
    background: 'var(--color-warm-rose)', color: '#fff', border: '1.5px solid transparent',
    boxShadow: 'none', hoverBg: '#A85050',
  },
  link: {
    background: 'transparent', color: 'var(--color-primary)', border: 'none',
    boxShadow: 'none', hoverBg: 'transparent',
  },
};

/**
 * Lumina primary action button.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = 'button',
  onClick,
  children,
  className = '',
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const isLink = variant === 'link';
  const sz = isLink ? {} : SIZES[size] || SIZES.md;
  // Animated hover border — skip on text links and disabled buttons.
  const animBorder = !isLink && !disabled;
  const cls = [animBorder ? 'lum-anim-border' : '', className].filter(Boolean).join(' ');

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: isLink ? 'underline' : 'none',
    textUnderlineOffset: isLink ? '3px' : undefined,
    whiteSpace: 'nowrap',
    transition: 'all var(--transition-base)',
    background: hover && !disabled ? v.hoverBg : v.background,
    color: v.color,
    border: v.border,
    boxShadow: disabled ? 'none' : v.boxShadow,
    opacity: disabled ? 0.45 : 1,
    transform: hover && !disabled && (variant === 'primary' || variant === 'accent' || variant === 'danger') ? 'translateY(-1px)' : 'none',
    padding: isLink ? 0 : sz.padding,
    fontSize: sz.fontSize,
    borderRadius: sz.borderRadius,
    minHeight: sz.minHeight,
    ...style,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cls}
      style={base}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
