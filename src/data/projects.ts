import type { Project } from "../types";
import paradoxImage from "../assets/paradox.jpg";
import michaelReidImage from "../assets/MichaelReid2.png";
import vvbakesImage from "../assets/vvbakes.png";
import proquipxImage from "../assets/proquipx2.png";
import misenImage from "../assets/Mise-frames.jpg";
import rvBudgetImage from "../assets/rv-budget.png";

export const projects: Project[] = [
	{
		title: "Paradox Roasters",
		description:
			"Designed and built a custom Shopify experience with tailored Liquid components, speed tune-ups, and a smoother checkout flow so regular coffee orders felt effortless.",
		outcome: "$1 million+ annual online orders",
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
		title: "vvbakes",
		description:
			"Built a Next.js site for a home bakery in Flat Bush, with availability that closes out booked and short-notice dates, a menu with pricing, and a custom cake brief that arrives as a structured order request.",
		outcome: "A live booking calendar that takes orders without a checkout",
		stack: ["Next.js", "React", "Vercel"],
		heroImage: vvbakesImage,
		category: "Orders & Booking",
		liveUrl: "https://vvbakes.co.nz",
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
		title: "RV Budget",
		description:
			"A household budget app my partner and I run on our own money, built to replace a PocketSmith subscription. Balances and transactions arrive straight from our banks through the Akahu API, categories and budgets stay ours to edit, and both laptops and both phones read the same shared figures.",
		outcome: "Replaced a paid budgeting service for the household",
		stack: ["Next.js", "TypeScript", "Akahu API", "Postgres"],
		heroImage: rvBudgetImage,
		category: "Personal Finance",
	},
	{
		title: "Mise en",
		description:
			"A personal mobile app I built to keep track of recipes I have made over time. Instead of paying for another service, I built one that fits exactly how I cook.",
		outcome: "Personal recipe tracker built from scratch",
		stack: ["Mobile App", "Personal Product", "GitHub"],
		heroImage: misenImage,
		category: "Food + Productivity",
		githubUrl: "https://github.com/rorense/mise",
	},
];
