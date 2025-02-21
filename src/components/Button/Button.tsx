import "./Button.scss";

type ButtonProps = {
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	id?: string;
};

const Button = ({ title, onClick, id }: ButtonProps) => (
	<button id={id} className="Button" onClick={onClick}>
		{title}
	</button>
);

export default Button;
