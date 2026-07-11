import React from 'react';

/**
 * Lumina radio button with label. Use within a group sharing one `name`.
 */
export function Radio({ checked = false, onChange, label, name, value, disabled = false, id, style = {}, ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <label htmlFor={fieldId} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <input
        id={fieldId} type="radio" name={name} value={value} checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        width: 20, height: 20, flexShrink: 0, borderRadius: '50%',
        border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--color-border)'}`,
        background: 'var(--color-surface)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all var(--transition-base)',
      }}>
        {checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)' }} />}
      </span>
      {label && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', fontWeight: 500 }}>{label}</span>}
    </label>
  );
}
