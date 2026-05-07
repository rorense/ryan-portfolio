import type { Project } from "../types";
import paradoxImage from "../assets/paradox.png";
import michaelReidImage from "../assets/MichaelReid.png";
import proquipxImage from "../assets/proquipx.png";

export const projects: Project[] = [
	{
		title: "Paradox Roasters",
		description:
			"Designed and built a custom Shopify experience with tailored Liquid components, speed tune-ups, and a smoother checkout flow so regular coffee orders felt effortless.",
		outcome: "$600k+ annual online orders",
		stack: ["Shopify", "Liquid", "Performance Optimization"],
		heroImage: paradoxImage,
		category: "E-commerce",
		liveUrl: "https://paradoxroasters.com.au",
		featured: true,
	},
	{
		title: "Michael Reid Gallery Mobile App",
		description:
			"Built a React Native app that lets collectors and art lovers browse works, follow events, and stay updated through content synced with an Expo-backed database setup.",
		outcome: "Shipped live on the App Store",
		stack: ["React Native", "Expo", "API Integrations"],
		heroImage: michaelReidImage,
		category: "Mobile App",
		liveUrl: "https://apps.apple.com/nz/app/michael-reid-gallery/id6742937867",
	},
	{
		title: "Proquip Solutions Dashboard",
		description:
			"Built a custom PHP dashboard on WordPress to pull scattered business data into one spot, cut manual admin work, and make day-to-day operations faster.",
		outcome: "Improved internal workflows and data access",
		stack: ["PHP", "WordPress", "MySQL"],
		heroImage: proquipxImage,
		category: "Internal Tools",
		liveUrl: "https://proquipx.com",
	},
	{
		title: "Mise en",
		description:
			"A personal mobile app I built to keep track of recipes I have made over time. Instead of paying for another service, I built one that fits exactly how I cook.",
		outcome: "Personal recipe tracker built from scratch",
		stack: ["Mobile App", "Personal Product", "GitHub"],
		heroImage: "https://picsum.photos/seed/miseen/1200/800",
		category: "Food + Productivity",
		githubUrl: "https://github.com/rorense/mise",
	},
];
