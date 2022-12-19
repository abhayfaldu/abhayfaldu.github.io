import { Box, Button, Flex, Img, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Flex
			id="about"
			bg={"#161B40"}
			align="center"
			justify={"center"}
			color="#fff"
			h={"100vh"}
		>
			<Flex
				w={["95%", "95%", "95%", "1000px"]}
				flexDir={["column", "column", "row", "row"]}
				transform={["scale(0.8)", "scale(0.88)", "scale(1)", "scale(1)"]}
			>
				{/* image */}
				<Flex w={["full", "full", "50%"]} p={["40px", "40px", 0]} mr="50px" align='center' justify={"center"} >
					<Img src="/abhay.jpg" borderRadius={"50%"} w="80%" />
				</Flex>

				{/* text */}
				<Flex
					w={["full", "full", "50%"]}
					// fontWeight="bold"
					flexDir={"column"}
					justify="center"
					mx={"10px"}
				>
					<Text fontSize={"20px"} mb="20px">
						About me
					</Text>
					<Text fontSize={"30px"} lineHeight="1.3" color={"#43BEE5"}>
						I am an enthusiastic learner and passionate full-stack web
						developer.
					</Text>
					<Text fontSize={"14px"} mt="10px">
						I am capable of building production-ready websites using MERN
						technologies and also excited to work with a great team in a great
						organization and learn more from them.
					</Text>
					<VStack align={"flex-start"} mt="20px">
						<Text color={"#43BEE5"} lineHeight="1">
							Name:&nbsp;
							<span style={{ color: "#fff" }}>Abhay Faldu</span>
						</Text>
						<Text color={"#43BEE5"}>
							Email:&nbsp;
							<span style={{ color: "#fff" }}>abhayfadlu1922@gmail.com</span>
						</Text>
					</VStack>
					<Link
						href="#contact"
						mt="35px"
						textAlign={"center"}
						py="10px"
						borderRadius="5px"
						bg="#43BEE5"
						color="#000"
						fontSize={"18px"}
						fontWeight={"600"}
						w={"150px"}
					>
						Contact me
					</Link>
				</Flex>
			</Flex>
		</Flex>
	);
};

export default About;
