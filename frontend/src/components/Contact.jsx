import {
	Box,
	Button,
	Center,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Textarea,
} from "@chakra-ui/react";
import React from "react";

const Contact = () => {
	return (
		<Center
			id="contact"
			pt="60px"
			bg={"#161B40"}
			align="center"
			justify={"center"}
			color="#fff"
			pb={"5rem"}
		>
			<Box w={["100%", "100%", "100%", "1100px"]}>
				<Heading mb={"4rem"}>Get in touch</Heading>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
						maxWidth: "40rem",
						gap: "1rem",
					}}
				>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input type="email" placeholder="Enter email" />
					</FormControl>
					<FormControl>
						<FormLabel>massage</FormLabel>
						<Textarea placeholder="Write your massage" />
					</FormControl>
				</form>
				<Button color={"#161B40"} fontSize="1.2rem" bg={"#43BEE5"} mt="2rem">
					Submit
				</Button>
			</Box>
		</Center>
	);
};

export default Contact;
