"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const navLinks = [
        { name: "Shop", href: "/products" },
        { name: "Collection", href: "/#collection" },
        { name: "About", href: "/#about" },
    ];

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6 transition-colors duration-500 ${isScrolled ? "bg-dark-bg/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
                {/* Logo */}
                <Link href="/" className="relative z-10 pointer-events-auto">
                    <div className="relative w-28 h-10 md:w-32 md:h-12 mix-blend-difference">
                        <Image
                            src="/logos/Logo1.png"
                            alt="Dark Luxe Logo"
                            fill
                            className="object-contain filter invert grayscale contrast-125"
                            priority
                        />
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-12 pointer-events-auto">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="relative group p-2">
                            <span className="font-sans text-sm tracking-widest uppercase text-light-text/80 group-hover:text-light-text transition-colors duration-300">
                                {link.name}
                            </span>
                            <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-accent-gold group-hover:w-full transition-all duration-300 -translate-x-1/2 ease-premium" />
                        </Link>
                    ))}

                    {/* CTA Button */}
                    <button
                        className="px-6 py-2 border border-white/20 rounded-full text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300 ease-out"
                        data-cursor="hover"
                    >
                        CART (0)
                    </button>
                </nav>

                {/* Mobile Menu Toggle (Simplified for now) */}
                <div className="md:hidden pointer-events-auto">
                    <button className="text-light-text p-2">
                        <div className="w-6 h-0.5 bg-current mb-1.5" />
                        <div className="w-4 h-0.5 bg-current ml-auto" />
                    </button>
                </div>
            </div>
        </motion.header>
    );
}
