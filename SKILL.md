---
name: lumina-design
description: Use this skill to generate well-branded interfaces and assets for Lumina Psychology, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** Lumina Psychology — "Empathy is a skill, learnable and transformative." Calm, literary, warm; trusted-colleague voice; never clinical, no emoji.
- **Color:** teal `#2A5C6B` (primary), amber `#C4956A` (accent — single key CTA), ivory `#F7F4F0` (page base, never pure white), rose `#C47878` (gentle danger), forest `#1A2E35` (text). All in `tokens/colors.css`.
- **Type:** Cormorant Garamond (display/headings, serif, often italic) + Nunito (body/UI) + DM Mono (data). Never body in Cormorant or display in Nunito.
- **Motif:** the breath wave (teal+amber double sine) — dividers, loaders, accents.
- **Shape:** soft everywhere — radii 8–16px, pills; warm-tinted soft shadows; no sharp corners, no harsh/glow shadows.
- **Motion:** 150–300ms ease, never longer. Hover = subtle lift + shade shift. Focus = 3px teal ring. Targets ≥44px.
- **Icons:** Lucide only, 24px / 2px stroke, rounded caps. No emoji.

## What's here
- `styles.css` + `tokens/` — link `styles.css` to get all CSS custom properties + fonts.
- `assets/` — logo + breath-wave SVGs.
- `components/` — React primitives (Button, Card, Input, Alert, Badge, Logo, BreathWave, …); see each `.prompt.md`. Compiled into `_ds_bundle.js`, exposed on `window.LuminaDesignSystem_f39716`.
- `ui_kits/empathy-course/` — full learner-app (LMS) recreation to crib screens from.
- `ui_kits/empathy-elearning/` — "The Empathy Practice", a standalone interactive e-learning module (linear course player with tabs, hotspots, drag-drop, scored quiz).
- `guidelines/cards/` — foundation specimens.

Full guidance — content voice, visual foundations, iconography — is in `readme.md`.
