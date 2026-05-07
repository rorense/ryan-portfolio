import type { Project } from "../types";

export const projects: Project[] = [
	{
		title: "Paradox Roasters",
		description: "Custom Shopify storefront for a Sydney-based roastery.",
		outcome: "$600k+ annual online orders",
		stack: ["Shopify", "Liquid", "Performance Optimization"],
		category: "E-commerce",
		liveUrl: "https://paradoxroasters.com.au",
		featured: true,
	},
	{
		title: "Michael Reid Gallery Mobile App",
		description: "Mobile app for browsing and engaging with gallery content.",
		outcome: "Shipped live on the App Store",
		stack: ["React Native", "API Integrations"],
		category: "Mobile App",
		liveUrl: "https://apps.apple.com/nz/developer/michael-reid/id1732238702",
	},
	{
		title: "Proquip Solutions Dashboard",
		description: "Custom admin dashboard and workflow tooling on WordPress.",
		outcome: "Improved internal workflows and data access",
		stack: ["PHP", "WordPress", "MySQL"],
		category: "Internal Tools",
		liveUrl: "https://proquipx.com",
	},
];
