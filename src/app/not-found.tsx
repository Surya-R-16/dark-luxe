import Link from "next/link";

export default function NotFound() {
    return (
        <main className="bg-dark min-h-screen flex items-center justify-center">
            <div className="text-center">
                <p className="text-gold text-[10px] tracking-[0.35em] uppercase mb-4">404</p>
                <h1 className="font-serif text-5xl md:text-7xl text-ivory mb-6">Page Not Found</h1>
                <p className="text-text-muted mb-10">The page you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    href="/"
                    className="inline-block px-9 py-4 bg-gold text-dark text-[10px] font-medium tracking-[0.25em] uppercase hover:bg-gold-light transition-all duration-200"
                >
                    Return Home
                </Link>
            </div>
        </main>
    );
}
