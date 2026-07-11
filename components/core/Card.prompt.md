The primary content container. Compose with the slot subcomponents; set `interactive` for clickable cards (adds a soft hover lift).

```jsx
<Card variant="default" interactive>
  <CardHeader>
    <Badge tone="teal" dot>Module 1</Badge>
    <CardTitle>Introduction to Empathy</CardTitle>
    <CardDescription>What empathy is — and what it isn't.</CardDescription>
  </CardHeader>
  <CardBody><ProgressBar value={72} label="Progress" /></CardBody>
  <CardFooter>
    <span>45 min · 6 lessons</span>
    <Button size="sm">Continue</Button>
  </CardFooter>
</Card>
```

Variants: `default` (white, sm shadow), `elevated`, `flat` (sunken), `tinted` (teal wash — good for reflection prompts), `accent` (amber wash). Titles render in Cormorant Garamond.
