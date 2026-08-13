"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
    type: string;
    productId?: number;
    title?: string;
    subtitle?: string;
    modelImage?: string;
    productImage?: string;
    productName?: string;
    productSubtitle?: string;
    productPrice?: string;
    originalPrice?: string;
    image?: string;
}

interface LookbookCarouselProps {
    slides: Slide[];
}

export function LookbookCarousel({ slides }: LookbookCarouselProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setTimeout(() => setIsAnimating(false), 800);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setTimeout(() => setIsAnimating(false), 800);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative bg-dark-mid overflow-hidden">
            <div className="relative h-[80vh] md:h-[90vh]">
                <AnimatePresence mode="wait">
                    {slides[currentSlide].type === "intro" && (
                        <motion.div
                            key="intro"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-dark"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-center"
                            >
                                <div className="text-[12px] md:text-[14px] tracking-[0.5em] uppercase text-gold mb-4">
                                    {slides[currentSlide].subtitle}
                                </div>
                                <h2 className="font-serif text-[clamp(60px,15vw,180px)] font-light text-ivory leading-none">
                                    {slides[currentSlide].title}
                                </h2>
                            </motion.div>
                        </motion.div>
                    )}

                    {slides[currentSlide].type === "split-right" && (
                        <motion.div
                            key="split-right"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 grid grid-cols-1 md:grid-cols-2"
                        >
                            <div className="relative h-[40vh] md:h-full bg-dark">
                                <Image
                                    src={slides[currentSlide].modelImage || ""}
                                    alt="Model"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-dark/50 to-transparent md:hidden" />
                            </div>
                            <div className="hidden md:flex items-center justify-center bg-dark-soft p-8 md:p-16">
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                                        {slides[currentSlide].productSubtitle}
                                    </div>
                                    <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory mb-4">
                                        {slides[currentSlide].productName}
                                    </h3>
                                    <div className="flex items-center justify-center gap-3 mb-6">
                                        <span className="text-2xl text-gold-light">
                                            {slides[currentSlide].productPrice}
                                        </span>
                                        <span className="text-lg text-text-muted line-through">
                                            {slides[currentSlide].originalPrice}
                                        </span>
                                    </div>
                                    <a
                                        href={slides[currentSlide].productId ? `/products/${slides[currentSlide].productId}` : "#"}
                                        className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-gold hover:text-dark transition-colors"
                                    >
                                        Shop Now
                                    </a>
                                </motion.div>
                            </div>
                            <div className="md:hidden absolute bottom-0 left-0 right-0 bg-dark/90 p-6">
                                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                                    {slides[currentSlide].productSubtitle}
                                </div>
                                <h3 className="font-serif text-2xl text-ivory mb-2">
                                    {slides[currentSlide].productName}
                                </h3>
                                <div className="flex items-center gap-3">
                                    <span className="text-lg text-gold-light">
                                        {slides[currentSlide].productPrice}
                                    </span>
                                    <span className="text-sm text-text-muted line-through">
                                        {slides[currentSlide].originalPrice}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {slides[currentSlide].type === "brand-story" && (
                        <motion.div
                            key="brand-story"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-dark p-8"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="max-w-2xl text-center"
                            >
                                <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-6">
                                    Our Story
                                </div>
                                <h2 className="font-serif text-[clamp(32px,6vw,72px)] text-ivory mb-8">
                                    {slides[currentSlide].title}
                                </h2>
                                <p className="text-text-muted text-lg md:text-xl leading-relaxed">
                                    Crafting luxury with elegance. Each piece tells a story of
                                    impeccable craftsmanship, timeless design, and sustainable
                                    innovation. For women who lead with purpose and style.
                                </p>
                            </motion.div>
                        </motion.div>
                    )}

                    {slides[currentSlide].type === "full-image" && (
                        <motion.div
                            key="full-image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0"
                        >
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.09 }}
                                transition={{ duration: 9, ease: "easeOut" }}
                                className="relative h-full"
                            >
                                <Image
                                    src={slides[currentSlide].image || ""}
                                    alt={slides[currentSlide].title || "Slide"}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
                            <div className="absolute bottom-20 left-10 text-ivory">
                                <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
                                    {slides[currentSlide].subtitle}
                                </div>
                                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">
                                    {slides[currentSlide].title}
                                </h2>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index
                                ? "bg-gold w-8"
                                : "bg-gold/30 hover:bg-gold/50"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark/50 text-ivory hover:bg-gold hover:text-dark transition-colors z-10"
                aria-label="Previous slide"
            >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark/50 text-ivory hover:bg-gold hover:text-dark transition-colors z-10"
                aria-label="Next slide"
            >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
}