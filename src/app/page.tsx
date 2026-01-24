import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LookbookGrid } from "@/components/sections/LookbookGrid";

export default function Home() {
    return (
        <main className="bg-[#F5F5F3]">
            <Header />
            <LookbookGrid />
            <Footer />
        </main>
    );
}
