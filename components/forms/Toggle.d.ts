import React from 'react';

/** Lumina toggle switch for binary settings. */
export interface ToggleProps {
  on?: boolean;
  onChange?: (next: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Toggle(props: ToggleProps): JSX.Element;
