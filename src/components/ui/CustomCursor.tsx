"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);

    // Use motion values for better performance than state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for the cursor
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center the 32px cursor
            mouseY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Add event listeners for clickable elements
        const clickables = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
        clickables.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        // Observe DOM changes to attach listeners to new elements
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    const newClickables = document.querySelectorAll('a, button, [role="button"], input, select, textarea');
                    newClickables.forEach((el) => {
                        el.removeEventListener("mouseenter", handleHoverStart); // Prevent duplicates
                        el.removeEventListener("mouseleave", handleHoverEnd);
                        el.addEventListener("mouseenter", handleHoverStart);
                        el.addEventListener("mouseleave", handleHoverEnd);
                    });
                }
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            clickables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
            observer.disconnect();
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? "white" : "transparent",
            }}
            transition={{
                scale: { type: "spring", stiffness: 300, damping: 20 },
                backgroundColor: { duration: 0.2 },
            }}
        />
    );
}
