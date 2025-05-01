"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="bg-background/50 backdrop-blur-md px-4 border-b border-dashed sticky top-0 z-50">
            <div className="max-w-6xl h-14 mx-auto flex justify-between items-center">
                <div className="flex gap-6">
                    <Link href="/" className="font-bold text-lg">
                        Dave
                    </Link>

                    <div className="text-sm text-neutral-600 dark:text-neutral-300 hidden lg:flex gap-4 items-center">
                        {navItems.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={cn(
                                    pathname === href
                                        ? "text-black dark:text-white"
                                        : "hover:text-black dark:hover:text-white",
                                    "transition-colors",
                                )}
                            >
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex gap-1">
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
