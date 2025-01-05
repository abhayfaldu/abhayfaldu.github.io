import { cn } from "../../utils/cn";
import React from "react";

const Meteors = ({ number = 20 }) => {
	const meteors = new Array(number).fill(true);
	return (
		<>
			{meteors.map((_, idx) => (
				<span
					key={idx}
					className={cn(
						"animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
						"before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
					)}
					style={{
						top: 0,
						left: Math.floor(Math.random() * 100) + "%",
						animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
						animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
					}}
				/>
			))}
		</>
	);
};

export const BackgroundGradient = ({ className }) => {
	return (
		<div className={cn("absolute inset-0 overflow-hidden", className)}>
			<div className="h-full w-full relative">
				{/* Animated background */}
				<div className="absolute inset-0 bg-black">
					<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-teal-500/20 animate-gradient" />
					<div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/10 to-transparent animate-gradient-slow" />
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-500/10 to-transparent animate-gradient-slower" />
				</div>

				{/* Meteors effect */}
				<div className="absolute inset-0">
					<Meteors />
				</div>

				{/* Noise overlay */}
				<div className="absolute inset-0 bg-noise opacity-20" />

				{/* Vignette */}
				<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
			</div>
		</div>
	);
};
