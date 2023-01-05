import { Box, Center, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
	const projectsData = [
		{
			name: "Cricket.com",
			image: "/assets/cricket_clone_ss.png",
			description:
				"lorem ipsum dolor sit amet, consect lorem ipsuml lorem lorem lfore lorem. Lorem ipsum dolor sit amet",
		},
		{
			name: "Project 2",
			image: "/assets/home-svg.png",
			description:
				"2 lorem ipsum dolor sit amet, consect lorem ipsuml lorem lorem lfore lorem. Lorem ipsum dolor sit amet",
		},
		{
			name: "Project 1",
			image: "/assets/home-svg.png",
			description:
				"lorem ipsum dolor sit amet, consect lorem ipsuml lorem lorem lfore lorem. Lorem ipsum dolor sit amet",
		},
		{
			name: "Project 1",
			image: "/assets/home-svg.png",
			description:
				"lorem ipsum dolor sit amet, consect lorem ipsuml lorem lorem lfore lorem. Lorem ipsum dolor sit amet",
		},
	];

	return (
		<Flex
			id="projects"
			pt="60px"
			bg={"#161B40"}
			align="center"
			justify={"center"}
			color="#fff"
			flexDir="column"
			w={["100%", "100%", "100%", "1100px"]}
			m="auto"
		>
			<Center
				w={"full"}
				h="50px"
				fontSize={"20px"}
				position="relative"
				top={0}
				left="0"
				fontWeight="bold"
				mb={4}
			>
				My Projects
			</Center>
			<Flex w={["95%", "95%", "95%", "1000px"]} overflowX={"scroll"}>
				<Flex gap={"15px"}>
					{projectsData.map(el => (
						<Box
							borderRadius="8px"
							bg={"#292e5d"}
							p={4}
							w="300px"
							h="500px"
							mb="10px"
						>
							<Img src={el.image} w="100%" m="auto" />
							<Flex flexDir={"column"}>
								<Text fontSize={"18px"} fontWeight="500">
									{el.name}
								</Text>
								<Text fontSize={"14px"}>{el.description}</Text>
								<Text fontSize={"14px"}>{el.description}</Text>
							</Flex>
						</Box>
					))}
				</Flex>
			</Flex>
		</Flex>
	);
};

export default Projects;
