import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

export default function AboutPage() {
    return (
        <main className="bg-dark min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8">
                <div className="max-w-4xl text-center flex flex-col items-center">
                    <Reveal yOffset={-20}>
                        <p className="text-sm tracking-[0.3em] text-gold uppercase mb-6">
                            About the Brand
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-3xl md:text-5xl font-serif text-ivory leading-tight mb-8">
                            Crafting Luxury with Elegance
                        </h1>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-lg md:text-xl text-text-light leading-relaxed max-w-3xl mx-auto">
                            Dark Luxe is a modern luxury brand that blends sustainability,
                            sophistication, and style—perfectly designed for women who lead
                            with purpose and presence.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Brand Story - Split Layout */}
            <section className="flex flex-col md:flex-row min-h-screen">
                {/* Image */}
                <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative">
                    <Reveal width="100%" className="h-full relative">
                        <Image
                            src="/products/beige-1.jpg"
                            alt="Dark Luxe craftsmanship"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </Reveal>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20">
                    <div className="max-w-md">
                        <Reveal yOffset={-20}>
                            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">
                                Our Story
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h2 className="text-2xl md:text-3xl font-serif text-ivory mb-6 leading-snug">
                                Rooted in Ethical Craftsmanship
                            </h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-base md:text-lg text-text-light leading-relaxed mb-6">
                                Rooted in ethical craftsmanship and thoughtful design, we create
                                timeless handbags that elevate everyday looks while staying true
                                to eco-conscious values.
                            </p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <p className="text-base md:text-lg text-text-light leading-relaxed">
                                Each Dark Luxe bag is meticulously crafted with a focus on ethical
                                production and timeless design. You don&apos;t just carry a beautiful
                                bag—you carry a belief in a better, more responsible future.

                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center mb-12 md:mb-16">
                        <Reveal yOffset={-20}>
                            <p className="text-sm tracking-[0.3em] text-gold uppercase text-center">
                                Our Values
                            </p>
                        </Reveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                        {/* Cruelty-Free */}
                        <div className="flex flex-col items-center text-center">
                            <Reveal delay={0.1}>
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-base tracking-[0.2em] text-ivory uppercase font-medium mb-4">
                                    Cruelty-Free
                                </h3>
                                <p className="text-base text-text-muted leading-relaxed">
                                    We are committed to cruelty-free fashion, using only premium
                                    vegan leather in all our products. No animals are harmed in
                                    the making of our bags.
                                </p>
                            </Reveal>
                        </div>

                        {/* Eco-Friendly */}
                        <div className="flex flex-col items-center text-center">
                            <Reveal delay={0.3}>
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-base tracking-[0.2em] text-ivory uppercase font-medium mb-4">
                                    Eco-Friendly
                                </h3>
                                <p className="text-base text-text-muted leading-relaxed">
                                    We use natural jute and eco-friendly materials, minimizing our
                                    environmental footprint while delivering exceptional quality
                                    and durability.
                                </p>
                            </Reveal>
                        </div>

                        {/* Ethical */}
                        <div className="flex flex-col items-center text-center">
                            <Reveal delay={0.5}>
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-base tracking-[0.2em] text-ivory uppercase font-medium mb-4">
                                    Ethical Production
                                </h3>
                                <p className="text-base text-text-muted leading-relaxed">
                                    Proudly made in India with fair labor practices. Every bag
                                    supports local artisans and communities, ensuring dignity
                                    and fair wages.
                                </p>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase - Split Layout (reversed) */}
            <section className="flex flex-col md:flex-row-reverse min-h-screen">
                {/* Image */}
                <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative">
                    <Reveal width="100%" className="h-full relative">
                        <Image
                            src="/products/viva-vibe.png"
                            alt="Dark Luxe Viva Vibe"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </Reveal>
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 lg:p-20">
                    <div className="max-w-md">
                        <Reveal yOffset={-20}>
                            <p className="text-sm tracking-[0.25em] text-gold uppercase mb-6">
                                Our Promise
                            </p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <h2 className="text-2xl md:text-3xl font-serif text-ivory mb-6 leading-snug">
                                Timeless Design, Conscious Choice
                            </h2>
                        </Reveal>
                        <Reveal delay={0.3}>
                            <p className="text-base md:text-lg text-text-light leading-relaxed mb-8">
                                When you choose Dark Luxe, you choose more than a bag. You choose
                                a statement of style that aligns with your values—sustainability,
                                elegance, and purpose.
                            </p>
                        </Reveal>
                        <Reveal delay={0.4}>
                            <Link
                                href="https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D"
                                target="_blank"
                                className="inline-block text-sm tracking-[0.2em] uppercase text-gold border-b border-gold/30 py-3 hover:border-gold transition-colors"
                            >
                                Shop the Collection
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Made in India */}
            <section className="py-16 md:py-24 px-4 md:px-8 text-center flex justify-center">
                <Reveal>
                    <div className="flex flex-col items-center">
                        <Image
                            src="/logos/white-logo.png"
                            alt="Dark Luxe"
                            width={120}
                            height={60}
                            className="h-16 w-auto object-contain mx-auto mb-8"
                        />
                        <p className="text-lg text-ivory font-serif mb-2">
                            Proudly Made in India
                        </p>
                        <p className="text-base text-text-muted">
                            Supporting local artisans since 2024
                        </p>
                    </div>
                </Reveal>
            </section>

            <Footer />
        </main>
    );
}
