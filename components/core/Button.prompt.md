Lumina's primary action button — warm, rounded, with built-in hover/focus/disabled states.

```jsx
<Button variant="primary" size="md" onClick={start}>Start Learning</Button>
<Button variant="accent" iconRight={<ArrowIcon/>}>Book a Session</Button>
<Button variant="secondary">View Modules</Button>
<Button variant="link">Learn more →</Button>
```

Variants: `primary` (deep teal, default), `secondary` (teal outline), `accent` (warm amber CTA — use for the single most important action), `ghost` (neutral outline), `danger` (warm rose), `link` (inline underline). Sizes `sm`/`md`/`lg`. Pass `iconLeft`/`iconRight` with a 18px Lucide SVG. Never use amber `accent` text-only at small sizes (contrast).
