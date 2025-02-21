import { useState } from "react";
import "./App.scss";
import { fruitsDb } from "./data/fruitsDb";
import FruitCard from "./widgets/FruitCard/FruitCard";
import { Fruit } from "./types/Fruit";

function App() {
	const [fruits, setFruits] = useState<Fruit[]>(fruitsDb);

	const removeFruit = (id: number) => {
		setFruits((prevFruits) => prevFruits.filter((fruit) => fruit.id !== id));
	};

	return (
		<>
			<h1>
				The <span>fruit</span> zone
			</h1>
			<div className="FruitContainer">
				{fruits.map((fruit) => (
					<FruitCard key={fruit.name} fruit={fruit} onRemove={removeFruit} />
				))}
			</div>
		</>
	);
}

export default App;
