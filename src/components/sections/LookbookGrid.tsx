"use client";

import Image from "next/image";

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
        productImage: "/products/viva-vibe.png",
        productName: "VIVA VIBE",
        productSubtitle: "Office Bag",
        productPrice: "₹899",
        originalPrice: "₹2,099",
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
// SLIDE COMPONENTS - Larger font sizes for better readability
// ────────────────────────────────────────────────────────────────

function IntroSlide({ title, subtitle }: { title: string; subtitle: string }) {
    return (
        <div className="w-full min-h-screen flex">
            {/* Left: Text (50%) */}
            <div className="w-1/2 h-screen flex flex-col items-center justify-center gap-4 sticky top-0">
                <Image
                    src="/logos/dark-logo.png"
                    alt="Dark Luxe"
                    width={200}
                    height={100}
                    className="h-28 w-auto object-contain mb-6"
                />
                <p className="text-lg md:text-xl tracking-[0.25em] text-[#323232] uppercase">
                    {title}
                </p>
                <p className="text-base md:text-lg tracking-[0.15em] text-[#6b6b6b] italic">
                    {subtitle}
                </p>
            </div>
            {/* Right: Hero Image (50%) */}
            <div className="w-1/2 min-h-screen">
                <img
                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2574&auto=format&fit=crop"
                    alt="Campaign Hero"
                    className="w-full h-full object-cover"
                />
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
        <div className="w-full min-h-screen flex">
            {/* Left: Product Still (50%) */}
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center p-16 bg-[#F5F5F3]">
                <div className="h-[50vh] flex items-center justify-center">
                    <img
                        src={productImage}
                        alt={productName}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="mt-10 text-center">
                    <p className="text-base md:text-lg tracking-[0.2em] text-[#323232] uppercase font-medium">
                        {productName}
                    </p>
                    <p className="text-sm md:text-base tracking-[0.1em] text-[#6b6b6b] mt-1">
                        {productSubtitle}
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-3">
                        <p className="text-lg md:text-xl tracking-[0.1em] text-[#323232] font-semibold">
                            {productPrice}
                        </p>
                        <p className="text-sm md:text-base tracking-[0.1em] text-[#999] line-through">
                            {originalPrice}
                        </p>
                    </div>
                </div>
            </div>
            {/* Right: Model Shot (50%) */}
            <div className="w-1/2 min-h-screen">
                <img
                    src={modelImage}
                    alt="Editorial"
                    className="w-full h-full object-cover"
                />
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
        <div className="w-full min-h-screen flex">
            {/* Left: Model Shot (50%) */}
            <div className="w-1/2 min-h-screen">
                <img
                    src={modelImage}
                    alt="Editorial"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Right: Product Still (50%) */}
            <div className="w-1/2 min-h-screen flex flex-col items-center justify-center p-16 bg-[#F5F5F3]">
                <div className="h-[50vh] flex items-center justify-center">
                    <img
                        src={productImage}
                        alt={productName}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
                <div className="mt-10 text-center">
                    <p className="text-base md:text-lg tracking-[0.2em] text-[#323232] uppercase font-medium">
                        {productName}
                    </p>
                    <p className="text-sm md:text-base tracking-[0.1em] text-[#6b6b6b] mt-1">
                        {productSubtitle}
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-3">
                        <p className="text-lg md:text-xl tracking-[0.1em] text-[#323232] font-semibold">
                            {productPrice}
                        </p>
                        <p className="text-sm md:text-base tracking-[0.1em] text-[#999] line-through">
                            {originalPrice}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BrandStorySlide({ title }: { title: string }) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#F5F5F3] p-16">
            <div className="max-w-4xl text-center">
                <p className="text-base md:text-lg tracking-[0.25em] text-[#6b6b6b] uppercase mb-10">
                    {title}
                </p>
                <p className="text-2xl md:text-3xl leading-relaxed text-[#323232] font-serif">
                    Dark Luxe is a modern luxury brand that blends sustainability,
                    sophistication, and style—perfectly designed for women who lead
                    with purpose and presence.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[#6b6b6b] mt-10">
                    Rooted in ethical craftsmanship and thoughtful design, we create
                    timeless handbags that elevate everyday looks while staying true
                    to eco-conscious values.
                </p>
                <div className="mt-16 flex items-center justify-center gap-12">
                    <div className="text-center">
                        <p className="text-sm md:text-base tracking-[0.2em] text-[#323232] uppercase font-medium">Cruelty-Free</p>
                        <p className="text-sm text-[#6b6b6b] mt-2">Vegan Leather</p>
                    </div>
                    <div className="w-px h-12 bg-[#323232]/20" />
                    <div className="text-center">
                        <p className="text-sm md:text-base tracking-[0.2em] text-[#323232] uppercase font-medium">Eco-Friendly</p>
                        <p className="text-sm text-[#6b6b6b] mt-2">Natural Jute</p>
                    </div>
                    <div className="w-px h-12 bg-[#323232]/20" />
                    <div className="text-center">
                        <p className="text-sm md:text-base tracking-[0.2em] text-[#323232] uppercase font-medium">Ethical</p>
                        <p className="text-sm text-[#6b6b6b] mt-2">Made in India</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
