"use client";

import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="absolute top-0 left-0 w-full z-50 px-6 py-5">
            <div className="flex items-center justify-between">
                {/* Left Nav - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        href="/shop"
                        className="text-sm tracking-[0.15em] uppercase text-[#323232] hover:opacity-60 transition-opacity"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/collections"
                        className="text-sm tracking-[0.15em] uppercase text-[#323232] hover:opacity-60 transition-opacity"
                    >
                        Collections
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm tracking-[0.15em] uppercase text-[#323232] hover:opacity-60 transition-opacity"
                    >
                        About
                    </Link>
                </nav>

                {/* Left Nav - Mobile */}
                <nav className="md:hidden flex items-center">
                    <Link
                        href="/shop"
                        className="text-xs tracking-[0.15em] uppercase text-[#323232]"
                    >
                        Shop
                    </Link>
                </nav>

                {/* Center Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <Image
                        src="/logos/dark-logo.png"
                        alt="Dark Luxe"
                        width={140}
                        height={70}
                        className="h-10 md:h-14 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Right Actions - Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    <button className="text-sm tracking-[0.15em] uppercase text-[#323232] hover:opacity-60 transition-opacity">
                        Search
                    </button>
                    <Link
                        href="/account"
                        className="text-sm tracking-[0.15em] uppercase text-[#323232] hover:opacity-60 transition-opacity"
                    >
                        Account
                    </Link>
                    <Link
                        href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D"
                        target="_blank"
                        className="text-sm tracking-[0.15em] uppercase text-[#323232] hover:opacity-60 transition-opacity"
                    >
                        Shop Now
                    </Link>
                </nav>

                {/* Right Actions - Mobile */}
                <nav className="md:hidden flex items-center">
                    <Link
                        href="/about"
                        className="text-xs tracking-[0.15em] uppercase text-[#323232]"
                    >
                        Story
                    </Link>
                </nav>
            </div>
        </header>
    );
}
