import React from "react";
import "./FruitCard.scss";
import Button from "../../components/Button/Button";
import { Fruit } from "../../types/Fruit";

interface FruitCardProps {
	fruit: Fruit;
}

const FruitCard = ({ fruit }: FruitCardProps) => {
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
		</article>
	);
};

export default FruitCard;
