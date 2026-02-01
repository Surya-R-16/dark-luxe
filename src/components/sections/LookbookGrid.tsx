"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

// Real product data from Dark Luxe Amazon Store with actual product images
const slides = [
    {
        type: "intro",
        title: "2026",
        subtitle: "Crafting Luxury with Elegance",
    },
    {
        type: "split-right",
        modelImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2574&auto=format&fit=crop",
        productImage: "/products/beige-1.jpg",
        productName: "THE LADII LEGEND",
        productSubtitle: "Office Bag",
        productPrice: "₹1,099",
        originalPrice: "₹2,999",
    },
    {
        type: "split-left",
        modelImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop",
        productImage: "/products/beige-2.jpg",
        productName: "DARK ONYX TWIN",
        productSubtitle: "Office Bag",
        productPrice: "₹1,199",
        originalPrice: "₹3,499",
    },
    {
        type: "split-right",
        modelImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2574&auto=format&fit=crop",
        productImage: "/products/beige-3.jpg",
        productName: "THE POWER STATEMENT",
        productSubtitle: "Office Bag",
        productPrice: "₹999",
        originalPrice: "₹2,499",
    },
    {
        type: "brand-story",
        title: "OUR PHILOSOPHY",
    },
];

export function LookbookGrid() {
    return (
        <section className="bg-[#F5F5F3]">
            {/* Vertical Stack - Normal top-to-bottom scroll */}
            {slides.map((slide, index) => (
                <div key={index}>
                    {slide.type === "intro" && (
                        <IntroSlide title={slide.title!} subtitle={slide.subtitle!} />
                    )}
                    {slide.type === "split-right" && (
                        <SplitSlideRight
                            modelImage={slide.modelImage!}
                            productImage={slide.productImage!}
                            productName={slide.productName!}
                            productSubtitle={slide.productSubtitle!}
                            productPrice={slide.productPrice!}
                            originalPrice={slide.originalPrice!}
                        />
                    )}
                    {slide.type === "split-left" && (
                        <SplitSlideLeft
                            modelImage={slide.modelImage!}
                            productImage={slide.productImage!}
                            productName={slide.productName!}
                            productSubtitle={slide.productSubtitle!}
                            productPrice={slide.productPrice!}
                            originalPrice={slide.originalPrice!}
                        />
                    )}
                    {slide.type === "brand-story" && (
                        <BrandStorySlide title={slide.title!} />
                    )}
                </div>
            ))}
        </section>
    );
}

// ────────────────────────────────────────────────────────────────
// SLIDE COMPONENTS - Animated
// ────────────────────────────────────────────────────────────────

function IntroSlide({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F5F3] relative overflow-hidden">
            {/* Subtle decorative element */}
            <Reveal delay={0.2} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#323232]/5 rounded-full">
                <div className="w-full h-full" />
            </Reveal>
            <Reveal delay={0.4} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#323232]/10 rounded-full">
                <div className="w-full h-full" />
            </Reveal>

            {/* Centered content */}
            <div className="relative z-10 text-center px-8">
                <Reveal yOffset={-20}>
                    <Image
                        src="/logos/dark-logo.png"
                        alt="Dark Luxe"
                        width={220}
                        height={110}
                        className="h-28 md:h-36 w-auto object-contain mx-auto mb-10"
                    />
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-xl md:text-2xl tracking-[0.4em] text-[#323232] uppercase mb-4">
                        {title}
                    </p>
                </Reveal>
                <Reveal delay={0.4}>
                    <p className="text-lg md:text-xl tracking-[0.15em] text-[#6b6b6b] font-serif italic mb-12">
                        {subtitle}
                    </p>
                </Reveal>
                <Reveal delay={0.6}>
                    <a
                        href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D"
                        target="_blank"
                        className="inline-block text-sm tracking-[0.2em] uppercase text-[#323232] border border-[#323232] px-10 py-4 hover:bg-[#323232] hover:text-white transition-all duration-300"
                    >
                        Explore Collection
                    </a>
                </Reveal>

                {/* Scroll indicator */}
                <Reveal delay={1.0} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <p className="text-xs tracking-[0.2em] text-[#6b6b6b] uppercase">Scroll</p>
                    <div className="w-px h-8 bg-[#323232]/30" />
                </Reveal>
            </div>
        </div>
    );
}

function SplitSlideRight({
    modelImage,
    productImage,
    productName,
    productSubtitle,
    productPrice,
    originalPrice,
}: {
    modelImage: string;
    productImage: string;
    productName: string;
    productSubtitle: string;
    productPrice: string;
    originalPrice: string;
}) {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row">
            {/* Left: Product Still (50%) */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-[#F5F5F3]">
                <Reveal className="h-[40vh] md:h-[50vh] flex items-center justify-center w-full">
                    <img
                        src={productImage}
                        alt={productName}
                        className="max-h-full max-w-full object-contain"
                    />
                </Reveal>
                <div className="mt-10 text-center">
                    <Reveal delay={0.2}>
                        <p className="text-base md:text-lg tracking-[0.2em] text-[#323232] uppercase font-medium">
                            {productName}
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="text-sm md:text-base tracking-[0.1em] text-[#6b6b6b] mt-1">
                            {productSubtitle}
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <p className="text-lg md:text-xl tracking-[0.1em] text-[#323232] font-semibold">
                                {productPrice}
                            </p>
                            <p className="text-sm md:text-base tracking-[0.1em] text-[#999] line-through">
                                {originalPrice}
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
            {/* Right: Model Shot (50%) */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen">
                <Reveal delay={0.2} width="100%" className="h-full">
                    <img
                        src={modelImage}
                        alt="Editorial"
                        className="w-full h-full object-cover"
                    />
                </Reveal>
            </div>
        </div>
    );
}

function SplitSlideLeft({
    modelImage,
    productImage,
    productName,
    productSubtitle,
    productPrice,
    originalPrice,
}: {
    modelImage: string;
    productImage: string;
    productName: string;
    productSubtitle: string;
    productPrice: string;
    originalPrice: string;
}) {
    return (
        <div className="w-full min-h-screen flex flex-col-reverse md:flex-row">
            {/* Left: Model Shot (50%) */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen">
                <Reveal delay={0.2} width="100%" className="h-full">
                    <img
                        src={modelImage}
                        alt="Editorial"
                        className="w-full h-full object-cover"
                    />
                </Reveal>
            </div>
            {/* Right: Product Still (50%) */}
            <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center p-8 md:p-16 bg-[#F5F5F3]">
                <Reveal className="h-[40vh] md:h-[50vh] flex items-center justify-center w-full">
                    <img
                        src={productImage}
                        alt={productName}
                        className="max-h-full max-w-full object-contain"
                    />
                </Reveal>
                <div className="mt-10 text-center">
                    <Reveal delay={0.2}>
                        <p className="text-base md:text-lg tracking-[0.2em] text-[#323232] uppercase font-medium">
                            {productName}
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="text-sm md:text-base tracking-[0.1em] text-[#6b6b6b] mt-1">
                            {productSubtitle}
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="mt-3 flex items-center justify-center gap-3">
                            <p className="text-lg md:text-xl tracking-[0.1em] text-[#323232] font-semibold">
                                {productPrice}
                            </p>
                            <p className="text-sm md:text-base tracking-[0.1em] text-[#999] line-through">
                                {originalPrice}
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}

function BrandStorySlide({ title }: { title: string }) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F5F3] p-8 md:p-16">
            <div className="max-w-4xl text-center">
                <Reveal yOffset={-20}>
                    <p className="text-base md:text-lg tracking-[0.25em] text-[#6b6b6b] uppercase mb-10">
                        {title}
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="text-2xl md:text-3xl leading-relaxed text-[#323232] font-serif">
                        Dark Luxe is a modern luxury brand that blends sustainability,
                        sophistication, and style—perfectly designed for women who lead
                        with purpose and presence.
                    </p>
                </Reveal>
                <Reveal delay={0.4}>
                    <p className="text-lg md:text-xl leading-relaxed text-[#6b6b6b] mt-10">
                        Rooted in ethical craftsmanship and thoughtful design, we create
                        timeless handbags that elevate everyday looks while staying true
                        to eco-conscious values.
                    </p>
                </Reveal>
                <Reveal delay={0.6}>
                    <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        <div className="text-center">
                            <p className="text-sm md:text-base tracking-[0.2em] text-[#323232] uppercase font-medium">Cruelty-Free</p>
                            <p className="text-sm text-[#6b6b6b] mt-2">Vegan Leather</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-[#323232]/20" />
                        <div className="text-center">
                            <p className="text-sm md:text-base tracking-[0.2em] text-[#323232] uppercase font-medium">Eco-Friendly</p>
                            <p className="text-sm text-[#6b6b6b] mt-2">Natural Jute</p>
                        </div>
                        <div className="hidden md:block w-px h-12 bg-[#323232]/20" />
                        <div className="text-center">
                            <p className="text-sm md:text-base tracking-[0.2em] text-[#323232] uppercase font-medium">Ethical</p>
                            <p className="text-sm text-[#6b6b6b] mt-2">Made in India</p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
