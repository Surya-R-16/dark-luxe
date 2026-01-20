"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SplitTextReveal } from "@/components/ui/TextReveal";

export function HeroSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Simulate loading
        const timer = setTimeout(() => setIsLoaded(true), 500);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden bg-dark-bg"
        >
            {/* 3D Canvas */}
            <HeroCanvas mousePosition={mousePosition} />

            {/* Content Overlay */}
            <motion.div
                className="relative z-10 h-full flex flex-col items-center justify-center px-4"
                style={{ opacity, scale, y }}
            >
                {/* Pre-heading */}
                <AnimatePresence>
                    {isLoaded && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-muted-text tracking-[0.3em] uppercase text-sm mb-8"
                        >
                            Introducing
                        </motion.p>
                    )}
                </AnimatePresence>

                {/* Main Title with Video Mask Effect */}
                <div className="relative">
                    {/* Video element hidden but used as texture source */}
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-22959-large.mp4" type="video/mp4" />
                    </video>

                    <motion.h1
                        className="font-serif font-black text-hero text-center relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <span className="holographic-text">DARK</span>
                        <br />
                        <span className="text-light-text">LUXE</span>
                    </motion.h1>

                    {/* Decorative lines */}
                    <motion.div
                        className="absolute -left-20 top-1/2 w-16 h-[1px] bg-gradient-to-r from-transparent to-accent-gold"
                        initial={{ scaleX: 0 }}
                        animate={isLoaded ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                        style={{ originX: 0 }}
                    />
                    <motion.div
                        className="absolute -right-20 top-1/2 w-16 h-[1px] bg-gradient-to-l from-transparent to-accent-gold"
                        initial={{ scaleX: 0 }}
                        animate={isLoaded ? { scaleX: 1 } : {}}
                        transition={{ duration: 1, delay: 1.2 }}
                        style={{ originX: 1 }}
                    />
                </div>

                {/* Tagline */}
                <motion.p
                    className="mt-8 text-xl md:text-2xl text-muted-text font-light tracking-wide text-center max-w-xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Sustainable luxury for the{" "}
                    <span className="text-accent-gold">modern leader</span>
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.3 }}
                >
                    <MagneticButton className="group px-10 py-4 bg-transparent border border-light-text/30 text-light-text text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:border-accent-gold hover:text-accent-gold">
                        <span className="flex items-center gap-3">
                            Shop on Amazon
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.8 }}
                >
                    <span className="text-muted-text text-xs tracking-[0.3em] uppercase">
                        Scroll
                    </span>
                    <motion.div
                        className="w-[1px] h-10 bg-gradient-to-b from-muted-text to-transparent"
                        animate={{ scaleY: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
