"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { TextReveal, SplitTextReveal } from "@/components/ui/TextReveal";

const products = [
    {
        id: 1,
        name: "The Executive",
        price: "$149",
        description: "Premium vegan leather with padded laptop sleeve",
        image: "/products/noir.jpg",
        color: "#1a1a1a",
    },
    {
        id: 2,
        name: "The Weekender",
        price: "$189",
        description: "Water-resistant travel companion",
        image: "/products/eclipse.jpg",
        color: "#0d0d0d",
    },
    {
        id: 3,
        name: "The Signature",
        price: "$129",
        description: "Handcrafted fabric accents & gold finish",
        image: "/products/obsidian.jpg",
        color: "#1f1f1f",
    },
    {
        id: 4,
        name: "The Modern",
        price: "$110",
        description: "Structured silhouette for daily essentials",
        image: "/products/phantom.jpg",
        color: "#151515",
    },
    {
        id: 5,
        name: "The Voyager",
        price: "$165",
        description: "Smart compartments for the global traveler",
        image: "/products/abyss.jpg",
        color: "#0a0a0a",
    },
];

export function HorizontalGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(titleRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

    return (
        <section ref={containerRef} className="relative h-[500vh] bg-dark-bg">
            {/* Section Title - Sticky */}
            <div className="sticky top-0 h-screen overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent" />

                {/* Title */}
                <motion.div
                    ref={titleRef}
                    className="absolute top-20 left-1/2 -translate-x-1/2 z-10"
                    style={{ opacity: titleOpacity, scale: titleScale }}
                >
                    <motion.p
                        className="text-muted-text tracking-[0.4em] uppercase text-xs text-center mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        The Collection
                    </motion.p>
                    <motion.h2
                        className="font-serif text-display text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-light-text">Style with </span>
                        <span className="holographic-text">Purpose</span>
                    </motion.h2>
                </motion.div>

                {/* Horizontal Scroll Container */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-20 pl-[10vw] pr-[100vw]"
                    style={{ x }}
                >
                    {/* Intro text card */}
                    <div className="flex-shrink-0 w-[30vw] h-[60vh] flex flex-col justify-center">
                        <TextReveal delay={0.4} type="blur">
                            <p className="text-2xl font-light text-light-text/80 leading-relaxed">
                                Redefining modern luxury with a conscience—
                                <span className="text-accent-gold">ethical, cruelty-free, and timeless</span>.
                                Designed for the woman who leads.
                            </p>
                        </TextReveal>
                        <motion.div
                            className="mt-8 w-24 h-[1px] bg-gradient-to-r from-accent-gold to-transparent"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1, delay: 0.8 }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>

                    {/* Product Cards */}
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            scrollProgress={scrollYProgress}
                        />
                    ))}

                    {/* End card */}
                    <div className="flex-shrink-0 w-[30vw] h-[60vh] flex flex-col justify-center items-center">
                        <motion.p
                            className="text-muted-text tracking-[0.3em] uppercase text-sm mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            Discover More
                        </motion.p>
                        <motion.a
                            href="https://www.amazon.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-serif text-4xl text-light-text hover:text-accent-gold transition-colors duration-500 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="hover"
                        >
                            Visit Amazon Store →
                        </motion.a>
                    </div>
                </motion.div>

                {/* Progress indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-dark-surface overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-accent-purple to-accent-gold"
                        style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                    />
                </div>
            </div>
        </section>
    );
}
