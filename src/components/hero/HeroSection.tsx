"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { HeroCanvas } from "./HeroCanvas";
import { MagneticButton } from "@/components/ui/MagneticButton";

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
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]); // Slower parallax for "heavy" feel

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

    const cinematicEase = [0.22, 1, 0.36, 1]; // Custom cubic-bezier for premium feel

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
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, delay: 0.5, ease: cinematicEase }}
                            className="text-muted-text tracking-[0.5em] uppercase text-xs md:text-sm mb-12"
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
                        className="font-serif font-black text-hero text-center relative leading-tight"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 2, delay: 0.8, ease: cinematicEase }}
                    >
                        <span className="holographic-text inline-block filter brightness-125">DARK</span>
                        <br />
                        <span className="text-light-text inline-block">LUXE</span>
                    </motion.h1>

                    {/* Decorative lines - Slower expansion */}
                    <motion.div
                        className="absolute -left-20 md:-left-32 top-1/2 w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-accent-gold"
                        initial={{ scaleX: 0 }}
                        animate={isLoaded ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.5, delay: 1.5, ease: cinematicEase }}
                        style={{ originX: 0 }}
                    />
                    <motion.div
                        className="absolute -right-20 md:-right-32 top-1/2 w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-accent-gold"
                        initial={{ scaleX: 0 }}
                        animate={isLoaded ? { scaleX: 1 } : {}}
                        transition={{ duration: 1.5, delay: 1.5, ease: cinematicEase }}
                        style={{ originX: 1 }}
                    />
                </div>

                {/* Tagline */}
                <motion.p
                    className="mt-12 text-lg md:text-2xl text-muted-text font-light tracking-wider text-center max-w-xl leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, delay: 1.2, ease: cinematicEase }}
                >
                    Sustainable luxury for the{" "}
                    <span className="text-accent-gold font-normal">modern leader</span>
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.5, delay: 1.6, ease: cinematicEase }}
                >
                    <MagneticButton className="group px-12 py-4 bg-transparent border border-white/10 text-light-text text-sm tracking-[0.2em] uppercase transition-all duration-700 hover:border-accent-gold hover:text-accent-gold hover:bg-white/5 backdrop-blur-sm">
                        <span className="flex items-center gap-4">
                            Shop on Amazon
                            <motion.span
                                className="inline-block text-accent-gold"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                →
                            </motion.span>
                        </span>
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ duration: 1.5, delay: 2.2, ease: cinematicEase }}
                >
                    <span className="text-muted-text/50 text-[10px] tracking-[0.4em] uppercase">
                        Scroll
                    </span>
                    <motion.div
                        className="w-[1px] h-16 bg-gradient-to-b from-accent-gold/50 to-transparent"
                        animate={{ scaleY: [0, 1, 0], transformOrigin: ["top", "top", "bottom"] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
