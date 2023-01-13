import {
	Center,
	Flex,
	Heading,
	Img,
	Link,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Center id="about" flexDir={"column"} color="#000" py={20}>
			<Heading letterSpacing={[2,2,10]}>
				About me
			</Heading>
			<SimpleGrid
				w={["100%", "80%", "100%", "100%", "1100px"]}
				columns={[1, 1, 2]}
				px={4}
				pt={10}
			>
				{/* image */}
				<Flex align={["center"]} justify={["center", "center", "start"]}>
					<Img
						src="/assets/abhay.jpg"
						w={["70%", "60%", "85%"]}
						borderRadius={"50%"}
						border={"2px solid #43BEE5"}
						mb={[6, 6, 0]}
					/>
				</Flex>

				{/* text */}
				<Flex
					flexDir={"column"}
					justify={["flex-end", "center", "center", "center"]}
					textAlign={["center", "center", "left", "left"]}
					gap={6}
				>
					<Text
						fontSize={["1.5rem", "1.8rem", "", "2rem"]}
						lineHeight="1.3"
						color={"#000"}
						fontWeight={600}
					>
						I am <span style={{ color: "#43BEE5" }}>Abhay Faldu,</span> an
						enthusiastic learner and passionate full-stack web developer 🧑🏻‍💻.
					</Text>
					<Text
						fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
						fontWeight="bold"
					>
						I am capable of building production-ready websites using MERN
						technologies and also excited to work with a great team in a great
						organization and learn more from them.
					</Text>
					<Flex gap={4}>
						<Link
							href={"#getInTouch"}
							w={"9.5rem"}
							textAlign="center"
							// display={["none", "none", "block", "block"]}
							py={2}
							borderRadius={8}
							bg="#43bee5"
							mt={2}
							fontSize={"1rem"}
							fontWeight={700}
						>
							Get in touch
						</Link>
						<Link
							href={"/assets/Abhay-Faldu-Resume.pdf"}
							download
							w={"9.5rem"}
							textAlign="center"
							// display={["none", "none", "block", "block"]}
							py={2}
							borderRadius={8}
							bg="#43bee5"
							mt={2}
							fontSize={"1rem"}
							fontWeight={700}
						>
							Resume
						</Link>
					</Flex>
				</Flex>
			</SimpleGrid>
		</Center>
	);
};

export default About;
