import React from 'react';

/**
 * Lumina text input with label, hint, and validation states.
 * Error/success messages are warm and directive.
 *
 * @startingPoint section="Forms" subtitle="Text field with label, hint & validation" viewport="700x140"
 */
export interface InputProps {
  label?: string;
  /** Helper text shown below when no error/success. */
  hint?: string;
  /** Error message — turns the field rose. Explain what to do next. */
  error?: string;
  /** Success message — turns the field green. */
  success?: string;
  required?: boolean;
  id?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
