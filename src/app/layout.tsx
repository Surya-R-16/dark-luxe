import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "DARK LUXE | Premium Handbags",
    description: "Experience the epitome of dark luxury. Handcrafted leather handbags for the discerning.",
    keywords: ["luxury handbags", "premium leather", "designer bags", "dark luxury"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
            <body className="antialiased noise-overlay">
                <SmoothScrollProvider>
                    <CustomCursor />
                    {children}
                </SmoothScrollProvider>
            </body>
        </html>
    );
}
