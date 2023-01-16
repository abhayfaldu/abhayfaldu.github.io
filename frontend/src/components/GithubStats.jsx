import { Center, Flex, Heading, Img, Link } from "@chakra-ui/react";
import React from "react";
import MyGitHubCalendar from "./MyGitHubCalendar";

const GithubStats = () => {
	return (
		<Center id="githubStats" py={20} flexDir="column" bgColor={"light.200"}>
			<Heading mb={10} textAlign="center" letterSpacing={[2, 2, 10]}>
				GitHub Calender & Statistics
			</Heading>
			<Center
				gap={16}
				flexDir={"column"}
				px={4}
				w={["90%", "90%", "90%", "90%", "1100px"]}
			>
				<Link href="https://github.com/abhayfaldu" target="_blank">
					<MyGitHubCalendar />
				</Link>
				<Flex
					gap={8}
					flexDir={["column", "column", "row"]}
					w={["100%", "75%", "auto"]}
					align="center"
				>
					<Link href="https://github.com/abhayfaldu" target="_blank">
						<Img src="https://github-readme-streak-stats.herokuapp.com?user=abhayfaldu&theme=default&border_radius=8&color=#43BEE5" />
					</Link>
					<Link href="https://github.com/abhayfaldu" target="_blank">
						<Img src="https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=abhayfaldu&show_icons=true&theme=light&border_radius=8" />
					</Link>
				</Flex>
			</Center>
		</Center>
	);
};

export default GithubStats;
