import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { GradientBorderButton } from "./ui/gradient-border-button";
import { HiExternalLink } from "react-icons/hi";

const skillsData = {
	frontend: [
		{
			name: "Vue.js",
			icon: "/assets/skills/vue.svg",
		},
		{
			name: "TypeScript",
			icon: "/assets/skills/typescript.png",
		},
		{
			name: "React",
			icon: "/assets/skills/react.svg",
		},
		{
			name: "JavaScript",
			icon: "/assets/skills/javascript.svg",
		},
		{
			name: "Adonis.js",
			icon: "/assets/skills/adonis.svg",
		},
		{
			name: "Node.js",
			icon: "/assets/skills/node-js.svg",
		},
		{
			name: "Express.js",
			icon: "/assets/skills/express-js.svg",
		},
		{
			name: "MySQL",
			icon: "/assets/skills/mysql.svg",
		},
		{
			name: "MongoDB",
			icon: "/assets/skills/mongodb.svg",
		},
		{
			name: "Redux",
			icon: "/assets/skills/redux.svg",
		},
		{
			name: "Chakra UI",
			icon: "/assets/skills/chakra-ui.svg",
		},
		{
			name: "HTML5",
			icon: "/assets/skills/html-5.svg",
		},
		{
			name: "CSS3",
			icon: "/assets/skills/css3.svg",
		},
		{
			name: "HTTP & REST API",
			icon: "/assets/skills/http.png",
		},
	],
	tools: [
		{
			name: "VS Code",
			icon: "/assets/tools/vs-code.svg",
		},
		{
			name: "Git",
			icon: "/assets/tools/git.svg",
		},
		{
			name: "GitHub",
			icon: "/assets/tools/github.svg",
		},
		{
			name: "Postman",
			icon: "/assets/tools/postman.png",
		},
	],
};

const Skills = () => {
	return (
		<div id="skills" className="relative min-h-screen w-full bg-black py-20">
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
							Skills & Technologies
						</h2>
						<div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto" />
					</motion.div>

					{/* Skills Grid */}
					<div className="grid gap-12">
						{Object.entries(skillsData).map(([category, skills], index) => (
							<motion.div
								key={category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								viewport={{ once: true }}
								className="space-y-6"
							>
								<h3 className="text-2xl font-bold text-neutral-200 capitalize">{category}</h3>
								<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
									{skills.map((skill) => (
										<div
											key={skill.name}
											className={cn(
												"group relative p-4 rounded-xl",
												"bg-neutral-900/50 backdrop-blur-sm",
												"border border-neutral-700/50",
												"hover:border-neutral-500 transition-colors duration-300"
											)}
										>
											<div className="aspect-square mb-3 flex items-center justify-center">
												<img
													src={skill.icon}
													alt={skill.name}
													className={cn(
														"object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300",
														(skill.name === "TypeScript" || 
														skill.name === "Express.js" || 
														skill.name === "MySQL" || 
														skill.name === "MongoDB" || 
														skill.name === "HTTP & REST API" || 
														skill.name === "Postman")
															? "w-[90px] h-[90px]"
															: "w-[100px] h-[100px]"
													)}
												/>
											</div>
											<div className="text-center">
												<h4 className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
													{skill.name}
												</h4>
											</div>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>

					{/* Action Button */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						className="flex justify-center mt-12"
					>
						<GradientBorderButton href="https://github.com/abhayfaldu?tab=repositories" external>
							<HiExternalLink className="mr-2 h-5 w-5 inline-block" />
							View My Work
						</GradientBorderButton>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
