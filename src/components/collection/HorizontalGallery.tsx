"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/collection/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { products } from "@/data/products";

export function HorizontalGallery() {
    return (
        <section id="collection" className="relative bg-dark-bg py-24 md:py-32">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <Reveal delay={0.0}>
                        <p className="text-accent-gold tracking-[0.3em] uppercase text-xs mb-4">
                            The Collection
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="font-serif text-4xl md:text-5xl text-light-text mb-8">
                            Style with <span className="text-accent-gold italic">Purpose</span>
                        </h2>
                    </Reveal>
                    <div className="max-w-2xl mx-auto">
                        <Reveal delay={0.2}>
                            <p className="text-lg text-muted-text font-light leading-relaxed">
                                Redefining modern luxury with a conscience.
                                Ethical, cruelty-free, and timeless designs for the woman who leads.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Vertical Grid (No side scroll) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {products.map((product, index) => (
                        <div key={product.id} className="w-full flex justify-center">
                            <Reveal delay={index * 0.1}>
                                <ProductCard
                                    product={{
                                        id: product.id.toString(),
                                        name: product.name,
                                        price: product.price,
                                        image: product.images[0],
                                        category: "Collection"
                                    }}
                                />
                            </Reveal>
                        </div>
                    ))}
                </div>

                {/* Bottom Link */}
                <div className="text-center mt-20">
                    <motion.a
                        href="https://www.amazon.in"
                        target="_blank"
                        className="inline-block border-b border-accent-gold text-xl md:text-2xl font-serif text-light-text hover:text-accent-gold transition-colors pb-1"
                        whileHover={{ y: -2 }}
                    >
                        Visit Amazon Store →
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
