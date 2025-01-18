"use client";

import MobileSidebar from "@/components/dashboard/mobile-sidebar";
import Icons from "@/components/global/icons";
import { HelpCircleIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";

const DashboardNavbar = () => {
    return (
        <header id="dashboard-navbar" className="fixed top-0 inset-x-0 w-full h-16 bg-background/40 backdrop-blur-md border-b border-border/50 px-4 z-50">
            <Container className="flex items-center justify-between size-full">
                <div className="flex items-center">
                    <Link href="/app" className="flex items-center gap-x-2">
                        <Icons.icon className="w-6" />
                        <span className="text-lg font-semibold">
                            worklance
                        </span>
                    </Link>
                </div>
                <div className="flex items-center gap-x-2">
                    <Button
                        size="sm"
                        variant="ghost"
                    >
                        <ZapIcon className="size-4 mr-1.5 text-orange-500 fill-orange-500" />
                        Upgrade
                    </Button>
                    <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="hidden lg:flex"
                    >
                        <Link href="/help" target="_blank">
                            <HelpCircleIcon className="size-5" />
                        </Link>
                    </Button>
                    <MobileSidebar />
                </div>
            </Container>
        </header>
    )
};

export default DashboardNavbar
