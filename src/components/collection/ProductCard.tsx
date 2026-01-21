"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useTransform, MotionValue, useInView, AnimatePresence } from "framer-motion";


import { products } from "@/data/products";

// Define the shape based on the data file, or keep the interface locally if simple
interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    images: string[];
    color: string;
}

interface ProductCardProps {
    product: Product;
    index: number;
    scrollProgress?: MotionValue<number>; // Optional now
    isMobile?: boolean; // New prop for optimization
}

export function ProductCard({ product, index, scrollProgress, isMobile = false }: ProductCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "0px 100px 0px 0px" });
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Calculate unique parallax offset for each card ONLY if scrollProgress is provided and NOT mobile
    // We use a safe fallback (useMotionValue(0)) if scrollProgress is missing to prevent errors
    const defaultMotionValue = useTransform(() => 0);
    const safeProgress = scrollProgress || defaultMotionValue;

    const yOffset = useTransform(
        safeProgress,
        [0, 1],
        [index % 2 === 0 ? 30 : -30, index % 2 === 0 ? -30 : 30]
    );

    const rotate = useTransform(safeProgress, [0, 1], [index % 2 === 0 ? 2 : -2, 0]);

    // Use conditional styles based on isMobile
    const cardStyle = isMobile ? {} : { y: yOffset, rotate };

    // Cycle images on hover
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isHovered && product.images && product.images.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
            }, 1000); // Switch every 1 second
        } else {
            setCurrentImageIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, product.images]);

    return (
        <motion.div
            ref={cardRef}
            className={`relative group flex-shrink-0 ${isMobile ? "w-full min-h-[50vh] mb-8" : "w-[25vw] min-w-[300px] h-[65vh]"}`}
            style={cardStyle}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            data-cursor="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Card Container */}
            <motion.div
                className="relative w-full h-full overflow-hidden bg-dark-surface rounded-sm border border-white/5 group-hover:border-accent-gold/30 transition-colors duration-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.7, ease: "circOut" }}
            >
                {/* Product Image */}
                <div className="absolute inset-0 bg-dark-surface flex items-center justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        {product.images && product.images.length > 0 && (
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, scale: 1.15 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={product.images[currentImageIndex]}
                                    alt={product.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Gradient Overlay - Stronger at bottom for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent opacity-80" />

                    {/* Hover Glow */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-radial from-accent-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                </div>

                {/* Product Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Index number */}
                    <div className="absolute -top-12 right-6 font-serif text-5xl text-white/10 group-hover:text-accent-gold/20 transition-colors duration-500">
                        0{product.id}
                    </div>

                    {/* Name */}
                    <motion.h3
                        className="font-serif text-3xl text-light-text mb-2 drop-shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    >
                        {product.name}
                    </motion.h3>

                    {/* Description - Hides/Shows on hover ? No, keep visible but subtle */}
                    <motion.div
                        className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500"
                    >
                        <p className="text-muted-text text-sm mb-4 font-light tracking-wide leading-relaxed">
                            {product.description}
                        </p>
                    </motion.div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-2 pt-4 border-t border-white/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="text-accent-gold font-medium tracking-widest text-lg">
                            {product.price}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                            View Details →
                        </span>
                    </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20 group-hover:border-accent-gold transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20 group-hover:border-accent-gold transition-colors duration-500" />
            </motion.div>
        </motion.div>
    );
}
