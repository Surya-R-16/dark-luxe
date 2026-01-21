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
                <motion.path
                    d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
                    stroke="url(#paint0_linear)"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.path
                    d="M12 20L18 26L28 14"
                    stroke="#EAEAEA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
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
                        <stop stopColor="#C9A227" />
                        <stop offset="1" stopColor="#7B3FE4" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Wordmark */}
            <div className="flex flex-col justify-center">
                <h1 className="font-serif text-xl md:text-2xl font-bold tracking-tight leading-none text-light-text">
                    DARK<span className="text-accent-gold">LUXE</span>
                </h1>
                <span className="text-[0.5rem] tracking-[0.3em] uppercase text-muted-text/80 ml-[2px]">
                    Est. 2024
                </span>
            </div>
        </div>
    );
}
