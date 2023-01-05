import { Center, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import MenuDrawer from "./MenuDrawer";

const Navbar = () => {
	return (
		<>
			<Center
				h={"4rem"}
				bg={"#161B40e0"}
				color="#fff"
				zIndex={"100"}
				position={"sticky"}
				top={0}
				left={0}
				backdropFilter="auto"
				backdropBlur="62px"
			>
				<Flex
					w={["100%", "100%", "100%", "1100px"]}
					px="1rem"
					alignItems="center"
					justify={"space-between"}
				>
					{/* logo */}
					<Text
						fontFamily="sans-serif"
						fontSize={["1.3rem", "1.7rem", "2rem"]}
						fontWeight={"bold"}
					>
						Abhay
					</Text>

					{/* links */}
					<Flex
						gap={5}
						display={["none", "none", "flex", "flex"]}
						justify={"space-around"}
						align={"center"}
					>
						<Link href="#home">Home</Link>
						<Link href="#about">About Me</Link>
						<Link href="#skills">Skills</Link>
						<Link href="#projects">Projects</Link>
						<Link href="#contact">Contact</Link>
						<Link
							href="./assets/Abhay_Faldu_Resume.pdf"
							download
							w={"100px"}
							textAlign="center"
							display={["none", "none", "block", "block"]}
							py="0.5rem"
							borderRadius="5px"
							bg="#43BEE5"
							color="#000"
							fontSize={"1rem"}
							fontWeight={"600"}
						>
							Resume
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
