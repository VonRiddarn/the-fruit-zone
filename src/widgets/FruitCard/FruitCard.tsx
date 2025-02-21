import { Fruit } from "../../data/fruitsDb";
import "./FruitCard.scss";

interface FruitCardProps {
	fruit: Fruit;
}

const FruitCard = ({ fruit }: FruitCardProps) => (
	<article className="FruitCard">
		<h2>{fruit.image}</h2>
		<h3>{fruit.name}</h3>
		<p>Stock: {fruit.stock}</p>
	</article>
);

export default FruitCard;
