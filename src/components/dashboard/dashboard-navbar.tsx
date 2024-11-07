"use client";

import MobileSidebar from "@/components/dashboard/mobile-sidebar";
import Icons from "@/components/global/icons";
import { HelpCircleIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import toast, { Toaster } from "react-hot-toast"; // bun i react-hot-toast

const DashboardNavbar = () => {
    const handleUpgradeClick = () => {
        toast.success("Your payment is successful! 🎉 Enjoy our new Pro Plan✨", {
            style: {
                borderRadius: "16px",
                background: "#1A1A1A", 
                color: "#fff",
                fontSize: "18px", 
                fontWeight: "600", 
                padding: "16px 24px", 
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", 
                transition: "all 0.3s ease-in-out", 
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            },
            icon: "🚀", 
            duration: 4000, 
        });
    };

    return (
        <>
            <header id="dashboard-navbar" className="fixed top-0 inset-x-0 w-full h-16 bg-background/40 backdrop-blur-md border-b border-border/50 px-4 z-50">
                <Container className="flex items-center justify-between size-full">
                    <div className="flex items-center">
                        <Link href="/app" className="flex items-center gap-x-2">
                            <Icons.icon className="w-6" />
                            <span className="text-lg font-semibold">Luro</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <Button
                            size="sm"
                            variant="ghost"
                            onClick={handleUpgradeClick}
                        >
                            <ZapIcon className="size-4 mr-1.5 text-orange-500 fill-orange-500" />
                            Upgrade
                        </Button>
                        <Button asChild size="icon" variant="ghost" className="hidden lg:flex">
                            <Link href="/help" target="_blank">
                                <HelpCircleIcon className="size-5" />
                            </Link>
                        </Button>
                        <MobileSidebar />
                    </div>
                </Container>
            </header>
            {/* Add the Toaster component for displaying toasts */}
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        style: {
                            borderRadius: "16px",
                            background: "#1A1A1A",
                            color: "#fff",
                            fontSize: "18px",
                            fontWeight: "600",
                            padding: "16px 24px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                            transition: "all 0.3s ease-in-out",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        },
                        icon: "🚀",
                        duration: 4000,
                    },
                }}
            />
        </>
    );
};

export default DashboardNavbar;
