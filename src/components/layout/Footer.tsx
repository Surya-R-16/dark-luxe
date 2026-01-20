"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const footerLinks = {
    collection: ["The Noir", "The Eclipse", "The Obsidian", "The Phantom"],
    about: ["Our Story", "Craftsmanship", "Sustainability", "Careers"],
    support: ["Contact", "Shipping", "Returns", "FAQ"],
};

export function Footer() {
    const footerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(footerRef, { once: true, margin: "-100px" });

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <footer
            ref={footerRef}
            className="relative bg-dark-bg border-t border-white/5"
        >
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark-surface/50 to-transparent pointer-events-none" />

            <motion.div
                className="max-w-7xl mx-auto px-8 py-24"
                style={{ y, opacity }}
            >
                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <motion.h2
                            className="font-serif text-4xl mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="holographic-text">DARK</span>{" "}
                            <span className="text-light-text">LUXE</span>
                        </motion.h2>
                        <motion.p
                            className="text-muted-text text-sm leading-relaxed mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1 }}
                        >
                            Where darkness meets luxury. Handcrafted leather goods
                            for those who dare to stand apart.
                        </motion.p>

                        {/* Contact Info */}
                        <div className="mb-8">
                            <h3 className="text-accent-gold text-xs tracking-[0.3em] uppercase mb-4">Contact</h3>
                            <div className="space-y-2">
                                <p className="text-muted-text text-sm">
                                    <span className="block text-light-text mb-1">Email</span>
                                    darkluxebags@gmail.com
                                </p>
                                <p className="text-muted-text text-sm">
                                    <span className="block text-light-text mb-1">Phone</span>
                                    +91 96775 77899
                                </p>
                            </div>
                        </div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className="text-light-text text-sm mb-4">Join the darkness</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-dark-surface border border-white/10 px-4 py-3 text-light-text text-sm placeholder:text-muted-text focus:outline-none focus:border-accent-gold/50 transition-colors"
                                />
                                <MagneticButton
                                    className="px-6 py-3 bg-accent-gold text-dark-bg text-sm font-medium tracking-wide hover:bg-liquid-gold transition-colors"
                                    strength={0.2}
                                >
                                    Subscribe
                                </MagneticButton>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links */}
                    <div className="lg:col-span-8 grid sm:grid-cols-3 gap-12">
                        {Object.entries(footerLinks).map(([category, links], catIndex) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.3 + catIndex * 0.1 }}
                            >
                                <h3 className="text-accent-gold text-xs tracking-[0.3em] uppercase mb-6">
                                    {category}
                                </h3>
                                <ul className="space-y-4">
                                    {links.map((link, linkIndex) => (
                                        <li key={link}>
                                            <motion.a
                                                href="#"
                                                className="text-muted-text text-sm hover:text-light-text transition-colors duration-300 inline-block"
                                                whileHover={{ x: 5 }}
                                                data-cursor="hover"
                                            >
                                                {link}
                                            </motion.a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <motion.div
                    className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <p className="text-muted-text text-xs">
                        © 2024 Dark Luxe. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        {["Instagram", "Twitter", "Pinterest"].map((social) => (
                            <motion.a
                                key={social}
                                href="#"
                                className="text-muted-text text-xs hover:text-accent-gold transition-colors"
                                whileHover={{ y: -2 }}
                                data-cursor="hover"
                            >
                                {social}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
