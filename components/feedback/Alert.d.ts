import React from 'react';

/**
 * Lumina inline alert — warm, directive feedback that explains what happened
 * and what to do next. Carries its own variant icon.
 *
 * @startingPoint section="Feedback" subtitle="Inline info / success / warning / error" viewport="700x140"
 */
export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  /** Bold heading line. */
  title?: string;
  /** Message body. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Alert(props: AlertProps): JSX.Element;
