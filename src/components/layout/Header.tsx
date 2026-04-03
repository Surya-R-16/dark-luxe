"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <nav 
                id="navbar"
                className={`fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center justify-between px-6 md:px-10 transition-all duration-300 border-b ${
                    isScrolled 
                    ? "bg-dark/95 backdrop-blur-md border-gold/15" 
                    : "bg-dark/85 backdrop-blur-sm border-gold/10"
                }`}
            >
                <Link href="/" className="font-serif text-xl md:text-2xl font-semibold tracking-[0.12em] text-gold uppercase">
                    Dark Luxe
                </Link>

                <ul className="hidden md:flex items-center gap-9 list-none">
                    <li><Link href="/collections" className="text-[11px] tracking-[0.18em] uppercase text-text-light hover:text-gold transition-colors">Collections</Link></li>
                    <li><Link href="/about" className="text-[11px] tracking-[0.18em] uppercase text-text-light hover:text-gold transition-colors">Our Story</Link></li>
                    <li><Link href="/shop" className="text-[11px] tracking-[0.18em] uppercase text-text-light hover:text-gold transition-colors">Shop</Link></li>
                    <li><Link href="#contact" className="text-[11px] tracking-[0.18em] uppercase text-text-light hover:text-gold transition-colors">Contact</Link></li>
                </ul>

                <div className="flex items-center gap-5">
                    <button className="hidden md:block text-[11px] tracking-[0.18em] uppercase text-text-light hover:text-gold transition-colors">
                        Search
                    </button>
                    <Link 
                        href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" 
                        target="_blank"
                        className="hidden md:block text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/50 px-[18px] py-[9px] hover:bg-gold hover:text-dark transition-all duration-200"
                    >
                        Shop Now
                    </Link>
                    
                    <button 
                        className="md:hidden flex flex-col gap-1.5 p-3" 
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <span className={`block w-6 h-[1px] bg-ivory transition-transform ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                        <span className={`block w-6 h-[1px] bg-ivory transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}></span>
                        <span className={`block w-6 h-[1px] bg-ivory transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
                        className="fixed inset-0 z-[200] bg-dark flex flex-col justify-center items-center gap-8"
                    >
                        <button 
                            className="absolute top-6 right-8 text-ivory text-3xl p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
                            onClick={toggleMenu}
                        >
                            ✕
                        </button>
                        <Link href="/collections" onClick={toggleMenu} className="font-serif text-4xl font-light tracking-[0.08em] text-ivory hover:text-gold transition-colors">Collections</Link>
                        <Link href="/about" onClick={toggleMenu} className="font-serif text-4xl font-light tracking-[0.08em] text-ivory hover:text-gold transition-colors">Our Story</Link>
                        <Link href="/shop" onClick={toggleMenu} className="font-serif text-4xl font-light tracking-[0.08em] text-ivory hover:text-gold transition-colors">Shop</Link>
                        <Link href="#contact" onClick={toggleMenu} className="font-serif text-4xl font-light tracking-[0.08em] text-ivory hover:text-gold transition-colors">Contact</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
