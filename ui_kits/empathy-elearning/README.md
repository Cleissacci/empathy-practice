# The Empathy Practice — Interactive E-Learning Module (UI Kit)

A standalone, self-paced **e-learning course player** for Lumina's Empathy curriculum. The topic is Lumina's own empathy content; the *structure and flow* follow a classic linear training-module storyboard (Articulate/Rise style): cover → objectives → agenda → module sections (with tabs, learn-more hotspots, drag-and-drop, reflections) → scored knowledge check → results → summary → completion. No LMS chrome — just the course itself.

## Run
Open `index.html`. Loads `../../styles.css` + the compiled `../../_ds_bundle.js`, then the screen scripts. (Renders blank until the bundle has compiled once.) The first paint waits for `document.fonts.ready` so the display serif is correct from the start.

## Flow (31 slides)
1. **Cover** — title, tagline, breath wave, Start.
2. **Objectives** — four learning objectives.
3. **Agenda** — the five modules.
4. **Modules 1–5** — each a teal **section divider** + content slides, plus one interaction:
   - M1 **Tabs** (Sympathy / Empathy / Compassion) — gated until all viewed.
   - M2 **Learn-more hotspots** (mirror neurons / DMN / affective resonance) — overlay layers, gated until all opened.
   - M3 **Drag-and-drop** (tap-to-assign or native drag) — sort responses, gated until submitted; plus an **applied scenario**.
   - M4 **Tabs** (Reflect / Paraphrase / Hold silence) + an **applied scenario**.
   - M5 content + an **applied scenario**.
   
   **Applied scenarios** replace open journaling: a real situation is posed and the learner picks the response that correctly applies the module's empathy *device* (generous interpretation, reflecting, regulate-then-relate); each option reveals which device it used, with feedback.
5. **Knowledge Check** — 5 single-answer questions with Great job! / Not quite feedback, gated until submitted.
6. **Results** — score vs. 80% passing; pass unlocks Continue, fail offers **Try again** (resets the quiz).
7. **Summary** — five takeaways. **Completion** — enter your name and **download a certificate** (rendered to PNG on a canvas with the brand mark + breath wave; works offline).

## Interaction model (from the storyboard)
- Linear **Back / Continue** nav (also ← / → arrow keys); a top **progress bar** + `n / 31` counter.
- **Gating**: Continue is disabled (with a lock hint) until the slide's activity is complete — all tabs/hotspots viewed, drag-drop or question submitted, quiz passed.
- **Restart** in the header; full state (position, viewed items, answers, reflections, score) persists to `localStorage` (`lumina-elearning-v1`).
- Responsive: chrome and grids reflow for desktop and mobile; drag-and-drop falls back to tap-to-assign.

## Files
| File | Role |
|---|---|
| `index.html` | Player engine — routing, gating, progress, persistence, chrome. Tagged `@dsCard group="Empathy Course"`. |
| `course-data.js` | Full slide sequence + tabs, hotspots, drag-drop, quiz, summary (`window.COURSE`). |
| `slides.jsx` | Presentational slide types (`window.Slides`). |
| `interactions.jsx` | Tabs, Hotspots, DragDrop, Scenario, Question, Results (`window.Interactions`). Tabs/Hotspots narrate the clicked item; closing a hotspot stops narration. |
| `icons.jsx` | Curated Lucide icon set (`window.Icons`). |

## Components used
Button, Card, Badge, Avatar, Alert, Textarea, ProgressBar, Logo, BreathWave — all from `window.LuminaDesignSystem_f39716`.
