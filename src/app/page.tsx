import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LookbookCarousel } from "@/components/sections/LookbookCarousel";
import { shootSlides, products } from "@/data/products";
import { Philosophy } from "@/components/sections/Philosophy";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { Marquee } from "@/components/sections/Marquee";
import { StatementBand } from "@/components/sections/StatementBand";
import { CollectionTiles } from "@/components/sections/CollectionTiles";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { ProductGrid } from "@/components/collection/ProductGrid";
import Link from "next/link";

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
            <Marquee />

            <StatementBand />
            
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
                        <ProductGrid products={featuredProducts} columns={4} />
                    </div>
                </div>
            </section>

            <CollectionTiles />

            <Philosophy />

            <InstagramStrip />

            <NewsletterSection />

            <Footer />
        </main>
    );
}
