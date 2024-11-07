"use client";

import { useState, useMemo } from "react";
import { SIDEBAR_LINKS } from "@/constants/links";
import { LogOutIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "../global/container";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/functions";
import { useClerk } from "@clerk/nextjs";

const DashboardSidebar = () => {
    const { signOut } = useClerk();
    const pathname = usePathname();

    const [searchTerm, setSearchTerm] = useState("");

    // Filter links based on the search term
    const filteredLinks = useMemo(() => {
        if (!searchTerm) return SIDEBAR_LINKS;
        return SIDEBAR_LINKS.filter(link =>
            link.label.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <div
            id="sidebar"
            className="flex-col hidden lg:flex fixed left-0 top-16 bottom-0 z-50 bg-background border-r border-border/50 w-72"
        >
            <div className={cn("flex flex-col size-full p-3")}>
                {/* Search Bar */}
                <Container delay={0.2} className="h-max">
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search..."
                            className="w-full px-4 py-2 text-sm border rounded-md outline-none bg-background text-foreground/80 border-border"
                        />
                        <SearchIcon className="absolute top-1/2 right-3 transform -translate-y-1/2 text-muted-foreground" size={18} />
                    </div>
                </Container>

                {/* Sidebar Links */}
                <ul className="w-full space-y-2 py-5">
                    {filteredLinks.map((link, index) => {
                        const isActive = pathname === link.href;

                        return (
                            <li key={index} className="w-full">
                                <Container delay={0.1 + index / 10}>
                                    <Link
                                        href={link.href}
                                        className={buttonVariants({
                                            variant: "ghost",
                                            className: isActive ? "bg-muted text-primary w-full !justify-start" : "text-foreground/70 w-full !justify-start",
                                        })}
                                    >
                                        <link.icon strokeWidth={2} className="size-[18px] mr-1.5" />
                                        {link.label}
                                    </Link>
                                </Container>
                            </li>
                        );
                    })}
                </ul>

                {/* Logout Button */}
                <div className="mt-auto flex flex-col gap-3 w-full">
                    <Container delay={0.3}>
                        <div className="h-10 w-full">
                            <Button
                                variant="ghost"
                                onClick={handleLogout}
                                className="w-full justify-start"
                            >
                                <LogOutIcon className="size-4 mr-1.5" />
                                Logout
                            </Button>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
