import { HamburgerIcon } from "@chakra-ui/icons";
import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Link,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const MenuDrawer = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	const linkStyle = {
		margin: "10px",
		textAlign: "center",
	};

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
				size={"full"}
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton color={"white"} />
					<DrawerHeader />
					<DrawerBody display={"flex"} flexDir={"column"}>
						<Link href="#home" style={linkStyle} onClick={onClose}>
							Home
						</Link>
						<Link href="#about" style={linkStyle} onClick={onClose}>
							About Me
						</Link>
						<Link href="#skills" style={linkStyle} onClick={onClose}>
							Skills
						</Link>
						<Link href="#githubStats" style={linkStyle} onClick={onClose}>
							Github Stats
						</Link>
						<Link href="#projects" style={linkStyle} onClick={onClose}>
							Projects
						</Link>
						<Link href="#getInTouch" style={linkStyle} onClick={onClose}>
							Get In Touch
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MenuDrawer;
