"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
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

        // Track hoverable elements
        const hoverableElements = document.querySelectorAll(
            'a, button, [role="button"], .hoverable, [data-cursor="hover"]'
        );

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        hoverableElements.forEach((el) => {
            el.addEventListener("mouseenter", handleMouseEnter);
            el.addEventListener("mouseleave", handleMouseLeave);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            hoverableElements.forEach((el) => {
                el.removeEventListener("mouseenter", handleMouseEnter);
                el.removeEventListener("mouseleave", handleMouseLeave);
            });
        };
    }, [moveCursor]);

    // Re-attach listeners when DOM updates
    useEffect(() => {
        const observer = new MutationObserver(() => {
            const hoverableElements = document.querySelectorAll(
                'a, button, [role="button"], .hoverable, [data-cursor="hover"]'
            );

            const handleMouseEnter = () => setIsHovering(true);
            const handleMouseLeave = () => setIsHovering(false);

            hoverableElements.forEach((el) => {
                el.addEventListener("mouseenter", handleMouseEnter);
                el.addEventListener("mouseleave", handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isHovering ? 60 : 32,
                    height: isHovering ? 60 : 32,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
            >
                <motion.div
                    className="w-full h-full rounded-full border-2 border-light-text"
                    animate={{
                        scale: isHovering ? 1 : 1,
                        borderColor: isHovering ? "#7B3FE4" : "#EAEAEA",
                        boxShadow: isHovering
                            ? "0 0 20px rgba(123, 63, 228, 0.6), inset 0 0 20px rgba(123, 63, 228, 0.2)"
                            : "0 0 10px rgba(234, 234, 234, 0.2)",
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>

            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-light-text rounded-full pointer-events-none z-[9999]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ duration: 0.15 }}
            />
        </>
    );
}
