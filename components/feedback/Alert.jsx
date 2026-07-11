import React from 'react';

const ICONS = {
  info: <path d="M12 16v-4M12 8h.01" />,
  success: null,
  warning: <><path d="M12 9v4" /><path d="M12 17h.01" /></>,
  error: <><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>,
};

const VARIANTS = {
  info:    { bg: 'var(--color-info-sub)', border: 'var(--color-info)', title: 'var(--color-info)', msg: 'var(--color-primary-light)' },
  success: { bg: 'var(--color-success-sub)', border: 'var(--color-success)', title: 'var(--color-success)', msg: '#3A7A6A' },
  warning: { bg: 'var(--color-warning-sub)', border: 'var(--color-warning)', title: 'var(--color-warning)', msg: '#9B7040' },
  error:   { bg: 'var(--color-error-sub)', border: 'var(--color-error)', title: 'var(--color-error)', msg: '#8A4040' },
};

function AlertIcon({ variant, color }) {
  if (variant === 'success') {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}><polyline points="20 6 9 17 4 12" /></svg>;
  }
  if (variant === 'warning') {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />{ICONS.warning}</svg>;
  }
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="12" cy="12" r="10" />{ICONS[variant]}</svg>;
}

/**
 * Lumina inline alert — warm, directive feedback. Never alarming.
 */
export function Alert({ variant = 'info', title, children, style = {}, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.info;
  return (
    <div
      role={variant === 'error' ? 'alert' : 'status'}
      style={{
        display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4) var(--space-5)',
        borderRadius: 'var(--radius-lg)', borderLeft: `4px solid ${v.border}`,
        background: v.bg, ...style,
      }}
      {...rest}
    >
      <AlertIcon variant={variant} color={v.title} />
      <div>
        {title && <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: v.title, marginBottom: 2 }}>{title}</div>}
        <div style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: v.msg }}>{children}</div>
      </div>
    </div>
  );
}
