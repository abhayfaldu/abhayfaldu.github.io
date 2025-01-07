import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";
import { Menu, X } from "lucide-react";

const links = [
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Experience",
		href: "#experience",
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

const NavbarMenu = () => {
	const [activeSection, setActiveSection] = useState("home");
	const [scrolled, setScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const sections = links.map(link => link.href.slice(1));
			sections.unshift("home");

			const current = sections.find(section => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (current) {
				setActiveSection(current);
			}

			setScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleMobileMenuClick = (href) => {
		setMobileMenuOpen(false);
		window.location.href = href;
	};

	return (
		<>
			<div className="fixed top-6 inset-x-0 flex justify-center z-50">
				<motion.nav
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.3 }}
					className={cn(
						"w-[95vw] min-[800px]:w-[800px] h-14 rounded-full",
						"bg-black/80 backdrop-blur-sm border border-white/10",
						scrolled ? "shadow-lg shadow-black/20" : "",
						"transition-all duration-300"
					)}
				>
					<div className="h-full px-6 pe-2">
						<div className="flex items-center justify-between h-full">
							{/* Logo */}
							<motion.a
								href="#home"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="relative text-lg font-semibold text-white"
							>
								Abhay Faldu
							</motion.a>

							{/* Navigation Links and Resume - Desktop */}
							<div className="hidden sm:flex items-center gap-6">
								{links.map((link) => (
									<motion.a
										key={link.name}
										href={link.href}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										className={cn(
											"relative text-[15px] font-medium",
											"transition-all duration-300",
											activeSection === link.href.slice(1)
														? "text-white"
														: "text-neutral-400 hover:text-white"
										)}
									>
										{link.name}
									</motion.a>
								))}
							</div>
							<div className="hidden sm:flex items-center gap-6">
								<motion.a
									href="/assets/fw19_095-Abhay-Faldu-Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={cn(
										"px-5 py-2 rounded-full",
										"bg-[#8B5CF6] hover:bg-[#7C3AED]",
										"text-[15px] font-medium text-white",
										"transition-all duration-300"
									)}
								>
									Resume
								</motion.a>
							</div>

							{/* Mobile Menu Button */}
							<div className="flex items-center gap-4 sm:hidden">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
									className="p-2 rounded-full hover:bg-white/5"
								>
									{mobileMenuOpen ? (
										<X className="w-5 h-5 text-neutral-300" />
									) : (
										<Menu className="w-5 h-5 text-neutral-300" />
									)}
								</motion.button>
							</div>
						</div>
					</div>
				</motion.nav>
			</div>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-x-4 top-24 z-50 rounded-2xl bg-black/80 backdrop-blur-sm border border-white/10 overflow-hidden"
					>
						<div className="p-4 space-y-2">
							{links.map((link) => (
								<motion.a
									key={link.name}
									onClick={() => handleMobileMenuClick(link.href)}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									className={cn(
										"block w-full px-4 py-3 rounded-xl text-[15px] font-medium",
										"transition-all duration-300",
										activeSection === link.href.slice(1)
											? "text-white bg-white/10"
											: "text-neutral-400 hover:text-white hover:bg-white/5"
									)}
								>
									{link.name}
								</motion.a>
							))}
							<motion.a
								href="/assets/fw19_095-Abhay-Faldu-Resume.pdf"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className={cn(
									"block w-full px-4 py-3 rounded-xl text-center",
									"bg-[#8B5CF6] hover:bg-[#7C3AED]",
									"text-[15px] font-medium text-white",
									"transition-all duration-300"
								)}
							>
								Resume
							</motion.a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default NavbarMenu;
