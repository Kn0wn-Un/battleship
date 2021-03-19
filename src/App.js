import logo from './logo.svg';
import './App.css';
import ai from './factories/ai/ai';
import player from './factories/player/player';
import ship from './factories/ship/ship';
import gameboard from './factories/gameboard/gameboard';

function App() {
	while (true) {}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
