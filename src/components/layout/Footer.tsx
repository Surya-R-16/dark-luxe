"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-dark border-t border-gold/12 pt-12 md:pt-[70px] pb-8 px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[60px] mb-12 md:mb-[60px]">
                <div className="flex flex-col gap-4">
                    <Image 
                        src="/logos/white-logo.png" 
                        alt="Dark Luxe" 
                        width={120} 
                        height={60}
                        className="h-10 w-auto object-contain mb-2"
                    />
                    <p className="text-xs text-text-muted leading-[1.8] max-w-[260px]">
                        Crafting luxury with elegance — vegan, ethical, and unapologetically refined. Made with love in India.
                    </p>
                </div>

                <div>
                    <h4 className="text-[10px] tracking-[0.25em] uppercase font-medium text-ivory mb-5">About</h4>
                    <ul className="list-none p-0 flex flex-col gap-2.5">
                        <li><Link href="/about" className="text-xs text-text-muted hover:text-gold transition-colors">Our Story</Link></li>
                        <li><Link href="/about" className="text-xs text-text-muted hover:text-gold transition-colors">Craftsmanship</Link></li>
                        <li><Link href="/about" className="text-xs text-text-muted hover:text-gold transition-colors">Sustainability</Link></li>
                        <li><Link href="/about" className="text-xs text-text-muted hover:text-gold transition-colors">Vegan & Cruelty-Free</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] tracking-[0.25em] uppercase font-medium text-ivory mb-5">Shop</h4>
                    <ul className="list-none p-0 flex flex-col gap-2.5">
                        <li><Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">Office Bags</Link></li>
                        <li><Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">New Arrivals</Link></li>
                        <li><Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">Best Sellers</Link></li>
                        <li><Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">Amazon Store</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[10px] tracking-[0.25em] uppercase font-medium text-ivory mb-5">Connect</h4>
                    <ul className="list-none p-0 flex flex-col gap-2.5">
                        <li><Link href="https://www.instagram.com/darkluxeonline/" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">Instagram</Link></li>
                        <li><Link href="https://wa.me/919677577899" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">WhatsApp</Link></li>
                        <li><Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs text-text-muted hover:text-gold transition-colors">Amazon</Link></li>
                        <li><Link href="mailto:hello@darkluxe.in" className="text-xs text-text-muted hover:text-gold transition-colors">Email</Link></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gold/10 gap-3">
                <p className="text-[11px] text-text-muted tracking-[0.05em]">
                    © 2026 Dark Luxe. All rights reserved. Cruelty-Free & Vegan · Made in India 🇮🇳
                </p>
                <div className="flex gap-4">
                    <Link href="https://www.instagram.com/darkluxeonline/" target="_blank" className="text-xs tracking-[0.2em] uppercase text-text-muted hover:text-gold transition-colors py-2 px-1">Instagram</Link>
                    <Link href="https://wa.me/919677577899" target="_blank" className="text-xs tracking-[0.2em] uppercase text-text-muted hover:text-gold transition-colors py-2 px-1">WhatsApp</Link>
                    <Link href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D" target="_blank" className="text-xs tracking-[0.2em] uppercase text-text-muted hover:text-gold transition-colors py-2 px-1">Amazon</Link>
                </div>
            </div>
        </footer>
    );
}
