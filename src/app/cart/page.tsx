"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/providers/CartContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <main className="bg-dark min-h-screen">
            <Header />
            <section className="pt-28 md:pt-40 pb-12 px-6 md:px-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-serif text-3xl md:text-4xl text-ivory mb-8">Shopping Bag</h1>

                    {items.length === 0 ? (
                        <div className="text-center py-16">
                            <p className="text-text-muted text-lg mb-8">Your bag is empty</p>
                            <Link
                                href="/shop"
                                className="inline-block bg-gold text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <div className="border-b border-gold/20 pb-4 mb-6 hidden md:grid md:grid-cols-12 gap-4 text-text-muted text-xs tracking-[0.2em] uppercase">
                                <div className="md:col-span-6">Product</div>
                                <div className="md:col-span-2 text-center">Quantity</div>
                                <div className="md:col-span-2 text-center">Price</div>
                                <div className="md:col-span-2 text-right">Total</div>
                            </div>

                            {items.map((item) => {
                                const price = parseInt(item.product.price.replace(/[₹,]/g, ""));
                                const itemTotal = price * item.quantity;

                                return (
                                    <motion.div
                                        key={item.product.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="border-b border-gold/10 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
                                    >
                                        <div className="md:col-span-6 flex gap-4">
                                            <Link href={`/products/${item.product.id}`} className="w-20 h-24 md:w-24 md:h-32 bg-dark-soft relative flex-shrink-0">
                                                <Image
                                                    src={item.product.images[0]}
                                                    alt={item.product.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </Link>
                                            <div>
                                                <Link
                                                    href={`/products/${item.product.id}`}
                                                    className="font-serif text-lg text-ivory hover:text-gold transition-colors"
                                                >
                                                    {item.product.name}
                                                </Link>
                                                <p className="text-xs text-text-muted mt-1 tracking-[0.1em] uppercase">
                                                    {item.product.category}
                                                </p>
                                                <button
                                                    onClick={() => removeFromCart(item.product.id)}
                                                    className="text-xs text-gold/60 hover:text-gold mt-3 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        <div className="md:col-span-2 flex items-center justify-center gap-2 mt-4 md:mt-0">
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                                className="w-8 h-8 border border-gold/30 flex items-center justify-center text-ivory hover:border-gold transition-colors"
                                            >
                                                −
                                            </button>
                                            <span className="w-8 h-8 flex items-center justify-center text-ivory">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                                className="w-8 h-8 border border-gold/30 flex items-center justify-center text-ivory hover:border-gold transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="md:col-span-2 text-center mt-4 md:mt-0">
                                            <span className="text-gold-light">{item.product.price}</span>
                                        </div>

                                        <div className="md:col-span-2 text-right mt-4 md:mt-0">
                                            <span className="text-gold-light">{formatPrice(itemTotal)}</span>
                                        </div>
                                    </motion.div>
                                );
                            })}

                            <div className="mt-8 flex flex-col items-end gap-4">
                                <div className="flex justify-between w-full md:w-64 text-lg">
                                    <span className="text-text-muted">Subtotal</span>
                                    <span className="text-gold-light">{formatPrice(totalPrice)}</span>
                                </div>
                                <p className="text-xs text-text-muted">Shipping & taxes calculated at checkout</p>
                            </div>

                            <div className="mt-8 flex flex-col md:flex-row gap-4">
                                <button
                                    onClick={clearCart}
                                    className="border border-gold/30 text-gold px-6 py-3 text-xs tracking-[0.2em] uppercase hover:border-gold transition-colors"
                                >
                                    Clear Bag
                                </button>
                                <a
                                    href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gold text-dark px-8 py-4 text-sm tracking-[0.2em] uppercase text-center hover:bg-gold-light transition-colors"
                                >
                                    Checkout on Amazon
                                </a>
                            </div>

                            <p className="text-xs text-text-muted mt-6 text-center">
                                Or continue shopping to add more items to your bag
                            </p>

                            <div className="mt-4 flex justify-center gap-4">
                                <Link href="/shop" className="text-gold text-sm hover:text-gold-light transition-colors">
                                    Continue Shopping
                                </Link>
                                <span className="text-text-muted">|</span>
                                <Link href="/collections" className="text-gold text-sm hover:text-gold-light transition-colors">
                                    View Collections
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </main>
    );
}