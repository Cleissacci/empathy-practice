# Lumina Psychology — Design System

> *Empathy is a skill — learnable, practicable, and transformative.*

Lumina is a psychological services company built on the belief that empathy can be taught. Lumina designs experiences that bring **clarity and warmth** to the most human of all capabilities. The flagship product is the **Empathy Course** — a self-paced learning platform (Certificate Track) that teaches active listening, perspective taking, emotional regulation, and non-violent communication through modules, guided reflections, and live sessions with practitioners.

This design system encodes Lumina's brand foundations, reusable UI components, and a recreation of the Empathy Course learner app, so any agent can produce on-brand interfaces and assets.

## Sources
- `uploads/lumina-brand-style-guide.html` — the authored Lumina Psychology Brand Style Guide v1.0 (June 2026). This is the single source of truth; all tokens, type, color, component specs, and usage rules here are derived from it. There is no external codebase or Figma file.

---

## CONTENT FUNDAMENTALS

How Lumina writes. The voice is that of **a trusted colleague — never clinical, never cold.** Four pillars:

- **Warm** — We make space before we make a point. Copy acknowledges the reader's experience first.
- **Grounded** — Evidence-based language. *No wellness buzzwords.* Credibility is earned through precision, not hype.
- **Inviting** — Psychological safety first. Interfaces (and words) should feel safe to explore and *safe to be wrong in*.
- **Clear** — Plain language, active voice, short sentences, room to breathe.

**Person & address.** Second person ("you", "your reflections") to the learner; first-person plural ("we", "our") for Lumina's own voice in teaching content. Reflection prompts are posed as open questions, often in first person from the learner's seat.

**Casing.** Sentence case for headings and buttons ("Start learning", "Book a session"). UPPERCASE only for small eyebrow labels / module tags with wide letter-spacing (e.g. `MODULE 3 — PERSPECTIVE TAKING`).

**Tone of feedback.**
- *Errors* explain what happened **and what to do next** — never a bare "An error occurred." e.g. "We ran into a connection issue. Your draft is preserved locally — try saving again."
- *Successes* reinforce growth without over-celebrating. e.g. "Saved to your private journal. You've maintained a 12-day reflection streak — that's meaningful consistency."
- *Warnings* are directive and calm, not alarming.

**Emoji.** Never used — not in UI, not as icons (inaccessible and off-brand). Use Lucide SVG icons instead.

**Vocabulary.** Empathy, active listening, perspective taking, reflection, presence, resonance, regulation, modules, lessons, sessions, practitioner. Avoid: "hack", "boost", "unlock your potential", exclamation-heavy hype.

**Example copy (verbatim from brand):**
- Eyebrow: *"Module 3 — Perspective Taking"*
- Display heading: *"What does it mean to truly listen?"*
- Body: *"Empathy begins before we speak. It begins in the quality of our attention — in how we hold space for another person's experience before we name, judge, or respond."*
- Reflection prompt: *"Describe a time you felt genuinely understood by someone. What made that possible?"*
- Field hint: *"Your reflections are private and encrypted."*

---

## VISUAL FOUNDATIONS

**Overall vibe.** Calm, literary, human. A warm editorial feel — like a beautifully typeset workbook — rather than a clinical health app. Generous whitespace; nothing shouts.

**Color.** Built on psychological associations: **teal** (`#2A5C6B`, trust/calm/growth) is the primary; **warm amber** (`#C4956A`, warmth/human connection) is the accent and reserved for the single most important CTA; **warm ivory** (`#F7F4F0`) is the page base. A muted **warm rose** (`#C47878`) handles danger/error gently. Text is **deep forest** (`#1A2E35`) on ivory. Tints (`*-subtle`) wash backgrounds. Every combination passes WCAG AA; amber is large-text-only on white (3.1:1). **Never use pure white as the page background** — always ivory.

**Type.** Two-family pairing. **Cormorant Garamond** (serif) for all display/headings — it brings warmth and literary gravitas; weights 300–500, line-height 1.15–1.25, often italic for emphasis and pull-quotes. **Nunito** (humanist sans) for all body, UI, and labels — open and legible, line-height 1.6–1.75, body measure 65–72 chars. **DM Mono** for code/data/tokens. Never set large display text in Nunito; never set body in Cormorant.

**Backgrounds.** Flat ivory or white surfaces — no photography-as-background, no busy patterns. The one decorative device is the **breath wave** (see Iconography/Brand) and soft radial glows of amber/teal at low opacity inside dark teal panels (headers, hero, login). No heavy gradients on content.

**The breath wave.** Lumina's signature motif: a double sine wave (teal over amber) evoking mindful breathing and the rhythm of empathic exchange. Used in dividers, loading states, progress accents, and illustration backdrops. Keep it quiet (opacity ~0.25–0.3) as a divider; it may gently pulse for loaders (respect `prefers-reduced-motion`).

**Corners & cards.** *Nothing has a sharp corner.* Radii: inputs/buttons 8–16px, cards 16px (`--radius-xl`), pills 9999px. Cards are white with a 1px `--color-border-light` hairline and a **soft shadow** (`--shadow-sm` at rest). Variants: `tinted` (teal wash, used for reflection prompts), `accent` (amber wash), `flat` (sunken, for locked/disabled).

**Shadows.** Soft and **warm-tinted** (calculated on `#1A2E35`), four steps sm→xl. Never harsh black drop shadows or glow halos (`0 0 20px rgba(0,0,0,.4)` is explicitly banned — it reads as clinical/alarming).

**Spacing & layout.** Strict 4px base grid (`--space-1..24`). Container max 1100px (wide 1280px), centered. 12-column desktop / 8 tablet / 4 mobile.

**Motion.** Quick and unfussy: 150/200/300ms ease, **never longer than 300ms** (longer feels anxious). Transitions fade + small translate.

**Hover states.** Primary/accent/danger buttons lift `translateY(-1px)` and deepen shadow + shift to a lighter shade; secondary/ghost fill with a subtle tint. Cards (interactive) lift `-2px` to `--shadow-lg`. No scale-up.

**Press / focus.** Focus shows a visible 3px ring in `--focus-ring` (teal at 12% alpha); error/success fields ring rose/green. All interactive targets ≥ 44×44px.

**Borders.** Hairline 1px `--color-border-light` on cards; 1.5–2px on inputs and controls; left 4px accent rule on alerts.

**Transparency & blur.** Sticky headers use `rgba(247,244,240,0.85)` + `backdrop-filter: blur(8px)`. Color tags inside swatches use translucent white + blur. Otherwise surfaces are opaque.

**Imagery tone.** Warm, calm, human; if photography is introduced it should be warm-toned and unhurried. (The brand ships no stock photography — the breath wave + logo mark carry the visual identity.)

---

## ICONOGRAPHY

- **System:** [Lucide Icons](https://lucide.dev) **exclusively** — outlined, rounded, `24×24` viewBox, **2px stroke**, round line caps. Icon stroke weight matches body-text weight. Icons inherit `currentColor` (usually teal).
- **Format:** inline SVG (no icon font, no PNG icons). The system ships a curated Lucide subset as React components in `ui_kits/empathy-course/icons.jsx` (Heart, Dialogue, Eye, Book, Shield, Calendar, User, Mic, Reflect, Star, CheckCircle, Home, Settings, Bell, ChevronRight, ArrowRight, Play, Clock, Search, Lock, LogOut, Award). For new icons, pull from Lucide CDN or copy the matching Lucide SVG — match stroke + cap style.
- **Core course concepts → icons:** empathy = heart, dialogue = chat bubble, perspective = eye, module = open book, psychology = brain, safety = shield, complete = check-circle, session = calendar, listen = mic, reflect = pen, milestone = star.
- **Emoji:** never. They are inaccessible and break visual consistency.
- **Unicode as icon:** avoid, except the typographic arrow "→" used in link buttons ("Learn more →", "Write →").
- **Interactive icons:** minimum 44×44px hit area (`IconButton` enforces this); icon-only buttons must carry an `aria-label`; decorative SVGs carry `aria-hidden="true"`.

---

## Brand assets (`assets/`)
- `logo-full.svg` — mark + "Lumina / Psychology" wordmark (default, on light).
- `logo-mark.svg` / `logo-mark-reversed.svg` — circular breath-wave mark (light / on-dark).
- `breath-wave.svg` — the signature motif (teal + amber double sine).
- Min mark size 24px screen / 8mm print. Clearspace = ½ × mark height. The `<Logo>` and `<BreathWave>` components render these live from tokens.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (import-only). Link this one file.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`.
- `assets/` — logos + breath-wave SVGs.
- `readme.md` — this file. `SKILL.md` — Agent-Skills wrapper.

**Components** (`window.LuminaDesignSystem_f39716.*`) — see each `*.prompt.md`:
- `components/core/` — **Button, IconButton, Badge, Avatar, Card** (+ `CardHeader/Title/Description/Body/Footer`), **StatCard**.
- `components/forms/` — **Input, Textarea, Select, Checkbox, Radio, Toggle**.
- `components/feedback/` — **Alert, ProgressBar**.
- `components/brand/` — **Logo, BreathWave**.

**Foundation cards** (`guidelines/cards/`) — Colors (primary/accent/neutral/semantic), Type (display/body/mono/pairing), Spacing (scale/radius/shadows), Brand (voice). These populate the Design System tab.

**UI Kit** (`ui_kits/empathy-course/`) — interactive learner-app recreation: `index.html` (sign in → dashboard → module + reflection), composing `Sidebar`, `LoginScreen`, `DashboardScreen`, `ModuleScreen`, with `icons.jsx` + `data.js`. See its `README.md`.

**UI Kit** (`ui_kits/empathy-elearning/`) — **The Empathy Practice**, a standalone linear e-learning module (Articulate/Rise-style flow): cover → objectives → agenda → 5 modules with tabs, learn-more hotspots, drag-and-drop & reflections → scored knowledge check → results → summary → completion. Gated Back/Next nav, progress persistence. See its `README.md`.

> **Note:** component cards and the UI kit load the compiled `_ds_bundle.js`, which the compiler generates automatically. They render blank only until that first compile completes.
