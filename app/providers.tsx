"use client";

import { AuthProvider } from "@/components/auth/context";
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ThemeProvider enableSystem={true} attribute="class">
                <AuthProvider>
                    {children}
                </AuthProvider>
            </ThemeProvider>
        </>
    )
}