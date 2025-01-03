import { Box, Center, Flex, Heading, Link, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import {
	BsFillTelephoneForwardFill,
	BsGithub,
	BsLinkedin,
	BsTwitter,
} from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import styles from "../Styles/GetInTouch.module.css";

const GetInTouch = () => {
	const form = useRef();
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);

	emailjs.init(process.env.REACT_APP_PORTFOLIO_EMAILJS_PUBLIC_KEY);

	const sendEmail = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const result = await emailjs.sendForm(
				process.env.REACT_APP_PORTFOLIO_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_PORTFOLIO_EMAILJS_EMAIL_TEMPLATE_ID,
				form.current
			);

			if (result.status === 200) {
				toast({
					title: "Success",
					description: "Message sent successfully",
					status: "success",
					duration: 3000,
					isClosable: true,
					position: "top-right"
				});
				form.current.reset();
			}
		} catch (error) {
			console.error("EmailJS Error:", error);
			toast({
				title: "Error",
				description: "Failed to send message. Please try again.",
				status: "error",
				duration: 3000,
				isClosable: true,
				position: "top-right"
			});
		} finally {
			setIsLoading(false);
		}
	};
	return (
		<Center
			id="getInTouch"
			align="center"
			justify={"center"}
			px={4}
			py={20}
			bgColor="primary.main"
		>
			<Box
				className={styles.linksSection}
				w={["100%", "100%", "100%", "900px"]}
				fontSize={[".8rem", "0.8rem", "1rem"]}
			>
				<Heading mb={10} letterSpacing={[2, 2, 2, 10]}>
					📞 Get in touch 📞
				</Heading>
				<Flex
					flexDir={["column", "row"]}
					gap={[8, 6, 8]}
					flex="1"
					align={["center", "start"]}
				>
					<Flex flexDir={"column"} gap={12} align={["center", "start"]}>
						<Heading size={"md"} textAlign="left" color="dark">
							Contact here 👇🏻
						</Heading>
						<Flex flexDir={"column"} textAlign="left" gap={8}>
							<Flex align={"center"} gap={4}>
								<BsFillTelephoneForwardFill />
								<Link href="tel:+918866319970">+91 8866319970</Link>
							</Flex>
							<Flex align={"center"} gap={4}>
								<MdEmail />
								<Link href="mailto:abhayfaldu1922@gmail.com">abhayfaldu1922@gmail.com</Link>
							</Flex>
							<Flex align={"center"} gap={4}>
								<MdLocationPin />
								<Link href="https://maps.app.goo.gl/cz7bqczAHeHC6d1Z6" target="_blank">Jamnagar, Gujrat</Link>
							</Flex>
						</Flex>
						<Flex gap={8} fontSize={"1.5rem"}>
							<Link href="https://twitter.com/abhaystwt" target={"_blank"}>
								<BsTwitter />
							</Link>
							<Link
								href="https://www.linkedin.com/in/abhay-faldu-493b92211/"
								target={"_blank"}
							>
								<BsLinkedin />
							</Link>
							<Link href="https://github.com/abhayfaldu" target={"_blank"}>
								<BsGithub />
							</Link>
						</Flex>
					</Flex>

					<Center
						bgColor={"light.500"}
						w={["50%", "1px"]}
						h={["1px", "275px"]}
					></Center>

					{/* form section */}
					<Center
						flex={[1, 1, 2]}
						flexDir="column"
						justify={["center", "flex-start"]}
					>
						<Heading
							size={"md"}
							w="full"
							textAlign={["center", "left"]}
							color="#fff"
						>
							Or fill this form 📝
						</Heading>
						<form ref={form} onSubmit={sendEmail} className={styles.form}>
							<input
								type="text"
								name="user_name"
								placeholder="Enter your name"
								required
								disabled={isLoading}
							/>
							<input
								type="email"
								name="user_email"
								placeholder="Enter your email"
								required
								disabled={isLoading}
							/>
							<textarea
								rows="1"
								name="message"
								placeholder="Enter message"
								required
								disabled={isLoading}
							/>
							<input
								type="submit"
								value={isLoading ? "Sending..." : "Send"}
								disabled={isLoading}
								style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
							/>
						</form>
					</Center>
				</Flex>
			</Box>
		</Center>
	);
};

export default GetInTouch;
