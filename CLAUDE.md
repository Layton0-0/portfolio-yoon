# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```powershell
npm run dev      # Dev server → http://localhost:5173
npm run build    # TypeScript check + production build (dist/)
npm run preview  # Preview production build locally
```

## Stack

- **Vite 6 + React 18 + TypeScript** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/vite` — no `tailwind.config.js`, configured in `src/index.css` with `@theme`
- **Framer Motion** — scroll-triggered animations (`whileInView`, `viewport: { once: true }`)
- **Lucide React** — icons

## Project Structure

```
src/
  data/portfolio.ts        # Single source of truth — all content (personal info, stats, tech stack, experience, projects, education, certs)
  components/
    Navbar.tsx             # Fixed top nav, scroll-aware backdrop blur
    Hero.tsx               # Full-viewport terminal-style hero with decorative blobs
    About.tsx              # Stats + specialties grid + Proven Impact card
    Skills.tsx             # Tech stack category cards (6 categories)
    Experience.tsx         # Company card with project blocks (latest first)
    Projects.tsx           # Personal project cards (latest first)
    Contact.tsx            # Contact cards + education/certs + CTA gradient card
    Footer.tsx             # Links + copyright
  App.tsx                  # Section composition
  main.tsx                 # Entry point
  index.css                # Tailwind v4 import + @theme font config
```

## Architecture

All portfolio content lives in `src/data/portfolio.ts` — when updating personal info, projects, or experience, edit only this file. Components import from it and render the data.

Section IDs (`#home`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`) are used for Navbar smooth-scroll links.

## Design

Reference design: binyam.io style (terminal-themed, light gray/white background, blue–teal gradient accents).

Key visual patterns:
- Terminal command header per section: `font-mono text-emerald-600`
- Section title gradient underline: `linear-gradient(to right, #2563eb, #0d9488)`
- Cards: `bg-white rounded-xl border border-gray-100 shadow-sm`
- Highlight badges: `bg-blue-50 border-blue-200 text-blue-700`
- Background decorative blobs: large circles, `opacity-[0.07] blur-3xl`

Fonts (Google Fonts, loaded in `index.html`):
- Body: Inter
- Terminal/mono: JetBrains Mono
