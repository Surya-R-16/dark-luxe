"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORD = "DARK LUXE";

export function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const timer = setTimeout(() => setIsVisible(false), prefersReduced ? 100 : 2400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[300] bg-dark flex flex-col items-center justify-center"
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                >
                    <div className="flex items-center gap-[0.35em] overflow-hidden">
                        {WORD.split("").map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15 + i * 0.07,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="font-serif font-light text-[clamp(40px,9vw,84px)] leading-none text-ivory tracking-[0.18em]"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="w-40 md:w-56 h-px bg-gold mt-6 origin-left"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 1.15 }}
                        className="text-[9px] md:text-[10px] tracking-[0.55em] uppercase text-text-muted mt-5 pl-[0.55em]"
                    >
                        Crafting Luxury with Elegance
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
