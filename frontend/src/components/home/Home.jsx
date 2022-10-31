import { Box, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
	return (
		<>
			<Box id="home" bg="black" w={"100%"} position={"absolute"} py={4} className='main-section'>
				<Flex
					w={["98%", "98%", "98%", "62rem"]}
					h="100%"
					mx={"auto"}
					border="1px solid white"
					justify={"space-between"}
					color="secondary"
				>
					<Center w="100%" h="100%">
						<Text fontSize={"30px"} fontWeight="bold">
							HOME
						</Text>
					</Center>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
