import { SimpleGrid } from "@chakra-ui/react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/GetInTouch";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import GithubStats from "./components/GithubStats";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<SimpleGrid className="App" >
			<Navbar />
			<Home />
			<About />
			<Experience />
			<Skills />
			<GithubStats />
			<Projects />
			<Contact />
			<Footer />
		</SimpleGrid>
	);
}

export default App;
