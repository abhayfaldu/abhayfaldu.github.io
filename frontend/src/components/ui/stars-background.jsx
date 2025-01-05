import { cn } from "../../utils/cn";
import React from "react";

export const StarBackground = ({ className }) => {
	return (
		<div className={cn("absolute inset-0 overflow-hidden", className)}>
			<div className="absolute h-full w-full">
				{/* Base gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

				{/* Stars layers */}
				<div className="stars absolute inset-0 opacity-30" />
				<div className="stars-2 absolute inset-0 opacity-40" />
				<div className="stars-3 absolute inset-0 opacity-50" />

				{/* Top gradient overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
			</div>
		</div>
	);
};
