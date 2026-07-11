import React from 'react';

function Mark({ size, dotColor, ringColor }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="24" cy="24" r="23" stroke={ringColor} strokeWidth="1.5" />
      <path d="M8 24 C11 20, 14 16, 17 24 C20 32, 23 28, 24 24 C25 20, 28 16, 31 24 C34 32, 37 28, 40 24"
            stroke="#C4956A" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="24" r="3" fill={dotColor} />
    </svg>
  );
}

/**
 * Lumina logo — breath-wave mark with optional wordmark.
 */
export function Logo({ variant = 'default', size = 36, showWordmark = true, style = {}, ...rest }) {
  const reversed = variant === 'reversed';
  const dotColor = reversed ? '#fff' : 'var(--color-primary)';
  const ringColor = reversed ? 'rgba(255,255,255,0.2)' : 'var(--color-primary)';
  const nameColor = reversed ? '#fff' : 'var(--color-text-primary)';
  const subColor = reversed ? 'rgba(255,255,255,0.5)' : 'var(--color-text-muted)';
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', ...style }} {...rest}>
      <Mark size={size} dotColor={dotColor} ringColor={ringColor} />
      {showWordmark && (
        <div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: size * 0.6, fontWeight: 400,
            letterSpacing: '0.04em', color: nameColor, lineHeight: 1.05,
          }}>Lumina</div>
          <div style={{
            fontFamily: 'var(--font-body)', fontSize: Math.max(8, size * 0.24), fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase', color: subColor,
          }}>Psychology</div>
        </div>
      )}
    </div>
  );
}
