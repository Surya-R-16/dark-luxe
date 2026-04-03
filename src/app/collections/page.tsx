"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/collection/ProductGrid";

export default function CollectionsPage() {
    return (
        <main className="bg-dark min-h-screen">
            <Header />

            <section className="pt-28 md:pt-40 pb-12 md:pb-20 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold"
                    >
                        Collections
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-[clamp(32px,8vw,96px)] font-light leading-none tracking-tight text-ivory mb-6"
                    >
                        Crafted for <em className="italic text-gold-light">Purpose</em>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm md:text-base text-text-light max-w-2xl leading-relaxed"
                    >
                        Each Dark Luxe collection represents our commitment to sustainability,
                        sophistication, and timeless style—designed for women who lead.
                    </motion.p>
                </div>
            </section>

            <section className="pb-12 md:pb-20 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col gap-16 md:gap-24">
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
                            <div className="w-full md:w-1/2 aspect-[4/5] max-h-[60vh] md:max-h-none relative overflow-hidden bg-dark-soft">
                                <Image
                                    src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop"
                                    alt="Office Collection"
                                    fill
                                    priority
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 grayscale-[10%]"
                                />
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col gap-6">
                                <div className="text-[10px] tracking-[0.25em] uppercase text-gold">2026 Season</div>
                                <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-ivory">OFFICE COLLECTION</h2>
                                <p className="text-[15px] text-text-muted leading-relaxed max-w-md">
                                    Timeless handbags for women who lead with purpose. Engineered for elegance, crafted for the modern workspace.
                                </p>
                                <Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/30 py-3 w-fit hover:border-gold transition-colors">
                                    Explore on Amazon
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6 md:px-10 border-t border-gold/10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-8 md:mb-12 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold">
                        Browse All Pieces
                    </div>

                    <ProductGrid products={products} columns={4} staggerDelay={0.1} />
                </div>
            </section>

            <Footer />
        </main>
    );
}
