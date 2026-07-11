import React from 'react';

/**
 * Lumina toggle switch.
 */
export function Toggle({ on = false, onChange, label, disabled = false, style = {}, ...rest }) {
  return (
    <label style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <button
        type="button" role="switch" aria-checked={on} disabled={disabled}
        onClick={() => !disabled && onChange && onChange(!on)}
        style={{
          width: 44, height: 24, flexShrink: 0, padding: 0, border: 'none',
          borderRadius: 'var(--radius-full)', position: 'relative',
          background: on ? 'var(--color-primary)' : 'var(--color-border)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background var(--transition-base)',
        }}
        {...rest}
      >
        <span style={{
          position: 'absolute', top: 3, left: 3, width: 18, height: 18, borderRadius: '50%',
          background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
          transform: on ? 'translateX(20px)' : 'translateX(0)',
          transition: 'transform var(--transition-base)',
        }} />
      </button>
      {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 500, color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  );
}
