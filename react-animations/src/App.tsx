import { routes } from "./router";
import "./app.scss";

const App = () => {
	return (
		<main>
			<h1>React Animations</h1>
			<section className="container">
				{routes.map(({ path, title }) => (
					<div className="card" key={path}>
						<a href={path}>{title}</a>
					</div>
				))}
			</section>
		</main>
	);
};

export default App;
