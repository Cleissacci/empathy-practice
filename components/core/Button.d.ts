import React from 'react';

/**
 * Lumina primary action button. Warm, rounded, with clear hover/focus/disabled states.
 *
 * @startingPoint section="Core" subtitle="Primary action button with variants & sizes" viewport="700x200"
 */
export interface ButtonProps {
  /** Visual style. `primary` = deep teal, `accent` = warm amber CTA, `link` = inline text link. */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger' | 'link';
  /** Size — all non-link sizes meet the 44px touch target except `sm` (36px, desktop-dense use). */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Icon element rendered before the label */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label */
  iconRight?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Button(props: ButtonProps): JSX.Element;
