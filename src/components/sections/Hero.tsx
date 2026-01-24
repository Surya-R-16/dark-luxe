"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

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
                        <RevealText text="DARK LUX" delay={0.1} />
                        <br />
                        <span className="text-gold block mt-2 text-6xl md:text-8xl">
                            <RevealText text="RESORT '26" delay={0.3} />
                        </span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

function RevealText({ text, delay }: { text: string; delay: number }) {
    return (
        <span className="inline-block overflow-hidden pb-4 -mb-4"> {/* Padding/Margin hack for descenders */}
            <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1], // Custom luxury ease
                    delay: delay,
                }}
                className="inline-block"
            >
                {text}
            </motion.span>
        </span>
    );
}
