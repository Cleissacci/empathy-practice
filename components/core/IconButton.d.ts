import React from 'react';

/**
 * Lumina IconButton — a square, icon-only button meeting the 44×44 touch target.
 */
export interface IconButtonProps {
  /** Variant matching Button styling */
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost' | 'danger';
  /** Size of the square hit area */
  size?: 'sm' | 'md' | 'lg';
  /** Required accessible label */
  'aria-label': string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** The icon SVG element */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function IconButton(props: IconButtonProps): JSX.Element;
