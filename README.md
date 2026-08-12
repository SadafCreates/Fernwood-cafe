# Fernwood Cafe — A Slow Corner

A React (Vite) landing page for a fictional cozy neighborhood cafe, built as a front-end case study exploring motion and ambient interactivity.

**[Live Demo](#)** — replace with your Netlify URL after deploying

## About

Fernwood is an imagined single-location cafe: small, warm, unhurried. The design leans into that mood with soft dusty-pastel colors and quiet, deliberate motion rather than a static information page.

## Design decisions

- **Palette** — cream, blush, sage, and warm grey, chosen to feel soft and unhurried rather than punchy or corporate.
- **Typography** — Fraunces (display serif) for headings, DM Sans for body copy, and Caveat (handwritten script) for the tagline — a small human, crafted touch.
- **Signature moment: the hero.** The headline reveals word-by-word on load, two soft blurred blobs drift slowly in the background, and a hand-drawn coffee cup animates gentle steam curls on a loop — an ambient detail rather than a demo gimmick.
- **Supporting motion, kept quiet on purpose:**
  - Every section fades and lifts in on scroll via a small custom `useReveal` hook (IntersectionObserver), staggered slightly per item so groups don't all land at once.
  - Menu rows nudge right on hover; gallery tiles lift and tilt very slightly; favorite cards lift on hover.
  - An infinite marquee strip between the hero and About section adds texture without asking for attention.
- **Reduced motion respected** — every animation is disabled via `prefers-reduced-motion`, including the marquee, blobs, steam, and reveal transitions.

## Tech

- React 18 + Vite
- Component-based structure (`Hero`, `Marquee`, `About`, `Menu`, `Favorites`, `Gallery`, `LocationHours`, `Footer`, `Reveal`)
- Custom `useReveal` hook using the native IntersectionObserver API — no animation library dependency, kept deliberately lightweight
- Menu and Favorites content data-driven from `src/data/menu.js`
- Plain CSS with custom properties for the design token system
- Deployed via Netlify

## Run locally

\`\`\`
npm install
npm run dev
\`\`\`

## What I'd add next

- Real photography in the Favorites and Gallery sections (currently styled placeholders, ready for an `image` path)
- A newsletter/loyalty signup form
- A subtle page-load skeleton state before fonts finish loading

---
Built by [Sadaf](https://github.com/SadafCreates)
