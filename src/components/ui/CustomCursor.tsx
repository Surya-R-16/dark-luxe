"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text">("default");

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Premium smooth spring physics
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const moveCursor = useCallback(
        (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        },
        [cursorX, cursorY, isVisible]
    );

    useEffect(() => {
        window.addEventListener("mousemove", moveCursor);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for interactive elements
            if (target.matches('a, button, [role="button"], input, textarea, select')) {
                setIsHovering(true);
                setCursorVariant("hover");
            } else if (target.matches('p, h1, h2, h3, h4, h5, h6, span')) {
                setCursorVariant("text");
                setIsHovering(false);
            } else {
                setCursorVariant("default");
                setIsHovering(false);
            }

            // Explicit data-cursor override
            const cursorType = target.getAttribute("data-cursor");
            if (cursorType) {
                setCursorVariant(cursorType as "default" | "hover" | "text");
                setIsHovering(cursorType === "hover");
            }
        };

        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [moveCursor]);

    return (
        <>
            {/* Main Cursor Ring/Shape */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Default State: Ring */}
                <motion.div
                    animate={{
                        width: isHovering ? 64 : 12,
                        height: isHovering ? 64 : 12,
                        backgroundColor: isHovering ? "white" : "transparent",
                        borderWidth: isHovering ? 0 : 2,
                        borderColor: "white",
                        borderRadius: isHovering ? "20%" : "50%", // Subtle squaring on hover for "tech" feel
                    }}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300
                    }}
                    className="flexItems-center justify-center opacity-80"
                >
                    {/* "Magnetic" Pull Text (Optional, keeping simple for now) */}
                </motion.div>
            </motion.div>

            {/* Trailing Dot / Accent */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-accent-gold rounded-full pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1, // Hide dot when hovering (merged into shape)
                }}
            />
        </>
    );
}
