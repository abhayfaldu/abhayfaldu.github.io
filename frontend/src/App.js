import { Box } from "@chakra-ui/react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/GetInTouch";
import Footer from "./Components/Footer";
import GithubStats from "./Components/GithubStats";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
	return (
		<Box className="App" bg={"Purple.900"}>
			{/* <Box bg={["red", "green", "blue", 'aqua']}>g</Box> */}
			<Navbar />
			<Home />
			<About />
			<Skills />
			<GithubStats />
			<Projects />
			<Contact />
			<Footer />
		</Box>
	);
}

export default App;
