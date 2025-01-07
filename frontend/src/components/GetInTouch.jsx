import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiMail, HiPhone } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { GradientBorderButton } from "./ui/gradient-border-button";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
	const form = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const result = await emailjs.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form.current,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY
			);

			if (result.status === 200) {
				toast.success("Message sent successfully!");
				form.current.reset();
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error("EmailJS Error:", error);
			toast.error("An error occurred. Please try again later.");
		}
	};

	return (
		<div id="contact" className="relative w-full bg-black py-24">
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
							Get In Touch
						</h2>
						<div className="h-1 w-20 bg-gradient-to-r from-purple-500/50 to-transparent mx-auto" />
					</motion.div>

					{/* Contact Grid */}
					<div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
						{/* Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="space-y-8"
						>
							<div className="space-y-6">
								<h3 className="text-2xl font-bold text-neutral-200">Contact Information</h3>
								<p className="text-neutral-400 leading-relaxed">
									Feel free to reach out through any of these channels. I'm always open to
									discussing new projects, creative ideas, or opportunities.
								</p>
							</div>

							{/* Contact Details */}
							<div className="space-y-4">
								<a
									href="tel:+918866319970"
									className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
								>
									<div className="h-12 w-12 rounded-lg bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50">
										<HiPhone className="h-6 w-6" />
									</div>
									<span>+91 8866319970</span>
								</a>
								<a
									href="mailto:abhayfaldu1922@gmail.com"
									className="flex items-center gap-4 text-neutral-400 hover:text-white transition-colors"
								>
									<div className="h-12 w-12 rounded-lg bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50">
										<HiMail className="h-6 w-6" />
									</div>
									<span>abhayfaldu1922@gmail.com</span>
								</a>
								<div className="flex items-center gap-4 text-neutral-400">
									<div className="h-12 w-12 rounded-lg bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50">
										<IoLocationSharp className="h-6 w-6" />
									</div>
									<span>Jamnagar, Gujarat</span>
								</div>
							</div>

							{/* Social Links */}
							<div className="space-y-4">
								<h4 className="text-lg font-semibold text-neutral-300">Follow Me</h4>
								<div className="flex gap-4">
									<a
										href="https://twitter.com/abhaystwt"
										target="_blank"
										rel="noopener noreferrer"
										className="h-12 w-12 rounded-lg bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50 text-neutral-400 hover:text-white transition-colors"
									>
										<BsTwitter className="h-5 w-5" />
									</a>
									<a
										href="https://www.linkedin.com/in/abhay-faldu-493b92211/"
										target="_blank"
										rel="noopener noreferrer"
										className="h-12 w-12 rounded-lg bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50 text-neutral-400 hover:text-white transition-colors"
									>
										<BsLinkedin className="h-5 w-5" />
									</a>
									<a
										href="https://github.com/abhayfaldu"
										target="_blank"
										rel="noopener noreferrer"
										className="h-12 w-12 rounded-lg bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center border border-neutral-700/50 text-neutral-400 hover:text-white transition-colors"
									>
										<BsGithub className="h-5 w-5" />
									</a>
								</div>
							</div>
						</motion.div>

						{/* Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="relative"
						>
							<div
								className={cn(
									"relative p-8 rounded-2xl overflow-hidden",
									"bg-neutral-900/50 backdrop-blur-sm",
									"border border-neutral-700/50"
								)}
							>
								<form ref={form} onSubmit={handleSubmit} className="space-y-6">
									<div className="space-y-2">
										<label
											htmlFor="user_name"
											className="block text-sm font-medium text-neutral-300"
										>
											Name
										</label>
										<input
											type="text"
											id="user_name"
											name="user_name"
											required
											className={cn(
												"w-full px-4 py-2.5 rounded-lg",
												"bg-neutral-800/50 backdrop-blur-sm",
												"border border-neutral-700/50",
												"text-white placeholder-neutral-500",
												"focus:outline-none focus:ring-2 focus:ring-purple-500/50"
											)}
											placeholder="Your name"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="user_email"
											className="block text-sm font-medium text-neutral-300"
										>
											Email
										</label>
										<input
											type="email"
											id="user_email"
											name="user_email"
											required
											className={cn(
												"w-full px-4 py-2.5 rounded-lg",
												"bg-neutral-800/50 backdrop-blur-sm",
												"border border-neutral-700/50",
												"text-white placeholder-neutral-500",
												"focus:outline-none focus:ring-2 focus:ring-purple-500/50"
											)}
											placeholder="your@email.com"
										/>
									</div>
									<div className="space-y-2">
										<label htmlFor="message" className="block text-sm font-medium text-neutral-300">
											Message
										</label>
										<textarea
											id="message"
											name="message"
											required
											rows={4}
											className={cn(
												"w-full px-4 py-2.5 rounded-lg",
												"bg-neutral-800/50 backdrop-blur-sm",
												"border border-neutral-700/50",
												"text-white placeholder-neutral-500",
												"focus:outline-none focus:ring-2 focus:ring-purple-500/50",
												"resize-none"
											)}
											placeholder="Your message..."
										/>
									</div>
									<GradientBorderButton type="submit">Send Message</GradientBorderButton>
								</form>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetInTouch;
