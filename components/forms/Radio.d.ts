import React from 'react';

/** Lumina radio button. Share one `name` across a group. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  name?: string;
  value?: string;
  disabled?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
export function Radio(props: RadioProps): JSX.Element;
