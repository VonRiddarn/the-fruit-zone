import { useState } from "react";
import "./App.scss";
import { fruitsDb } from "./data/fruitsDb";
import FruitCard from "./widgets/FruitCard/FruitCard";
import { Fruit } from "./types/Fruit";

function App() {
  const [fruits, setFruits] = useState<Fruit[]>(fruitsDb);
  const [filteredFruits, setFilteredFruits] = useState<Fruit[]>(fruits);

  const removeFruit = (id: number) => {
    setFruits((prevFruits) => prevFruits.filter((fruit) => fruit.id !== id));
  };

  const SearchFruit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    setFilteredFruits(
      fruits.filter((fruit) => fruit.name.toLowerCase().startsWith(searchTerm))
    );
  };

  return (
    <>
      <h1 className="unselectable">
        The <span>fruit</span> zone
      </h1>
      <input type="text" onChange={SearchFruit} />
      <div className="FruitContainer">
        {filteredFruits.map((fruit) => (
          <FruitCard key={fruit.name} fruit={fruit} onRemove={removeFruit} />
        ))}
      </div>
    </>
  );
}

export default App;
