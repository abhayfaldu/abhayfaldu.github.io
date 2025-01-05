import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const SpotlightNav = ({ navItems, className }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const navRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			if (!navRef.current) return;
			const rect = navRef.current.getBoundingClientRect();
			setMousePosition({
				x: e.clientX - rect.left,
				y: e.clientY - rect.top,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<motion.div
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={cn("fixed top-0 inset-x-0 mx-auto z-50 w-full", className)}
		>
			<div ref={navRef} className="relative mx-auto">
				{/* Backdrop */}
				<div className="absolute inset-0 h-full w-full bg-black/50 backdrop-blur-xl" />

				{/* Spotlight */}
				<div
					className="pointer-events-none absolute inset-0 h-full w-full"
					style={{
						background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 179, 237, 0.15), transparent 40%)`,
					}}
				/>

				{/* Content */}
				<div className="relative z-10">
					<nav className="flex items-center justify-center p-4">
						<div className="flex items-center gap-8">
							{navItems.map((item, index) => (
								<motion.a
									key={item.name}
									href={item.href}
									onClick={() => setActiveIndex(index)}
									className={cn(
										"relative px-4 py-2 text-sm transition-colors",
										activeIndex === index ? "text-blue-400" : "text-white/70 hover:text-white"
									)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<span className="relative z-10">{item.name}</span>

									{activeIndex === index && (
										<motion.div
											layoutId="navbar-active"
											className="absolute inset-0 bg-white/10 rounded-full"
											transition={{
												type: "spring",
												bounce: 0.3,
												duration: 0.6,
											}}
										/>
									)}
								</motion.a>
							))}
						</div>
					</nav>
				</div>
			</div>
		</motion.div>
	);
};
