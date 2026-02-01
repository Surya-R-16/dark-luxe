"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-obsidian">
            {/* Background Image / Video */}
            <motion.div
                style={{ scale, y }}
                className="absolute inset-0 z-0"
            >
                {/* Placeholder for "Handbag Silhouette in Shadow" */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-charcoal to-obsidian opacity-80" />
                {/*  Ideally this is an <Image> or <video> */}
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2535&auto=format&fit=crop')] bg-cover bg-center brightness-50 contrast-125" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center overflow-hidden">
                    <h1 className="font-serif text-hero-clamp text-bone tracking-tight-heading leading-none">
                        <Reveal delay={0.1}>
                            DARK LUX
                        </Reveal>
                        <br />
                        <span className="text-gold block mt-2 text-6xl md:text-8xl">
                            <Reveal delay={0.3} width="100%">
                                RESORT '26
                            </Reveal>
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

