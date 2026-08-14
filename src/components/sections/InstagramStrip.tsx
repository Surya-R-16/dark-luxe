"use client";

import Image from "next/image";

const IG_URL = "https://www.instagram.com/darkluxeonline/";

const tiles = [
    "/products/Out/Landon bag/Blue/3.jpg",
    "/products/Out/Small Bag/8.jpg",
    "/products/Out/Strap Bag/Tan/4.jpg",
    "/products/beige-3.jpg",
];

export function InstagramStrip() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-10 border-t border-gold/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                    <div>
                        <div className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-3 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold">
                            On the Gram
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl text-ivory">
                            <em className="italic text-gold-light">Follow</em> the atelier
                        </h2>
                    </div>
                    <a
                        href={IG_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] tracking-[0.25em] uppercase text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors w-fit"
                    >
                        @darkluxeonline →
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
                    {tiles.map((src, i) => (
                        <a
                            key={i}
                            href={IG_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Dark Luxe Instagram"
                            className="group relative block aspect-square overflow-hidden bg-dark-soft"
                        >
                            <Image
                                src={src}
                                alt="Dark Luxe on Instagram"
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover img-lux transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors duration-500" />
                            <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 text-ivory" fill="none" stroke="currentColor" strokeWidth="1.3">
                                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                                    <circle cx="12" cy="12" r="4.2" />
                                    <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
