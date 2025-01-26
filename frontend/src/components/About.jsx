import React from "react";
import { motion } from "framer-motion";
import { GradientBorderButton } from "./ui/gradient-border-button";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";

const About = () => {
	return (
		<div id="about" className="relative w-full bg-black py-24 pt-32
		">
			<div className="relative w-full">
				<div className="mx-auto max-w-7xl px-4">
					{/* Section Title */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center space-y-4 mb-16"
					>
						<h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
							About Me
						</h2>
						<div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto" />
					</motion.div>

					{/* About Content */}
					<div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-center">
						{/* Profile Image */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="relative aspect-square w-full sm:w-3/4 md:w-2/3 lg:w-full mx-auto"
						>
							<div className="absolute inset-0 rounded-2xl overflow-hidden">
								<img
									src="/assets/giphy.gif"
									alt="giphy"
									className="w-full h-full object-cover object-center"
								/>
							</div>
						</motion.div>

						{/* About Text */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<div className="space-y-4">
								<h3 className="text-2xl font-bold text-neutral-200">Full Stack Developer</h3>
								<p className="text-neutral-400 leading-relaxed">
									Hi there! I'm Abhay Faldu, a Full Stack Developer with 1+ years of experience in building scalable applications and backend APIs. Currently working at Webledger Solutions, I specialize in developing robust financial platforms using Vue.js, TypeScript, and Adonis.js.
								</p>
								<p className="text-neutral-400 leading-relaxed">
									I have extensive experience in both MERN stack and Vue.js ecosystem, having built everything from customizable dashboards to real-time multiplayer games. I'm all about creating efficient solutions that combine beautiful design with powerful technology, ensuring 100% on-time project delivery.
								</p>
							</div>

							{/* Skills */}
							<div className="space-y-4">
								<h4 className="text-lg font-semibold text-neutral-300">Core Skills</h4>
								<div className="flex flex-wrap gap-2">
									{[
										"Vue.js",
										"TypeScript",
										"Adonis.js",
										"MySQL",
										"React.js",
										"Node.js",
										"Express.js",
										"MongoDB",
										"Git",
										"Docker"
									].map((skill) => (
										<span
											key={skill}
											className="px-3 py-1 text-sm rounded-full text-neutral-300 bg-neutral-900/50 border border-neutral-700/50"
										>
											{skill}
										</span>
									))}
								</div>
							</div>

							{/* Action Buttons */}
							<div className="flex items-center gap-4 pt-4">
								<GradientBorderButton href="/assets/Abhay_Faldu_Resume.pdf" external>
									<HiExternalLink className="mr-2 h-5 w-5 inline-block" />
									Resume
								</GradientBorderButton>
								<GradientBorderButton href="https://github.com/abhayfaldu" external>
									<BsGithub className="mr-2 h-5 w-5 inline-block" />
									GitHub
								</GradientBorderButton>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
