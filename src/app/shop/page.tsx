"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/collection/ProductGrid";

export default function ShopPage() {
    return (
        <main className="bg-dark min-h-screen">
            <Header />

            <section className="pt-28 md:pt-40 pb-12 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold"
                    >
                        Shop All
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-[clamp(32px,8vw,96px)] font-light leading-none tracking-tight text-ivory mb-6"
                    >
                        The <em className="italic text-gold-light">Collection</em>
                    </motion.h1>
                </div>
            </section>

            <section className="pb-24 md:pb-32 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <ProductGrid products={products} columns={3} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
