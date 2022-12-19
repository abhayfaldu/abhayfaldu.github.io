import { Box, Center, Flex, Grid, Img, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Projects = () => {
	const projectsData = [
		{
			name: "Project 1",
			image: "/home-svg.png",
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
			h={"100vh"}
			flexDir="column"
		>
			<Center w={"full"} h="50px" fontSize={"20px"} fontWeight="bold">
				My Projects
			</Center>
			<SimpleGrid
				border={"1px solid green"}
				columns={[1, 1, 2]}
				w={["95%", "95%", "95%", "1000px"]}
				gap={"15px"}
			>
				<Flex border={"1px solid red"} borderRadius="10px">
				</Flex>
				<Box border={"1px solid red"} borderRadius="10px">
					d
				</Box>
				<Box border={"1px solid red"} borderRadius="10px">
					d
				</Box>
				<Box border={"1px solid red"} borderRadius="10px">
					d
				</Box>
			</SimpleGrid>
		</Flex>
	);
};

export default Projects;
