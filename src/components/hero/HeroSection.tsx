"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const words = ["Carry", "Your", "Elegance", "Everywhere"];

export function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
            y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
    };

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            className="min-h-screen relative flex items-center overflow-hidden bg-dark"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(184,151,90,0.06)_0%,transparent_70%)]" />

            {/* Noise texture */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-[2] w-full max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Typography + CTAs */}
                <div className="flex flex-col gap-6 md:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold before:content-[''] before:block before:w-10 before:h-[1px] before:bg-gold"
                    >
                        New Collection 2026
                    </motion.div>

                    <h1 className="font-serif text-[clamp(32px,7vw,88px)] font-light leading-[0.95] tracking-tight text-ivory">
                        {words.map((word, i) => (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.3 + i * 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="inline-block mr-[0.25em]"
                            >
                                {i === 2 ? (
                                    <em className="text-gold-light">{word}</em>
                                ) : (
                                    word
                                )}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="text-sm tracking-[0.06em] text-text-light leading-[1.8] max-w-[420px]"
                    >
                        Vegan luxury handbags crafted for women who lead with purpose.
                        Sustainable, ethical, and undeniably refined.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D"
                            target="_blank"
                            className="group relative inline-block px-6 py-3 md:px-9 md:py-4 bg-gold text-dark text-[11px] font-medium tracking-[0.25em] uppercase overflow-hidden"
                        >
                            <span className="relative z-[1]">Explore Collection</span>
                            <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                        <Link
                            href="/about"
                            className="inline-block px-6 py-3 md:px-9 md:py-4 border border-gold/40 text-gold text-[11px] tracking-[0.25em] uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300"
                        >
                            Our Story
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Floating Product Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="flex items-center justify-center relative mt-8 lg:mt-0"
                >
                    {/* Glow behind image */}
                    <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] bg-gold/5 rounded-full blur-[60px] md:blur-[80px]" />

                    {/* Image container */}
                    <motion.div
                        className="relative w-[280px] h-[360px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[480px] border border-gold/20 overflow-hidden"
                        style={{
                            x: mousePos.x,
                            y: mousePos.y,
                            transition: "transform 0.3s ease-out",
                        }}
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center brightness-[0.85]"
                            style={{
                                backgroundImage: `url('https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2669&auto=format&fit=crop')`,
                            }}
                        />
                        <div className="absolute inset-0 border border-gold/10" />
                    </motion.div>

                    {/* Decorative corner accents — hidden on smallest screens */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 border-t border-r border-gold/30 hidden sm:block" />
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 md:w-20 md:h-20 border-b border-l border-gold/30 hidden sm:block" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3"
            >
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold/50">Scroll</span>
                <motion.div
                    className="w-[1px] h-12 bg-gold/20 relative overflow-hidden"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-full h-1/2 bg-gold" />
                </motion.div>
            </motion.div>
        </section>
    );
}
