import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const routes = [
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/any",
		element: <></>,
		animation: "Any animation",
	},
];

export const router = createBrowserRouter(
	routes.map(({ path, element }) => ({ path, element })),
);
