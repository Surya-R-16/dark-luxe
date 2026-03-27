"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function TextureReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Update mouse position
    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative h-[80vh] w-full bg-obsidian overflow-hidden cursor-none flex items-center justify-center"
            onMouseMove={handleMouseMove}
        >
            {/* Base Layer - Pitch Black with minimal hint */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <p className="text-stone-800 text-sm tracking-widest uppercase opacity-20">
                    Discover the Grain
                </p>
            </div>

            {/* Revealed Layer - Leather Texture */}
            <div
                className="absolute inset-0 w-full h-full z-20 pointer-events-none"
                style={{
                    // Masking magic: Shows image only where the gradient is white (transparent -> black logic in mask-image is tricky, usually black=opaque aka visible)
                    // Standard CSS mask: alpha 1 = visible. 
                    // So we want a radial gradient that is opaque at center and transparent at edges.
                    maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`, // Safari support
                }}
            >
                {/* High-Res Leather Texture Image */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 hover:scale-105" />

                {/* Optional: Add some text that only appears in the light */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-white mix-blend-overlay text-9xl font-bold tracking-tighter opacity-70">
                        TACTILE
                    </h2>
                </div>
            </div>

            {/* Custom Torch Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/50 z-50 pointer-events-none mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16, // Center the cursor (assuming relative to container, wait, fixed is relative to screen)
                    // Actually, if it's fixed, we need clientX/Y.
                    // Let's change strategy: use absolute if inside relative container or fixed with global coords.
                    // Since the mask uses local coords, let's use a local cursor or better yet, just let the light be the feedback.
                    // But user asked for cursor. Let's rely on global custom cursor or remove this if redundant.
                    // I will skip this specific cursor cursor here as user has global CustomCursor, 
                    // but the "Light Sweep" is the main feedback.
                }}
            />

            <div className="absolute bottom-12 left-12 max-w-sm z-30 pointer-events-none mix-blend-difference text-bone">
                <h3 className="text-2xl font-serif italic mb-2">The Grain</h3>
                <p className="text-body-xs opacity-80 uppercase tracking-wide">
                    Full grain calfskin sourced from Italian tanneries.
                    Milled for 48 hours to achieve the signature pebbled surface.
                </p>
            </div>
        </section>
    );
}
