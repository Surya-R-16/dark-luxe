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
                gold: {
                  DEFAULT: '#B8975A',
                  light: '#D4B07A',
                  dark: '#8A6E3E',
                },
                ivory: '#F7F4EE',
                dark: {
                  DEFAULT: '#0E0D0B',
                  mid: '#1C1A16',
                  soft: '#2A2720',
                },
                text: {
                  muted: '#8A8478',
                  light: '#C8BFB0',
                }
            },
            fontFamily: {
                serif: ['var(--font-cormorant)', 'serif'],
                jost: ['var(--font-jost)', 'sans-serif'],
                sans: ['var(--font-jost)', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 28s linear infinite',
            },
            keyframes: {
                marquee: {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' },
                }
            }
        },
    },
    plugins: [],
};

export default config;
