import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SparklesCore } from "./ui/sparkles";

const socialLinks = [
	{
		icon: <BsTwitter className="w-5 h-5" />,
		href: "https://twitter.com/abhaystwt",
		label: "Twitter",
	},
	{
		icon: <BsLinkedin className="w-5 h-5" />,
		href: "https://www.linkedin.com/in/abhay-faldu-493b92211/",
		label: "LinkedIn",
	},
	{
		icon: <BsGithub className="w-5 h-5" />,
		href: "https://github.com/abhayfaldu",
		label: "GitHub",
	},
];

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "GitHub", href: "#githubStats" },
	{ name: "Contact", href: "#contact" },
];

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative w-full bg-black border-t border-neutral-800">
			{/* Background Effects */}
			<div className="absolute inset-0 overflow-hidden">
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={0.4}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>

			{/* Content */}
			<div className="relative w-full">
				<div className="mx-auto max-w-7xl px-4 py-12">
					<div className="grid gap-8 lg:grid-cols-3">
						{/* Brand */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-4"
						>
							<h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
								Abhay Faldu
							</h2>
							<p className="text-neutral-300 max-w-sm">
								Full Stack Developer specializing in modern web technologies and scalable solutions.
							</p>
							{/* Social Links */}
							<div className="flex gap-4 pt-2">
								{socialLinks.map((item, index) => (
									<a
										key={index}
										href={item.href}
										target="_blank"
										rel="noopener noreferrer"
										className={cn(
											"p-2 rounded-lg text-neutral-300",
											"bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50",
											"hover:text-white hover:border-neutral-500",
											"transition duration-200"
										)}
										aria-label={item.label}
									>
										{item.icon}
									</a>
								))}
							</div>
						</motion.div>

						{/* Quick Links */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="space-y-4"
						>
							<h3 className="text-lg font-semibold text-neutral-200">Quick Links</h3>
							<nav className="grid grid-cols-2 gap-2">
								{navLinks.map((link) => (
									<a
										key={link.name}
										href={link.href}
										className="text-neutral-300 hover:text-white transition-colors"
									>
										{link.name}
									</a>
								))}
							</nav>
						</motion.div>

						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="space-y-4"
						>
							<h3 className="text-lg font-semibold text-neutral-200">Contact</h3>
							<div className="space-y-2 text-neutral-300">
								<p>
									<a href="tel:+918866319970" className="hover:text-white transition-colors">
										+91 8866319970
									</a>
								</p>
								<p>
									<a
										href="mailto:abhayfaldu1922@gmail.com"
										className="hover:text-white transition-colors"
									>
										abhayfaldu1922@gmail.com
									</a>
								</p>
								<p>
									<a
										href="https://maps.app.goo.gl/cz7bqczAHeHC6d1Z6"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-white transition-colors"
									>
										Jamnagar, Gujarat
									</a>
								</p>
							</div>
						</motion.div>
					</div>

					{/* Copyright */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						className="mt-12 pt-8 border-t border-neutral-800"
					>
						<div className="text-center text-neutral-400">
							<p>Made with ❤️ by Abhay Faldu</p>
						</div>
					</motion.div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
