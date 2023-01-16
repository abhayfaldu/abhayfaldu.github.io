import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const theme = extendTheme({
	colors: {
		light: {
			main: "#fff",
			500: "#fff5",
			200: "#eee8",
		},
		dark: {
			main: "black",
			200: "#222",
		},
		primary: {
			main: "#43BEE5",
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
