import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider as NextThemeProvider } from "@/lib/theme-provider";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Muhammad David",
    description: "Software Engineer & QA Specialist",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased`}>
                <NextThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
                    {children}
                </NextThemeProvider>
            </body>
        </html>
    );
}
