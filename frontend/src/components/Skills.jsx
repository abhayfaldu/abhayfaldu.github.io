import {
	Center,
	Heading,
	Img,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";
import React from "react";
import Tools from "./Tools";

const skills = [
	{
		img: "/assets/skills/html-5.svg",
		title: "HTML",
	},
	{
		img: "/assets/skills/css3.svg",
		title: "CSS",
	},
	{
		img: "/assets/skills/javascript.svg",
		title: "JavaScript",
	},
	{
		img: "/assets/skills/typescript.png",
		title: "TypeScript",
	},
	{
		img: "/assets/skills/mongodb.svg",
		title: "MongoDB",
	},
	{
		img: "/assets/skills/express-js.svg",
		title: "ExpressJS",
	},
	{
		img: "/assets/skills/react.svg",
		title: "ReactJS",
	},
	{
		img: "/assets/skills/node-js.svg",
		title: "NodeJS",
	},
	{
		img: "/assets/skills/redux.svg",
		title: "Redux",
	},
	{
		img: "/assets/skills/chakra-ui.svg",
		title: "Chakra UI",
	},
	{
		img: "/assets/skills/http.png",
		title: "HTTP & REST API",
	},
];

const Skills = () => {
	return (
		<Center id="skills" py={20} flexDir="column" bg={"#43bee5"}>
			<Heading letterSpacing={10}>🚀 Skills 🚀</Heading>
			<SimpleGrid
				mx={"auto"}
				w={["80%", "90%", "100%", "85%", "1000px"]}
				px={4}
				py={[8, 0]}
				columns={[2, 3, 4, 5]}
				gap={[0, 3, 4]}
				mt={[5, 5, 10]}
				fontSize={["1rem", "1rem", "1.2rem"]}
				textAlign="center"
				bgColor={["#fff", "transparent"]}
				borderRadius={["0.5rem"]}
			>
				{skills.length > 0 &&
					skills.map((skill, index) => (
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

			<Tools />
		</Center>
	);
};

export default Skills;
