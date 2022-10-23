import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BsPerson, BsTelephone, BsTools } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Navbar.module.css"

const Navbar = () => {
	return (
		<>
			{/* {
				// todo remove the top line for responsive
			}
      <Box h={"3px"} w={"100%"} bg={["green", "red", "blue", "yellow"]}></Box> */}

			<Box bg='transparent' h={"60px"} w="full" position={'sticky'} zIndex={100}>
				{/* big screen Navbar */}
				<Flex
					w={["98%", "98%", "98%", "62rem"]}
					h="full"
					mx={"auto"}
					justify={"space-between"}
				>
					<HStack w="200px">
						<Text
							color={"white"}
							fontSize={"2rem"}
							fontWeight="600"
							fontFamily={"Lobster, cursive"}
							letterSpacing={"1px"}
						>
							Abhay
						</Text>
					</HStack>
					<HStack
						h="100%"
						gap={4}
						color={"white"}
						// border={"1px solid red"}
						display={["none", "none", "flex", "flex"]}
					>
						<NavLink
							to={"/"}
							end
							className={({ isActive }) =>
								isActive ? styles.activeStyle : styles.defaultStyle
							}
						>
							<Flex
								className={styles.navItem}
								alignItems={"center"}
								gap={1}
								h="100%"
								// border={"1px solid red"}
							>
								<FaHome />
								<Text>Home</Text>
							</Flex>
						</NavLink>
						<NavLink
							to={"/about"}
							className={({ isActive }) =>
								isActive ? styles.activeStyle : styles.defaultStyle
							}
						>
							<Flex
								className={styles.navItem}
								h="100%"
								alignItems={"center"}
								gap={1}
							>
								<BsPerson />
								<Text>About</Text>
							</Flex>
						</NavLink>
						<NavLink
							to={"/skills"}
							className={({ isActive }) =>
								isActive ? styles.activeStyle : styles.defaultStyle
							}
						>
							<Flex
								className={styles.navItem}
								h="100%"
								alignItems={"center"}
								gap={1}
							>
								<BsTools />
								<Text>skills</Text>
							</Flex>
						</NavLink>
						<NavLink
							to={"/projects"}
							className={({ isActive }) =>
								isActive ? styles.activeStyle : styles.defaultStyle
							}
						>
							<Flex
								className={styles.navItem}
								h="100%"
								alignItems={"center"}
								gap={1}
							>
								<CgWebsite />
								<Text>Projects</Text>
							</Flex>
						</NavLink>
						<NavLink
							to={"/contact"}
							className={({ isActive }) =>
								isActive ? styles.activeStyle : styles.defaultStyle
							}
						>
							<Flex
								className={styles.navItem}
								h="100%"
								alignItems={"center"}
								gap={1}
							>
								<BsTelephone />
								<Text>Contact</Text>
							</Flex>
						</NavLink>
						<Link
							href={
								"https://drive.google.com/file/d/11PKfa_r-konOPIyXN0rhzgkz6IUnWOn7/view?usp=sharing"
							}
							isExternal
							className={`${styles.navItem} ${styles.resume}`}
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
