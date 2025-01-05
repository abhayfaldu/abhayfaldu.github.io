import { cn } from "../../utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const SparklesCore = ({
	background,
	minSize = 0.4,
	maxSize = 1,
	particleDensity = 1.2,
	className,
	particleColor = "#FFFFFF",
	particleCount = 50,
}) => {
	const particles = React.useMemo(() => {
		const points = [];
		for (let i = 0; i < particleCount; i++) {
			points.push({
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * (maxSize - minSize) + minSize,
			});
		}
		return points;
	}, [maxSize, minSize, particleCount]);

	return (
		<div
			className={cn("absolute inset-0 overflow-hidden", className)}
			style={{
				background,
			}}
		>
			{particles.map((particle, i) => (
				<motion.div
					key={i}
					className="absolute rounded-full pointer-events-none"
					style={{
						top: `${particle.y}%`,
						left: `${particle.x}%`,
						width: `${particle.size}px`,
						height: `${particle.size}px`,
						background: particleColor,
					}}
					animate={{
						scale: [1, 1.2, 1],
						opacity: [1, 0.8, 0],
					}}
					transition={{
						duration: Math.random() * 2 + 1,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			))}
		</div>
	);
};
