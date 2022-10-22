import { Box, Container, Flex, HStack, Img, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
		<Box bg={"purple.900"} h={"60px"} w="full">
			<Flex
				w={["98%", "98%", "98%", "62rem"]}
				h="full"
				mx={"auto"}
				justify={"space-between"}
			>
				<HStack w="200px">
					<Text
						color={"white"}
						fontSize={"2rem"}
						fontWeight="600"
						fontFamily={"Lobster, cursive"}
						letterSpacing={"1px"}
					>
						Abhay Faldu
					</Text>
				</HStack>
				<HStack gap={4} color={"white"}>
					<Flex>hello</Flex>
					<Flex>hello</Flex>
					<Flex>hello</Flex>
					<Flex>hello</Flex>
					<Flex>hello</Flex>
					<Flex>hello</Flex>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Navbar