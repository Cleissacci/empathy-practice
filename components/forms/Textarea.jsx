import React from 'react';

/**
 * Lumina multi-line text area, for reflections and notes.
 */
export function Textarea({ label, hint, id, value, onChange, placeholder, rows = 4, disabled = false, style = {}, ...rest }) {
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
      <textarea
        id={fieldId} value={value} onChange={onChange} placeholder={placeholder} rows={rows} disabled={disabled}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '11px 14px', minHeight: 100, resize: 'vertical',
          border: `1.5px solid ${focus ? 'var(--color-primary)' : 'var(--color-border)'}`,
          borderRadius: 'var(--radius-lg)', fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)',
          color: 'var(--color-text-primary)', background: 'var(--color-surface)',
          boxShadow: focus ? '0 0 0 3px var(--focus-ring)' : 'none',
          outline: 'none', transition: 'all var(--transition-base)', ...style,
        }}
        {...rest}
      />
      {hint && <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{hint}</div>}
    </div>
  );
}
