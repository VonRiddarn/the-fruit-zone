import React from "react";
import "./FruitCard.scss";
import Button from "../../components/Button/Button";
import { Fruit } from "../../types/Fruit";

interface FruitCardProps {
	fruit: Fruit;
	onRemove: (id: number) => void;
}

const FruitCard = ({ fruit, onRemove }: FruitCardProps) => {
	const [stock, setStock] = React.useState(fruit.stock);

	return (
		<article className="FruitCard">
			<h2>{fruit.image}</h2>
			<h3>{fruit.name}</h3>
			<p>Stock: {stock}</p>
			<Button
				title="Sell"
				onClick={() => {
					if (stock <= 0) return;
					setStock(stock - 1);
				}}
			/>
			<Button
				title="Buy"
				onClick={() => {
					setStock(stock + 1);
				}}
			/>
			<Button id="removeBtn" title="X" onClick={() => onRemove(fruit.id)} />
		</article>
	);
};

export default FruitCard;
