import {
	Box,
	Center,
	Flex,
	Img,
	Link,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Center id="about" bg={"#161B40"} color="#fff" py={"100px"}>
			<SimpleGrid
				w={["100%", "100%", "100%", "1100px"]}
				columns={[1, 1, 2]}
				px="1rem"
			>
				{/* image */}
				<Flex align={["center"]} justify={["center", "center", "", "start"]}>
					<Img
						src="/assets/abhay.jpg"
						borderRadius={"50%"}
						w={["70%", "60%", "70%", "80%"]}
					/>
				</Flex>

				{/* text */}
				<Flex
					flexDir={"column"}
					justify={["flex-end", "center", "flex-end", "flex-start"]}
					textAlign={["center", "center", "left", "left"]}
				>
					<Box
						h={"80px"}
						mb={[0, 0, 4, 0]}
						py={5}
						marginTop={["", "-80px", "0", "0"]}
						bgGradient={[
							"",
							"linear(to-t, #161B40ff, #161B40af, #161B4000)",
							"",
							"",
						]}
					>
						<Text fontSize={["1rem", "1.3rem", "1.3rem", "1.5rem"]}>
							About me 😀
						</Text>
					</Box>
					<Text
						fontSize={["1.5rem", "1.8rem", "", "2rem"]}
						lineHeight="1.3"
						color={"#43BEE5"}
						mb={6}
					>
						I am an enthusiastic learner and passionate full-stack web
						developer.
					</Text>
					<Text fontSize={["0.7rem", "0.8rem", "", "1rem"]} mb={8}>
						I am capable of building production-ready websites using MERN
						technologies and also excited to work with a great team in a great
						organization and learn more from them.
					</Text>
					<Link
						href="#contact"
						w={"150px"}
						mx={["auto", "auto", "0", "0"]}
						py="10px"
						align="center"
						borderRadius="5px"
						bg="#43BEE5"
						color="#000"
						fontSize={["0.8rem", "1rem", "1rem", "1.2rem"]}
						fontWeight={"600"}
					>
						Contact me
					</Link>
				</Flex>
			</SimpleGrid>
		</Center>
	);
};

export default About;
