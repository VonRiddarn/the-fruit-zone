import "./App.scss";
import Button from "./components/Button/Button";

function App() {
	return (
		<>
			<h1>
				The <span>fruit</span> zone
			</h1>
			<Button title="Button" onClick={() => console.log("Hej")} />
		</>
	);
}

export default App;
