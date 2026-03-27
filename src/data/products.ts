import { LookbookSlide } from "@/types/lookbook";

export const lookbookSlides: LookbookSlide[] = [
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
        type: "split-left",
        modelImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2576&auto=format&fit=crop",
        productImage: "/products/beige-2.jpg",
        productName: "DARK ONYX TWIN",
        productSubtitle: "Office Bag",
        productPrice: "₹1,199",
        originalPrice: "₹3,499",
    },
    {
        type: "split-right",
        modelImage: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2574&auto=format&fit=crop",
        productImage: "/products/beige-3.jpg",
        productName: "THE POWER STATEMENT",
        productSubtitle: "Office Bag",
        productPrice: "₹999",
        originalPrice: "₹2,499",
    },
    {
        type: "brand-story",
        title: "OUR PHILOSOPHY",
    },
];

export const products = [
    {
        id: 1,
        name: "The Classic Beige",
        price: "₹ 2,499",
        description: "Timeless elegance with triple-view versatility",
        images: [
            "/products/beige-1.jpg",
            "/products/beige-2.jpg",
            "/products/beige-3.jpg"
        ],
        color: "#dcbfa6", // Beige color
    },
    {
        id: 2,
        name: "B&W Edition",
        price: "₹ 2,199",
        description: "Monochrome mastery for the modern era",
        images: ["/products/bw-edition.png"],
        color: "#ffffff",
    },
    {
        id: 3,
        name: "Viva Vibe",
        price: "₹ 1,999",
        description: "Bold aesthetics for the spirited soul",
        images: ["/products/viva-vibe.png"],
        color: "#ff8c00",
    },
];
