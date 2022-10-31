import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const Contact = () => {
  return (
		<>
			<Box id="contact" bg="black" w={"100%"} h="100vh" position={""} py={4}>
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
							CONTACT
						</Text>
					</Center>
				</Flex>
			</Box>
		</>
	);
}

export default Contact