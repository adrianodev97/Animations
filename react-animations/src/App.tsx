import { routes } from "./router";
import "./app.scss";

const App = () => {
	return (
		<main>
			<h1>React Animations</h1>
			<section className="container">
				{routes.map(
					({ path, animation }) =>
						animation && (
							<div className="card" key={path}>
								<a href={path}>{animation}</a>
							</div>
						),
				)}
			</section>
		</main>
	);
};

export default App;
