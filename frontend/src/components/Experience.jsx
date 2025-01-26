import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";

const experienceData = [
	{
		title: "2024",
		content: (
			<div className="group relative p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
				
				<div className="relative flex flex-col space-y-4 sm:space-y-6">
					<div className="space-y-2">
						<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
							<h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
								Full-Stack Developer
							</h3>
							<span className="px-3 py-1 text-sm rounded-full text-purple-200 bg-purple-500/10 border border-purple-500/20 w-fit">
								Present
							</span>
						</div>
						<p className="text-neutral-400 text-sm sm:text-[15px] font-medium">
							WEBLEDGER SOLUTIONS PVT. LTD. | January 2024 - Present | Surat, India
						</p>
					</div>

					<ul className="list-none space-y-3 sm:space-y-4 text-sm sm:text-base">
						{[
							"<strong>Improved</strong> and <strong>managed Webledger Office product</strong> using <strong>Vue.js, Adonis.js</strong> and <strong>TypeScript.</strong>",
							"<strong>Solely developed</strong> a <strong>customizable dashboard</strong> with drag-and-drop functionality for <strong>resizing and moving components</strong>, enabling users to personalize their workflows.",
							"<strong>Solely Redesigned</strong> and <strong>Improved</strong> the <strong>Retail Loan feature</strong> within the WebLedger platform, enabling Charted Accountants (CAs) to input loan data, automatically calculate eligibility, and generate PDF reports for seamless digital submission to banks.",
							"Implemented <strong>Custom Recurrence Logic</strong> for task scheduling for <strong>Workboard</strong> feature, enabling seamless management of recurring tasks with flexible scheduling options",
							"<strong>Collaborated with teams</strong> to gather requirements, plan tasks, and deliver features, ensuring <strong>100% on-time project delivery.</strong>",
							"Built and maintained <strong>30+ reusable Vue.js components</strong>, streamlining development processes and ensuring consistency across the platform."
						].map((point, index) => (
							<li key={index} className="flex items-start gap-3 text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
								<span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-purple-500/50" />
								<div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: point }} />
							</li>
						))}
					</ul>
				</div>
			</div>
		),
	},
	{
		title: "2023",
		content: (
			<div className="group relative p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
				<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
				
				<div className="relative flex flex-col space-y-4 sm:space-y-6">
					<div className="space-y-2">
						<h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
						  Full-Stack Web Development Course
						</h3>
						<p className="text-neutral-400 text-sm sm:text-[15px] font-medium">
							Masai School | Apr 2022 - Apr 2023 | Remote
						</p>
					</div>

					<ul className="list-none space-y-3 sm:space-y-4 text-sm sm:text-base">
						{[
							"Build 5 big <strong>team projects</strong> with <strong>many small solo</strong> projects while learning",
							"<strong>1200+ hours</strong> of training and building projects in <strong>MERN stack</strong>.",
							"<strong>400+ hours</strong> of <strong>DSA</strong>",
							"<strong>100+ hours</strong> of <strong>soft skills</strong> training",
						].map((point, index) => (
							<li key={index} className="flex items-start gap-3 text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
								<span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-purple-500/50" />
								<div className="prose prose-invert" dangerouslySetInnerHTML={{ __html: point }} />
							</li>
						))}
					</ul>
				</div>
			</div>
		),
	},
	// {
	// 	title: "2021",
	// 	content: (
	// 		<div className="group relative p-4 sm:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-2xl border border-neutral-700/50 hover:border-purple-500/50 transition-all duration-300">
	// 			<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
				
	// 			<div className="relative flex flex-col space-y-4 sm:space-y-6">
	// 				<div className="space-y-2">
	// 					<h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
	// 						L. D. COLLAGE OF ENGINEERING
	// 					</h3>
	// 					<p className="text-neutral-400 text-sm sm:text-[15px] font-medium">
	// 						Bio Medical Engineering | Feb 2021 - Mar 2022 | Ahmedabad, GJ
	// 					</p>
	// 				</div>

	// 				<ul className="list-none space-y-3 sm:space-y-4 text-sm sm:text-base">
	// 					{[
	// 						"Completed Bio Medical Engineering program",
	// 						"Developed strong analytical and problem-solving skills",
	// 						"Participated in various technical projects and competitions",
	// 					].map((point, index) => (
	// 						<li key={index} className="flex items-start gap-3 text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors">
	// 							<span className="flex-shrink-0 w-1.5 h-1.5 mt-2 sm:mt-2.5 rounded-full bg-purple-500/50" />
	// 							{point}
	// 						</li>
	// 					))}
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	),
	// },
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
