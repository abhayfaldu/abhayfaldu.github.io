"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const TypewriterEffect = ({ words, className, cursorClassName }) => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(150);

	useEffect(() => {
		const word = words[currentWordIndex].text;

		const timeout = setTimeout(() => {
			if (!isDeleting) {
				setCurrentText(word.substring(0, currentText.length + 1));
				setTypingSpeed(150);

				if (currentText === word) {
					setTypingSpeed(2000);
					setIsDeleting(true);
				}
			} else {
				setCurrentText(word.substring(0, currentText.length - 1));
				setTypingSpeed(100);

				if (currentText === "") {
					setIsDeleting(false);
					setCurrentWordIndex((prev) => (prev + 1) % words.length);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [currentText, currentWordIndex, isDeleting, typingSpeed, words]);

	return (
		<div className={className}>
			<motion.div
				className="inline-block"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<motion.span
					key={currentText}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.1 }}
					className="text-4xl sm:text-5xl md:text-6xl font-bold"
				>
					{currentText}
				</motion.span>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						duration: 0.5,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className={cursorClassName || "inline-block h-8 w-[2px] bg-white ml-1"}
				/>
			</motion.div>
		</div>
	);
};
