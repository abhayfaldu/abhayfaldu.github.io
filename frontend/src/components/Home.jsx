import { Box, Button, Center, Flex, Img, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Home = () => {
	return (
		<Flex
			id="home"
			pt='60px'
			bg={"#161B40"}
			align="center"
			justify={"center"}
			color="#fff"
			h={"100vh"}
			transform={{md: "margin-top: -30px"}}
		>
			<Flex
				w={["95%", "95%", "95%", "1000px"]}
				flexDir={["column", "column", "row", "row"]}
			>
				<Flex
					w={["full", "full", "50%"]}
					fontWeight="bold"
					flexDir={"column"}
					justify="center"
					ml={["40px", "40px", 0]}
				>
					<Text textAlign={"left"} fontSize={["18px", "22px", "30px"]}>
						Hello world!
					</Text>
					<Text textAlign={"left"} fontSize={["20px", "24px", "32px"]}>
						this is Abhay Faldu
					</Text>
					<Text
						textAlign={"left"}
						color={"#43BEE5"}
						fontSize={["22px", "24px", "28px", "38px"]}
					>
						Full Stack Web Developer
					</Text>
					<Button
						bg={"#43BEE5"}
						size="lg"
						variant={"solid"}
						color="#000"
						w={"100px"}
						mt={"20px"}
					>
						Resume
					</Button>
				</Flex>

				{/* image */}
				<Box w={["full", "80%", "50%"]} p={["40px", "40px", 0]}>
					<Img src="/home-svg.png" borderRadius={"50%"}  />
				</Box>
			</Flex>
		</Flex>
	);
};

export default Home;
