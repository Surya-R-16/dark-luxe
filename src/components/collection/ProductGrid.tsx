"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/data/products";
import { useCart } from "@/components/providers/CartContext";

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
    const [addedToCart, setAddedToCart] = useState<number | null>(null);
    const { addToCart } = useCart();

    const handleImageLoad = (productId: number) => {
        setLoadedImages((prev) => new Set(prev).add(productId));
    };

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        setAddedToCart(product.id);
        setTimeout(() => setAddedToCart(null), 2000);
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
                                className={`object-cover img-lux brightness-[0.9] transition-all duration-700 group-hover:scale-110 group-hover:brightness-100 ${
                                    isImageLoaded ? "opacity-100" : "opacity-0"
                                }`}
                                onLoad={() => handleImageLoad(product.id)}
                            />
                            {/* Second angle swaps in on hover */}
                            {product.images[1] && (
                                <Image
                                    src={product.images[1]}
                                    alt=""
                                    fill
                                    className={`object-cover img-lux brightness-[0.9] transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 ${
                                        isImageLoaded ? "opacity-0" : "opacity-0"
                                    }`}
                                />
                            )}
                            {/* Gold hairline on hover */}
                            <div className="absolute inset-0 z-20 border border-gold/0 group-hover:border-gold/40 transition-colors duration-500 pointer-events-none" />
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
                            <button
                                onClick={(e) => handleAddToCart(e, product)}
                                className={`absolute top-3 right-3 md:top-5 md:right-5 z-30 w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                                    addedToCart === product.id
                                        ? "bg-green-500 opacity-100"
                                        : "bg-gold/90 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                                }`}
                            >
                                {addedToCart === product.id ? (
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-dark">
                                        <path d="M5 12l5 5L20 7" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-dark">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        </motion.div>
                    </Link>
                );
            })}
        </div>
    );
}