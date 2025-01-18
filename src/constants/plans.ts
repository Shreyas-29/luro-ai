type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "free",
        title: "Free",
        desc: "Get started with the essentials",
        monthlyPrice: 0,
        yearlyPrice: 0,
        buttonText: "Get Started",
        features: [
            "Basic AI content generation",
            "4 social media integrations",
            "Community support",
            "1 project limit",
            "Standard analytics",
            "Basic image generation"
        ],
        link: "https://stripe.com"
    },
    {
        id: "pro",
        title: "Pro",
        desc: "Unlock advance features for enhanced content and strategy",
        monthlyPrice: 10,
        yearlyPrice: 120,
        badge: "Most Popular",
        buttonText: "Upgrade to Pro",
        features: [
            "Advanced AI content generation",
            "10 social media integrations",
            "Priority email support",
            "10 project limit",
            "Enhanced analytics & insights",
            "Pro model image generation",
            "Team collaboration tools",
            "Custom branding options"
        ],
        link: "https://stripe.com/pro-plan-link"
    },
    {
        id: "enterprise",
        title: "Enterprise",
        desc: "Tailored solutions for large organizations and agencies",
        monthlyPrice: 15,
        yearlyPrice: 180,
        badge: "Contact Sales",
        buttonText: "Upgrade to Enterprise",
        features: [
            "Unlimited AI content generation",
            "All social media integrations",
            "Dedicated account manager",
            "Unlimited projects",
            "Custom analytics & reporting",
            "Enterprise-grade security",
            "Free updates",
            // "24/7 priority support"
        ],
        link: "https://stripe.com/enterprise-plan-link"
    }
];
