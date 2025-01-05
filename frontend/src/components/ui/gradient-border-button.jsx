import React from "react";
import { cn } from "../../utils/cn";

export const GradientBorderButton = ({
	children,
	href,
	className,
	containerClassName,
	onClick,
	disabled = false,
	type = "button",
	as = "button",
	external = false,
}) => {
	const Component = href ? "a" : as;
	const externalProps = external
		? {
				target: "_blank",
				rel: "noopener noreferrer",
			}
		: {};

	return (
		<Component
			href={href}
			onClick={onClick}
			disabled={disabled}
			type={!href ? type : undefined}
			{...externalProps}
			className={cn(
				"group relative inline-flex items-center justify-center",
				"h-11 min-w-[140px] px-6",
				"transition-all duration-200",
				disabled && "opacity-50 cursor-not-allowed",
				containerClassName
			)}
		>
			{/* Gradient Border Background */}
			<div className="absolute inset-0 rounded-lg p-[1px] bg-[conic-gradient(from_var(--angle),theme(colors.purple.500),theme(colors.blue.500),theme(colors.purple.500))] animate-border">
				<div
					className={cn(
						"h-full w-full rounded-lg bg-black",
						"transition-all duration-200",
						"group-hover:bg-neutral-900/50",
						"backdrop-blur-xl"
					)}
				/>
			</div>

			{/* Content */}
			<span
				className={cn(
					"relative z-10",
					"text-sm font-medium text-white",
					"transition-colors duration-200",
					"flex items-center justify-center gap-2",
					className
				)}
			>
				{children}
			</span>
		</Component>
	);
};
