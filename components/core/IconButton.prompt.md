Icon-only button with a guaranteed square touch target (≥44px at md). Always pass `aria-label`.

```jsx
<IconButton aria-label="Save to favorites" variant="ghost">
  <HeartIcon width={20} height={20} />
</IconButton>
```

Variants match `Button`. Use `ghost` (default) for toolbar/secondary actions, `primary` for a prominent floating action.
