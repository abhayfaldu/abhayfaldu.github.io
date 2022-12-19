import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
	return (
		<>
			<Flex
				position={"sticky"}
				top={0}
				left={0}
				zIndex={"100"}
				bg={"#161B40"}
				color="#fff"
				h={"60px"}
				alignItems="center"
				justify={"center"}
			>
				<Flex
					justify={"space-between"}
					p={0}
					alignItems="center"
					w={["95%", "95%", "95%", "1000px"]}
				>
					<Text fontWeight={"bold"} fontFamily="sans-serif" fontSize={"25px"}>
						Abhay
					</Text>
					<Flex gap={3} align="center">
						<Flex display={["none", "none", "block", "block"]} w={"400px"}>
							<Flex w={"full"} justify={"space-around"}>
								<Link href="#home">Home</Link>
								<Link href="#about">About Me</Link>
								<Link href="#skills">Skills</Link>
								<Link href="#projects">Projects</Link>
								<Link href="#contact">Contact</Link>
							</Flex>
						</Flex>
						<Link
							href="#resume"
							textAlign={"center"}
							py="7px"
							borderRadius="5px"
							bg="#43BEE5"
							color="#000"
							fontSize={"16px"}
							fontWeight={"600"}
							w={"100px"}
						>
							Resume
						</Link>
					</Flex>
				</Flex>
			</Flex>
			<Flex w={"full"} display={["block", "block", "none", "none"]}>
				<Flex
					py="10px"
					borderTop={"1px solid #fff"}
					borderBottom={"1px solid #fff"}
					color={"#fff"}
					w="100%"
					justify={"space-around"}
					fontSize={["14px", "16px"]}
				>
					<Link href="#home">Home</Link>
					<Link href="#about">About Me</Link>
					<Link href="#skills">Skills</Link>
					<Link href="#projects">Projects</Link>
					<Link href="#contact">Contact</Link>
				</Flex>
			</Flex>
		</>
	);
};

export default Navbar;
