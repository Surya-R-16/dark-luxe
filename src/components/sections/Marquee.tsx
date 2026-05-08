export function Marquee() {
    const items = [
        "Vegan Leather", "Cruelty-Free", "Made in India", 
        "Ethical Craftsmanship", "Natural Jute", "Eco-Friendly"
    ];

    return (
        <div className="bg-gold py-4 md:py-[14px] overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
                {/* Double the items for seamless loop */}
                {[...items, ...items].map((item, idx) => (
                    <span key={idx} className="inline-flex items-center">
                        <span className="text-[11px] md:text-[10px] tracking-[0.3em] uppercase text-dark font-medium px-8">
                            {item}
                        </span>
                        <span className="text-dark/40 px-0">·</span>
                    </span>
                ))}
            </div>
        </div>
    );
}
