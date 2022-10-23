import { Box, calc, Center, Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

const Home = () => {
	return (
		<>
			<Box bg="purple.900" w={"full"} h="100vh">
        <Navbar />
        
        <Flex
          w={["98%", "98%", "98%", "62rem"]}
          mx={"auto"}
          border="1px solid white"
					justify={"space-between"}
        >
          


{/* * work today only */}


        </Flex>
			</Box>
		</>
	);
};

export default Home;
