"use client";

import { motion } from "framer-motion";
import { ProductCard } from "@/components/collection/ProductCard";
import { products } from "@/data/products";
import { Header } from "@/components/layout/Header";

export default function ProductsPage() {
    return (
        <main className="bg-dark-bg min-h-screen">
            <Header />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-muted-text tracking-[0.4em] uppercase text-xs mb-4"
                    >
                        The Collection
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl text-light-text mb-8"
                    >
                        Curated <span className="text-accent-gold">Excellence</span>
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="w-24 h-[1px] bg-gradient-to-r from-accent-gold to-transparent mx-auto"
                    />
                </div>
            </section>

            {/* Product Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="flex justify-center"
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
                </div>
            </section>
        </main>
    );
}
