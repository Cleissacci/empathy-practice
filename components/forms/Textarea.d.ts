import React from 'react';

/** Lumina multi-line text area for reflections and notes. */
export interface TextareaProps {
  label?: string;
  hint?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
