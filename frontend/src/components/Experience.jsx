import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const experienceData = [
	{
		title: "2023",
		content: (
			<div className="p-6 bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-neutral-500 transition-all">
				<div className="flex flex-col space-y-4">
					<div>
						<h3 className="text-2xl font-bold text-neutral-200">WEB LEDGER SOLUTIONS PVT. LTD.</h3>
						<p className="text-neutral-400 text-sm">Full-Stack Developer | March 2023 - Present | Bangalore, India</p>
					</div>
					<ul className="list-disc list-outside ml-4 text-neutral-300 space-y-3">
						<li>Designed and developed scalable web applications using Vue.js, Adonis.js, and TypeScript for financial platforms.</li>
						<li>Built advanced custom recurrence scheduling systems with TypeScript and optimized MySQL queries, improving performance and scalability.</li>
						<li>Delivered responsive UI/UX designs using Bootstrap, reusable Vue.js components, and user-centric workflows.</li>
						<li>Collaborated with cross-functional teams to gather requirements, plan sprints, and deploy high-impact features within deadlines.</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		title: "2022",
		content: (
			<div className="p-6 bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-neutral-500 transition-all">
				<div className="flex flex-col space-y-4">
					<div>
						<h3 className="text-2xl font-bold text-neutral-200">FULL-STACK WEB DEVELOPMENT</h3>
						<p className="text-neutral-400 text-sm">Masai School | Apr 2022 - Dec 2022 | Bangalore, KA</p>
					</div>
					<ul className="list-disc list-outside ml-4 text-neutral-300 space-y-3">
						<li>Completed intensive full-stack web development program</li>
						<li>Built multiple projects using modern web technologies</li>
						<li>Learned industry best practices and agile methodologies</li>
					</ul>
				</div>
			</div>
		),
	},
	{
		title: "2021",
		content: (
			<div className="p-6 bg-neutral-900/50 backdrop-blur-sm rounded-lg border border-neutral-700/50 hover:border-neutral-500 transition-all">
				<div className="flex flex-col space-y-4">
					<div>
						<h3 className="text-2xl font-bold text-neutral-200">L. D. COLLAGE OF ENGINEERING</h3>
						<p className="text-neutral-400 text-sm">Bio Medical Engineering | Feb 2021 - Mar 2022 | Ahmedabad, GJ</p>
					</div>
					<ul className="list-disc list-outside ml-4 text-neutral-300 space-y-3">
						<li>Completed Bio Medical Engineering program</li>
						<li>Developed strong analytical and problem-solving skills</li>
						<li>Participated in various technical projects and competitions</li>
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
