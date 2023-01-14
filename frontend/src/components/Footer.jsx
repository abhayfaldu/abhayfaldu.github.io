import { Center, Flex, keyframes, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
	return (
		<Center flexDir={"column"} py={2} bgColor={"#43BEE5"}>
			{/* <Flex w={["100%", "100%", "100%", "1100px"]} px={"1rem"} > */}
				<Text textAlign={'center'} fontSize={["0.5rem","0.6rem",".8rem"]}>
					Designed and Developed by Abhay Faldu, @ 2023 All rights reserved.
				</Text>
			{/* </Flex> */}
		</Center>
	);
};

export default Footer;
