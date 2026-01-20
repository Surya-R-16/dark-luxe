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
                'dark-bg': '#050505',
                'dark-surface': '#0a0a0a',
                'light-text': '#EAEAEA',
                'muted-text': '#888888',
                'accent-purple': '#7B3FE4',
                'accent-blue': '#3F7BE4',
                'accent-gold': '#C9A227',
                'liquid-gold': '#D4AF37',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'Georgia', 'serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['10vw', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
                'display': ['6vw', { lineHeight: '1', letterSpacing: '-0.02em' }],
                'title': ['3vw', { lineHeight: '1.1' }],
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'cursor-glow': 'cursor-glow 1.5s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #7B3FE4, 0 0 10px #7B3FE4' },
                    '100%': { boxShadow: '0 0 20px #7B3FE4, 0 0 30px #3F7BE4' },
                },
                'cursor-glow': {
                    '0%': { boxShadow: '0 0 10px rgba(123, 63, 228, 0.5)' },
                    '100%': { boxShadow: '0 0 25px rgba(123, 63, 228, 0.8)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'holographic': 'linear-gradient(135deg, #7B3FE4 0%, #3F7BE4 50%, #C9A227 100%)',
            },
        },
    },
    plugins: [],
};

export default config;
