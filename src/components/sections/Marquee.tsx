export function Marquee() {
    const items = [
        "Vegan Leather", "Cruelty-Free", "Made in India",
        "Ethical Craftsmanship", "Natural Jute", "Eco-Friendly"
    ];

    return (
        <div className="bg-dark border-y border-gold/10 py-5 md:py-6 overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
                {/* Double the items for seamless loop */}
                {[...items, ...items].map((item, idx) => (
                    <span key={idx} className="inline-flex items-center">
                        <span className="font-serif text-sm md:text-base tracking-[0.3em] uppercase text-gold/90 px-8">
                            {item}
                        </span>
                        <span className="text-gold/30 text-[10px]">◆</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
