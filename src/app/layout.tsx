import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { Analytics } from "@/components/providers/Analytics";
import { Cursor } from "@/components/ui/Cursor";
import { PageTransition } from "@/components/ui/PageTransition";

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['300', '400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
};

export const metadata: Metadata = {
    metadataBase: new URL("https://www.darkluxe.in"),
    title: "Dark Luxe — Crafting Luxury with Elegance",
    description: "Vegan luxury handbags crafted for women who lead with purpose. Sustainable, ethical, and undeniably refined.",
    keywords: ["luxury handbags", "vegan leather", "cruelty-free", "dark luxe", "sustainable fashion"],
    openGraph: {
        title: "Dark Luxe — Crafting Luxury with Elegance",
        description: "Vegan luxury handbags crafted for women who lead with purpose.",
        url: "https://www.darkluxe.in",
        siteName: "Dark Luxe",
        images: [{ url: "/logos/dark-logo.png", width: 1200, height: 630, alt: "Dark Luxe" }],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dark Luxe — Crafting Luxury with Elegance",
        description: "Vegan luxury handbags crafted for women who lead with purpose.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${cormorant.variable} ${jost.variable} scroll-smooth`}>
            <body className="antialiased bg-[#0E0D0B] text-[#F7F4EE] font-jost selection:bg-gold/30">
                <Cursor />
                <Analytics />
                <SmoothScroll />
                <PageTransition>
                    {children}
                </PageTransition>
            </body>
        </html>
    );
}
