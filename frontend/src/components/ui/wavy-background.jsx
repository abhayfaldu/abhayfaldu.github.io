import { cn } from "../../utils/cn";
import React from "react";

export const WavyBackground = ({
	children,
	className,
	containerClassName,
	backgroundFill = "black",
	animate = true,
	speed = "fast",
}) => {
	const id = React.useId();
	const waves = {
		slow: "20s",
		fast: "10s",
	};
	const [shouldAnimate, setShouldAnimate] = React.useState(animate);

	return (
		<div
			className={cn(
				"relative flex flex-col items-center justify-center overflow-hidden bg-black w-full",
				containerClassName
			)}
		>
			<svg
				className="absolute w-full h-full"
				style={{
					filter: shouldAnimate ? "url(#displacementFilter)" : "none",
				}}
				width="100%"
				height="100%"
			>
				<defs>
					<filter id={`displacementFilter-${id}`}>
						<feTurbulence
							type="turbulence"
							baseFrequency="0.01 0.01"
							numOctaves="3"
							result="turbulence"
							seed="1"
						>
							{shouldAnimate && (
								<animate
									attributeName="baseFrequency"
									dur={waves[speed]}
									values="0.01 0.01;0.02 0.02;0.01 0.01"
									repeatCount="indefinite"
								/>
							)}
						</feTurbulence>
						<feDisplacementMap
							in2="turbulence"
							in="SourceGraphic"
							scale="30"
							xChannelSelector="R"
							yChannelSelector="B"
						/>
					</filter>
				</defs>
				<rect
					width="100%"
					height="100%"
					fill={backgroundFill}
					style={{
						filter: `url(#displacementFilter-${id})`,
					}}
				/>
			</svg>
			<div className={cn("relative z-10", className)}>{children}</div>
		</div>
	);
};
