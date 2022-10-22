import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      
      {
        // todo remove the top line for responsive
      }
      {/* <Box
        h={"3px"}
        w={"100%"}
				bg={["green", "red", "blue", "yellow"]}
      ></Box> */}
      
			<Navbar />
		</div>
	);
}

export default App;
