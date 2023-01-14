import {
	Box,
	Center,
	Divider,
	Flex,
	Heading,
	Img,
	Link,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { ImPointRight } from "react-icons/im";

const projectsData = [
	{
		name: "Cricket.com clone",
		image: "/assets/projects/cricket-clone.png",
		deployLink: "https://sparkly-fox-a93c3d.netlify.app",
		githubLink:
			"https://github.com/abhayfaldu/petite-stew-7564/tree/main/petite-stew-7564",
		team: [false, 5],
		features: ["scores", "cricket news", "cricket video clips"],
		duration: 5,
		techStacks: ["ReactJS", "Chakra UI", "CSS", "React-Slick library"],
		description:
			"Cricket.com is the official website of the International Cricket Council, providing the latest news, scores, live coverage and more on cricket matches and tournaments.",
	},
	{
		name: "Expedia.co.in clone",
		image: "/assets/projects/expedia-clone.png",
		deployLink: "https://startling-douhua-da4f2c.netlify.app/",
		githubLink: "https://github.com/sukhendu32/Expedia-clone-",
		team: true,
		features: ["hotel booking", "select no. of room", "select no. of persons"],
		duration: 5,
		techStacks: ["HTML", "CSS", "JS"],
		AreasOfResponsibility: [
			"builded a sign-in page",
			"builded a sign-upn page",
			"builded a image-gallery in single hotel page",
		],
		description:
			"Expedia.co.in is an online travel agency for booking flights, hotels and other travel services with price comparison feature.",
	},
	{
		name: "fatSecret.com clone",
		image: "/assets/projects/fatSecret-clone.png",
		deployLink: "https://spectacular-mermaid-7117db.netlify.app/",
		githubLink: "https://github.com/abhayfaldu/hard-ear-2917",
		team: true,
		features: ["food search", "exercise search", "search Recipes"],
		duration: 5,
		techStacks: ["HTML", "CSS", "JS"],
		AreasOfResponsibility: [
			"builded a exercise page",
			"builded a header for all pages accept home page",
			"builded a single exercise page",
		],
		description:
			"FatSecret.com is a platform for tracking food, exercise and weight loss progress, with features like exercise and food for fat loss.",
	},
	{
		name: "amazon.com clone",
		image: "/assets/projects/amazon-clone.png",
		deployLink:
			"https://63be50415d805f5085fa848a--abhay-amazon-clone.netlify.app/",
		githubLink: "https://github.com/abhayfaldu/amazon-clone",
		team: false,
		features: ["products", "add-to-cart", "login", "sign-up"],
		duration: 10,
		techStacks: ["ReactJS", "CSS", "JavaScript", "firebase"],
		description:
			"Amazon-clone is a e-commerce website allows customers to purchase a wide range of products, including books, electronics, clothing, and more",
	},
];

const Projects = () => {
	return (
		<Center id="projects" py={20}>
			<VStack px={4} w={["100%", "100%", "80%", "100%", "1100px"]}>
				{/* heading */}
				<Heading letterSpacing={10}>Projects</Heading>
				<Divider />
				{/* projects */}
				<VStack gap={8} pt={8}>
					{projectsData.map((project, index) => (
						<>
							<Flex
								px={4}
								gap={12}
								flexDirection={
									index % 2 === 0
										? ["column", "column", "column", "row"]
										: ["column", "column", "column", "row-reverse"]
								}
							>
								{/* image */}
								<Box flex={2} pt={8} zIndex="2">
									<Img
										src={project.image}
										boxShadow="lg"
										mr={"20px"}
										zIndex="1"
									/>
								</Box>

								{/* details */}
								<Flex
									flex={3}
									flexDir={"column"}
									gap={8}
									align={["center", "center", "center", "start"]}
								>
									<Text fontSize={["2rem"]} fontWeight="700">
										{project.name}
									</Text>

									<Text
										fontWeight="500"
										textAlign={["center", "center", "center", "left"]}
									>
										{project.description}
									</Text>

									{/* features */}
									<SimpleGrid columns={2} gap={8}>
										<Flex flexDir={"column"} gap={4}>
											<Text
												fontSize={"1.2rem"}
												fontWeight="700"
												align={["center", "center", "center", "start"]}
											>
												Features
											</Text>
											<Flex flexDir={"column"} gap={3}>
												{project.features.map((el, index) => (
													<Flex gap={2} align="center" key={index} pl={6}>
														<ImPointRight color="#43BEE5" />
														<Text>{el}</Text>
													</Flex>
												))}
											</Flex>
										</Flex>

										{/* tech stacks */}
										<Flex color={"43BEE5"} flexDir={"column"} gap={4}>
											<Text
												fontSize={"1.2rem"}
												fontWeight="700"
												align={["center", "center", "center", "start"]}
											>
												TechStacks
											</Text>
											<Flex flexDir={"column"} gap={3}>
												{project.techStacks.map((el, index) => (
													<Flex gap={4} align="center" key={index} pl={6}>
														<ImPointRight color="#43BEE5" />
														<Text>{el}</Text>
													</Flex>
												))}
											</Flex>
										</Flex>
									</SimpleGrid>

									{/* areas of responsibility */}
									{project.AreasOfResponsibility && (
										<Flex flexDir={"column"} gap={4}>
											<Text
												fontSize={"1.2rem"}
												fontWeight="700"
												align={["center", "center", "center", "start"]}
											>
												Areas of responsibility
											</Text>
											<Flex flexDir={"column"} gap={3}>
												{project.AreasOfResponsibility.map((el, index) => (
													<Flex gap={4} align="center" key={index} pl={6}>
														<ImPointRight color="#43BEE5" />
														<Text>{el}</Text>
													</Flex>
												))}
											</Flex>
										</Flex>
									)}

									{/* action buttons */}
									<Flex gap={8}>
										<Link
											href={project.deployLink}
											w={"9.5rem"}
											py={2}
											mt={2}
											// color="#fff"
											bg="#43bee5"
											textAlign="center"
											borderRadius={"5px"}
											fontSize={"1rem"}
											fontWeight={700}
										>
											View Demo
										</Link>
										<Link
											href={project.githubLink}
											w={"9.5rem"}
											textAlign="center"
											py={2}
											borderRadius={"5px"}
											bg="#43bee5"
											mt={2}
											fontSize={"1rem"}
											fontWeight={700}
										>
											Github Repo
										</Link>
									</Flex>
								</Flex>
							</Flex>
							{/* <Divider /> */}
							<Divider />
						</>
					))}
				</VStack>
			</VStack>
		</Center>
	);
};

export default Projects;
