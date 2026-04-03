"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function Cursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.3 });
    const cursorY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.3 });

    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const move = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            if (!isVisible) setIsVisible(true);
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, input, [data-cursor-hover]")) {
                setIsHovering(true);
            }
        };

        const handleOut = () => setIsHovering(false);

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleOver);
        window.addEventListener("mouseout", handleOut);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleOver);
            window.removeEventListener("mouseout", handleOut);
        };
    }, [cursorX, cursorY, isVisible]);

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
        return null;
    }

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
            style={{ x: cursorX, y: cursorY }}
            animate={{
                scale: isHovering ? 2.5 : 1,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
        >
            <div className="w-5 h-5 rounded-full border border-gold/80" />
        </motion.div>
    );
}
