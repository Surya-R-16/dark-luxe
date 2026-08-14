"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { collections } from "@/data/products";

export function CollectionTiles() {
    return (
        <section className="py-16 md:py-[100px] px-6 md:px-10 border-t border-gold/10 bg-dark-mid/30">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                    <div className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold">
                        The Collections
                    </div>
                    <Link
                        href="/collections"
                        className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
                    >
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2">
                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.name}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.08 }}
                        >
                            <Link
                                href={`/shop?category=${encodeURIComponent(collection.category)}`}
                                className="group relative block aspect-[3/4] overflow-hidden bg-dark-soft"
                            >
                                <Image
                                    src={collection.image}
                                    alt={collection.name}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className="object-cover img-lux brightness-[0.92] transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-500 pointer-events-none" />
                                <div className="absolute top-4 left-4 text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-gold/80">
                                    {collection.tagline}
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                    <h3 className="font-serif text-base md:text-xl text-ivory group-hover:text-gold-light transition-colors">
                                        {collection.name.replace(" Collection", "")}
                                    </h3>
                                    <div className="h-px w-0 bg-gold/60 transition-all duration-500 group-hover:w-10 mt-2" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
