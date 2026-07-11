import React from 'react';

/**
 * Lumina logo — the breath-wave circular mark with optional "Lumina / Psychology" wordmark.
 *
 * @startingPoint section="Brand" subtitle="Logo mark + wordmark, default & reversed" viewport="700x120"
 */
export interface LogoProps {
  /** `default` for light backgrounds, `reversed` for dark (teal) backgrounds. */
  variant?: 'default' | 'reversed';
  /** Mark height in px (wordmark scales from this). Min 24px. */
  size?: number;
  /** Show the "Lumina / Psychology" wordmark beside the mark. */
  showWordmark?: boolean;
  style?: React.CSSProperties;
}
export function Logo(props: LogoProps): JSX.Element;
