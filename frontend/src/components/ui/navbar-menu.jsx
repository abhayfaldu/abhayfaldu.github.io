import React from "react";
import { cn } from "../../utils/cn";

const links = [
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Projects",
		href: "#projects",
	},
	{
		name: "Skills",
		href: "#skills",
	},
	{
		name: "Contact",
		href: "#contact",
	},
];

export const NavbarMenu = () => {
	return (
		<nav className="fixed top-0 inset-x-0 h-16 bg-black/50 backdrop-blur-xl z-50">
			<div className="mx-auto max-w-[60rem] h-full px-4">
				<div className="flex items-center justify-between h-full">
					{/* Logo */}
					<a href="#home" className="text-lg font-semibold text-white whitespace-nowrap">
						Abhay Faldu
					</a>

					{/* Navigation Links */}
					<div className="hidden sm:flex items-center gap-6">
						{links.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-sm text-neutral-300 hover:text-white transition-colors"
							>
								{link.name}
							</a>
						))}
					</div>

					{/* Resume Button */}
					<a
						href="/assets/fw19_095-Abhay-Faldu-Resume.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className={cn(
							"px-4 py-2 rounded-lg",
							"bg-neutral-900/50 backdrop-blur-sm",
							"text-sm text-neutral-300 hover:text-white",
							"border border-neutral-700/50 hover:border-neutral-500",
							"transition duration-200"
						)}
					>
						Resume
					</a>
				</div>
			</div>
		</nav>
	);
};
