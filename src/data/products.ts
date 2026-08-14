export interface Product {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    tag: string;
    category: string;
    description: string;
    images: string[];
    color: string;
    amazonUrl: string;
    isComingSoon: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        name: "Landon Bag - Blue",
        price: "₹2,199",
        originalPrice: "₹5,299",
        tag: "Bestseller",
        category: "Landon Collection",
        description: "Elegant craftsmanship meets modern design in our signature Landon bag. Features premium hardware and luxurious finish.",
        images: [
            "/products/Out/Landon bag/Blue/1.jpg",
            "/products/Out/Landon bag/Blue/2.jpg",
            "/products/Out/Landon bag/Blue/3.jpg",
            "/products/Out/Landon bag/Blue/4.jpg",
            "/products/Out/Landon bag/Blue/5.jpg",
            "/products/Out/Landon bag/Blue/6.jpg"
        ],
        color: "#1E3A5F",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 2,
        name: "Landon Bag - Tan",
        price: "₹2,199",
        originalPrice: "₹5,299",
        tag: "Bestseller",
        category: "Landon Collection",
        description: "Elegant craftsmanship meets modern design in our signature Landon bag. Features premium hardware and luxurious finish.",
        images: [
            "/products/Out/Landon bag/Tan/1.jpg",
            "/products/Out/Landon bag/Tan/2.jpg",
            "/products/Out/Landon bag/Tan/3.jpg",
            "/products/Out/Landon bag/Tan/4.jpg",
            "/products/Out/Landon bag/Tan/5.jpg"
        ],
        color: "#B8975A",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 3,
        name: "Landon Bag - Black",
        price: "₹2,199",
        originalPrice: "₹5,299",
        tag: "New Arrival",
        category: "Landon Collection",
        description: "Elegant craftsmanship meets modern design in our signature Landon bag. Features premium hardware and luxurious finish.",
        images: [
            "/products/Out/Landon bag/1.jpg",
            "/products/Out/Landon bag/2.jpg",
            "/products/Out/Landon bag/3.jpg",
            "/products/Out/Landon bag/4.jpg",
            "/products/Out/Landon bag/5.jpg",
            "/products/Out/Landon bag/6.jpg"
        ],
        color: "#0E0D0B",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 4,
        name: "Compact Tote - Black",
        price: "₹1,599",
        originalPrice: "₹4,499",
        tag: "Bestseller",
        category: "Compact Collection",
        description: "Perfectly sized for everyday essentials. The Compact Tote combines functionality with elegant styling.",
        images: [
            "/products/Out/Small Bag/1.jpg",
            "/products/Out/Small Bag/2.jpg",
            "/products/Out/Small Bag/3.jpg",
            "/products/Out/Small Bag/4.jpg",
            "/products/Out/Small Bag/5.jpg",
            "/products/Out/Small Bag/6.jpg",
            "/products/Out/Small Bag/7.jpg",
            "/products/Out/Small Bag/8.jpg",
            "/products/Out/Small Bag/9.jpg"
        ],
        color: "#1C1A16",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 5,
        name: "Compact Tote - Tan",
        price: "₹1,599",
        originalPrice: "₹4,499",
        tag: "New Arrival",
        category: "Compact Collection",
        description: "Perfectly sized for everyday essentials. The Compact Tote combines functionality with elegant styling.",
        images: [
            "/products/Out/Small Bag/10.jpg",
            "/products/Out/Small Bag/11.jpg",
            "/products/Out/Small Bag/12.jpg",
            "/products/Out/Small Bag/13.jpg",
            "/products/Out/Small Bag/14.jpg"
        ],
        color: "#B8975A",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 6,
        name: "Strap Bag - Black",
        price: "₹1,999",
        originalPrice: "₹5,299",
        tag: "Bestseller",
        category: "Strap Collection",
        description: "Hands-free elegance. The Strap Bag offers adjustable comfort with sophisticated design.",
        images: [
            "/products/Out/Strap Bag/Black/1.jpg",
            "/products/Out/Strap Bag/Black/2.jpg",
            "/products/Out/Strap Bag/Black/3.jpg",
            "/products/Out/Strap Bag/Black/4.jpg",
            "/products/Out/Strap Bag/Black/5.jpg",
            "/products/Out/Strap Bag/Black/6.jpg",
            "/products/Out/Strap Bag/Black/7.jpg"
        ],
        color: "#0E0D0B",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 7,
        name: "Strap Bag - Brown",
        price: "₹1,999",
        originalPrice: "₹5,299",
        tag: "New Arrival",
        category: "Strap Collection",
        description: "Hands-free elegance. The Strap Bag offers adjustable comfort with sophisticated design.",
        images: [
            "/products/Out/Strap Bag/Brown/1.jpg",
            "/products/Out/Strap Bag/Brown/2.jpg",
            "/products/Out/Strap Bag/Brown/3.jpg",
            "/products/Out/Strap Bag/Brown/4.jpg",
            "/products/Out/Strap Bag/Brown/5.jpg",
            "/products/Out/Strap Bag/Brown/6.jpg",
            "/products/Out/Strap Bag/Brown/Triple Strip copy.jpg"
        ],
        color: "#5C4033",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 8,
        name: "Strap Bag - Tan",
        price: "₹1,999",
        originalPrice: "₹5,299",
        tag: "New Arrival",
        category: "Strap Collection",
        description: "Hands-free elegance. The Strap Bag offers adjustable comfort with sophisticated design.",
        images: [
            "/products/Out/Strap Bag/Tan/1.jpg",
            "/products/Out/Strap Bag/Tan/2.jpg",
            "/products/Out/Strap Bag/Tan/3.jpg",
            "/products/Out/Strap Bag/Tan/4.jpg",
            "/products/Out/Strap Bag/Tan/5.jpg",
            "/products/Out/Strap Bag/Tan/6.jpg"
        ],
        color: "#B8975A",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    },
    {
        id: 9,
        name: "Classic Beige",
        price: "₹2,000",
        originalPrice: "₹4,999",
        tag: "Bestseller",
        category: "Beige Collection",
        description: "Timeless elegance in neutral tones. The Classic Beige is versatile for any occasion.",
        images: [
            "/products/beige-1.jpg",
            "/products/beige-2.jpg",
            "/products/beige-3.jpg"
        ],
        color: "#D4C4A8",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false
    }
];

export const lookbookSlides = [
    {
        type: "intro",
        title: "2026",
        subtitle: "Crafting Luxury with Elegance",
    },
    {
        type: "split-right",
        productId: 2,
        modelImage: "/product-shoot-images/pomelli-image-1.jpg",
        productImage: "/products/Out/Landon bag/Tan/3.jpg",
        productName: "LANDON BAG",
        productSubtitle: "Landon Collection",
        productPrice: "₹2,199",
        originalPrice: "₹5,299",
    },
    {
        type: "split-right",
        productId: 4,
        modelImage: "/product-shoot-images/pomelli-image-11.jpg",
        productImage: "/products/Out/Small Bag/5.jpg",
        productName: "COMPACT TOTE",
        productSubtitle: "Compact Collection",
        productPrice: "₹1,599",
        originalPrice: "₹4,499",
    },
    {
        type: "split-right",
        productId: 6,
        modelImage: "/product-shoot-images/pomelli-image-44.jpg",
        productImage: "/products/Out/Strap Bag/Black/3.jpg",
        productName: "STRAP BAG",
        productSubtitle: "Strap Collection",
        productPrice: "₹1,999",
        originalPrice: "₹5,299",
    },
    {
        type: "split-right",
        productId: 9,
        modelImage: "/product-shoot-images/pomelli-image-33.jpg",
        productImage: "/products/beige-1.jpg",
        productName: "CLASSIC BEIGE",
        productSubtitle: "Beige Collection",
        productPrice: "₹2,000",
        originalPrice: "₹4,999",
    },
    {
        type: "brand-story",
        title: "OUR PHILOSOPHY",
    },
];

export const collectionDetails: Record<string, { features: string[]; dimensions: string; care: string; story: string }> = {
    "Landon Collection": {
        features: [
            "Premium vegan leather with structured silhouette",
            "Gold-tone hardware and signature clasp",
            "Interior zip pocket + two slip pockets",
            "Lined interior with brand tag",
        ],
        dimensions: 'H 11" × W 14" × D 5" · Handle drop 5"',
        care: "Wipe with a soft, dry cloth. Store in the dust bag, away from direct sunlight.",
        story: "The Landon is our signature — a structured tote built for the woman who carries her day with intention. Every seam is finished by hand, every edge painted and polished.",
    },
    "Compact Collection": {
        features: [
            "Compact proportions for everyday essentials",
            "Lightweight vegan leather, fully lined",
            "Secure zip closure with gold-tone pull",
            "Fits phone, wallet, keys & lipstick",
        ],
        dimensions: 'H 9" × W 11" × D 4" · Handle drop 4.5"',
        care: "Wipe with a soft, dry cloth. Store in the dust bag, away from direct sunlight.",
        story: "Small in size, deliberate in design. The Compact Tote carries exactly what you need — nothing more, nothing less — in a silhouette that never goes out of style.",
    },
    "Strap Collection": {
        features: [
            "Hands-free elegance with adjustable strap",
            "Premium vegan leather, soft to the touch",
            "Secure magnetic flap closure",
            "Interior zip pocket for valuables",
        ],
        dimensions: 'H 10" × W 12" × D 3.5" · Strap drop 8"–12" (adjustable)',
        care: "Wipe with a soft, dry cloth. Store in the dust bag, away from direct sunlight.",
        story: "Freedom of movement, uncompromised style. The Strap Bag rests at the hip and moves with you — from morning commute to evening out.",
    },
    "Beige Collection": {
        features: [
            "Timeless neutral that pairs with everything",
            "Premium vegan leather, fully lined",
            "Gold-tone hardware accents",
            "Roomy main compartment with zip pocket",
        ],
        dimensions: 'H 10.5" × W 13" × D 4.5" · Handle drop 5"',
        care: "Wipe with a soft, dry cloth. Store in the dust bag, away from direct sunlight.",
        story: "Some colours are seasons; beige is forever. The Classic Beige is our quiet statement — restraint that reads as confidence.",
    },
};

export const shootSlides = [
    {
        type: "full-image",
        image: "/product-shoot-images/pomelli-image-1.jpg",
        title: "Landon Collection",
        subtitle: "Elegant Craftsmanship",
    },
    {
        type: "full-image",
        image: "/product-shoot-images/pomelli-image-11.jpg",
        title: "Compact Collection",
        subtitle: "Perfectly Sized",
    },
    {
        type: "full-image",
        image: "/product-shoot-images/pomelli-image-44.jpg",
        title: "Strap Collection",
        subtitle: "Hands-Free Elegance",
    },
    {
        type: "full-image",
        image: "/product-shoot-images/pomelli-image-33.jpg",
        title: "Beige Collection",
        subtitle: "Timeless Elegance",
    },
];