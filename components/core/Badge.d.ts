import React from 'react';

/**
 * Lumina pill-shaped badge for status indicators and content categories.
 *
 * @startingPoint section="Core" subtitle="Status & category pills" viewport="700x120"
 */
export interface BadgeProps {
  /** Color tone. */
  tone?: 'teal' | 'amber' | 'rose' | 'success' | 'neutral';
  /** Show a leading status dot (ignored when outline). */
  dot?: boolean;
  /** Outline-only style — neutral border, transparent fill. */
  outline?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Badge(props: BadgeProps): JSX.Element;
