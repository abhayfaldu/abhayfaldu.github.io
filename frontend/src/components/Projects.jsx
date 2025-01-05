import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { BsGithub } from "react-icons/bs";
import { HiExternalLink } from "react-icons/hi";
import { GradientBorderButton } from "./ui/gradient-border-button";

const projectsData = [
	{
		name: "DELL.COM CLONE",
		image: "/assets/projects/dell.png",
		deployLink: "https://lap-den.vercel.app/",
		githubLink: "https://github.com/abhayfaldu/Dell.com_clone",
		features: [
			"Browse and purchase laptops and accessories",
			"Product filtering and sorting",
			"Enhanced user experience",
			"Responsive design",
		],
		duration: 6,
		techStacks: ["JavaScript", "React.js", "Redux", "Node.js", "Express.js", "MongoDB", "ChakraUI"],
		description:
			"A comprehensive e-commerce platform allowing users to browse and purchase laptops and accessories. Built with a team in 6 days, ensuring responsiveness and functionality.",
	},
	{
		name: "CHANDA-KAUDI GAME",
		image: "/assets/projects/chanda_kaudi.png",
		deployLink: "https://chanda-kaudi-game.vercel.app/",
		githubLink: "https://github.com/abhayfaldu/Chanda_kaudi_game",
		features: [
			"Real-time multiplayer gameplay",
			"Live chat functionality",
			"Traditional Indian board game",
			"Intuitive gameplay",
		],
		duration: 2,
		techStacks: [
			"TypeScript",
			"React.js",
			"Socket.io",
			"Node.js",
			"Express.js",
			"MongoDB",
			"ChakraUI",
		],
		description:
			"A digital adaptation of a traditional Indian board game developed during a 2-day hackathon. Features real-time multiplayer gameplay with live chat functionality using Socket.io.",
	},
	{
		name: "E-COMMERCE BACKEND",
		image: "/assets/projects/shopzon_backend.webp",
		deployLink: "",
		githubLink: "https://github.com/abhayfaldu/shopzon-backend",
		features: [
			"User authentication",
			"Product management",
			"Order processing",
			"Secure implementation",
		],
		duration: 10,
		techStacks: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
		description:
			"A robust backend system using MVC architecture to support user authentication and product management. Implemented secure features with JWT authentication and Bcrypt for password hashing.",
	},
];

const Projects = () => {
	return (
		<div id="projects" className="relative min-h-screen w-full bg-black py-20">
			{/* Content Container */}
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
							Featured Projects
						</h2>
						<div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto" />
					</motion.div>

					{/* Projects Grid */}
					<div className="space-y-24">
						{projectsData.map((project, index) => (
							<motion.div
								key={project.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className={cn(
									"grid gap-8 items-center",
									index % 2 === 0
										? "lg:grid-cols-[1fr,1.5fr]"
										: "lg:grid-cols-[1.5fr,1fr] lg:grid-flow-dense"
								)}
							>
								{/* Project Image */}
								<div
									className={cn(
										"relative group rounded-xl overflow-hidden bg-neutral-900",
										index % 2 === 0 ? "lg:order-1" : "lg:order-2"
									)}
								>
									<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
									<img
										src={project.image}
										alt={project.name}
										className="w-full aspect-video object-cover object-top group-hover:scale-105 transition-transform duration-500"
									/>
								</div>

								{/* Project Details */}
								<div className={cn("space-y-6", index % 2 === 0 ? "lg:order-2" : "lg:order-1")}>
									<h3 className="text-2xl md:text-3xl font-bold text-neutral-200">
										{project.name}
									</h3>
									<p className="text-neutral-400 leading-relaxed">{project.description}</p>

									{/* Features */}
									<div className="space-y-4">
										<h4 className="text-lg font-semibold text-neutral-300">Key Features</h4>
										<ul className="grid grid-cols-2 gap-2">
											{project.features.map((feature, idx) => (
												<li key={idx} className="text-neutral-400 text-sm flex items-center gap-2">
													<span className="h-1.5 w-1.5 rounded-full bg-purple-500/70" />
													{feature}
												</li>
											))}
										</ul>
									</div>

									{/* Tech Stack */}
									<div className="flex flex-wrap gap-2">
										{project.techStacks.map((tech, idx) => (
											<span
												key={idx}
												className="px-3 py-1 text-sm rounded-full text-neutral-300 bg-neutral-900/50 border border-neutral-700/50"
											>
												{tech}
											</span>
										))}
									</div>

									{/* Action Buttons */}
									<div className="flex items-center gap-4 pt-4">
										{project.deployLink && (
											<GradientBorderButton href={project.deployLink} external>
												<HiExternalLink className="mr-2 h-5 w-5 inline-block" />
												Live Demo
											</GradientBorderButton>
										)}
										<GradientBorderButton href={project.githubLink} external>
											<BsGithub className="mr-2 h-5 w-5 inline-block" />
											Source Code
										</GradientBorderButton>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
