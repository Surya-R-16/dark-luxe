"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductGridProps {
    products: Product[];
    columns?: 3 | 4;
    staggerDelay?: number;
    initialDelay?: number;
    showOriginalPrice?: boolean;
}

export function ProductGrid({
    products,
    columns = 3,
    staggerDelay = 0.1,
    initialDelay = 0,
    showOriginalPrice = true,
}: ProductGridProps) {
    const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

    const handleImageLoad = (productId: number) => {
        setLoadedImages((prev) => new Set(prev).add(productId));
    };

    const colClass =
        columns === 4
            ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3";

    return (
        <div className={`grid ${colClass} gap-1 md:gap-0.5`}>
            {products.map((product, index) => {
                const isImageLoaded = loadedImages.has(product.id);
                
                return (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: initialDelay + index * staggerDelay }}
                            className="group relative overflow-hidden bg-dark-soft aspect-[3/4]"
                        >
                            {!isImageLoaded && (
                                <div className="absolute inset-0 bg-dark-soft animate-pulse z-10" />
                            )}
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                className={`object-cover brightness-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100 ${
                                    isImageLoaded ? "opacity-100" : "opacity-0"
                                }`}
                                onLoad={() => handleImageLoad(product.id)}
                            />
                            <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 lg:p-8 bg-gradient-to-t from-dark/95 to-transparent translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                <div className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-gold mb-1 md:mb-2">
                                    {product.tag}
                                </div>
                                <h3 className="font-serif text-sm md:text-xl lg:text-2xl font-normal tracking-[0.02em] text-ivory mb-1">
                                    {product.name}
                                </h3>
                                <div className="flex gap-2 items-baseline">
                                    <span className="text-xs md:text-sm font-medium text-gold-light tracking-[0.05em]">
                                        {product.price}
                                    </span>
                                    {showOriginalPrice && product.originalPrice !== "—" && (
                                        <span className="text-[10px] md:text-xs text-text-muted line-through">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="absolute top-3 right-3 md:top-5 md:right-5 w-10 h-10 bg-gold/90 flex items-center justify-center opacity-100 md:opacity-0 md:-translate-y-1.5 md:transition-all md:duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0">
                                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-dark">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        </motion.div>
                    </Link>
                );
            })}
        </div>
    );
}
