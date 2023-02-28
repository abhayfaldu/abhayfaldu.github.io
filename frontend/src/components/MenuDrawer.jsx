import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Link,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "../Styles/MenuDrawer.module.css";

const MenuDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<HamburgerIcon
				w={6}
				h={6}
				onClick={onOpen}
				display={["block", "block", "block", "none"]}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				size={"xs"}
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Abhay Faldu</DrawerHeader>
					<DrawerBody display={"flex"} flexDir={"column"}>
						<Link href="#home" className={styles.link} onClick={onClose}>
							Home
						</Link>
						<Link href="#about" className={styles.link} onClick={onClose}>
							About Me
						</Link>
						<Link href="#skills" className={styles.link} onClick={onClose}>
							Skills
						</Link>
						<Link href="#githubStats" className={styles.link} onClick={onClose}>
							Github Stats
						</Link>
						<Link href="#projects" className={styles.link} onClick={onClose}>
							Projects
						</Link>
						<Link href="#getInTouch" className={styles.link} onClick={onClose}>
							Get In Touch
						</Link>
						<Link
							href={"./assets/fw19_095-Abhay-Faldu-Resume.pdf"}
							download
							onClick={() =>
								window.open(
									"./assets/fw19_095-Abhay-Faldu-Resume.pdf",
									"_blank"
								)
							}
							// w={"150px"}
							textAlign="center"
							display={["none", "block"]}
							py="0.5rem"
							mt="0.5rem"
							borderRadius="5px"
							bgColor="primary.main"
							fontSize={"1rem"}
							fontWeight={700}
						>
							<Flex align={"center"} gap={1} justify="center">
								<DownloadIcon />
								<Text>Resume</Text>
							</Flex>
						</Link>
					</DrawerBody>
					<DrawerFooter borderTop={"1px solid lightgray"}>
						<Flex gap={8} w={"full"} justify="center" fontSize={"1.5rem"}>
							<Link href="https://twitter.com/abhayfaldu19" target={"_blank"}>
								<BsTwitter color="#1da1f2" />
							</Link>
							<Link
								href="https://www.linkedin.com/in/abhay-faldu-493b92211/"
								target={"_blank"}
							>
								<BsLinkedin color="#0e76a8" />
							</Link>
							<Link href="https://github.com/abhayfaldu" target={"_blank"}>
								<BsGithub color="#171515" />
							</Link>
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MenuDrawer;
