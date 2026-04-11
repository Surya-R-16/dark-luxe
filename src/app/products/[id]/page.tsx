"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.id.toString() === params.id);

    if (!product) {
        notFound();
    }

    const [selectedImage, setSelectedImage] = useState(0);

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .filter((p) => {
            const baseName1 = product.name.split(" - ")[0];
            const baseName2 = p.name.split(" - ")[0];
            return baseName1 !== baseName2;
        })
        .slice(0, 3);

    return (
        <main className="bg-dark min-h-screen">
            <Header />

            <section className="pt-28 md:pt-40 pb-12">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative aspect-[3/4] bg-dark-soft overflow-hidden mb-4"
                            >
                                <Image
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                            <div className="grid grid-cols-4 gap-2">
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`relative aspect-square overflow-hidden bg-dark-soft ${
                                            selectedImage === idx
                                                ? "ring-2 ring-gold"
                                                : "opacity-60 hover:opacity-100"
                                        }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} view ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2 lg:sticky lg:top-32 h-fit">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">
                                    {product.category}
                                </div>
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ivory mb-4">
                                    {product.name}
                                </h1>
                                <div className="flex items-baseline gap-4 mb-6">
                                    <span className="text-2xl md:text-3xl text-gold-light">
                                        {product.price}
                                    </span>
                                    {product.originalPrice !== "—" && (
                                        <span className="text-lg text-text-muted line-through">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>
                                <p className="text-text-muted leading-relaxed mb-8">
                                    {product.description}
                                </p>
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-sm text-text-muted">Color:</span>
                                    <div
                                        className="w-6 h-6 rounded-full border border-gold/30"
                                        style={{ backgroundColor: product.color }}
                                    />
                                </div>
                                <a
                                    href={product.amazonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gold text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
                                >
                                    Shop on Amazon
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 px-6 md:px-10 border-t border-dark-soft">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-serif text-2xl md:text-3xl text-ivory mb-8">
                            More from {product.category}
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {relatedProducts.map((relProduct) => (
                                <a
                                    key={relProduct.id}
                                    href={`/products/${relProduct.id}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[3/4] bg-dark-soft overflow-hidden mb-3">
                                        <Image
                                            src={relProduct.images[0]}
                                            alt={relProduct.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="text-ivory text-sm">{relProduct.name}</div>
                                    <div className="text-gold-light text-sm">{relProduct.price}</div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}