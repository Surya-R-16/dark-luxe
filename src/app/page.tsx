import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { Marquee } from "@/components/sections/Marquee";
import { LookbookGrid } from "@/components/sections/LookbookGrid";
import { Philosophy } from "@/components/sections/Philosophy";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

export default function Home() {
    return (
        <main className="bg-dark">
            <Header />
            <HeroSection />
            <Marquee />
            
            <LookbookGrid />

            <Philosophy />

            <NewsletterSection />

            <Footer />
        </main>
    );
}
