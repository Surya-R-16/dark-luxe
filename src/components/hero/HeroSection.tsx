"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden pt-20">
            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-purple/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-gold/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <p className="text-accent-gold tracking-[0.3em] uppercase text-sm mb-6 font-medium">
                        Est. 2024 • Made in India
                    </p>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-light-text">
                        Darkness <br />
                        Meets <span className="text-accent-gold italic">Luxury</span>
                    </h1>
                    <p className="text-muted-text text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-10 font-light leading-relaxed">
                        Sustainable, robotic-precision handbags designed for the modern leader. 
                        Cruelty-free vegan leather crafted to perfection.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                        <Link 
                            href="https://www.amazon.in" 
                            target="_blank"
                            className="px-8 py-4 bg-accent-gold text-dark-bg text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 text-center"
                        >
                            Shop on Amazon
                        </Link>
                        <Link 
                            href="/products" 
                            className="px-8 py-4 border border-white/20 text-light-text text-sm font-bold tracking-widest uppercase hover:border-accent-gold hover:text-accent-gold transition-colors duration-300 text-center"
                        >
                            View Collection
                        </Link>
                    </div>
                </motion.div>

                {/* Right: Static Hero Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
                    <div className="relative w-full h-full">
                         <Image 
                            src="/products/bw-edition.png" 
                            alt="Dark Luxe Featured Bag"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
