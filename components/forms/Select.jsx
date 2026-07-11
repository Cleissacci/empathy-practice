import React from 'react';

const CHEVRON = "data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%239BA8AB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";

/**
 * Lumina select dropdown.
 */
export function Select({ label, hint, id, value, onChange, children, disabled = false, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)',
        }}>{label}</label>
      )}
      <select
        id={fieldId} value={value} onChange={onChange} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '11px 40px 11px 14px', minHeight: 44,
          border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-lg)', fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)', color: 'var(--color-text-primary)',
          background: `var(--color-surface) url("${CHEVRON}") no-repeat right 12px center`,
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
          outline: 'none', appearance: 'none', WebkitAppearance: 'none',
          transition: 'all var(--transition-base)',
          cursor: disabled ? 'not-allowed' : 'pointer', ...style,
        }}
        {...rest}
      >
        {children}
      </select>
      {hint && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{hint}</div>}
    </div>
  );
}
