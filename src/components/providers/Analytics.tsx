"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Analytics() {
    const pathname = usePathname();

    useEffect(() => {
        // TODO: Replace with actual analytics integration
        // Examples: Google Analytics, Plausible, Vercel Analytics
        // gtag('config', 'GA_MEASUREMENT_ID', { page_path: pathname });
    }, [pathname]);

    return null;
}
