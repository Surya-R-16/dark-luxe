"use client";

import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/collection/ProductGrid";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function ShopContent() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("category");

    const categories = Array.from(new Set(products.map((p) => p.category)));

    const filteredProducts = categoryParam
        ? products.filter((p) => p.category.toLowerCase() === categoryParam.toLowerCase())
        : products;

    return (
        <>
            <section className="pt-28 md:pt-40 pb-6 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold"
                    >
                        {categoryParam ? categoryParam : "Shop All"}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-[clamp(32px,8vw,96px)] font-light leading-none tracking-tight text-ivory mb-6"
                    >
                        The <em className="italic text-gold-light">{categoryParam ? "Selection" : "Collection"}</em>
                    </motion.h1>

                    {/* Premium Category Filter Tabs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3 mb-10 border-b border-gold/10 pb-6 mt-8"
                    >
                        <Link
                            href="/shop"
                            className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-2 relative ${
                                !categoryParam 
                                    ? "text-gold font-medium" 
                                    : "text-text-muted hover:text-ivory"
                            }`}
                        >
                            All
                            {!categoryParam && (
                                <motion.div 
                                    layoutId="activeCategoryBorder" 
                                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                                />
                            )}
                        </Link>
                        {categories.map((cat) => {
                            const isActive = categoryParam?.toLowerCase() === cat.toLowerCase();
                            return (
                                <Link
                                    key={cat}
                                    href={`/shop?category=${encodeURIComponent(cat)}`}
                                    className={`text-xs tracking-[0.2em] uppercase transition-all duration-300 pb-2 relative ${
                                        isActive
                                            ? "text-gold font-medium"
                                            : "text-text-muted hover:text-ivory"
                                    }`}
                                >
                                    {cat.replace(" Collection", "")}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeCategoryBorder" 
                                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            <section className="pb-24 md:pb-32 px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    {filteredProducts.length > 0 ? (
                        <ProductGrid products={filteredProducts} columns={3} />
                    ) : (
                        <div className="text-center py-20 border border-dashed border-gold/10 rounded-lg">
                            <p className="text-text-muted text-sm tracking-[0.1em] mb-4">No products found in this category.</p>
                            <Link href="/shop" className="text-xs uppercase text-gold tracking-[0.2em] hover:text-gold-light transition-colors">
                                View All Products
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default function ShopPage() {
    return (
        <main className="bg-dark min-h-screen">
            <Header />

            <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center bg-dark">
                    <div className="text-gold tracking-[0.3em] uppercase text-xs animate-pulse">Loading Collection...</div>
                </div>
            }>
                <ShopContent />
            </Suspense>

            <Footer />
        </main>
    );
}
