import React from "react";
import NavbarMenu from "./components/ui/navbar-menu";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GithubStats from "./components/GithubStats";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<NavbarMenu />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<GithubStats />
			<GetInTouch />
			<Footer />
		</>
	);
}

export default App; 
