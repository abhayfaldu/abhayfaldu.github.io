import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import styles from "../Styles/Home.module.css";

const Home = () => {
	return (
		<Center id="home" className={styles.home__container} position={"relative"}>
			<Box className={styles.home__textWrapper}>
				<Text
					className={styles.home__text}
					py={"10rem"}
					px={4}
					maxW={"46rem"}
					color={"white"}
					textAlign="center"
					fontSize={["1.5rem", "2rem", "3rem"]}
					fontWeight={"bold"}
					lineHeight={1.5}
					backdropFilter={"auto"}
					backdropBrightness={"20px"}
				>
					Uniting beautiful 👌🏻 design and powerful 💪🏻 technology to bring your
					web vision to life.
					<Flex color={"primary.main"} justify="center" mt={4} gap={4}>
						<Link
							href="https://twitter.com/abhayfaldu19"
							target="_blank"
							border={"1px solid white"}
							borderRadius={8}
							p={4}
						>
							<Flex align={"center"} gap={4}>
								<BsGithub fontSize={"1.5rem"} />
								<Text fontSize={"1rem"}>GitHub</Text>
							</Flex>
						</Link>
						<Link
							href="https://www.linkedin.com/in/abhay-faldu-493b92211/"
							target="_blank"
							border={"1px solid white"}
							borderRadius={8}
							p={4}
						>
							<Flex align={"center"} gap={4}>
								<BsLinkedin fontSize={"1.5rem"} />
								<Text fontSize={"1rem"}>LinkedIn</Text>
							</Flex>
						</Link>
					</Flex>
				</Text>
			</Box>
		</Center>
	);
};

export default Home;
