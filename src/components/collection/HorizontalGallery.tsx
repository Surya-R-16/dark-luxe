"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/collection/ProductCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { products } from "@/data/products";

export function HorizontalGallery() {
    return (
        <section id="collection" className="relative bg-dark-bg py-24 md:py-32">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-accent-gold tracking-[0.3em] uppercase text-xs mb-4"
                    >
                        The Collection
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-serif text-4xl md:text-5xl text-light-text mb-8"
                    >
                        Style with <span className="text-accent-gold italic">Purpose</span>
                    </motion.h2>
                    <div className="max-w-2xl mx-auto">
                        <TextReveal type="blur">
                            <p className="text-lg text-muted-text font-light leading-relaxed">
                                Redefining modern luxury with a conscience.
                                Ethical, cruelty-free, and timeless designs for the woman who leads.
                            </p>
                        </TextReveal>
                    </div>
                </div>

                {/* Vertical Grid (No side scroll) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="w-full flex justify-center"
                        >
                            <ProductCard
                                product={{
                                    id: product.id.toString(),
                                    name: product.name,
                                    price: product.price,
                                    image: product.images[0],
                                    category: "Collection"
                                }}
                            />
                        </motion.div>
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
