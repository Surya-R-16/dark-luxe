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
                'dark-bg': '#050505', // Deep rich black
                'dark-surface': '#0F0F0F', // Slightly lighter for contrast
                'light-text': '#F2F2F2', // Soft white, easier on eyes than #FFF
                'muted-text': '#888888',
                'accent-purple': '#8E44AD', // Deep royal purple
                'accent-blue': '#2980B9', // Strong premium blue
                'accent-gold': '#D4AF37', // Metallic Gold
                'deep-bronze': '#8C7853', // For subtle warmth
            },
            fontFamily: {
                'serif': ['Playfair Display', 'Georgia', 'serif'],
                'sans': ['Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.9', letterSpacing: '-0.02em', fontWeight: '800' }],
                'display': ['clamp(2.5rem, 6vw, 7rem)', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '700' }],
                'title': ['clamp(1.5rem, 3vw, 4rem)', { lineHeight: '1.2', fontWeight: '600' }],
                'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0em',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
                'ultra': '0.25em', // For "THE COLLECTION" style labels
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.22, 1, 0.36, 1)', // Custom "cinematic" ease
            },
            animation: {
                'spin-slow': 'spin 20s linear infinite',
                'float': 'float 8s ease-in-out infinite', // Slower float
                'glow': 'glow 3s ease-in-out infinite alternate',
                'cursor-glow': 'cursor-glow 1.5s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(142, 68, 173, 0.2), 0 0 10px rgba(142, 68, 173, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(142, 68, 173, 0.6), 0 0 40px rgba(41, 128, 185, 0.4)' },
                },
                'cursor-glow': {
                    '0%': { boxShadow: '0 0 10px rgba(142, 68, 173, 0.5)' },
                    '100%': { boxShadow: '0 0 25px rgba(142, 68, 173, 0.8)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'holographic': 'linear-gradient(135deg, #8E44AD 0%, #2980B9 50%, #D4AF37 100%)',
                'luxury-shine': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
            },
        },
    },
    plugins: [],
};

export default config;
