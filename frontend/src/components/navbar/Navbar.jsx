import { Box, Button, Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsPerson, BsTelephone, BsTools } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Navbar.module.css";

const Navbar = () => {
	return (
		<>
			{/*
				// todo : REMOVE THE TOP LINE FOR RESPONSIVE
				<Box h={"3px"} w={"100%"} bg={["green", "red", "blue", "yellow"]}></Box> 
			*/}

			<Box bg="#111" h={"60px"} w="full" zIndex={100} className={styles.navbar}>
				{/* big screen Navbar */}
				<Flex
					w={["98%", "98%", "98%", "62rem"]}
					h="full"
					mx={"auto"}
					justify={"space-between"}
				>

				  {/* logo */}
					<HStack w="200px">
						<Text
							color={"secondary"}
							fontSize={"2rem"}
							fontWeight="600"
							fontFamily={"Lobster, cursive"}
							letterSpacing={"1px"}
							textDecoration="underline"
						>
							Abhay
						</Text>
					</HStack>

					<HStack
						h="100%"
						gap={4}
						color={"white"}
						display={["none", "none", "flex", "flex"]}
					>
						<Link href="#home" _hover={{ textDecoration: "none" }}>
							<Flex className={styles.navItem}>
								<FaHome />
								<Text>Home</Text>
							</Flex>
						</Link>
						<Link href="#about" _hover={{ textDecoration: "none" }}>
							<Flex className={styles.navItem} href="#about">
								<BsPerson />
								<Text>About</Text>
							</Flex>
						</Link>
						<Link href="#skills" _hover={{ textDecoration: "none" }}>
							<Flex className={styles.navItem}>
								<BsTools />
								<Text>skills</Text>
							</Flex>
						</Link>
						<Link href="#projects" _hover={{ textDecoration: "none" }}>
							<Flex className={styles.navItem}>
								<CgWebsite />
								<Text>Projects</Text>
							</Flex>
						</Link>
						<Link href="#contact" _hover={{ textDecoration: "none" }}>
							<Flex className={styles.navItem}>
								<BsTelephone />
								<Text>Contact</Text>
							</Flex>
						</Link>
						<Link
							href={
								"https://drive.google.com/file/d/11PKfa_r-konOPIyXN0rhzgkz6IUnWOn7/view?usp=sharing"
							}
							as={Button}
							bg="transparent"
							border="1px solid white"
							transition={"0.3s"}
							_hover={{
								backgroundColor: "secondary",
								color: "black",
								border: "1px solid #5DBCE7",
								transform: "scale(1.1)",
							}}
							isExternal
						>
							<Flex h="100%" alignItems={"center"} gap={1}>
								<RiPagesLine />
								<Text>Resume</Text>
							</Flex>
						</Link>
					</HStack>

					{/* Hamburger menu */}
					<HamburgerMenu />
				</Flex>
			</Box>
		</>
	);
};

export default Navbar;
