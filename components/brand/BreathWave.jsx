import React from 'react';

/**
 * Lumina breath wave — the signature motif. A double sine wave evoking
 * mindful breathing and empathic exchange. Use as dividers, loaders, accents.
 */
export function BreathWave({ width = '100%', height = 40, animated = false, opacity = 1, style = {} }) {
  const dur = '4s';
  return (
    <svg viewBox="0 0 400 80" width={width} height={height} preserveAspectRatio="none"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ display: 'block', opacity, ...style }}>
      {animated && (
        <style>{`@media (prefers-reduced-motion: no-preference){
          .lumina-wave-a{animation:luminaBreath ${dur} ease-in-out infinite}
          .lumina-wave-b{animation:luminaBreath ${dur} ease-in-out infinite reverse}
          @keyframes luminaBreath{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.55)}}
        }`}</style>
      )}
      <g className={animated ? 'lumina-wave-a' : undefined} style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
        <path d="M0 40 C20 40, 30 15, 60 40 C90 65, 100 40, 130 40 C160 40, 170 15, 200 40 C230 65, 240 40, 270 40 C300 40, 310 15, 340 40 C370 65, 380 40, 400 40"
              stroke="var(--color-primary)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5" />
      </g>
      <g className={animated ? 'lumina-wave-b' : undefined} style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
        <path d="M0 40 C20 40, 30 20, 60 40 C90 60, 100 40, 130 40 C160 40, 170 20, 200 40 C230 60, 240 40, 270 40 C300 40, 310 20, 340 40 C370 60, 380 40, 400 40"
              stroke="var(--color-accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
      </g>
    </svg>
  );
}
