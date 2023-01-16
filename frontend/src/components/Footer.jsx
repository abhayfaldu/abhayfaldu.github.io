import { Center, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Center flexDir={"column"} py={2} bgColor={"primary.main"}>
			<Text textAlign={"center"} fontSize={["0.5rem", "0.6rem", ".8rem"]}>
				Designed and Developed by Abhay Faldu, @ 2023 All rights reserved.
			</Text>
		</Center>
	);
};

export default Footer;
