import { cn } from "../../utils/cn";
import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

export const AnimatedTooltip = ({ items }) => {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0);

	return (
		<div className="flex flex-row items-center justify-center gap-2 px-4">
			{items.map((item, idx) => (
				<div
					key={item?.name}
					className="relative group"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence mode="wait">
						{hoveredIndex === idx && (
							<motion.div
								initial={{ opacity: 0, y: 20, scale: 0.6 }}
								animate={{
									opacity: 1,
									y: 0,
									scale: 1,
									transition: {
										type: "spring",
										stiffness: 260,
										damping: 10,
									},
								}}
								exit={{ opacity: 0, y: 20, scale: 0.6 }}
								style={{
									translateX: x,
									rotate: 0,
								}}
								className="absolute -top-16 -left-1/2 translate-x-1/2 flex items-center justify-center"
							>
								<div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl" />
								<div className="z-50 px-4 py-2">
									<p className="text-white font-bold text-sm">{item.name}</p>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
					<img
						src={item.image}
						alt={item.name}
						className={cn(
							"object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 relative transition duration-500",
							hoveredIndex === idx
								? "border-white/50 scale-105 z-30"
								: hoveredIndex !== null
									? "scale-95 z-20"
									: "border-white/20 z-20"
						)}
					/>
				</div>
			))}
		</div>
	);
};
