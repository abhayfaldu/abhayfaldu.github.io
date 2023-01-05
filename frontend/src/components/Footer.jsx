import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Center id="home" color="#fff">
			<Flex w={["100%", "100%", "100%", "1100px"]} px={"1rem"} py={"5rem"}>
				<Text m="auto" fontSize={"1.2rem"}>
					Copyright © | Abhay Faldu | 2023
				</Text>
			</Flex>
		</Center>
	);
};

export default Footer;
