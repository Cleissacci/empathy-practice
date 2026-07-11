# Empathy Course — Learner App (UI Kit)

A high-fidelity, click-through recreation of Lumina's flagship product: the **Empathy Course** learner app. It composes the design-system primitives — it does not re-implement them.

## Run
Open `index.html`. It loads `../../styles.css` + the compiled `../../_ds_bundle.js`, then the screen files. (Renders blank until the bundle has compiled once.)

## Flow
1. **Sign in** (`LoginScreen.jsx`) — split layout: teal brand panel with reversed logo, italic Cormorant tagline, and the breath wave; ivory sign-in form. Any submit → app.
2. **Dashboard** (`DashboardScreen.jsx`) — greeting header, four `StatCard`s, a "resume lesson" feature card, the module grid (completed / in-progress / locked states), and a tinted daily-reflection prompt. Click an unlocked module → module view.
3. **Module** (`ModuleScreen.jsx`) — lesson content set in Cormorant + Nunito, a "before you begin" `Alert`, the breath-wave divider, a reflection composer (`Textarea` → success `Alert` on save), and a sticky lesson list with progress.

## Files
| File | Role |
|---|---|
| `index.html` | Shell + screen routing (`login → app`, `dashboard ↔ module`). Tagged `@dsCard group="Empathy Course"`. |
| `Sidebar.jsx` | Persistent left nav + profile (`window.Sidebar`). |
| `LoginScreen.jsx` / `DashboardScreen.jsx` / `ModuleScreen.jsx` | Screens, attached to `window.*`. |
| `icons.jsx` | Curated Lucide icon set (`window.Icons`). |
| `data.js` | Fake course data (`window.LuminaData`). |

## Components used
Button, IconButton, Badge, Avatar, Card (+ slots), StatCard, Input, Textarea, Alert, ProgressBar, Logo, BreathWave — all from `window.LuminaDesignSystem_f39716`.
