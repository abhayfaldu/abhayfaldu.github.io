import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const FloatingNav = ({ navItems, className }) => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	return (
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<div className="relative">
				{/* Glow Effect */}
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-10 transform group-hover:scale-110 transition-all duration-300" />

				{/* Glass Background */}
				<div className="relative bg-gray-950 backdrop-blur-lg border border-white/10 rounded-full p-2">
					{/* Spotlight Effect */}
					<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

					{/* Navigation Items */}
					<nav className="flex items-center justify-center gap-4">
						{navItems.map((item, index) => (
							<a
								key={item.name}
								href={item.href}
								onClick={() => setActiveIndex(index)}
								className={cn(
									"relative px-4 py-2 text-sm text-white transition-colors hover:text-blue-500",
									activeIndex === index ? "text-blue-500" : "text-white/60"
								)}
							>
								<span className="relative z-10">{item.name}</span>

								{/* Active Item Highlight */}
								{activeIndex === index && (
									<motion.div
										layoutId="active-pill"
										className="absolute inset-0 bg-white/10 rounded-full"
										transition={{
											type: "spring",
											bounce: 0.3,
											duration: 0.6,
										}}
									/>
								)}
							</a>
						))}
					</nav>
				</div>
			</div>
		</motion.div>
	);
};
