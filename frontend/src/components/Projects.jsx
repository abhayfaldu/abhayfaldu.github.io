import { ExternalLinkIcon } from "@chakra-ui/icons";
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
import { FaHandPointRight } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

const projectsData = [
	{
		name: "DELL.COM CLONE",
		image: "/assets/projects/dell-clone.png",
		deployLink: "Live Source Code",
		githubLink: "#",
		team: [true, 4],
		features: [
			"Browse and purchase laptops and accessories",
			"Product filtering and sorting",
			"Enhanced user experience",
			"Responsive design"
		],
		duration: 6,
		techStacks: ["JavaScript", "React.js", "Redux", "Node.js", "Express.js", "MongoDB", "ChakraUI"],
		description:
			"A comprehensive e-commerce platform allowing users to browse and purchase laptops and accessories. Built with a team in 6 days, ensuring responsiveness and functionality.",
	},
	{
		name: "CHANDA-KAUDI GAME",
		image: "/assets/projects/chanda-kaudi.png",
		deployLink: "Live Source Code",
		githubLink: "#",
		team: true,
		features: [
			"Real-time multiplayer gameplay",
			"Live chat functionality",
			"Traditional Indian board game",
			"Intuitive gameplay"
		],
		duration: 2,
		techStacks: ["TypeScript", "React.js", "Socket.io", "Node.js", "Express.js", "MongoDB", "ChakraUI"],
		description:
			"A digital adaptation of a traditional Indian board game developed during a 2-day hackathon. Features real-time multiplayer gameplay with live chat functionality using Socket.io.",
	},
	{
		name: "E-COMMERCE BACKEND",
		image: "/assets/projects/ecommerce-backend.png",
		deployLink: "Source Code",
		githubLink: "#",
		team: false,
		features: [
			"User authentication",
			"Product management",
			"Order processing",
			"Secure implementation"
		],
		duration: 10,
		techStacks: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
		description:
			"A robust backend system using MVC architecture to support user authentication and product management. Implemented secure features with JWT authentication and Bcrypt for password hashing.",
	}
];

const Projects = () => {
	return (
		<Center id="projects" py={20}>
			<VStack px={4} w={["100%", "100%", "80%", "100%", "1100px"]}>
				{/* heading */}
				<Heading letterSpacing={10}>💼 Projects 💼</Heading>
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
										<Flex
											flexDir={"column"}
											gap={4}
											pr={4}
										>
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
														<FaHandPointRight color="primary.main" />
														<Text>{el}</Text>
													</Flex>
												))}
											</Flex>
										</Flex>

										{/* tech stacks */}
										<Flex flexDir={"column"} gap={4}>
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
														<FaHandPointRight color="primary.main" />
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
														<FaHandPointRight color="primary.main" />
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
											target="_blank"
											w={"9.5rem"}
											py={2}
											mt={2}
											bg="primary.main"
											textAlign="center"
											borderRadius={"5px"}
											fontSize={"1rem"}
											fontWeight={700}
										>
											<Flex align={"center"} gap={1} justify="center">
												<ExternalLinkIcon />
												<Text>Deployed Link</Text>
											</Flex>
										</Link>
										<Link
											href={project.githubLink}
											target="_blank"
											w={"9.5rem"}
											textAlign="center"
											py={2}
											borderRadius={"5px"}
											bg="primary.main"
											mt={2}
											fontSize={"1rem"}
											fontWeight={700}
										>
											<Flex align={"center"} gap={1} justify="center">
												<ImGithub />
												<Text>GitHub Repo</Text>
											</Flex>
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
