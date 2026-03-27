"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    price: string;
    image: string;
    category?: string;
}

export function ProductCard({ product }: { product: Product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative w-full cursor-none" // Use cursor-none to allow custom cursor
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal w-full">
                <motion.div
                    className="w-full h-full relative"
                    animate={{ scale: isHovered ? 1.05 : 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>

                {/* Custom "VIEW" Cursor Helper (Optional - if global cursor handles this, we might not need it, 
                    but we can change cursor state via context if we had one. 
                    For now, visual clue: ) */}
                <div
                    className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="w-20 h-20 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-xs tracking-widest text-white bg-black/10">
                        VIEW
                    </div>
                </div>
            </div>

            {/* Info - Fades in on hover (or persistent on mobile) */}
            <motion.div
                className="absolute bottom-0 left-0 p-6 z-10 w-full"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.4 }}
            >
                <div className="flex justify-between items-end mix-blend-difference text-white">
                    <div>
                        <p className="text-xs tracking-widest uppercase opacity-70 mb-1">{product.category || "Resort '26"}</p>
                        <h3 className="font-serif text-2xl italic leading-none">{product.name}</h3>
                    </div>
                    <span className="text-sm font-medium tracking-wide">{product.price}</span>
                </div>
            </motion.div>
        </div>
    );
}
