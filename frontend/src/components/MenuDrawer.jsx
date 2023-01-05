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
				w={5}
				h={5}
				onClick={onOpen}
				display={["block", "block", "none", "none"]}
				_hover={{ border: "1px solid white" }}
			/>
			<Drawer
				isOpen={isOpen}
				placement="right"
				size={"full"}
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent bg={"#161B40"} color={"#fff"}>
					<DrawerCloseButton
						color={"white"}
						_hover={{ border: "1px solid white" }}
					/>
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
						<Link href="#projects" style={linkStyle} onClick={onClose}>
							Projects
						</Link>
						<Link href="#contact" style={linkStyle} onClick={onClose}>
							Contact
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default MenuDrawer;
