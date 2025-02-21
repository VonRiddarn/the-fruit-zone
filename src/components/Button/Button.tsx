import "./Button.scss";

type ButtonProps = {
	title: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ title, onClick }: ButtonProps) => (
	<button className="Button" onClick={onClick}>
		{title}
	</button>
);

export default Button;
