"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

const craftDetails = [
    {
        title: "Eco-Conscious Materials",
        description: "Premium cruelty-free vegan leather",
        icon: "◈",
    },
    {
        title: "Robotic Precision",
        description: "First in Asia to use robotic manufacturing",
        icon: "◇",
    },
    {
        title: "Artisanal Finish",
        description: "Hand-finished details by master craftsmen",
        icon: "◆",
    },
];

export function XRaySection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isInverted, setIsInverted] = useState(false);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative min-h-screen py-32 bg-dark-bg overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-20"
                    style={{ opacity }}
                >
                    <motion.p
                        className="text-muted-text tracking-[0.4em] uppercase text-xs mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        The Craftsmanship
                    </motion.p>
                    <motion.h2
                        className="font-serif text-display"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-light-text">Technology Meets </span>
                        <span className="holographic-text">Tradition</span>
                    </motion.h2>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Before/After Comparison */}
                    <motion.div
                        className="relative"
                        style={{ y }}
                    >
                        <div className="relative aspect-square max-w-lg mx-auto overflow-hidden rounded-sm">
                            {/* Before Image (Regular view) */}
                            <div
                                className="absolute inset-0 bg-dark-surface flex items-center justify-center"
                                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                            >
                                <div className="relative w-64 h-48 group">
                                    {/* Regular handbag view */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d] rounded-lg shadow-2xl">
                                        <div className="absolute inset-4 border border-white/10 rounded" />
                                        <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-white/20" />
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-20 border-t-4 border-l-4 border-r-4 border-[#2a2a2a] rounded-t-full" />
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-3 bg-gradient-to-r from-accent-gold to-liquid-gold rounded" />
                                    </div>
                                    {/* Label */}
                                    <div className="absolute -bottom-8 left-0 text-muted-text text-xs tracking-wider uppercase">
                                        Exterior
                                    </div>
                                </div>
                            </div>

                            {/* After Image (X-Ray/Wireframe view) */}
                            <div
                                className="absolute inset-0 bg-[#030303] flex items-center justify-center"
                                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                            >
                                <div className="relative w-64 h-48">
                                    {/* Wireframe view */}
                                    <div className="absolute inset-0 border-2 border-accent-purple/50 rounded-lg bg-[linear-gradient(rgba(123,63,228,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(123,63,228,0.1)_1px,transparent_1px)] bg-[size:20px_20px]">

                                        {/* Scanning Beam */}
                                        <motion.div
                                            className="absolute left-0 right-0 h-[2px] bg-accent-purple shadow-[0_0_15px_rgba(123,63,228,0.8)] z-10"
                                            animate={{ top: ["0%", "100%", "0%"] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        />

                                        {/* Internal structure lines */}
                                        <div className="absolute inset-4 border border-accent-purple/30 rounded border-dashed" />
                                        <div className="absolute top-1/3 left-4 right-4 h-[1px] bg-accent-purple/40" />
                                        <div className="absolute top-2/3 left-4 right-4 h-[1px] bg-accent-purple/40" />
                                        <div className="absolute left-1/3 top-4 bottom-4 w-[1px] bg-accent-purple/40" />
                                        <div className="absolute left-2/3 top-4 bottom-4 w-[1px] bg-accent-purple/40" />

                                        {/* Handle wireframe */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-20 border-2 border-accent-blue/50 rounded-t-full border-dashed" />

                                        {/* Hardware highlight */}
                                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-3 border border-accent-gold/60 rounded flex items-center justify-center">
                                            <div className="w-2 h-2 bg-accent-gold/40 rounded-full animate-pulse" />
                                        </div>

                                        {/* Measurement annotations */}
                                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 text-accent-purple/60 text-xs font-mono">
                                            28cm
                                        </div>
                                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-accent-blue/60 text-xs font-mono">
                                            38cm
                                        </div>

                                        {/* Sci-fi Overlay Data */}
                                        <div className="absolute top-2 left-2 text-[0.5rem] text-accent-purple/40 font-mono leading-none">
                                            ID: 8X-229<br />n: 99.4%
                                        </div>
                                    </div>
                                    {/* Label */}
                                    <div className="absolute -bottom-8 right-0 text-accent-purple text-xs tracking-wider uppercase">
                                        Structure
                                    </div>
                                </div>
                            </div>

                            {/* Slider Handle */}
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-accent-gold cursor-ew-resize z-10"
                                style={{ left: `${sliderPosition}%` }}
                            >
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-dark-bg border-2 border-accent-gold rounded-full flex items-center justify-center">
                                    <span className="text-accent-gold text-xs">⟷</span>
                                </div>
                            </div>

                            {/* Hidden range input for slider */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPosition}
                                onChange={handleSliderChange}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                            />
                        </div>

                        <p className="text-center text-muted-text text-sm mt-6">
                            Drag to reveal the internal structure
                        </p>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <TextReveal delay={0.2} type="blur">
                            <p className="text-xl text-light-text/80 leading-relaxed mb-12">
                                We blend state-of-the-art robotic precision with centuries-old
                                artisanal techniques to create bags that are ethically crafted
                                and built to last.
                            </p>
                        </TextReveal>

                        {/* Craft Details */}
                        <div className="space-y-8">
                            {craftDetails.map((detail, index) => (
                                <motion.div
                                    key={detail.title}
                                    className="flex items-start gap-6 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                                >
                                    <div className="w-12 h-12 flex items-center justify-center border border-accent-gold/30 text-accent-gold text-xl group-hover:border-accent-gold group-hover:bg-accent-gold/10 transition-all duration-300">
                                        {detail.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-light-text mb-1">
                                            {detail.title}
                                        </h4>
                                        <p className="text-muted-text text-sm">
                                            {detail.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            className="mt-12"
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 1 }}
                        >
                            <MagneticButton
                                className="px-8 py-3 border border-accent-gold/50 text-accent-gold text-sm tracking-[0.15em] uppercase hover:bg-accent-gold/10 transition-colors duration-300"
                                onClick={() => {
                                    const newInverted = !isInverted;
                                    setIsInverted(newInverted);
                                    // Animate slider to 100% (X-Ray) or 0% (Normal)
                                    setSliderPosition(newInverted ? 100 : 0);
                                }}
                            >
                                {isInverted ? "Reset View" : "Reveal Structure"}
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
