import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const experienceData = [
	{
		title: "2023",
		mobileTitle: "Early 2023",
		description: "Started my journey as a Full Stack Developer at Web Ledger Solutions.",
		content: (
			<div className="group relative p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
				
				<div className="relative flex flex-col space-y-4 sm:space-y-6">
					<div className="space-y-2">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
							<h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
								WEB LEDGER SOLUTIONS PVT. LTD.
							</h3>
							<span className="px-3 py-1 text-sm rounded-full text-purple-200 bg-purple-500/10 border border-purple-500/20 w-fit">
								Present
							</span>
						</div>
						<p className="text-neutral-400 text-sm sm:text-[15px] font-medium">
							Full-Stack Developer | March 2023 - Present | Bangalore, India
						</p>
					</div>

					<ul className="list-none space-y-3 sm:space-y-4 text-sm sm:text-base">
						{[
							"Designed and developed scalable web applications using Vue.js, Adonis.js, and TypeScript for financial platforms.",
							"Built advanced custom recurrence scheduling systems with TypeScript and optimized MySQL queries, improving performance and scalability.",
							"Delivered responsive UI/UX designs using Bootstrap, reusable Vue.js components, and user-centric workflows.",
							"Collaborated with cross-functional teams to gather requirements, plan sprints, and deploy high-impact features within deadlines.",
						].map((point, index) => (
							<li key={index} className="flex items-start gap-3 text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
								<span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-purple-500/50" />
								{point}
							</li>
						))}
					</ul>
				</div>
			</div>
		),
	},
	{
		title: "2022",
		mobileTitle: "Late 2022",
		description: "Completed intensive full-stack development training at Masai School.",
		content: (
			<div className="group relative p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
				
				<div className="relative flex flex-col space-y-4 sm:space-y-6">
					<div className="space-y-2">
						<h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
							FULL-STACK WEB DEVELOPMENT
						</h3>
						<p className="text-neutral-400 text-sm sm:text-[15px] font-medium">
							Masai School | Apr 2022 - Dec 2022 | Bangalore, KA
						</p>
					</div>

					<ul className="list-none space-y-3 sm:space-y-4 text-sm sm:text-base">
						{[
							"Completed intensive full-stack web development program",
							"Built multiple projects using modern web technologies",
							"Learned industry best practices and agile methodologies",
						].map((point, index) => (
							<li key={index} className="flex items-start gap-3 text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
								<span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-purple-500/50" />
								{point}
							</li>
						))}
					</ul>
				</div>
			</div>
		),
	},
	{
		title: "2021",
		mobileTitle: "Early 2021",
		description: "Started my engineering journey at L. D. College of Engineering.",
		content: (
			<div className="group relative p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
				
				<div className="relative flex flex-col space-y-4 sm:space-y-6">
					<div className="space-y-2">
						<h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
							L. D. COLLAGE OF ENGINEERING
						</h3>
						<p className="text-neutral-400 text-sm sm:text-[15px] font-medium">
							Bio Medical Engineering | Feb 2021 - Mar 2022 | Ahmedabad, GJ
						</p>
					</div>

					<ul className="list-none space-y-3 sm:space-y-4 text-sm sm:text-base">
						{[
							"Completed Bio Medical Engineering program",
							"Developed strong analytical and problem-solving skills",
							"Participated in various technical projects and competitions",
						].map((point, index) => (
							<li key={index} className="flex items-start gap-3 text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
								<span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-purple-500/50" />
								{point}
							</li>
						))}
					</ul>
				</div>
			</div>
		),
	},
];

const Experience = () => {
	return (
		<div id="experience" className="relative w-full bg-black">
			<div className="mx-auto max-w-7xl px-4">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center space-y-4 pt-32"
				>
					<h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
						Professional Experience
					</h2>
					<div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto" />
				</motion.div>

				{/* Timeline */}
				<Timeline data={experienceData} />
			</div>
		</div>
	);
};

export default Experience; 
