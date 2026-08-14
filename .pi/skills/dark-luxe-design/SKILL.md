---
name: dark-luxe-design
description: Dark Luxe brand design system guardrails for this repo. Use for ALL UI/frontend work — new pages, components, styling, or edits to existing ones. Encodes the exact design tokens, typography rules, component vocabulary, motion conventions, and an anti-AI-slop checklist so every change stays on-brand.
---

# Dark Luxe — Design System Guardrails

Premium vegan handbag brand. Aesthetic: **dark editorial luxury** — black-on-gold, quiet, restrained. Think CELINE × Noir film grain, not SaaS dashboard. If a change looks like it could come from a default template, it's wrong.

## 1. Design Tokens (never invent new ones)

| Token | Value | Usage |
|---|---|---|
| `dark` | `#0E0D0B` | Page background |
| `dark-mid` | `#1C1A16` | Section alt backgrounds, drawer |
| `dark-soft` | `#2A2720` | Image placeholders, card bg |
| `ivory` | `#F7F4EE` | Primary text |
| `gold` | `#B8975A` | Accents, CTAs, hairlines |
| `gold-light` | `#D4B07A` | Prices, italic accents, hover |
| `gold-dark` | `#8A6E3E` | Rare deep accent |
| `text-muted` | `#8A8478` | Secondary text |
| `text-light` | `#C8BFB0` | Tertiary text |

Tailwind classes: `bg-dark`, `text-gold`, `text-text-muted`, `border-gold/10`, etc. — all defined in `tailwind.config.ts` and `globals.css` CSS vars. Never hardcode hex values in components.

## 2. Typography (the brand voice)

- **Display headings**: Cormorant Garamond (`font-serif`), `font-light`, sizes via `clamp()` (e.g. `text-[clamp(32px,8vw,96px)]`). Never bold. `leading-none` or tight.
- **Body**: Jost (`font-jost` / default sans), `font-light`, `text-text-muted` or `text-text-light`.
- **Eyebrow labels**: `text-[10px] tracking-[0.3em] uppercase text-gold`, optionally with a 30px gold hairline: `before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold`.
- **Emphasis**: italic serif word in gold-light inside headings — `<em className="italic text-gold-light">Word</em>`. Use sparingly (max 1–2 per section).
- **Buttons/links**: `text-[10-11px] tracking-[0.2-0.3em] uppercase`. Solid gold (`bg-gold text-dark hover:bg-gold-light`) or hairline outline (`border border-gold text-gold hover:bg-gold hover:text-dark`).
- **Never**: bold-heavy headings, Comic/rounded fonts, default-blue links, un-tracked uppercase, text that sits flush with no letter-spacing.

## 3. Layout Rhythm

- Content wrapper: `max-w-7xl mx-auto px-6 md:px-10`
- Section padding: `py-16 md:py-[100px]` (homepage rhythm)
- Page top offset for fixed header: `pt-28 md:pt-40`
- Dividers: `border-gold/10` hairlines, never heavy shadows
- Image overlays for legibility: `bg-gradient-to-t from-dark/80 via-dark/30 to-transparent` — never purple/blue gradients

## 4. Component Vocabulary (REUSE, don't reinvent)

- `Header` — fixed nav; **Bag button must call `setIsCartOpen(true)`** (drawer), never link to /cart
- `LookbookCarousel` — homepage hero only; slides come from `src/data/products.ts` (`shootSlides` / `lookbookSlides`)
- `ProductGrid` — the ONLY way to render product cards (hover image swap, gold hairline, add-to-bag). Do not hand-roll card grids.
- `Philosophy`, `Marquee`, `NewsletterSection` — homepage sections
- `CartDrawer`, `Preloader`, `GrainOverlay` — layout-level; keep their z-order: preloader 300, grain 320, drawer 220, mobile menu 200
- `useCart()` from `CartContext` — all cart state; `addToCart` auto-opens drawer
- PDP pattern (`src/app/products/[id]/page.tsx`): breadcrumb → gallery (thumbnails + zoom lightbox + counter) → sticky info (savings badge, colour, Add to Bag + Buy on Amazon, trust strip, accordions) → craftsmanship section → related
- Product data lives in `src/data/products.ts` (`products`, `collectionDetails`, slides). Edit data there, never hardcode products in pages.

## 5. Motion Conventions (framer-motion)

- Entrance: `initial={{ opacity: 0, y: 28 }}` → `whileInView`/`animate`, `duration: 0.7`, `viewport={{ once: true }}`
- Reveal on scroll: use existing `Reveal` component (`src/components/ui/Reveal.tsx`) when appropriate
- Drawer/overlay ease: `[0.77, 0, 0.175, 1]`; content ease: `[0.22, 1, 0.36, 1]`
- Ken Burns: slow 8–10s easeOut scale for hero imagery
- Respect `prefers-reduced-motion`. Keep animations subtle — luxury is restraint.

## 6. Anti-AI-Slop Checklist (run before finishing ANY UI change)

- [ ] No default Tailwind look: no `rounded-lg` everywhere, no `shadow-md`, no blue/purple palette, no white cards — dark-soft panels + gold hairlines only
- [ ] No generic gradients (purple/blue/rainbow). Only dark-to-transparent overlays over images
- [ ] No emoji in UI copy (footer 🇮🇳 is pre-existing; don't add more)
- [ ] No lorem ipsum / placeholder copy / unsplash URLs
- [ ] Every image uses `next/image` with `fill` + `object-cover` (never plain `<img>`)
- [ ] Headings are serif + light; labels are tracked uppercase; no font-bold headings
- [ ] No new color values outside the token table above
- [ ] Reuses existing components (ProductGrid, Header, useCart) rather than duplicating patterns
- [ ] Hydration-safe: no `window`/`localStorage` access during render — only in `useEffect`
- [ ] If it's a new section, it fits the rhythm: eyebrow → serif headline with max one italic gold word → muted body → hairline-divided details
- [ ] Nothing screams "template": check for generic hero stock photos, centered-everything-with-card layouts, and default cursor/scrollbar chrome (site hides scrollbars, has grain overlay + preloader)

## 7. Known Landmines

- `three` / `@react-three/fiber` were **removed** — don't re-add unless explicitly asked for a 3D feature
- `Hero.tsx`, `HeroSection.tsx`, `LookbookGrid`, `Cursor`, `SmoothScroll` were deleted — don't resurrect
- Carousel slides: each split-right slide has a `productId` that must point to a real product in `products` (the Shop Now button links to it)
- Real product photography is a known limitation (AI-generated images) — never ship UI that makes the images look worse; keep `brightness-[0.9]` hover-to-100 treatment
- Newsletter form has no backend yet — keep the TODO, don't pretend it sends
- Both `package-lock.json` and `bun.lock` exist — when adding/removing deps, sync both (`npm install` then `bun install`)
- After dependency changes, `rm -rf .next` before `npm run dev` to avoid stale-chunk errors
