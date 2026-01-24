import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Collection data with real Dark Luxe products
const collections = [
    {
        season: "2026",
        title: "OFFICE COLLECTION",
        description: "Timeless handbags for women who lead with purpose",
        image: "/products/beige-1.jpg",
        href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
    },
    {
        season: "2025",
        title: "SIGNATURE SERIES",
        description: "Premium vegan leather with artisan craftsmanship",
        image: "/products/viva-vibe.png",
        href: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
    },
];

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

export default function CollectionsPage() {
    return (
        <main className="bg-[#F5F5F3] min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-sm tracking-[0.3em] text-[#6b6b6b] uppercase mb-4">
                        Collections
                    </p>
                    <h1 className="text-3xl md:text-4xl font-serif text-[#323232] mb-6">
                        Crafted for Purpose
                    </h1>
                    <p className="text-base md:text-lg text-[#6b6b6b] max-w-2xl mx-auto leading-relaxed">
                        Each Dark Luxe collection represents our commitment to sustainability,
                        sophistication, and timeless style—designed for women who lead.
                    </p>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="pb-20 px-8">
                <div className="max-w-6xl mx-auto">
                    {collections.map((collection, index) => (
                        <Link
                            key={collection.title}
                            href={collection.href}
                            target="_blank"
                            className={`flex flex-col md:flex-row items-center gap-12 mb-24 group ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image */}
                            <div className="w-full md:w-1/2 aspect-[4/5] relative overflow-hidden">
                                <img
                                    src={collection.image}
                                    alt={collection.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Text */}
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <p className="text-sm tracking-[0.25em] text-[#6b6b6b] uppercase mb-3">
                                    {collection.season}
                                </p>
                                <h2 className="text-2xl md:text-3xl font-serif text-[#323232] mb-4">
                                    {collection.title}
                                </h2>
                                <p className="text-base text-[#6b6b6b] mb-6">
                                    {collection.description}
                                </p>
                                <span className="text-sm tracking-[0.2em] uppercase text-[#323232] border-b border-[#323232] pb-1 group-hover:opacity-60 transition-opacity">
                                    Shop Collection
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* All Products Grid */}
            <section className="py-20 px-8 border-t border-[#323232]/10">
                <div className="max-w-6xl mx-auto">
                    <p className="text-sm tracking-[0.3em] text-[#6b6b6b] uppercase text-center mb-12">
                        All Products
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Link
                                key={product.name}
                                href={product.href}
                                target="_blank"
                                className="group"
                            >
                                <div className="aspect-square relative overflow-hidden bg-white mb-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
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
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
