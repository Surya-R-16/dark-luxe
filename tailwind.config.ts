import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Dark Lux Palette
                'obsidian': '#050505', // Deepest Black
                'charcoal': '#0a0a0a', // Secondary Background
                'bone': '#F5F5F3',     // Primary Text
                'gold': '#D4AF37',     // Accents - Muted

                // Semantic Aliases
                'primary': '#050505',
                'surface': '#0a0a0a',
                'text-primary': '#F5F5F3',
                'text-secondary': '#A8A29E', // Stone-400 for secondary text
            },
            fontFamily: {
                'serif': ['var(--font-playfair)', 'serif'], // Fallback for Editorial New
                'sans': ['var(--font-inter)', 'sans-serif'], // Fallback for Inter Tight
            },
            letterSpacing: {
                'tight-heading': '-0.05em', // "Headings must use -0.05em tracking"
                'wide-body': '0.1em',       // "Body text must be ... tracking 0.1em"
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0em',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },
            fontSize: {
                'hero-clamp': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.05em', fontWeight: '400' }], // Adjusted tracking
                'body-sm': ['12px', { lineHeight: '1.6', letterSpacing: '0.1em' }], // 12px uppercase
                'body-xs': ['11px', { lineHeight: '1.6', letterSpacing: '0.1em' }],
            },
            spacing: {
                '32': '8rem',
                '64': '16rem',
                '128': '32rem', // Massive margins for Savette style
                'screen-80': '80vh',
            },
            transitionTimingFunction: {
                'luxury': 'cubic-bezier(0.22, 1, 0.36, 1)', // Custom "cinematic" ease
                'slow-fade': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            backgroundImage: {
                'grain': "url('/noise.png')", // Placeholder for texture
            }
        },
    },
    plugins: [],
};

export default config;
