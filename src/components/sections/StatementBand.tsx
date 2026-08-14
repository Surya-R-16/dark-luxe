"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function StatementBand() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={ref} className="relative h-[62vh] md:h-[75vh] overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 -top-[14%] -bottom-[14%]">
                <Image
                    src="/product-shoot-images/pomelli-image-33.jpg"
                    alt="Dark Luxe craftsmanship"
                    fill
                    sizes="100vw"
                    className="object-cover img-lux"
                />
            </motion.div>
            <div className="absolute inset-0 bg-dark/65" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-gold mb-6 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold after:content-[''] after:block after:w-[30px] after:h-[1px] after:bg-gold"
                >
                    The Dark Luxe Way
                </motion.div>
                <motion.blockquote
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="font-serif font-light text-ivory leading-[1.2] text-[clamp(30px,5.5vw,64px)] max-w-3xl"
                >
                    Carry less. Carry <em className="italic text-gold-light">better</em>.
                    <br />
                    Carry meaning.
                </motion.blockquote>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-text-muted text-sm md:text-base tracking-[0.05em] mt-7 max-w-xl leading-[1.9]"
                >
                    Every Dark Luxe piece is designed to outlast trends — and to tread
                    lightly on the world that carries it.
                </motion.p>
            </div>
        </section>
    );
}
