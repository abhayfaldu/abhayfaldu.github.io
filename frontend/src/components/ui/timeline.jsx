import {
	useMotionValueEvent,
	useScroll,
	useTransform,
	motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
	const ref = useRef(null);
	const containerRef = useRef(null);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		if (ref.current) {
			const rect = ref.current.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [ref]);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 0.8", "end 0.8"],
	});

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

	return (
		<div className="w-full bg-black font-sans" ref={containerRef}>
			<div ref={ref} className="relative max-w-7xl mx-auto pb-20">
				{data.map((item, index) => (
					<div key={index} className="md:flex justify-start pt-20 gap-4 sm:gap-10">
						<div className="md:sticky flex flex-col sm:flex-row z-40 sm:items-center top-24 sm:top-40 self-start sm:max-w-sm">
							<div className="flex items-center mb-2 sm:mb-0">
								<div className="h-8 sm:h-10 relative sm:absolute left-2 sm:left-3 w-8 sm:w-10 rounded-full bg-black flex items-center justify-center">
									<div className="h-3 sm:h-4 w-3 sm:w-4 rounded-full bg-neutral-800 border border-neutral-700 p-2" />
								</div>
								<h3 className="block text-3xl sm:text-5xl font-bold pl-8 sm:pl-20 text-neutral-500">
									{item.title}
								</h3>
							</div>
						</div>

						<div className="relative pl-14 md:pl-2 mt-8 md:mt-0 md:w-full">
							{item.content}
						</div>
					</div>
				))}
				<div
					style={{
						height: height + "px",
					}}
					className="absolute left-6 sm:left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
				>
					<motion.div
						style={{
							height: heightTransform,
							opacity: opacityTransform,
						}}
						className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}; 
