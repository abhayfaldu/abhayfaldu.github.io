import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const GridPattern = () => {
	const patternRef = useRef(null);
	const controls = useAnimation();

	useEffect(() => {
		if (!patternRef.current) return;

		const animate = async () => {
			await controls.start({
				opacity: 1,
				transition: { duration: 1.5 },
			});
		};

		animate();
	}, [controls]);

	return (
		<div className="absolute inset-0 z-0">
			<motion.div
				initial={{ opacity: 0 }}
				animate={controls}
				className="absolute inset-0"
				style={{
					backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 2px)`,
					backgroundSize: "40px 40px",
					backgroundPosition: "-19px -19px",
				}}
			/>
			<div ref={patternRef} className="absolute inset-0">
				{[...Array(100)].map((_, i) => (
					<motion.div
						key={i}
						className="absolute"
						initial={{ opacity: 0 }}
						animate={{
							opacity: [0.2, 0.5, 0.2],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: Math.random() * 3 + 2,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
						style={{
							width: "4px",
							height: "4px",
							borderRadius: "50%",
							backgroundColor: "rgba(255, 255, 255, 0.3)",
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
					/>
				))}
			</div>
		</div>
	);
};
