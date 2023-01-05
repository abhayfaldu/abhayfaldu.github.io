import {
	Box,
	Center,
	Flex,
	Img,
	Link,
	SimpleGrid,
	Text,
} from "@chakra-ui/react";

const Home = () => {
	return (
		<Center id="home" color="#fff">
			<SimpleGrid
				w={["100%", "100%", "100%", "1100px"]}
				gridTemplateColumns={["1", "1", "55fr 45fr"]}
				px={"1rem"}
				py={"5rem"}
			>
				<Flex
					fontWeight="bold"
					flexDir={"column"}
					justify="center"
					textAlign={["center", "center", "left"]}
				>
					<Text fontSize={["1rem", "1.3rem", "1.1rem", "1.4rem"]} mb={6}>
						Namaste &nbsp; 🙏🏻
					</Text>
					<Box lineHeight={1.3} fontSize={["1.5rem", "2rem", "2rem", "2.5rem"]}>
						<Text>I'm Abhay Faldu</Text>
						<Text color={"#43BEE5"}>A Full Stack Web Developer</Text>
					</Box>
					<Link
						href=""
						download
						w={"150px"}
						my={"2rem"}
						mx={["auto", "auto", "0", "0"]}
						py="10px"
						align="center"
						borderRadius="5px"
						bg="#43BEE5"
						color="#000"
						fontSize={["0.8rem", "1rem", "1rem", "1.2rem"]}
						fontWeight={"600"}
					>
						Resume
					</Link>
				</Flex>

				{/* image */}
				<Box mt={["0", "-24rem", "0"]}>
					<Img
						src="/assets/Website-Creator-amico.svg"
						opacity={["1", "0.1", "1"]}
					/>
				</Box>
			</SimpleGrid>
		</Center>
	);
};

export default Home;
