"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products, collectionDetails } from "@/data/products";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useCart } from "@/components/providers/CartContext";
import { notFound } from "next/navigation";

interface ProductPageProps {
    params: {
        id: string;
    };
}

const parsePrice = (price: string) => parseInt(price.replace(/[₹,]/g, ""), 10);

export default function ProductPage({ params }: ProductPageProps) {
    const product = products.find((p) => p.id.toString() === params.id);

    if (!product) {
        notFound();
    }

    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomOpen, setIsZoomOpen] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<string | null>("details");
    const { addToCart } = useCart();

    const details = collectionDetails[product.category];
    const price = parsePrice(product.price);
    const originalPrice = parsePrice(product.originalPrice);
    const savings = originalPrice - price;
    const savingsPct = Math.round((1 - price / originalPrice) * 100);

    const relatedProducts = useMemo(() => {
        const sameCollection = products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .filter((p) => p.name.split(" - ")[0] !== product.name.split(" - ")[0]);
        if (sameCollection.length >= 3) return sameCollection.slice(0, 3);
        const others = products
            .filter((p) => p.category !== product.category && p.id !== product.id)
            .sort((a, b) => (a.tag === "Bestseller" ? -1 : 1) - (b.tag === "Bestseller" ? -1 : 1));
        return [...sameCollection, ...others].slice(0, 3);
    }, [product]);

    const handleAddToBag = () => {
        addToCart(product, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const goToImage = (dir: 1 | -1) => {
        setSelectedImage((prev) => (prev + dir + product.images.length) % product.images.length);
    };

    const accordionContent: { key: string; label: string; body: React.ReactNode }[] = [
        {
            key: "details",
            label: "Details & Dimensions",
            body: (
                <div className="space-y-3">
                    <ul className="space-y-2">
                        {details?.features.map((f) => (
                            <li key={f} className="flex gap-3 text-text-muted text-sm">
                                <span className="text-gold mt-[7px] text-[8px]">◆</span>
                                {f}
                            </li>
                        ))}
                    </ul>
                    <p className="text-text-muted text-sm pt-2 border-t border-gold/10">
                        <span className="text-gold tracking-[0.2em] uppercase text-[10px] mr-3">Dimensions</span>
                        {details?.dimensions}
                    </p>
                </div>
            ),
        },
        {
            key: "care",
            label: "Care Instructions",
            body: <p className="text-text-muted text-sm leading-relaxed">{details?.care}</p>,
        },
        {
            key: "shipping",
            label: "Shipping & Returns",
            body: (
                <div className="space-y-2 text-text-muted text-sm leading-relaxed">
                    <p>Dispatched within 24–48 hours via Amazon. Free delivery on eligible orders.</p>
                    <p>Easy returns — 7 days, no questions asked, fulfilled by Amazon.</p>
                </div>
            ),
        },
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        image: product.images.map((i) => `https://www.darkluxe.in${i}`),
        description: product.description,
        brand: { "@type": "Brand", name: "Dark Luxe" },
        category: product.category,
        offers: {
            "@type": "Offer",
            price: price.toString(),
            priceCurrency: "INR",
            availability: product.isComingSoon ? "https://schema.org/PreOrder" : "https://schema.org/InStock",
            url: product.amazonUrl,
        },
    };

    return (
        <main className="bg-dark min-h-screen">
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Breadcrumb */}
            <div className="pt-24 md:pt-32 px-6 md:px-10">
                <div className="max-w-7xl mx-auto flex items-center gap-2 text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-text-muted">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <span className="text-gold/40">/</span>
                    <Link href="/collections" className="hover:text-gold transition-colors">Collections</Link>
                    <span className="text-gold/40">/</span>
                    <Link href="/shop" className="hover:text-gold transition-colors">{product.category}</Link>
                    <span className="text-gold/40">/</span>
                    <span className="text-text-light truncate">{product.name}</span>
                </div>
            </div>

            <section className="pt-8 md:pt-12 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                        {/* ── Gallery ── */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative aspect-[3/4] bg-dark-soft overflow-hidden cursor-zoom-in"
                                onClick={() => setIsZoomOpen(true)}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedImage}
                                        initial={{ opacity: 0, scale: 1.03 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={product.images[selectedImage]}
                                            alt={product.name}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                                {product.tag && (
                                    <span className="absolute top-4 left-4 z-10 bg-dark/80 backdrop-blur-sm border border-gold/30 text-gold text-[9px] tracking-[0.3em] uppercase px-3 py-1.5">
                                        {product.tag}
                                    </span>
                                )}
                                {/* Arrows */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); goToImage(-1); }}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-dark/50 backdrop-blur-sm text-ivory hover:bg-gold hover:text-dark transition-colors"
                                    aria-label="Previous image"
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); goToImage(1); }}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-dark/50 backdrop-blur-sm text-ivory hover:bg-gold hover:text-dark transition-colors"
                                    aria-label="Next image"
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                {/* Counter */}
                                <span className="absolute bottom-4 right-4 z-10 text-[10px] tracking-[0.3em] text-ivory/80 bg-dark/60 backdrop-blur-sm px-3 py-1">
                                    {selectedImage + 1} / {product.images.length}
                                </span>
                                {/* Zoom hint */}
                                <span className="absolute bottom-4 left-4 z-10 text-[9px] tracking-[0.25em] uppercase text-ivory/50 hidden md:flex items-center gap-1.5">
                                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                                    </svg>
                                    Click to zoom
                                </span>
                            </motion.div>

                            {/* Thumbnails */}
                            <div className="mt-3 flex gap-2 overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-6 lg:overflow-visible">
                                {product.images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedImage(idx)}
                                        className={`relative aspect-square w-16 lg:w-full shrink-0 overflow-hidden bg-dark-soft transition-all duration-300 ${
                                            selectedImage === idx
                                                ? "ring-1 ring-gold opacity-100"
                                                : "opacity-50 hover:opacity-100"
                                        }`}
                                        aria-label={`View ${idx + 1}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${product.name} view ${idx + 1}`}
                                            fill
                                            sizes="80px"
                                            className="object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ── Info ── */}
                        <div className="lg:sticky lg:top-28 h-fit">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3">
                                    {product.category}
                                </div>
                                <h1 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-light text-ivory mb-4 leading-tight">
                                    {product.name}
                                </h1>

                                <div className="flex items-baseline gap-4 mb-2">
                                    <span className="text-2xl md:text-3xl text-gold-light font-medium">
                                        {product.price}
                                    </span>
                                    <span className="text-lg text-text-muted line-through">
                                        {product.originalPrice}
                                    </span>
                                    <span className="bg-gold/15 border border-gold/40 text-gold text-[10px] tracking-[0.15em] px-2 py-1">
                                        {savingsPct}% OFF
                                    </span>
                                </div>
                                <p className="text-[11px] text-text-muted mb-6">
                                    You save <span className="text-gold">₹{savings.toLocaleString("en-IN")}</span> · Inclusive of all taxes
                                </p>

                                <p className="text-text-muted leading-relaxed mb-7">
                                    {product.description}
                                </p>

                                {/* Colour */}
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-[10px] tracking-[0.25em] uppercase text-text-muted">
                                        Colour
                                    </span>
                                    <div
                                        className="w-7 h-7 rounded-full border border-gold/40 shadow-[0_0_0_4px_rgba(184,151,90,0.15)]"
                                        style={{ backgroundColor: product.color }}
                                        title={product.name}
                                    />
                                    <span className="text-sm text-text-light">{product.name.split(" - ")[1]}</span>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                    <button
                                        onClick={handleAddToBag}
                                        className={`flex-1 border px-8 py-4 text-[11px] tracking-[0.25em] uppercase transition-all duration-300 ${
                                            isAdded
                                                ? "border-green-500/60 text-green-400 bg-green-500/10"
                                                : "border-gold text-gold hover:bg-gold hover:text-dark"
                                        }`}
                                    >
                                        {isAdded ? "Added to Bag ✓" : "Add to Bag"}
                                    </button>
                                    <a
                                        href={product.amazonUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gold text-dark text-center px-8 py-4 text-[11px] tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors"
                                    >
                                        Buy on Amazon
                                    </a>
                                </div>

                                {/* Trust strip */}
                                <div className="grid grid-cols-3 border-y border-gold/10 py-5 mb-8">
                                    {[
                                        { label: "Vegan Leather", icon: <path d="M12 21c-4-3-7-6-7-10a4 4 0 018-2 4 4 0 018 2c0 4-3 7-7 10z" /> },
                                        { label: "Cruelty-Free", icon: <path d="M12 21l-1.5-1C5 15.5 2 12.8 2 9.5A4.5 4.5 0 017.5 5c1.7 0 3.3.9 4.5 2.3C13.2 5.9 14.8 5 16.5 5A4.5 4.5 0 0121 9.5c0 3.3-3 6-8.5 10.5L12 21z" /> },
                                        { label: "Made in India", icon: <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" /> },
                                    ].map(({ label, icon }) => (
                                        <div key={label} className="flex flex-col items-center gap-2 text-center px-2">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.3">
                                                {icon}
                                            </svg>
                                            <span className="text-[8.5px] tracking-[0.2em] uppercase text-text-muted">
                                                {label}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Accordions */}
                                <div className="space-y-0">
                                    {accordionContent.map((item) => (
                                        <div key={item.key} className="border-b border-gold/10">
                                            <button
                                                onClick={() => setOpenAccordion(openAccordion === item.key ? null : item.key)}
                                                className="w-full flex items-center justify-between py-4 text-left"
                                            >
                                                <span className="text-[10px] tracking-[0.3em] uppercase text-ivory hover:text-gold transition-colors">
                                                    {item.label}
                                                </span>
                                                <span className={`text-gold text-lg transition-transform duration-300 ${openAccordion === item.key ? "rotate-45" : ""}`}>
                                                    +
                                                </span>
                                            </button>
                                            <AnimatePresence initial={false}>
                                                {openAccordion === item.key && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pb-5">
                                                            {item.body}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Craftsmanship story ── */}
            {details && (
                <section className="py-16 md:py-24 border-t border-gold/10 bg-dark-mid/40">
                    <div className="max-w-7xl mx-auto px-6 md:px-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                            <div className="relative aspect-[4/3] bg-dark-soft overflow-hidden">
                                <Image
                                    src={product.images[1] || product.images[0]}
                                    alt={`${product.name} craftsmanship detail`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                            </div>
                            <div>
                                <div className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4 flex items-center gap-4 before:content-[''] before:block before:w-[30px] before:h-px before:bg-gold">
                                    The Craftsmanship
                                </div>
                                <h2 className="font-serif text-3xl md:text-4xl font-light text-ivory mb-6 leading-snug">
                                    Made to be carried,{" "}
                                    <em className="italic text-gold-light">built to be kept.</em>
                                </h2>
                                <p className="text-text-muted leading-relaxed mb-8">
                                    {details.story}
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    {[
                                        { n: "100%", l: "Vegan Materials" },
                                        { n: "24h", l: "Dispatch Time" },
                                        { n: "7-day", l: "Easy Returns" },
                                    ].map((stat) => (
                                        <div key={stat.l} className="border-l border-gold/20 pl-4">
                                            <div className="font-serif text-2xl md:text-3xl text-gold-light">{stat.n}</div>
                                            <div className="text-[9px] tracking-[0.2em] uppercase text-text-muted mt-1">{stat.l}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* ── Related ── */}
            {relatedProducts.length > 0 && (
                <section className="py-16 md:py-24 px-6 md:px-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-10">
                            <h2 className="font-serif text-2xl md:text-3xl text-ivory">
                                <em className="italic text-gold-light">Complete</em> the look
                            </h2>
                            <Link href="/shop" className="text-[10px] tracking-[0.25em] uppercase text-gold hover:text-gold-light transition-colors">
                                View All →
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
                            {relatedProducts.map((relProduct) => (
                                <Link
                                    key={relProduct.id}
                                    href={`/products/${relProduct.id}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[3/4] bg-dark-soft overflow-hidden mb-3">
                                        <Image
                                            src={relProduct.images[0]}
                                            alt={relProduct.name}
                                            fill
                                            sizes="(max-width: 768px) 50vw, 33vw"
                                            className="object-cover brightness-[0.9] transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
                                        />
                                        <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-500 pointer-events-none" />
                                    </div>
                                    <div className="text-[9px] tracking-[0.25em] uppercase text-gold mb-1">{relProduct.tag}</div>
                                    <div className="font-serif text-sm md:text-base text-ivory">{relProduct.name}</div>
                                    <div className="flex items-baseline gap-2 mt-0.5">
                                        <span className="text-gold-light text-sm">{relProduct.price}</span>
                                        <span className="text-xs text-text-muted line-through">{relProduct.originalPrice}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ── Zoom lightbox ── */}
            <AnimatePresence>
                {isZoomOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={() => setIsZoomOpen(false)}
                        className="fixed inset-0 z-[250] bg-black/95 backdrop-blur-sm flex items-center justify-center"
                    >
                        <button
                            className="absolute top-6 right-6 z-10 w-11 h-11 flex items-center justify-center text-ivory hover:text-gold transition-colors"
                            aria-label="Close zoom"
                        >
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.2">
                                <path d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>
                        <motion.div
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={product.images[selectedImage]}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] text-ivory/70">
                                {selectedImage + 1} / {product.images.length}
                            </div>
                            <button
                                onClick={() => goToImage(-1)}
                                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark/50 border border-gold/20 text-ivory hover:bg-gold hover:text-dark transition-colors"
                                aria-label="Previous image"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => goToImage(1)}
                                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-dark/50 border border-gold/20 text-ivory hover:bg-gold hover:text-dark transition-colors"
                                aria-label="Next image"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    );
}
