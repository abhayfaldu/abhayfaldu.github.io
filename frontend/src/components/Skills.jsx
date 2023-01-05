import { Box, Center, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const skills = [
	{
		img: "/assets/techStacks/icons8-react.svg",
		title: "ReactJS",
	},
	{
		img: "/assets/techStacks/icons8-javascript.svg",
		title: "JavaScript",
	},
	{
		img: "/assets/techStacks/icons8-express-js.svg",
		title: "ExpressJS",
	},
	{
		img: "/assets/techStacks/icons8-node-js.svg",
		title: "NodeJS",
	},
	{
		img: "/assets/techStacks/mongodb.svg",
		title: "MongoDB",
	},
	{
		img: "/assets/techStacks/icons8-chakra-ui.svg",
		title: "Chakra UI",
	},
	{
		img: "/assets/techStacks/icons8-html-5.svg",
		title: "HTML",
	},
	{
		img: "/assets/techStacks/icons8-css3.svg",
		title: "CSS",
	},
	{
		img: "/assets/techStacks/rest-api.svg",
		title: "HTTP & REST API",
	},
];

const Skills = () => {
	return (
		<Center
			id="skills"
			bg={"#161B40"}
			color="#fff"
			py={"100px"}
			flexDir="column"
		>
			<Center
				h="50px"
				fontSize={["0.8rem", "1.2rem", "1.5rem"]}
				position="relative"
				top={0}
				left="0"
				fontWeight="bold"
				mb={4}
				>
				Skills
			</Center>
			<SimpleGrid
				w={["100%", "100%", "100%", "1100px"]}
				px={"1rem"}
				columns={[2, 3, 4]}
				gap={["0.7rem", "1.2rem", "1.5rem"]}
				py={[0, 5, 10]}
				fontSize={["1rem", "1rem", "1.5rem"]}
				textAlign="center"
			>
				{skills.length > 0 &&
					skills.map((skill, index) => (
						<Center
							boxSizing="border-box"
							flexDir={"column"}
							p={["", "0.7rem", "1rem"]}
							key={index}
							borderRadius={"0.5rem"}
							bg="#292e5d"
							boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
						>
							<Img
								mb={[0,2,4]}
								src={skill.img}
								alt="skill-icon"
								width={["80px", "100px", "100px"]}
							/>
							<Text>{skill.title}</Text>
						</Center>
					))}
			</SimpleGrid>
		</Center>
	);
};

export default Skills;
