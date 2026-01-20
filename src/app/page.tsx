"use client";

import { HeroSection } from "@/components/hero/HeroSection";
import { HorizontalGallery } from "@/components/collection/HorizontalGallery";
import { XRaySection } from "@/components/craftsmanship/XRaySection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="bg-dark-bg">
            {/* Hero with 3D Canvas */}
            <HeroSection />

            {/* Horizontal Scroll Collection Gallery */}
            <HorizontalGallery />

            {/* X-Ray Craftsmanship Section */}
            <XRaySection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
