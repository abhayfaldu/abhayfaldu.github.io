import { cn } from "../../utils/cn";
import React from "react";

export const BackgroundBeams = ({ className }) => {
	return (
		<div className={cn("absolute inset-0 overflow-hidden", className)}>
			<div className="h-full w-full relative">
				{/* Dark background */}
				<div className="absolute inset-0 bg-black" />

				{/* Beam container */}
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
						{/* Beams */}
						<div
							className="absolute inset-0 bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 opacity-50 
              [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)] 
              group-hover:opacity-70 transition-opacity duration-500"
						/>
						<div
							className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/30 to-transparent opacity-50 
              [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)] 
              group-hover:opacity-70 transition-opacity duration-500"
						/>
						<div
							className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/30 to-transparent opacity-50 
              [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_75%)] 
              group-hover:opacity-70 transition-opacity duration-500"
						/>
					</div>
				</div>

				{/* Noise texture */}
				<div className="absolute inset-0 opacity-30">
					<div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
				</div>

				{/* Vignette */}
				<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
				<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50" />
			</div>
		</div>
	);
};
