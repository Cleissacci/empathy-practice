import React from 'react';

/**
 * Lumina avatar — circular initials or image.
 */
export interface AvatarProps {
  size?: 'sm' | 'md' | 'lg';
  /** Background tone when showing initials. */
  tone?: 'primary' | 'accent' | 'rose';
  /** Initials shown when no `src`. */
  initials?: string;
  /** Image URL (overrides initials). */
  src?: string;
  alt?: string;
  style?: React.CSSProperties;
}

export function Avatar(props: AvatarProps): JSX.Element;
