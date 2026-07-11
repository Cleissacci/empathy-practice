import React from 'react';

/**
 * Lumina content container — the primary surface for course modules,
 * session summaries, reflections, and resource links.
 *
 * @startingPoint section="Core" subtitle="Content card with header / body / footer" viewport="700x320"
 */
export interface CardProps {
  /** Surface style. `tinted`=teal wash, `accent`=amber wash, `flat`=sunken, `elevated`=md shadow. */
  variant?: 'default' | 'elevated' | 'flat' | 'tinted' | 'accent';
  /** Enable hover lift + pointer cursor. */
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;

export interface CardSlotProps { children?: React.ReactNode; style?: React.CSSProperties; }
export function CardHeader(props: CardSlotProps): JSX.Element;
export function CardTitle(props: CardSlotProps): JSX.Element;
export function CardDescription(props: CardSlotProps): JSX.Element;
export function CardBody(props: CardSlotProps): JSX.Element;
export function CardFooter(props: CardSlotProps): JSX.Element;
