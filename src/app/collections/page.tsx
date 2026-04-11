"use client";

import Image from "next/image";
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
                                    transition={{ duration: 0.8 }}
                                    className="flex flex-col md:flex-row items-center gap-8 md:gap-12 group"
                                >
                                    <div className="w-full md:w-1/2 aspect-[4/5] max-h-[60vh] md:max-h-none relative overflow-hidden bg-dark-soft">
                                        <Image
                                            src={collection.image}
                                            alt={collection.name}
                                            fill
                                            priority={index === 0}
                                            className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 grayscale-[10%]"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                                        <div className="text-[10px] tracking-[0.25em] uppercase text-gold">
                                            {collectionProducts.length} Products
                                        </div>
                                        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-light text-ivory">
                                            {collection.name.toUpperCase()}
                                        </h2>
                                        <p className="text-[15px] text-text-muted leading-relaxed max-w-md">
                                            {collection.description}
                                        </p>
                                        <a
                                            href={`/products?category=${encodeURIComponent(collection.category)}`}
                                            className="text-xs tracking-[0.2em] uppercase text-gold border-b border-gold/30 py-3 w-fit hover:border-gold transition-colors"
                                        >
                                            Explore Collection
                                        </a>
                                    </div>
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
