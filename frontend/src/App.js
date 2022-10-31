import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
