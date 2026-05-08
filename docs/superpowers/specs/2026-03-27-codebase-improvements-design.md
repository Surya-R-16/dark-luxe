# Design Doc: Dark Luxe Codebase Improvements

**Date:** 2026-03-27
**Status:** Draft
**Author:** Gemini CLI

## Overview
This document outlines the strategy for improving the Dark Luxe codebase by centralizing data, optimizing image assets, and cleaning up technical debt in the 3D components.

## Goals
1. **Centralize Data:** Move hardcoded slide and product data from UI components to `src/data/products.ts`.
2. **Optimize Assets:** Replace standard `<img>` tags with Next.js `<Image />` for performance and LCP optimization.
3. **Clean Technical Debt:** Remove AI telemetry/agent logging from `Bag3D.tsx`.
4. **Smooth Interactivity:** Refactor 3D scroll logic to use linear interpolation (lerp) for smoother transitions.

## Architecture

### 1. Data Structure Refactoring
We will define a `LookbookSlide` type to ensure type safety across the application.

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

All slide data currently in `LookbookGrid.tsx` will be moved to `src/data/products.ts`.

### 2. Component Updates

#### LookbookGrid.tsx
- Remove hardcoded `slides` array.
- Import `lookbookSlides` from `@/data/products`.
- Replace all `<img>` with `<Image />`.
- Ensure proper `width`, `height`, and `priority` attributes for LCP images.

#### Bag3D.tsx
- Delete `#region agent log` blocks and associated `fetch` calls.
- Implement a `lerp` function or use `THREE.MathUtils.lerp` for property updates during scroll.
- Clean up the `useFrame` hook to focus purely on animation logic.

### 3. Global Image Audit
Identify and replace standard `<img>` tags in:
- `src/components/collection/ProductCard.tsx`
- `src/components/layout/Header.tsx` (Logos)
- Any other detected occurrences.

## Testing Strategy
1. **Visual Regression:** Manually verify that all images and 3D animations still render correctly and look better (smoother).
2. **Build Validation:** Run `npm run build` to ensure no TypeScript errors or broken imports.
3. **Performance Check:** Verify that Next.js is correctly optimizing images in the network tab.

## Future Considerations
- Replace Three.js `boxGeometry` placeholders with actual GLB/GLTF models.
- Implement a CMS (e.g., Sanity or Contentful) to manage product data externally.
