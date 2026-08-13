"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartContext";

export function CartDrawer() {
    const {
        items,
        isCartOpen,
        setIsCartOpen,
        updateQuantity,
        removeFromCart,
        totalItems,
        totalPrice,
    } = useCart();

    // Lock body scroll while the drawer is open
    useEffect(() => {
        if (isCartOpen) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
            };
        }
    }, [isCartOpen]);

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        key="drawer-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 z-[210] bg-black/70 backdrop-blur-[2px]"
                    />
                    <motion.aside
                        key="drawer-panel"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.45, ease: [0.77, 0, 0.175, 1] }}
                        className="fixed right-0 top-0 bottom-0 z-[220] w-full max-w-md bg-dark-mid border-l border-gold/15 flex flex-col"
                        role="dialog"
                        aria-label="Shopping bag"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 md:px-8 py-6 border-b border-gold/10">
                            <div className="flex items-baseline gap-3">
                                <h2 className="font-serif text-2xl font-light tracking-[0.08em] text-ivory">
                                    Your Bag
                                </h2>
                                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">
                                    {totalItems} {totalItems === 1 ? "item" : "items"}
                                </span>
                            </div>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                aria-label="Close bag"
                                className="w-10 h-10 flex items-center justify-center text-text-light hover:text-gold transition-colors"
                            >
                                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.2">
                                    <path d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
                            {items.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center gap-6">
                                    <p className="font-serif text-xl text-text-light italic">
                                        Your bag awaits its first treasure.
                                    </p>
                                    <button
                                        onClick={() => setIsCartOpen(false)}
                                        className="border border-gold text-gold px-8 py-3 text-[11px] tracking-[0.25em] uppercase hover:bg-gold hover:text-dark transition-colors"
                                    >
                                        Continue Shopping
                                    </button>
                                </div>
                            ) : (
                                <ul className="space-y-6">
                                    {items.map(({ product, quantity }) => (
                                        <li key={product.id} className="flex gap-4">
                                            <Link
                                                href={`/products/${product.id}`}
                                                onClick={() => setIsCartOpen(false)}
                                                className="relative w-20 h-24 md:w-24 md:h-28 bg-dark-soft shrink-0 overflow-hidden"
                                            >
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </Link>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between gap-2">
                                                    <div>
                                                        <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-1">
                                                            {product.tag}
                                                        </p>
                                                        <h3 className="font-serif text-base md:text-lg text-ivory leading-tight truncate">
                                                            {product.name}
                                                        </h3>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(product.id)}
                                                        aria-label={`Remove ${product.name}`}
                                                        className="text-text-muted hover:text-gold transition-colors self-start"
                                                    >
                                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.2">
                                                            <path d="M6 6l12 12M18 6L6 18" />
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div className="flex items-center justify-between mt-3">
                                                    <div className="flex items-center border border-gold/25">
                                                        <button
                                                            onClick={() => updateQuantity(product.id, quantity - 1)}
                                                            className="w-7 h-7 flex items-center justify-center text-text-light hover:text-gold hover:bg-dark-soft transition-colors"
                                                            aria-label="Decrease quantity"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="w-8 text-center text-sm text-ivory">
                                                            {quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(product.id, quantity + 1)}
                                                            className="w-7 h-7 flex items-center justify-center text-text-light hover:text-gold hover:bg-dark-soft transition-colors"
                                                            aria-label="Increase quantity"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <span className="text-sm text-gold-light tracking-[0.05em]">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-gold/10 px-6 md:px-8 py-6 space-y-4">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-[10px] tracking-[0.3em] uppercase text-text-muted">
                                        Subtotal
                                    </span>
                                    <span className="font-serif text-2xl text-gold-light">
                                        ₹{totalPrice.toLocaleString("en-IN")}
                                    </span>
                                </div>
                                <p className="text-[10px] tracking-[0.15em] uppercase text-text-muted/70">
                                    Shipping &amp; taxes calculated at checkout
                                </p>
                                <a
                                    href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-gold text-dark text-[11px] tracking-[0.3em] uppercase font-medium text-center px-8 py-4 hover:bg-gold-light transition-colors"
                                >
                                    Checkout on Amazon
                                </a>
                                <Link
                                    href="/cart"
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full text-[10px] tracking-[0.25em] uppercase text-text-muted hover:text-gold transition-colors text-center py-1"
                                >
                                    View Full Bag →
                                </Link>
                                <button
                                    onClick={() => setIsCartOpen(false)}
                                    className="block w-full text-[10px] tracking-[0.25em] uppercase text-text-muted hover:text-gold transition-colors text-center py-1"
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
}
