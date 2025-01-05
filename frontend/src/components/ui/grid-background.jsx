import { cn } from "../../utils/cn";
import React from "react";

export const GridBackground = ({ className, containerClassName, dotClassName }) => {
	const dots = new Array(100).fill(0);

	return (
		<div className={cn("absolute inset-0 overflow-hidden", containerClassName)}>
			<div className="h-full w-full relative">
				{/* Dark background */}
				<div className="absolute inset-0 bg-black" />

				{/* Grid container */}
				<div className={cn("absolute inset-0", className)}>
					<div className="absolute h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
						{/* Radial gradient for the grid */}
						<div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

						{/* Moving dots */}
						{dots.map((_, idx) => (
							<div
								key={idx}
								className={cn(
									"absolute h-2 w-2 bg-purple-500/50 rounded-full",
									"animate-grid-point",
									dotClassName
								)}
								style={{
									top: Math.random() * 100 + "%",
									left: Math.random() * 100 + "%",
									animationDelay: Math.random() * 5 + "s",
									animationDuration: Math.random() * 10 + 10 + "s",
								}}
							/>
						))}
					</div>
				</div>

				{/* Vignette */}
				<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
			</div>
		</div>
	);
};
