import type { Project } from "../types";
import paradoxImage from "../assets/paradox.jpg";
import michaelReidImage from "../assets/MichaelReid2.png";
import vvbakesImage from "../assets/vvbakes.png";
import proquipxImage from "../assets/proquipx2.png";
import misenImage from "../assets/Mise-frames.jpg";
import rvBudgetImage from "../assets/rv-budget.png";
import tallyImage from "../assets/tally.png";

export const projects: Project[] = [
	{
		title: "Paradox Roasters",
		description:
			"Designed and built the whole Shopify store for an Australian coffee roaster: the theme, custom Liquid sections, performance tuning and the checkout flow.",
		outcome: "$1 million+ a year in online orders, which is a lot of beans",
		stack: ["Shopify", "Liquid", "JavaScript", "CSS"],
		heroImage: paradoxImage,
		category: "E-commerce",
		liveUrl: "https://paradoxroasters.com.au",
		featured: true,
	},
	{
		title: "Michael Reid Gallery Mobile App",
		description:
			"An iPhone app where art collectors keep a record of the works they own. They photograph a piece or use an image sent by email, then file it into collections with the artist, year, edition, dimensions and price. Records and images are stored in Appwrite.",
		outcome: "Live on the App Store, cataloguing art I could never afford",
		stack: ["React Native", "Expo", "Appwrite"],
		heroImage: michaelReidImage,
		category: "Mobile App",
		liveUrl: "https://apps.apple.com/nz/app/michael-reid-gallery/id6742937867",
		featured: true,
	},
	{
		title: "vvbakes",
		description:
			"Built a Next.js site for a home bakery in Flat Bush. The calendar closes out booked and short-notice dates, so nobody can order a three-tier cake for tomorrow morning. There’s a menu with pricing, and custom cake briefs arrive as tidy, structured order requests.",
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
		outcome: "One less monthly subscription for the household",
		stack: ["Next.js", "TypeScript", "Akahu API", "Postgres"],
		heroImage: rvBudgetImage,
		category: "Personal Finance",
	},
	{
		title: "Tally",
		description:
			"An offline-first travel budget tracker for iOS and Android, built for a Europe trip. Each expense is entered in local currency and locked to the live NZD rate at that moment. Card conversion fees and cashback count too, so the credit card bill back home holds no surprises. A partner joins the same trip with a code, and it all works with no signal, then syncs over wifi.",
		outcome: "A shared trip ledger that works with no signal",
		stack: ["React Native", "Expo", "SQLite", "Supabase"],
		heroImage: tallyImage,
		category: "Travel & Money",
		githubUrl: "https://github.com/rorense/Tally",
		featured: true,
	},
	{
		title: "Mise en",
		description:
			"A recipe library and cook log for iOS and Android. Rather than pay for one, I built my own around how I actually cook. Search takes filters like has:chicken, no:nuts and mins<30, and each cook is logged, with a photo if I want one. Everything stays on the phone in SQLite.",
		outcome: "Answers “what’s for dinner?” in one search",
		stack: ["React Native", "Expo", "Expo Router", "SQLite"],
		heroImage: misenImage,
		category: "Food & Productivity",
		githubUrl: "https://github.com/rorense/mise",
	},
];
