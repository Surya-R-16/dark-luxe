import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";

const products = [
    {
        name: "THE LADII LEGEND",
        subtitle: "Office Bag",
        price: "₹1,099",
        originalPrice: "₹2,999",
        image: "/products/beige-1.jpg",
        href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
    },
    {
        name: "DARK ONYX TWIN",
        subtitle: "Office Bag",
        price: "₹1,199",
        originalPrice: "₹3,499",
        image: "/products/beige-2.jpg",
        href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
    },
    {
        name: "VIVA VIBE",
        subtitle: "Office Bag",
        price: "₹899",
        originalPrice: "₹2,099",
        image: "/products/viva-vibe.png",
        href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
    },
    {
        name: "THE POWER STATEMENT",
        subtitle: "Office Bag",
        price: "₹999",
        originalPrice: "₹2,499",
        image: "/products/beige-3.jpg",
        href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
    },
];

export default function ShopPage() {
    return (
        <main className="bg-[#F5F5F3] min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-8">
                <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
                    <Reveal yOffset={-20}>
                        <p className="text-sm tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">
                            Shop All
                        </p>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h1 className="text-3xl md:text-4xl font-serif text-[#323232] mb-6">
                            The Collection
                        </h1>
                    </Reveal>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {products.map((product, index) => (
                            <div key={product.name} className="w-full">
                                <Reveal delay={index * 0.1}>
                                    <Link
                                        href={product.href}
                                        target="_blank"
                                        className="group block"
                                    >
                                        <div className="aspect-[4/5] relative overflow-hidden bg-white mb-6">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                            {/* Overlay CTA */}
                                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="bg-white/90 text-[#323232] px-6 py-3 text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
                                                    View on Amazon
                                                </span>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm tracking-[0.15em] text-[#323232] uppercase font-medium">
                                                {product.name}
                                            </p>
                                            <p className="text-sm text-[#6b6b6b] mt-1">
                                                {product.subtitle}
                                            </p>
                                            <div className="mt-2 flex items-center justify-center gap-2">
                                                <p className="text-base text-[#323232] font-medium">
                                                    {product.price}
                                                </p>
                                                <p className="text-sm text-[#999] line-through">
                                                    {product.originalPrice}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </Reveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
