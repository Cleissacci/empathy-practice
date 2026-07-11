import React from 'react';

/** Lumina progress bar with a teal gradient fill and optional label + percentage. */
export interface ProgressBarProps {
  /** 0–100. */
  value?: number;
  /** Label shown on the left of the header row. */
  label?: string;
  /** Show the percentage on the right. */
  showPct?: boolean;
  style?: React.CSSProperties;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
