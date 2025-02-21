import "./App.scss";
import { fruitsDb } from "./data/fruitsDb";
import FruitCard from "./widgets/FruitCard/FruitCard";

function App() {
	return (
		<>
			<h1>
				The <span>fruit</span> zone
			</h1>
			<div className="FruitContainer">
				{fruitsDb.map((fruit, index) => (
					<FruitCard key={index} fruit={fruit} />
				))}
			</div>
		</>
	);
}

export default App;
