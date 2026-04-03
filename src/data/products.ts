export interface Product {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    tag: string;
    category: string;
    description: string;
    image: string;
    amazonUrl: string;
    isComingSoon: boolean;
    color: string;
}

export const products: Product[] = [
    {
        id: 1,
        name: "The Ladii Legend",
        price: "₹1,099",
        originalPrice: "₹2,999",
        tag: "Bestseller",
        category: "Office Bag",
        description: "Carry your elegance everywhere with our signature piece.",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false,
        color: "#B8975A"
    },
    {
        id: 2,
        name: "Dark Onyx Twin",
        price: "₹1,199",
        originalPrice: "₹3,499",
        tag: "Office Bag",
        category: "Office Bag",
        description: "Monochrome mastery for the modern leader.",
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1969&auto=format&fit=crop",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false,
        color: "#0E0D0B"
    },
    {
        id: 3,
        name: "The Power Statement",
        price: "₹999",
        originalPrice: "₹2,499",
        tag: "New Arrival",
        category: "Office Bag",
        description: "Bold aesthetics for the spirited soul.",
        image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2076&auto=format&fit=crop",
        amazonUrl: "https://www.amazon.in/stores/CraftingLuxurywithElegance/page/9ABA5DF8-9F16-40B2-BA1C-1F9BB97AE66D",
        isComingSoon: false,
        color: "#1C1A16"
    },
    {
        id: 4,
        name: "The Noir Classic",
        price: "—",
        originalPrice: "—",
        tag: "Coming Soon",
        category: "New Arrival",
        description: "The next icon in the Dark Luxe collection.",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935&auto=format&fit=crop",
        amazonUrl: "#",
        isComingSoon: true,
        color: "#2A2720"
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
        modelImage: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2574&auto=format&fit=crop",
        productImage: "/products/beige-1.jpg",
        productName: "THE LADII LEGEND",
        productSubtitle: "Office Bag",
        productPrice: "₹1,099",
        originalPrice: "₹2,999",
    },
    {
        type: "brand-story",
        title: "OUR PHILOSOPHY",
    },
];
