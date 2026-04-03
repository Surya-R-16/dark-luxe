"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/collection/ProductGrid";

export function LookbookGrid() {
    return (
        <section className="bg-dark-mid py-16 md:py-[100px] px-6 md:px-10" id="shop">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-4 before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold"
            >
                Featured Pieces
            </motion.div>

            <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-serif text-[clamp(28px,5vw,64px)] font-light leading-[1.1] tracking-tight text-ivory mb-8 md:mb-[60px]"
            >
                The <em className="italic text-gold-light">Edit</em>
            </motion.h2>

            <ProductGrid products={products.slice(0, 3)} columns={3} />
        </section>
    );
}
