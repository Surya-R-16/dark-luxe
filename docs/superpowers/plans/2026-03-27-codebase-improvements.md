# Dark Luxe Codebase Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Centralize product data, optimize image assets using Next.js `<Image />`, and clean up technical debt in the 3D component.

**Architecture:** Data-driven UI approach by moving hardcoded content to a central repository, replacing legacy `<img>` tags with optimized Next.js components, and refactoring 3D animation logic for smoothness and maintainability.

**Tech Stack:** Next.js 14, TypeScript, Framer Motion, Three.js (React Three Fiber).

---

### Task 1: Define Shared Types

**Files:**
- Create: `src/types/lookbook.ts`
- Modify: `src/types.d.ts`

- [ ] **Step 1: Create lookbook types**
```typescript
export type LookbookSlide = 
  | { type: 'intro'; title: string; subtitle: string }
  | { type: 'brand-story'; title: string }
  | { 
      type: 'split-right' | 'split-left'; 
      modelImage: string; 
      productImage: string; 
      productName: string; 
      productSubtitle: string; 
      productPrice: string; 
      originalPrice: string; 
    };
```

- [ ] **Step 2: Update global types**
Add `export * from './types/lookbook';` to `src/types.d.ts`.

- [ ] **Step 3: Commit**
```bash
git add src/types/lookbook.ts src/types.d.ts
git commit -m "chore: define LookbookSlide types"
```

---

### Task 2: Centralize Lookbook Data

**Files:**
- Modify: `src/data/products.ts`

- [ ] **Step 1: Move data from LookbookGrid.tsx to products.ts**
```typescript
import { LookbookSlide } from "@/types/lookbook";

export const lookbookSlides: LookbookSlide[] = [
    {
        type: "intro",
        title: "2026",
        subtitle: "Crafting Luxury with Elegance",
    },
    {
        type: "split-right",
        modelImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2574&auto=format&fit=crop",
        productImage: "/products/beige-1.jpg",
        productName: "THE LADII LEGEND",
        productSubtitle: "Office Bag",
        productPrice: "₹1,099",
        originalPrice: "₹2,999",
    },
    {
        type: "split-left",
        modelImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop",
        productImage: "/products/beige-2.jpg",
        productName: "DARK ONYX TWIN",
        productSubtitle: "Office Bag",
        productPrice: "₹1,199",
        originalPrice: "₹3,499",
    },
    {
        type: "split-right",
        modelImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2574&auto=format&fit=crop",
        productImage: "/products/beige-3.jpg",
        productName: "THE POWER STATEMENT",
        productSubtitle: "Office Bag",
        productPrice: "₹999",
        originalPrice: "₹2,499",
    },
    {
        type: "brand-story",
        title: "OUR PHILOSOPHY",
    },
];
```

- [ ] **Step 2: Commit**
```bash
git add src/data/products.ts
git commit -m "feat: centralize lookbook slides data"
```

---

### Task 3: Refactor LookbookGrid Component

**Files:**
- Modify: `src/components/sections/LookbookGrid.tsx`

- [ ] **Step 1: Update imports and remove hardcoded data**
Import `lookbookSlides` from `@/data/products` and `Image` from `next/image`.

- [ ] **Step 2: Replace <img> with <Image /> in SplitSlideRight and SplitSlideLeft**
Use `fill` and `object-contain` or `object-cover` with a parent container having `aspect-ratio`.

- [ ] **Step 3: Update LookbookGrid to use centralized data**
```typescript
export function LookbookGrid() {
    return (
        <section className="bg-[#F5F5F3]">
            {lookbookSlides.map((slide, index) => (
                // ... mapping logic remains similar but uses centralized data
            ))}
        </section>
    );
}
```

- [ ] **Step 4: Commit**
```bash
git add src/components/sections/LookbookGrid.tsx
git commit -m "refactor: use centralized data and Next.js Image in LookbookGrid"
```

---

### Task 4: Clean up Bag3D Technical Debt

**Files:**
- Modify: `src/components/3d/Bag3D.tsx`

- [ ] **Step 1: Remove #region agent log blocks**
Surgically delete all telemetry code and `fetch` calls.

- [ ] **Step 2: Implement smooth scroll transitions with lerp**
Use `THREE.MathUtils.lerp` for rotation and position updates to ensure fluidity.

- [ ] **Step 3: Commit**
```bash
git add src/components/3d/Bag3D.tsx
git commit -m "chore: remove AI telemetry and smoothen 3D transitions"
```

---

### Task 5: Global Image Optimization Audit

**Files:**
- Modify: `src/app/shop/page.tsx`
- Modify: `src/app/collections/page.tsx`
- Modify: `src/app/about/page.tsx`

- [ ] **Step 1: Replace <img> with <Image /> in Shop page**
- [ ] **Step 2: Replace <img> with <Image /> in Collections page**
- [ ] **Step 3: Replace <img> with <Image /> in About page**

- [ ] **Step 4: Verify build and performance**
Run `npm run build` and check for any layout shifts.

- [ ] **Step 5: Commit**
```bash
git add src/app/shop/page.tsx src/app/collections/page.tsx src/app/about/page.tsx
git commit -m "perf: optimize all remaining image assets with Next.js Image"
```

---

### Task 6: Cleanup RefactorComparison

**Files:**
- Delete: `src/components/sections/RefactorComparison.tsx`

- [ ] **Step 1: Delete the temporary comparison component**
- [ ] **Step 2: Commit**
```bash
git rm src/components/sections/RefactorComparison.tsx
git commit -m "chore: remove temporary refactor comparison component"
```
