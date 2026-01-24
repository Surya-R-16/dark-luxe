"use client";

import { motion } from "framer-motion";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`relative flex items-center gap-2 ${className}`}>
            {/* Logo Icon - Stylized Monogram/Icon */}
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 md:w-12 md:h-12"
            >
                {/* Minimalist Diamond/Gem Shape */}
                <motion.rect
                    x="20"
                    y="4"
                    width="24"
                    height="24"
                    rx="1"
                    transform="rotate(45 20 4)"
                    stroke="url(#paint0_linear)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                />

                {/* Inner Accent */}
                <motion.rect
                    x="20"
                    y="12"
                    width="12"
                    height="12"
                    rx="0.5"
                    transform="rotate(45 20 12)"
                    fill="currentColor"
                    className="text-current"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />

                <defs>
                    <linearGradient
                        id="paint0_linear"
                        x1="0"
                        y1="0"
                        x2="40"
                        y2="40"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#B8860B" />
                        <stop offset="1" stopColor="#111111" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Wordmark */}
            <div className="flex flex-col justify-center">
                <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight leading-none text-current">
                    DARK<span className="text-accent-gold">LUXE</span>
                </h1>
                <span className="text-[0.5rem] tracking-[0.3em] uppercase text-text-secondary ml-[2px]">
                    Est. 2024
                </span>
            </div>
        </div>
    );
}
