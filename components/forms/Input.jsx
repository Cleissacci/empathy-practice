import React from 'react';

/**
 * Lumina text field with label, hint, and compassionate validation states.
 */
export function Input({
  label, hint, error, success, required = false, id,
  type = 'text', value, onChange, placeholder, disabled = false,
  style = {}, ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const autoId = React.useId();
  const fieldId = id || autoId;
  const state = error ? 'error' : success ? 'success' : 'default';

  const borderColor = error ? 'var(--color-warm-rose)'
    : success ? 'var(--color-success)'
    : focus ? 'var(--color-primary)' : 'var(--color-border)';
  const ring = error ? '0 0 0 3px rgba(184,92,92,0.10)'
    : success ? '0 0 0 3px rgba(74,155,138,0.10)'
    : focus ? '0 0 0 3px var(--focus-ring)' : 'none';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)',
          display: 'flex', alignItems: 'center', gap: 'var(--space-2)',
        }}>
          {label}
          {required && <span style={{ color: 'var(--color-warm-rose)', lineHeight: 1 }}>*</span>}
        </label>
      )}
      <input
        id={fieldId} type={type} value={value} onChange={onChange}
        placeholder={placeholder} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '11px 14px', minHeight: 44,
          border: `1.5px solid ${borderColor}`, borderRadius: 'var(--radius-lg)',
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
          color: 'var(--color-text-primary)',
          background: disabled ? 'var(--color-surface-alt)' : 'var(--color-surface)',
          boxShadow: ring, outline: 'none', WebkitAppearance: 'none',
          transition: 'all var(--transition-base)',
          cursor: disabled ? 'not-allowed' : 'text',
          ...style,
        }}
        {...rest}
      />
      {hint && !error && !success && (
        <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{hint}</div>
      )}
      {error && (
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-warm-rose)' }}>{error}</div>
      )}
      {success && (
        <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, color: 'var(--color-success)' }}>{success}</div>
      )}
    </div>
  );
}
