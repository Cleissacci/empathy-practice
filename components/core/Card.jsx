import React from 'react';

const SURFACES = {
  default:  { background: 'var(--color-surface)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--color-border-light)' },
  elevated: { background: 'var(--color-surface)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border-light)' },
  flat:     { background: 'var(--color-surface-alt)', boxShadow: 'none', border: '1px solid var(--color-border-light)' },
  tinted:   { background: 'var(--color-primary-subtle)', boxShadow: 'none', border: '1px solid rgba(42,92,107,0.12)' },
  accent:   { background: 'var(--color-accent-subtle)', boxShadow: 'none', border: '1px solid rgba(196,149,106,0.15)' },
};

/**
 * Lumina content container. The primary surface for modules, summaries, reflections.
 */
export function Card({ variant = 'default', interactive = false, onClick, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const s = SURFACES[variant] || SURFACES.default;
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        background: s.background, border: s.border,
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : s.boxShadow,
        transform: interactive && hover ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow var(--transition-base), transform var(--transition-base)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Padded header region (use for tag + title + description). */
export function CardHeader({ children, style = {} }) {
  return <div style={{ padding: 'var(--space-6) var(--space-6) 0', ...style }}>{children}</div>;
}

/** Card title in Cormorant display. */
export function CardTitle({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 500,
      color: 'var(--color-text-primary)', lineHeight: 'var(--leading-snug)',
      marginBottom: 'var(--space-2)', ...style,
    }}>{children}</div>
  );
}

/** Card description / supporting body. */
export function CardDescription({ children, style = {} }) {
  return (
    <div style={{
      fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)',
      lineHeight: 'var(--leading-relaxed)', ...style,
    }}>{children}</div>
  );
}

/** Card body region. */
export function CardBody({ children, style = {} }) {
  return <div style={{ padding: 'var(--space-4) var(--space-6)', ...style }}>{children}</div>;
}

/** Card footer — meta on the left, action on the right. */
export function CardFooter({ children, style = {} }) {
  return (
    <div style={{
      padding: 'var(--space-4) var(--space-6)', borderTop: '1px solid var(--color-border-light)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 'var(--space-3)', ...style,
    }}>{children}</div>
  );
}
