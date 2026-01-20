"use client";

import { useRef } from "react";
import { motion, useTransform, MotionValue, useInView } from "framer-motion";

interface Product {
    id: number;
    name: string;
    price: string;
    description: string;
    image: string;
    color: string;
}

interface ProductCardProps {
    product: Product;
    index: number;
    scrollProgress: MotionValue<number>;
}

export function ProductCard({ product, index, scrollProgress }: ProductCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "0px 100px 0px 0px" });

    // Calculate unique parallax offset for each card
    const yOffset = useTransform(
        scrollProgress,
        [0, 1],
        [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]
    );

    const rotate = useTransform(scrollProgress, [0, 1], [index % 2 === 0 ? 2 : -2, 0]);

    return (
        <motion.div
            ref={cardRef}
            className="flex-shrink-0 w-[25vw] min-w-[300px] h-[65vh] relative group"
            style={{ y: yOffset, rotate }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            data-cursor="hover"
        >
            {/* Card Container */}
            <motion.div
                className="relative w-full h-full overflow-hidden bg-dark-surface rounded-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
            >
                {/* Product Image Placeholder */}
                <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: product.color }}
                >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-80" />

                    {/* Abstract handbag shape */}
                    <motion.div
                        className="relative w-48 h-36"
                        whileHover={{ scale: 1.1, rotateY: 10 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Main body */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d] rounded-md shadow-2xl">
                            {/* Leather texture lines */}
                            <div className="absolute inset-2 border border-white/5 rounded-sm" />
                            <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-white/10" />
                        </div>

                        {/* Handle */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-16">
                            <div className="absolute inset-0 border-t-4 border-l-4 border-r-4 border-[#1a1a1a] rounded-t-full" />
                        </div>

                        {/* Gold clasp */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-2 bg-gradient-to-r from-accent-gold/80 to-liquid-gold/80 rounded-sm" />
                    </motion.div>

                    {/* Glow effect on hover */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-radial from-accent-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </div>

                {/* Product Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                    {/* Name */}
                    <motion.h3
                        className="font-serif text-2xl text-light-text mb-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                        {product.name}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        className="text-muted-text text-sm mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                        {product.description}
                    </motion.p>

                    {/* Price */}
                    <motion.p
                        className="text-accent-gold font-medium tracking-wide"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                        {product.price}
                    </motion.p>
                </div>

                {/* Hover border effect */}
                <motion.div
                    className="absolute inset-0 border border-transparent group-hover:border-accent-purple/30 transition-colors duration-500 pointer-events-none"
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-accent-gold/0 group-hover:border-accent-gold/50 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-accent-gold/0 group-hover:border-accent-gold/50 transition-colors duration-500" />
            </motion.div>

            {/* Index number */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 font-serif text-6xl text-white/5 select-none">
                0{product.id}
            </div>
        </motion.div>
    );
}
