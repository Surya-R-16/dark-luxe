# Design Spec: Dark Luxe Website Revamp (Noir Edition)

## 1. Objective
Transform `darkluxe.in` from a generic "fancy redirect" into a high-end "Official Brand Showcase." The revamp focuses on a "Noir" aesthetic, increasing catalog depth (via placeholders), and establishing trust through explicit Amazon partnership and direct communication channels.

## 2. Visual & Brand Identity
*   **Theme:** "Luxury Noir" – Deep blacks (`#0E0D0B`), rich golds (`#B8975A`), and ivory text.
*   **Typography:** 
    *   Display: `Cormorant Garamond` (Serif) for elegance and authority.
    *   Body: `Jost` (Sans-serif) for modern readability.
*   **Atmosphere:** High-contrast, cinematic lighting, and smooth "fade-up" animations.

## 3. Key Components & Features

### A. The "Amazon-Forward" Strategy
*   **Messaging:** Explicitly brand the store as "Official Dark Luxe Showcase."
*   **CTAs:** Use "Shop on Amazon" for fulfillment actions, but keep "Explore Collection" for internal browsing.
*   **Trust Signals:** Add a "Fast Shipping via Amazon Prime" badge and a "Secure Checkout" icon.

### B. Catalog & Trust (High Impact)
*   **Placeholder Items:** Add 3-4 "Coming Soon" products to the collection grid to simulate a larger catalog.
*   **WhatsApp Concierge:** A persistent floating button for direct customer support (`wa.me`).
*   **Instagram Feed:** Placeholder for a future Instagram grid to show social presence.

### C. Layout Structure (Based on Template)
1.  **Header:** Transparent-to-Solid sticky nav with Gold accents.
2.  **Hero:** Cinematic background with "Carry Your Elegance Everywhere" messaging.
3.  **Marquee:** Scrolling strip highlighting "Vegan Leather," "Cruelty-Free," and "Made in India."
4.  **Featured Edit:** 3-column grid showing bestsellers (e.g., Ladii Legend).
5.  **Philosophy Section:** Two-column split with "Ethics Meet Elegance" story.
6.  **X-Ray/3D Section:** Integration of the existing `Bag3D` and `XRaySection` into the new Noir theme.
7.  **Collection Strip:** 4-column grid with "View All on Amazon" header.
8.  **Footer:** Structured columns with brand story and social links.

## 4. Technical Architecture
*   **Styling:** Tailwind CSS mapped to the new Noir palette (globals.css).
*   **Components:** Refactor existing components (`Hero`, `Header`, `Footer`) to match the template's HTML/CSS structure.
*   **Data:** Centralize all product metadata (including Amazon links and "Coming Soon" status) in `src/data/products.ts`.
*   **Animations:** Use Framer Motion for the "fade-up" effect and Lenis for smooth scrolling.

## 5. Success Criteria
*   Immediate "Luxury" visual impact upon landing.
*   Clear, trust-building path to purchase (Amazon).
*   Reduction in "thin catalog" perception.
*   Functional WhatsApp lead generation.
