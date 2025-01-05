import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const BackgroundStars = () => {
	const ref = useRef(null);
	const controls = useAnimation();

	useEffect(() => {
		if (!ref.current) return;

		const animate = async () => {
			await controls.start({
				opacity: 1,
				transition: { duration: 1.5 },
			});
		};

		animate();

		// Create stars
		const stars = [];
		const numStars = 300;
		const container = ref.current;

		for (let i = 0; i < numStars; i++) {
			const star = document.createElement("div");
			const size = Math.random() * 3;

			star.style.width = `${size}px`;
			star.style.height = `${size}px`;
			star.style.left = `${Math.random() * 100}%`;
			star.style.top = `${Math.random() * 100}%`;
			star.style.position = "absolute";
			star.style.borderRadius = "50%";
			star.style.backgroundColor = i % 20 === 0 ? "#63B3ED" : "white";
			star.style.opacity = Math.random();
			star.style.animation = `twinkle ${Math.random() * 4 + 2}s infinite ${Math.random() * 2}s`;
			star.style.boxShadow = i % 20 === 0 ? "0 0 10px #63B3ED" : "none";

			stars.push(star);
			container.appendChild(star);
		}

		// Cleanup
		return () => {
			stars.forEach((star) => star.remove());
		};
	}, [controls]);

	return (
		<>
			<style>
				{`
          @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
        `}
			</style>
			<div
				ref={ref}
				className="absolute inset-0 overflow-hidden"
				style={{
					background: "radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)",
					transform: "translateZ(0)",
				}}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={controls}
					className="absolute inset-0"
					style={{
						background: `
              radial-gradient(circle at 20% 20%, rgba(99, 179, 237, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 80%, rgba(99, 179, 237, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(99, 179, 237, 0.05) 0%, transparent 60%)
            `,
						transform: "translateZ(0)",
					}}
				/>
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at center, rgba(255,255,255,0.01) 0%, transparent 10%)",
						backgroundSize: "30px 30px",
						opacity: 0.3,
					}}
				/>
			</div>
		</>
	);
};
