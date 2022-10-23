import React from 'react'
import { HStack, Menu, MenuButton, MenuList, MenuItem, Flex, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom'
import { BsPerson, BsTelephone, BsTools } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import { RiPagesLine } from "react-icons/ri";

const HamburgerMenu = () => {
  return (
		<HStack display={["flex", "flex", "none", "none"]}>
			<Menu autoSelect={false}>
				<MenuButton>
					<HamburgerIcon color={"white"} w={6} h={6} />
				</MenuButton>
				<MenuList bg="purple.900" color={"white"} border="none">
					<MenuItem _hover={{ color: "black" }}>
						<NavLink to={"/"}>
							<Flex alignItems={"center"} gap={1}>
								<FaHome />
								<Text>Home</Text>
							</Flex>
						</NavLink>
					</MenuItem>
					<MenuItem _hover={{ color: "black" }}>
						<NavLink to={"/"}>
							<Flex alignItems={"center"} gap={1}>
								<BsPerson />
								<Text>About</Text>
							</Flex>
						</NavLink>
					</MenuItem>
					<MenuItem _hover={{ color: "black" }}>
						<NavLink to={"/"}>
							<Flex alignItems={"center"} gap={1}>
								<BsTools />
								<Text>skills</Text>
							</Flex>
						</NavLink>
					</MenuItem>
					<MenuItem _hover={{ color: "black" }}>
						<NavLink to={"/"}>
							<Flex alignItems={"center"} gap={1}>
								<CgWebsite />
								<Text>Projects</Text>
							</Flex>
						</NavLink>
					</MenuItem>
					<MenuItem _hover={{ color: "black" }}>
						<NavLink to={"/"}>
							<Flex alignItems={"center"} gap={1}>
								<BsTelephone />
								<Text>Contact</Text>
							</Flex>
						</NavLink>
					</MenuItem>
					<MenuItem _hover={{ color: "black" }}>
						<NavLink to={"/"}>
							<Flex alignItems={"center"} gap={1}>
								<RiPagesLine />
								<Text>Resume</Text>
							</Flex>
						</NavLink>
					</MenuItem>
				</MenuList>
			</Menu>
		</HStack>
	);
}

export default HamburgerMenu