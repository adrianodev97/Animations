import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Teste from "./animations/teste";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/teste",
		element: <Teste />,
	},
]);
