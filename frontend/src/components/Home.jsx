import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { WavyBackground } from "./ui/wavy-background";
import { SparklesCore } from "./ui/sparkles";
import { GradientBorderButton } from "./ui/gradient-border-button";

const Home = () => {
	return (
		<div id="home" className="relative h-screen w-full overflow-hidden bg-black">
			{/* Background Effects */}
			<WavyBackground className="w-full h-full">
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={1.2}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</WavyBackground>

			{/* Content Container */}
			<div className="absolute inset-0 w-full h-full">
				<div className="relative h-full w-full flex flex-col items-center justify-center px-4">
					{/* Main Content */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-center space-y-6 max-w-4xl"
					>
						<h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight">
							Crafting Digital Experiences with Code
						</h1>
						<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
							Full Stack Developer specializing in modern web technologies and scalable solutions.
						</p>

						{/* Action Buttons */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
						>
							<GradientBorderButton href="#contact">Get in Touch</GradientBorderButton>

							{/* Social Links */}
							<div className="flex items-center gap-4">
								<a
									href="https://github.com/abhayfaldu"
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										"p-3 rounded-full text-neutral-300",
										"bg-neutral-900/50 backdrop-blur-sm",
										"hover:text-white hover:bg-neutral-800",
										"transition duration-200"
									)}
								>
									<BsGithub className="w-6 h-6" />
								</a>
								<a
									href="https://www.linkedin.com/in/abhay-faldu-493b92211/"
									target="_blank"
									rel="noopener noreferrer"
									className={cn(
										"p-3 rounded-full text-neutral-300",
										"bg-neutral-900/50 backdrop-blur-sm",
										"hover:text-white hover:bg-neutral-800",
										"transition duration-200"
									)}
								>
									<BsLinkedin className="w-6 h-6" />
								</a>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Home;
