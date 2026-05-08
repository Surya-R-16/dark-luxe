"use client";

import { useState } from "react";

export function NewsletterSection() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Connect to email service (Mailchimp, Resend, etc.)
        if (email) {
            setSubmitted(true);
            setEmail("");
        }
    };

    return (
        <section className="bg-dark-soft text-center py-16 md:py-[100px] px-6 md:px-10" id="contact">
            <div className="flex items-center justify-center gap-4 text-[10px] tracking-[0.35em] uppercase text-gold mb-6">
                Stay in the Loop
            </div>
            <h2 className="font-serif text-[clamp(28px,5vw,64px)] font-light tracking-tight text-ivory">
                First to <em className="italic text-gold-light">Know</em>
            </h2>
            <p className="text-sm text-text-muted mt-3 tracking-[0.04em] max-w-lg mx-auto">
                New arrivals, exclusive offers, and stories from the atelier.
            </p>
            {submitted ? (
                <p className="text-gold text-sm mt-9 tracking-[0.08em]">Thank you for subscribing!</p>
            ) : (
                <form className="flex flex-col sm:flex-row gap-0 max-w-[440px] mx-auto mt-9" onSubmit={handleSubmit}>
                    <input 
                        className="flex-1 bg-transparent border border-gold/30 px-5 py-3.5 text-xs tracking-[0.08em] text-ivory outline-none focus:border-gold/60 transition-colors"
                        type="email" 
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="bg-gold border border-gold px-6 py-3.5 text-xs md:text-[10px] tracking-[0.2em] uppercase font-medium text-dark hover:bg-gold-light transition-colors w-full sm:w-auto">
                        Subscribe
                    </button>
                </form>
            )}
        </section>
    );
}
