# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Tech Stack

- **Next.js 14** (App Router) with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Swiper** (installed, not yet used)

## Architecture

This is a single-page marketing site for a home theater installation company. All source code lives in `src/app/`.

### Page structure (`page.tsx`)

The root page is a `"use client"` component that:
- Tracks window width to derive `isMobile` (breakpoint: 768px)
- Hides the nav until client hydration (`isVisible` flag) to avoid SSR width mismatch
- Passes `isNavFixed` state down to `Nav` and up from `FixedNavSection` via an intersection observer

### Key components

- **`Hero`** — Full-screen slideshow using CSS `imageAnimation` keyframes (defined in `globals.css`). Images are loaded from `public/optimized/` and listed in `src/app/utils/lists.tsx`. Animation duration scales with the number of photos (`photos.length * 6` seconds per cycle, 6s per photo).
- **`Nav`** — Switches between two Tailwind class strings: `absolute` (overlays hero, large logo) and `fixed` (compact, slides down from top) based on `isFixed || isMobile`.
- **`FixedNavSection`** — Full-screen content sections below the hero. Uses Framer Motion `useInView` (50% threshold) to trigger `setIsNavFixed`, causing the nav to switch to its fixed style. Accepts a `theme` prop: `'white'` (bg-stone-200) or `'black'` (bg-black).
- **`MobileMenu` / `MobileMenuButton`** — Animated full-screen overlay menu for mobile, using Framer Motion `AnimatePresence`.

### Styling conventions

- Brand color: `#FFC629` (signature yellow) — referenced as `text-signature-yellow` (must be configured in Tailwind config or globals)
- Custom CSS classes in `globals.css`: `.grid-background` (conic-gradient checkerboard), `.yellow-text-shadow`
- Google Fonts used: `Inter` (body, via layout), `Play` and `Exo_2` (headings/nav, loaded in `page.tsx`)
- Mobile breakpoint: `md` (768px) — nav links hidden below this, hamburger shown

### Adding hero images

Add entries to `homepage_hero_photos` in `src/app/utils/lists.tsx` and place optimized images in `public/optimized/`.
