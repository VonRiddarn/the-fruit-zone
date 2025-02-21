import "./App.scss";
import Button from "./components/Button/Button";
import { fruitsDb } from "./data/fruitsDb";
import FruitCard from "./widgets/FruitCard/FruitCard";

function App() {
	return (
		<>
			<h1>
				The <span>fruit</span> zone
			</h1>
			<Button title="Button" onClick={() => console.log("Hej")} />
			<FruitCard fruit={fruitsDb[7]} />
		</>
	);
}

export default App;
