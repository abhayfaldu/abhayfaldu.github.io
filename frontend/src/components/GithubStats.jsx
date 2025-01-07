import React from "react";
import { motion } from "framer-motion";
import { WavyBackground } from "./ui/wavy-background";
import { SparklesCore } from "./ui/sparkles";
import MyGitHubCalendar from "./MyGitHubCalendar";

const GithubStats = () => {
	return (
		<div id="githubStats" className="relative w-full bg-black">
			<WavyBackground className="w-full h-full" speed="slow">
				<SparklesCore
					background="transparent"
					minSize={0.4}
					maxSize={1}
					particleDensity={0.5}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
				<div className="relative w-full py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						{/* Section Title */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="text-center space-y-4 mb-16"
						>
							<h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
								GitHub Activity
							</h2>
							<div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto" />
						</motion.div>

						{/* GitHub Calendar */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
							className="space-y-8"
						>
							<div className="relative p-4 pl-12 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 overflow-hidden">
								<a
									href="https://github.com/abhayfaldu"
									target="_blank"
									rel="noopener noreferrer"
									className="block hover:opacity-80 transition-opacity"
								>
									<MyGitHubCalendar />
								</a>
							</div>
						</motion.div>

						{/* GitHub Stats Cards */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
						>
							{/* Streak Stats */}
							<a
								href="https://github.com/abhayfaldu"
								target="_blank"
								rel="noopener noreferrer"
								className="block group h-full"
							>
								<div className="relative p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 overflow-hidden group-hover:border-neutral-500 transition-colors h-full flex items-center justify-center">
									<img
										src="https://github-readme-streak-stats.herokuapp.com?user=abhayfaldu&theme=dark&hide_border=true&background=00000000&stroke=6366F1&ring=6366F1&fire=6366F1&currStreakNum=FFFFFF&sideNums=FFFFFF&currStreakLabel=FFFFFF&sideLabels=FFFFFF&dates=94A3B8"
										alt="GitHub Streak Stats"
										className="w-full max-w-full h-auto"
									/>
								</div>
							</a>

							{/* GitHub Stats */}
							<a
								href="https://github.com/abhayfaldu"
								target="_blank"
								rel="noopener noreferrer"
								className="block group h-full"
							>
								<div className="relative p-4 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 overflow-hidden group-hover:border-neutral-500 transition-colors h-full flex items-center justify-center">
									<img
										src="https://github-readme-stats.vercel.app/api?username=abhayfaldu&show_icons=true&hide_border=true&theme=dark&bg_color=00000000&title_color=FFFFFF&text_color=FFFFFF&icon_color=6366F1"
										alt="GitHub Stats"
										className="w-full max-w-full h-auto"
									/>
								</div>
							</a>
						</motion.div>
					</div>
				</div>
			</WavyBackground>
		</div>
	);
};

export default GithubStats;
