import React from 'react';

/**
 * Lumina stat card — a labelled metric with optional change line. Value renders in Cormorant display.
 */
export interface StatCardProps {
  /** Uppercase label above the value. */
  label: string;
  /** The metric value (number or string). */
  value: React.ReactNode;
  /** Small unit appended to the value (e.g. "h"). */
  suffix?: string;
  /** Change / context line below (e.g. "↑ 1 this week"). */
  change?: string;
  /** Value colour: teal (`primary`) or amber (`accent`). */
  tone?: 'primary' | 'accent';
  interactive?: boolean;
  style?: React.CSSProperties;
}
export function StatCard(props: StatCardProps): JSX.Element;
