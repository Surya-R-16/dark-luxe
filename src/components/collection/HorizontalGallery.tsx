"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ProductCard } from "@/components/collection/ProductCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { products } from "@/data/products"; // Import shared data

export function HorizontalGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(titleRef, { once: true, margin: "-100px" });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Only apply transforms on desktop
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

    return (
        <section
            id="collection"
            ref={containerRef}
            className="relative bg-dark-bg min-h-screen md:h-[500vh]"
        >
            {/* Section Title - Sticky on Desktop, Static on Mobile */}
            <div className="relative md:sticky md:top-0 md:h-screen md:overflow-hidden flex flex-col">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent pointer-events-none" />

                {/* Title */}
                <motion.div
                    ref={titleRef}
                    className="relative md:absolute top-20 md:top-20 left-1/2 -translate-x-1/2 z-10 w-full px-4 mb-12 md:mb-0"
                    style={{
                        opacity: isMobile ? 1 : titleOpacity,
                        scale: isMobile ? 1 : titleScale
                    }}
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
                        className="font-serif text-4xl md:text-display text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-light-text">Style with </span>
                        <span className="holographic-text">Purpose</span>
                    </motion.h2>
                </motion.div>

                {/* Content Container - Horizontal on Desktop, Vertical on Mobile */}
                <motion.div
                    className="relative md:absolute md:top-[45%] md:-translate-y-1/2 md:left-0 flex flex-col md:flex-row items-stretch gap-8 md:gap-16 px-6 md:pl-[15vw] md:pr-[30vw] py-10 md:py-0"
                    style={{ x: isMobile ? 0 : x }}
                >
                    {/* Intro text card */}
                    <div className="flex-shrink-0 w-full md:w-[350px] flex flex-col justify-center text-center md:text-left">
                        <TextReveal delay={0.4} type="blur">
                            <p className="text-lg md:text-xl font-light text-light-text/80 leading-relaxed">
                                Redefining modern luxury with a conscience—
                                <span className="text-accent-gold">ethical, cruelty-free, and timeless</span>.
                                Designed for the woman who leads.
                            </p>
                        </TextReveal>
                        <motion.div
                            className="mt-8 w-16 md:w-24 h-[1px] bg-gradient-to-r from-accent-gold to-transparent mx-auto md:mx-0"
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
                            isMobile={isMobile} // Pass the optimization flag
                        />
                    ))}

                    {/* End card */}
                    <div className="flex-shrink-0 w-full md:w-[30vw] md:h-[60vh] flex flex-col justify-center items-center py-10 md:py-0">
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
                            className="font-serif text-3xl md:text-4xl text-light-text hover:text-accent-gold transition-colors duration-500 text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            data-cursor="hover"
                        >
                            Visit Amazon Store →
                        </motion.a>
                    </div>
                </motion.div>

                {/* Progress indicator - Desktop Only */}
                {!isMobile && (
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-dark-surface overflow-hidden hidden md:block">
                        <motion.div
                            className="h-full bg-gradient-to-r from-accent-purple to-accent-gold"
                            style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
