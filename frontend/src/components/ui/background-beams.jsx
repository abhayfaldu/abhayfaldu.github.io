"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const BackgroundBeams = () => {
	const ref = useRef(null);
	const controls = useAnimation();

	useEffect(() => {
		if (!ref.current) return;

		const animate = async () => {
			await controls.start({
				opacity: 1,
				scale: 1,
				transition: {
					duration: 1.5,
					ease: "easeOut",
				},
			});
		};

		animate();
	}, [controls]);

	return (
		<div
			ref={ref}
			className="absolute inset-0 overflow-hidden"
			style={{
				transform: "translateZ(0)",
				background: "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 100%)",
			}}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={controls}
				className="absolute inset-0"
				style={{
					background: `
            radial-gradient(circle at 20% 20%, rgba(99, 179, 237, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(99, 179, 237, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(99, 179, 237, 0.1) 0%, transparent 60%)
          `,
					transform: "translateZ(0)",
				}}
			/>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.03' fill-rule='evenodd'%3E%3Ccircle cx='50' cy='50' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
					opacity: 0.1,
				}}
			/>
		</div>
	);
};
