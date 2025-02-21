type Fruits = {
	image:
		| "🍇"
		| "🍈"
		| "🍉"
		| "🍊"
		| "🍋"
		| "🍋‍🟩"
		| "🍐"
		| "🍏"
		| "🍎"
		| "🥭"
		| "🍍"
		| "🍌"
		| "🍑"
		| "🍒"
		| "🍓"
		| "🥝";
	name: string;
	stock: number;
};

export const fruitsDb: Fruits[] = [
	{
		image: "🍇",
		name: "Grapes",
		stock: 10,
	},
	{
		image: "🍈",
		name: "Melon",
		stock: 15,
	},
	{
		image: "🍉",
		name: "Watermelon",
		stock: 8,
	},
	{
		image: "🍊",
		name: "Tangerine",
		stock: 20,
	},
	{
		image: "🍋",
		name: "Lemon",
		stock: 25,
	},
	{
		image: "🍋‍🟩",
		name: "Lime",
		stock: 18,
	},
	{
		image: "🍐",
		name: "Pear",
		stock: 12,
	},
	{
		image: "🍏",
		name: "Green Apple",
		stock: 30,
	},
	{
		image: "🍎",
		name: "Red Apple",
		stock: 30,
	},
	{
		image: "🥭",
		name: "Mango",
		stock: 10,
	},
	{
		image: "🍍",
		name: "Pineapple",
		stock: 5,
	},
	{
		image: "🍌",
		name: "Banana",
		stock: 40,
	},
	{
		image: "🍑",
		name: "Peach",
		stock: 15,
	},
	{
		image: "🍒",
		name: "Cherries",
		stock: 25,
	},
	{
		image: "🍓",
		name: "Strawberry",
		stock: 35,
	},
	{
		image: "🥝",
		name: "Kiwi",
		stock: 20,
	},
];
