import { DownloadIcon } from "@chakra-ui/icons";
import { Center, Flex, Link, Text } from "@chakra-ui/react";
import styles from "../Styles/Navbar.module.css";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
	return (
		<>
			<Center
				h={["2.5rem", "3rem", "3.5rem", "3.5rem"]}
				zIndex={"100"}
				position={"sticky"}
				bgColor={"primary.main"}
				top={0}
				left={0}
				boxShadow={"lg"}
			>
				<Flex
					w={["100%", "100%", "100%", "100%", "1100px"]}
					px="1rem"
					alignItems="center"
					justify={"space-between"}
				>
					{/* logo */}
					<Text
						fontFamily={"Rancho, Sans-serif"}
						fontSize={["1.3rem", "1.8rem", "2.3rem"]}
						fontWeight={"bold"}
					>
						Abhay Faldu
					</Text>

					{/* links */}
					<Flex
						gap={5}
						display={["none", "none", "none", "flex"]}
						justify={"space-around"}
						align={"center"}
					>
						<Link href="#home" className={styles.nav__link}>
							Home
						</Link>
						<Link href="#about" className={styles.nav__link}>
							About Me
						</Link>
						<Link href="#skills" className={styles.nav__link}>
							Skills & Tools
						</Link>
						<Link href="#githubStats" className={styles.nav__link}>
							Github Stats
						</Link>
						<Link href="#projects" className={styles.nav__link}>
							Projects
						</Link>
						<Link href="#getInTouch" className={styles.nav__link}>
							Get in touch
						</Link>

						<Link
							href={"./assets/Abhay-Faldu-Resume.pdf"}
							download
							onClick={() =>
								window.open("./assets/Abhay-Faldu-Resume.pdf", "_blank")
							}
							w={"150px"}
							textAlign="center"
							display={["none", "block"]}
							py="0.5rem"
							borderRadius="5px"
							bg="light.main"
							color="dark"
							fontSize={"1rem"}
							fontWeight={700}
						>
							<Flex align={"center"} gap={1} justify="center">
								<DownloadIcon />
								<Text>Resume</Text>
							</Flex>
						</Link>
					</Flex>

					{/* menu drawer */}
					<MenuDrawer />
				</Flex>
			</Center>
		</>
	);
};

export default Navbar;
