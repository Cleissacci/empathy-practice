import React from 'react';

/**
 * Lumina progress bar — uses the breath-wave gradient fill.
 */
export function ProgressBar({ value = 0, label, showPct = true, style = {}, ...rest }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ ...style }} {...rest}>
      {(label || showPct) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--space-2)' }}>
          {label && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-text-primary)' }}>{label}</span>}
          {showPct && <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>{pct}%</span>}
        </div>
      )}
      <div style={{
        height: 8, background: 'var(--color-primary-subtle)',
        borderRadius: 'var(--radius-full)', overflow: 'hidden',
      }}>
        <div style={{
          height: '100%', width: `${pct}%`, borderRadius: 'var(--radius-full)',
          background: 'linear-gradient(90deg, var(--color-primary-muted), var(--color-primary))',
          transition: 'width var(--transition-slow)',
        }} />
      </div>
    </div>
  );
}
