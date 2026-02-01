import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";

const baskerville = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-baskerville",
    display: "swap",
});

export const metadata: Metadata = {
    title: "DARK LUXE",
    description: "2026 Collection. Handcrafted leather handbags for the discerning.",
    keywords: ["luxury handbags", "premium leather", "designer bags", "dark luxe"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={baskerville.variable}>
            <body className="antialiased bg-[#F5F5F3] text-[#323232]">
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
