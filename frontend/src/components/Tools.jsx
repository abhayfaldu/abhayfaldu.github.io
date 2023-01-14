import { Center, Heading, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const tools = [
	{
		img: "/assets/tools/vs-code.svg",
		title: "VS Code",
	},
	{
		img: "/assets/tools/git.svg",
		title: "Git",
	},
	{
		img: "/assets/tools/github.svg",
		title: "GitHub",
	},
	{
		img: "/assets/tools/postman.png",
		title: "Postman",
	},
];

const Tools = () => {
	return (
		<Center flexDir={"column"} bgColor="#222" pb={20} pt={10}>
			<Heading letterSpacing={10} textAlign="center" color={"#fff"}>
				🛠️ Tools 🛠️
			</Heading>
			<SimpleGrid
				w={["80%", "90%", "100%", "85%", "800px"]}
				px={4}
				py={[8, 0]}
				columns={[2, 3, 4]}
				gap={[0, 3, 4]}
				mt={[5, 5, 10]}
				fontSize={["1rem", "1rem", "1.2rem"]}
				textAlign="center"
				bgColor={["#fff", "transparent"]}
				borderRadius={["0.5rem"]}
				mx="auto"
			>
				{tools.length > 0 &&
					tools.map((skill, index) => (
						<Center
							boxSizing="border-box"
							flexDir={"column"}
							bg="#fff"
							p={[3, 3, 4]}
							key={index}
							borderRadius={[0, "0.5rem"]}
							boxShadow={[0, "md"]}
						>
							<Img
								src={skill.img}
								mb={[3, 2, 4]}
								alt="skill-icon"
								width={["70px", "100px", "100px"]}
							/>
							<Text>{skill.title}</Text>
						</Center>
					))}
			</SimpleGrid>
		</Center>
	);
};

export default Tools;
