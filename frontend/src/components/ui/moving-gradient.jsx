import { useEffect, useRef } from "react";

export const MovingGradient = () => {
	const containerRef = useRef(null);
	const gradientRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const gradient = gradientRef.current;
		if (!container || !gradient) return;

		const handleMouseMove = (e) => {
			const rect = container.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			const centerX = rect.width / 2;
			const centerY = rect.height / 2;

			const deltaX = (x - centerX) / centerX;
			const deltaY = (y - centerY) / centerY;

			gradient.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
		};

		container.addEventListener("mousemove", handleMouseMove);
		return () => container.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div ref={containerRef} className="absolute inset-0 overflow-hidden">
			<div
				ref={gradientRef}
				className="absolute -inset-[100%] opacity-50 transition-transform duration-500 ease-out"
				style={{
					background:
						"radial-gradient(circle at center, rgba(99, 179, 237, 0.7) 0%, transparent 70%)",
					filter: "blur(80px)",
				}}
			/>
		</div>
	);
};
