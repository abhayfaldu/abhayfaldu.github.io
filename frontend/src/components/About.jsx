import { DownloadIcon } from "@chakra-ui/icons";
import {
	Center,
	Flex,
	Heading,
	Highlight,
	Img,
	Link,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
	return (
		<Center id="about" flexDir={"column"} color="dark" py={20}>
			<Heading letterSpacing={[2, 2, 2, 10]} pb={2} pl={3}>
				😁 About me 😁
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
						color={"dark"}
						fontWeight={600}
					>
						<Highlight
							query={["Abhay Faldu"]}
							styles={{ color: "primary.main" }}
						>
							I am Abhay Faldu, a Full-Stack Developer at Web Ledger Solutions, passionate about building scalable web applications 🧑🏻‍💻.
						</Highlight>
					</Text>
					<Text
						fontSize={["0.7rem", "0.8rem", "0.8rem", "1rem"]}
						fontWeight="bold"
					>
						I specialize in building production-ready applications using Vue.js, TypeScript, and Node.js. Currently working on financial platforms, I bring expertise in both frontend and backend development with a focus on performance and scalability.
					</Text>
					<Flex gap={4} justify={["center", "center", "start", "start"]}>
						<Link
							href={"#getInTouch"}
							w={"9.5rem"}
							textAlign="center"
							py={2}
							borderRadius={8}
							bg="primary.main"
							mt={2}
							fontSize={"1rem"}
							fontWeight={700}
						>
							👇🏻 Get in touch
						</Link>
						<Link
							href={"/assets/fw19_095-Abhay-Faldu-Resume.pdf"}
							download
							onClick={() =>
								window.open(
									"./assets/fw19_095-Abhay-Faldu-Resume.pdf",
									"_blank"
								)
							}
							w={"9.5rem"}
							textAlign="center"
							py={2}
							borderRadius={8}
							bg="primary.main"
							mt={2}
							fontSize={"1rem"}
							fontWeight={700}
						>
							<Flex align={"center"} gap={1} justify="center">
								<DownloadIcon />
								<Text>Resume</Text>
							</Flex>
						</Link>
					</Flex>
				</Flex>
			</SimpleGrid>
		</Center>
	);
};

export default About;
