Text field built for psychological safety — warm focus ring, gentle validation. Always pass a `label`.

```jsx
<Input label="Your name" required placeholder="First and last name" />
<Input label="Email address" hint="We'll send your session confirmation here." />
<Input label="Session preference" error="Please select from available time slots below." />
<Input label="Referral code" success="Code applied — 20% off your first session." />
```

Error/success copy should explain what happened and what to do next — never a bare "An error occurred".
