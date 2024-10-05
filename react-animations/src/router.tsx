import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const routes = [
	{
		path: "/",
		element: <App />,
		title: "Home",
	},
];

export const router = createBrowserRouter(
	routes.map(({ path, element }) => ({ path, element })),
);
