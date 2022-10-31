import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react'

const Projects = () => {
  return (
		<>
			<Box id="projects" bg="black" w={"100%"} h="100vh" py={4}>
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
							PROJECTS
						</Text>
					</Center>
				</Flex>
			</Box>
		</>
	);
}

export default Projects