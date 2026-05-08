"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Philosophy() {
    return (
        <section className="bg-dark py-16 md:py-[100px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-[80px] items-center" id="philosophy">
            <motion.div 
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
            >
                <div className="relative aspect-[3/4] w-full max-w-[500px] overflow-hidden">
                    <Image 
                        src="/product-shoot-images/pomelli-image-33.png" 
                        alt="Our Philosophy"
                        fill
                        className="object-cover brightness-75 grayscale-[20%] transition-transform duration-700 hover:scale-105"
                    />
                </div>
                {/* Decorative Accents */}
                <div className="absolute -bottom-6 -right-6 w-[120px] h-[120px] border border-gold/30 pointer-events-none hidden md:block" />
                <div className="absolute -bottom-10 -right-10 w-[80px] h-[80px] border border-gold/15 pointer-events-none hidden md:block" />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex flex-col gap-6"
            >
                <div className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold">
                    Our Philosophy
                </div>
                <h2 className="font-serif text-[clamp(28px,5vw,64px)] font-light leading-[1.1] tracking-tight text-ivory">
                    Where <em className="italic text-gold-light">Ethics</em><br />Meet Elegance
                </h2>
                <p className="text-[15px] leading-[1.9] text-text-light max-w-[480px]">
                    Dark Luxe was born from a belief that luxury shouldn&apos;t cost the earth — 
                    or anything living on it. Every bag is a testament to the idea that 
                    beauty and responsibility are not opposites.
                </p>
                
                <Link 
                    href="/about" 
                    className="inline-block w-fit px-9 py-4 bg-gold text-dark text-xs md:text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-200 mt-4"
                >
                    Read Our Story
                </Link>

                <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-6 md:gap-y-10 mt-8 md:mt-10">
                    <ValueItem title="Vegan Leather" desc="Zero animal harm. Full luxury feel." />
                    <ValueItem title="Made in India" desc="Supporting skilled local artisans." />
                    <ValueItem title="Natural Jute" desc="Sustainable materials, timeless design." />
                    <ValueItem title="Eco-Friendly" desc="Thoughtful production at every step." />
                </div>
            </motion.div>
        </section>
    );
}

function ValueItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="border-t border-gold/20 pt-4">
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-gold mb-1.5">{title}</h4>
            <p className="text-[12px] text-text-muted leading-[1.6]">{desc}</p>
        </div>
    );
}
