import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LookbookCarousel } from "@/components/sections/LookbookCarousel";
import { shootSlides, products } from "@/data/products";
import { Philosophy } from "@/components/sections/Philosophy";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import Link from "next/link";
import Image from "next/image";

const collectionFeatured = [
    { category: "Landon Collection", productId: 2 },
    { category: "Compact Collection", productId: 4 },
    { category: "Strap Collection", productId: 6 },
    { category: "Beige Collection", productId: 9 },
];

export default function Home() {
    const featuredProducts = collectionFeatured.map(
        (c) => products.find((p) => p.id === c.productId)!
    );

    return (
        <main className="bg-dark">
            <Header />
            <LookbookCarousel slides={shootSlides} />
            
            <section className="py-16 md:py-[100px] px-6 md:px-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8 md:mb-12">
                        <div className="flex items-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold before:content-[''] before:block before:w-[30px] before:h-[1px] before:bg-gold">
                            Curated Selection
                        </div>
                        <Link 
                            href="/collections" 
                            className="text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-0.5">
                        {featuredProducts.map((product) => (
                            <Link href={`/products/${product.id}`} key={product.id} className="block">
                                <div className="group relative overflow-hidden bg-dark-soft aspect-[3/4]">
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                className="object-cover brightness-[0.9] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                                            />
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-dark/95 to-transparent">
                                            <div className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-gold mb-1">
                                                {product.category}
                                            </div>
                                            <div className="font-serif text-sm md:text-base text-ivory mb-1 truncate">
                                                {product.name.split(" - ")[0]}
                                            </div>
                                            <div className="text-xs text-gold-light">{product.price}</div>
                                        </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Philosophy />

            <NewsletterSection />

            <Footer />
        </main>
    );
}
