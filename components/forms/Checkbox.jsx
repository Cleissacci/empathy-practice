import React from 'react';

/**
 * Lumina checkbox with label.
 */
export function Checkbox({ checked = false, onChange, label, disabled = false, id, style = {}, ...rest }) {
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <label htmlFor={fieldId} style={{
      display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style,
    }}>
      <input
        id={fieldId} type="checkbox" checked={checked} onChange={onChange} disabled={disabled}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        width: 20, height: 20, flexShrink: 0,
        border: `2px solid ${checked ? 'var(--color-primary)' : 'var(--color-border)'}`,
        borderRadius: 'var(--radius-sm)',
        background: checked ? 'var(--color-primary)' : 'var(--color-surface)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'all var(--transition-base)',
      }}>
        {checked && (
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
        )}
      </span>
      {label && <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', fontWeight: 500 }}>{label}</span>}
    </label>
  );
}
