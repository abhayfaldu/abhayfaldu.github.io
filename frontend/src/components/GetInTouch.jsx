import { Box, Center, Flex, Heading, Link, Text } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
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

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_qa67f8u",
				"template_06eo50p",
				form.current,
				"a27mb9PHEMIetj3Jx"
			)
			.then(
				result => {
					console.log(result.text);
					e.target.reset();
					window.alert("massage sent successfully");
				},
				error => {
					console.log(error.text);
					window.alert("massage sent successfully");
				}
			);
	};

	return (
		<Center
			id="getInTouch"
			align="center"
			justify={"center"}
			px={4}
			py={20}
			bgColor="#43BEE5"
		>
			<Box
				w={["100%", "100%", "100%", "900px"]}
				fontSize={[".8rem", "0.8rem", "1rem"]}
				// overflow='hidden'
			>
				<Heading mb={10} letterSpacing={10}>
					Get in touch
				</Heading>
				<Flex
					flexDir={["column", "row"]}
					gap={[20, -14, 16]}
					flex="1"
					align={["center", "start"]}
				>
					<Flex flexDir={"column"} gap={12} align={["center", "start"]}>
						<Heading size={"md"} textAlign="left" color="#fff">
							Contact here
						</Heading>
						<Flex
							flexDir={"column"}
							textAlign="left"
							gap={8}
							// fontSize={"1.2rem"}
						>
							<Flex align={"center"} gap={4}>
								<BsFillTelephoneForwardFill />
								<Text>+91 8866319970</Text>
							</Flex>
							<Flex align={"center"} gap={4}>
								<MdEmail />
								<Text>abhayfaldu1922@gmail.com</Text>
							</Flex>
							<Flex align={"center"} gap={4}>
								<MdLocationPin />
								<Text>Jamnagar, Gujrat</Text>
							</Flex>
						</Flex>
						<Flex
							// fontSize={"2rem"}
							gap={8}
						>
							<Link href="https://twitter.com/abhayfaldu19">
								<BsTwitter />
							</Link>
							<Link href="https://www.linkedin.com/in/abhay-faldu-493b92211/">
								<BsLinkedin />
							</Link>
							<Link href="https://github.com/abhayfaldu">
								<BsGithub />
							</Link>
						</Flex>
					</Flex>
					<Center flex={[1, 1, 2]} flexDir="column" align={["center", "start"]}>
						<Heading size={"md"} textAlign="left" pl={8} color="#fff">
							Or fill this form
						</Heading>
						<form ref={form} onSubmit={sendEmail} className={styles.form}>
							<input type="text" name="user_name" placeholder="name" required />
							<input
								type="email"
								name="user_email"
								placeholder="email"
								required
							/>
							<textarea
								rows="1"
								name="message"
								placeholder="message"
								required
							/>
							<input type="submit" value="Send" />
						</form>
					</Center>
				</Flex>
			</Box>
		</Center>
	);
};

export default GetInTouch;
