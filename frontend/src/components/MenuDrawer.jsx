import { HamburgerIcon } from "@chakra-ui/icons";
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
	useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import styles from "../Styles/MenuDrawer.module.css";

const MenuDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	// const linkStyle = {
	// 	padding: "10px 0",
	// 	borderBottom: "1px solid gray",
	// 	_hover: {
	// 		backgroundColor: 'lightblue',
	// 		textDecoration: "none"
	// 	}
	// };

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
					</DrawerBody>
					<DrawerFooter borderTop={"1px solid lightgray"}>
						<Flex gap={8} w={"full"} justify="center" fontSize={"1.5rem"}>
							<Link href="https://twitter.com/abhayfaldu19">
								<BsTwitter color="#1da1f2" />
							</Link>
							<Link href="https://www.linkedin.com/in/abhay-faldu-493b92211/">
								<BsLinkedin color="#0e76a8" />
							</Link>
							<Link href="https://github.com/abhayfaldu">
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
