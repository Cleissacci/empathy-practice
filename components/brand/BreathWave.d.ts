import React from 'react';

/**
 * Lumina's signature motif — a double sine "breath wave" in teal + amber.
 * Use as section dividers, loading states, and decorative accents.
 *
 * @startingPoint section="Brand" subtitle="Signature breath-wave motif" viewport="700x120"
 */
export interface BreathWaveProps {
  width?: number | string;
  height?: number | string;
  /** Gently pulse the waves (respects prefers-reduced-motion). */
  animated?: boolean;
  /** Overall opacity — use ~0.25 for subtle dividers. */
  opacity?: number;
  style?: React.CSSProperties;
}
export function BreathWave(props: BreathWaveProps): JSX.Element;
