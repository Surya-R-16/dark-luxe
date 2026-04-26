"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { products } from "@/data/products";

const collections = [
    {
        name: "Landon Collection",
        description: "Elegant craftsmanship meets modern design. Premium handbags for the sophisticated woman.",
        image: "/products/Out/Landon bag/Tan/3.jpg",
        category: "Landon Collection",
    },
    {
        name: "Compact Collection",
        description: "Perfectly sized for everyday essentials. Functionality meets elegant styling.",
        image: "/products/Out/Small Bag/5.jpg",
        category: "Compact Collection",
    },
    {
        name: "Strap Collection",
        description: "Hands-free elegance. Adjustable comfort with sophisticated design.",
        image: "/products/Out/Strap Bag/Black/3.jpg",
        category: "Strap Collection",
    },
    {
        name: "Beige Collection",
        description: "Timeless elegance in neutral tones. Versatile for any occasion.",
        image: "/products/beige-1.jpg",
        category: "Beige Collection",
    },
];

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
                        className="flex items-center justify-between mb-8 md:mb-12"
                    >
                        <div className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold">
                            Collections
                        </div>
                        <Link 
                            href="/shop"
                            className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
                        >
                            View All
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {collections.map((collection, index) => {
                            const collectionProducts = products.filter(
                                (p) => p.category === collection.category
                            );
                            return (
                                <motion.div
                                    key={collection.name}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={`/shop?category=${encodeURIComponent(collection.category)}`}
                                        className="group block relative aspect-square overflow-hidden bg-dark-soft"
                                    >
                                        <Image
                                            src={collection.image}
                                            alt={collection.name}
                                            fill
                                            className="object-cover brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                            <div className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-gold mb-2">
                                                {collectionProducts.length} Products
                                            </div>
                                            <h2 className="font-serif text-lg md:text-xl lg:text-2xl text-ivory group-hover:text-gold-light transition-colors">
                                                {collection.name}
                                            </h2>
                                        </div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/50 pb-1">
                                                Explore
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
