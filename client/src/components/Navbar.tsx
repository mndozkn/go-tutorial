import {
	Box,
	Flex,
	Button,
	useColorModeValue,
	useColorMode,
	Text,
	Container,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container w={"900px"} alignItems="center">
			<Box
				bg={useColorModeValue("gray.400", "gray.700")}
				px={4}
				my={4}
				borderRadius={"5"}
				alignItems="center">
				<Flex h={16} alignItems={"center"} justifyContent={"center"}>
					<Flex alignItems={"center"} gap={3}>
						<Text fontSize={"lg"} fontWeight={500}>
							Daily Tasks
						</Text>
						<Button onClick={toggleColorMode}>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}
