"use client";

import Link from "next/link";
import Image from "next/image";

const footerLinks = {
    about: [
        { name: "Our Story", href: "/about" },
        { name: "Craftsmanship", href: "/craftsmanship" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Vegan & Cruelty-Free", href: "/ethics" },
    ],
    shop: [
        { name: "Office Bags", href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" },
        { name: "New Arrivals", href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" },
        { name: "Best Sellers", href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" },
    ],
    support: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Shipping & Returns", href: "/shipping" },
    ],
    connect: [
        { name: "Instagram", href: "https://www.instagram.com/darkluxeonline/" },
        { name: "Amazon Store", href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-[#F5F5F3] border-t border-[#323232]/10 py-20 px-8">
            <div className="max-w-6xl mx-auto">
                {/* Brand Statement */}
                <div className="mb-14 text-center">
                    <Image
                        src="/logos/dark-logo.png"
                        alt="Dark Luxe"
                        width={120}
                        height={60}
                        className="h-14 w-auto object-contain mx-auto mb-5"
                    />
                    <p className="text-sm tracking-[0.2em] text-[#6b6b6b] uppercase">
                        Crafting Luxury with Elegance
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* About */}
                    <div>
                        <h4 className="text-sm tracking-[0.2em] uppercase text-[#323232] mb-6 font-medium">
                            About
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.about.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm tracking-[0.05em] text-[#6b6b6b] hover:text-[#323232] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-sm tracking-[0.2em] uppercase text-[#323232] mb-6 font-medium">
                            Shop
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="text-sm tracking-[0.05em] text-[#6b6b6b] hover:text-[#323232] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm tracking-[0.2em] uppercase text-[#323232] mb-6 font-medium">
                            Support
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm tracking-[0.05em] text-[#6b6b6b] hover:text-[#323232] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm tracking-[0.2em] uppercase text-[#323232] mb-6 font-medium">
                            Connect
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.connect.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="text-sm tracking-[0.05em] text-[#6b6b6b] hover:text-[#323232] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-[#323232]/10">
                    <p className="text-sm tracking-[0.05em] text-[#6b6b6b]">
                        © 2026 Dark Luxe. All rights reserved. | Cruelty-Free & Vegan
                    </p>
                    <p className="text-sm tracking-[0.05em] text-[#6b6b6b] mt-4 md:mt-0">
                        Made in India 🇮🇳
                    </p>
                </div>
            </div>
        </footer>
    );
}
