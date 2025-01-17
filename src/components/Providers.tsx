"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    return (
        <ClerkProvider
            publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
            routerPush={router.push}
            routerReplace={router.replace}
        >
            {children}
        </ClerkProvider>
    );
} 