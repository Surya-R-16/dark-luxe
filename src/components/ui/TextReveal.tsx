"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface TextRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    type?: "slide" | "blur" | "fade";
}

const slideVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
};

const blurVariants: Variants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
};

const fadeVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export function TextReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    type = "slide",
}: TextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const variants =
        type === "blur" ? blurVariants : type === "fade" ? fadeVariants : slideVariants;

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}

interface SplitTextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    staggerDelay?: number;
    type?: "word" | "character" | "line";
}

export function SplitTextReveal({
    text,
    className = "",
    delay = 0,
    staggerDelay = 0.03,
    type = "word",
}: SplitTextRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const items = type === "character" ? text.split("") : text.split(" ");

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delay,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: "100%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {items.map((item, index) => (
                <span key={index} className="inline-block overflow-hidden">
                    <motion.span className="inline-block" variants={itemVariants}>
                        {item}
                        {type === "word" && index < items.length - 1 && "\u00A0"}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
}
