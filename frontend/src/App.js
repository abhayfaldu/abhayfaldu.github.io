import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="App" style={{ backgroundColor: "#161B40" }}>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;