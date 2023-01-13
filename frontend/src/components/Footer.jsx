import { Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Center flexDir={"column"} py={20}>
			<Flex w={["100%", "100%", "100%", "1100px"]} px={"1rem"}>
				<Text m="auto" fontSize={"1.5rem"}>
					Designed and Developed by Abhay Faldu, @ 2023 All rights reserved.
				</Text>
			</Flex>
		</Center>
	);
};

export default Footer;
