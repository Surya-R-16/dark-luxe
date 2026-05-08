# Dark Luxe Website Revamp (Noir Edition) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the website into a high-end "Noir" luxury showcase with a focus on Amazon fulfillment and brand trust.

**Architecture:** Refactor existing Next.js components to match the Noir template, update global styling for cinematic aesthetics, and expand the product data with placeholders and trust signals.

**Tech Stack:** Next.js 14, Tailwind CSS, Framer Motion, TypeScript.

---

### Task 1: Update Global Styles & Fonts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update `globals.css` with Noir palette**
```css
@layer base {
  :root {
    --gold: #B8975A;
    --gold-light: #D4B07A;
    --gold-dark: #8A6E3E;
    --ivory: #F7F4EE;
    --dark: #0E0D0B;
    --dark-mid: #1C1A16;
    --dark-soft: #2A2720;
    --text-muted: #8A8478;
    --text-light: #C8BFB0;
  }

  body {
    @apply bg-[#0E0D0B] text-[#F7F4EE] font-light;
    letter-spacing: 0.02em;
    overflow-x: hidden;
  }
}
```

- [ ] **Step 2: Add Google Fonts to `layout.tsx`**
```typescript
import { Cormorant_Garamond, Jost } from 'next/font/google';

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'],
  variable: '--font-cormorant'
});

const jost = Jost({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-jost'
});

// Update RootLayout to use these variables in the <html> or <body> tag
```

- [ ] **Step 3: Commit**
```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "style: update noir palette and typography"
```

---

### Task 2: Centralize Noir Product Data

**Files:**
- Modify: `src/data/products.ts`

- [ ] **Step 1: Update `products` array with Noir content**
```typescript
export const products = [
    {
        id: 1,
        name: "The Ladii Legend",
        price: "₹1,099",
        originalPrice: "₹2,999",
        tag: "Bestseller",
        category: "Office Bag",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 2,
        name: "Dark Onyx Twin",
        price: "₹1,199",
        originalPrice: "₹3,499",
        tag: "Office Bag",
        category: "Office Bag",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1969&auto=format&fit=crop",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 3,
        name: "The Power Statement",
        price: "₹999",
        originalPrice: "₹2,499",
        tag: "New Arrival",
        category: "Office Bag",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithEregance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 4,
        name: "The Noir Classic",
        price: "—",
        originalPrice: "—",
        tag: "Coming Soon",
        category: "New Arrival",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
        amazonUrl: "#",
        isComingSoon: true
    }
];
```

- [ ] **Step 2: Commit**
```bash
git add src/data/products.ts
git commit -m "data: update products with noir content and placeholders"
```

---

### Task 3: Revamp Header & Footer

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Implement Noir Header**
Update styling for `nav-logo` (Cormorant), gold `btn-nav` border, and backdrop-blur.

- [ ] **Step 2: Implement Noir Footer**
Update layout to 4 columns: Brand, About, Shop, Support. Include Amazon and Instagram links.

- [ ] **Step 3: Commit**
```bash
git add src/components/layout/Header.tsx src/components/layout/Footer.tsx
git commit -m "refactor: noir header and footer implementation"
```

---

### Task 4: Noir Hero & Marquee

**Files:**
- Modify: `src/components/hero/HeroSection.tsx`
- Create: `src/components/sections/Marquee.tsx`

- [ ] **Step 1: Update Hero Section**
Use a cinematic background image and implement the "Carry Your Elegance Everywhere" text layout.

- [ ] **Step 2: Create Marquee component**
Implement the scrolling gold strip with "Vegan Leather · Cruelty-Free · Made in India".

- [ ] **Step 3: Commit**
```bash
git add src/components/hero/HeroSection.tsx src/components/sections/Marquee.tsx
git commit -m "feat: noir hero and scrolling marquee"
```

---

### Task 5: Trust Signals & Interactivity

**Files:**
- Create: `src/components/ui/WhatsAppButton.tsx`
- Modify: `src/components/sections/LookbookGrid.tsx`

- [ ] **Step 1: Create WhatsApp Floating Button**
Persistent green button with SVG icon linked to `wa.me/91XXXXXXXXXX`.

- [ ] **Step 2: Update LookbookGrid (Featured Edit)**
Refactor the grid to match the Noir template: 3-column layout, gold price accents, and Amazon CTAs.

- [ ] **Step 3: Commit**
```bash
git add src/components/ui/WhatsAppButton.tsx src/components/sections/LookbookGrid.tsx
git commit -m "feat: add trust signals and update product grid"
```

---

### Task 6: Final Integration & Cleanup

- [ ] **Step 1: Audit all pages for "Noir" consistency**
- [ ] **Step 2: Verify Amazon links and "Coming Soon" states**
- [ ] **Step 3: Final Commit**
```bash
git commit -m "feat: complete noir website revamp"
```
