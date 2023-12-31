import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";

import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react"


export async function generateMetadata () {



 const metadata: Metadata = {
		title: {
			default: siteConfig.name,
			template: `%s - ${siteConfig.name}`,
		},
		description: siteConfig.description,

		icons: {
			icon: "/favicon.ico",
			shortcut: "/favicon-16x16.png",
			apple: "/apple-touch-icon.png",
		},
		keywords: siteConfig.keywords,
		robots: {
			index: true,
			follow: false,
			"max-image-preview": "large",
			googleBot: {
				index: true,
				follow: true,
				"max-image-preview": "large",
			},
		},
		openGraph: {
			images: "https://bulls-paradise-official-website.vercel.app/og",
		},
 };
	
	
	return metadata;
} 




export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					GeistMono.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3 my-20">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="#"
								title="homepage"
							>
								<span className="text-primary">©TheBullsParadiseGroup</span>
								<p className="text-default-600">. All Rights Reserved . 2023 .</p>
							</Link>
							<Analytics/>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
