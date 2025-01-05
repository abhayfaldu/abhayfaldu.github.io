import { cn } from "../../utils/cn";
import React from "react";

export const MovingBorder = ({
	children,
	duration = 2000,
	className,
	containerClassName,
	borderClassName,
	as: Component = "button",
	...otherProps
}) => {
	return (
		<Component
			className={cn(
				"relative text-xl h-20 w-40 p-[1px] overflow-hidden bg-transparent",
				containerClassName
			)}
			{...otherProps}
		>
			<div
				className={cn(
					"absolute inset-0",
					"bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500",
					borderClassName
				)}
				style={{
					animation: `spin ${duration}ms linear infinite`,
				}}
			/>
			<div
				className={cn(
					"relative bg-black px-8 h-full w-full flex items-center justify-center",
					className
				)}
			>
				{children}
			</div>
		</Component>
	);
};

export const ButtonsCard = ({ children, className }) => {
	return (
		<div className={cn("rounded-lg border border-neutral-700 bg-black p-8", className)}>
			<div className="flex flex-col items-center justify-center space-y-4">{children}</div>
		</div>
	);
};
