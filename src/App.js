import logo from './logo.svg';
import './App.css';
import ai from './factories/ai/ai';
import player from './factories/player/player';
import gameboard from './factories/gameboard/gameboard';

function App() {
	let pGb = gameboard();
	pGb.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	pGb.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let cGb = gameboard();
	cGb.setShip([3, { x: 0, y: 5 }, false], 'cruiser');
	cGb.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let compPlayer1 = player('Computer 1', pGb, cGb);
	const comp1 = ai(compPlayer1);
	let compPlayer2 = player('Computer 2', pGb, cGb);
	const comp2 = ai(compPlayer2);
	let i = 0;
	while (true) {
		const res = i % 2 === 0 ? comp1.play() : comp2.play();
		console.log(res);
		if (res === 'Computer 1 won!' || res === 'Computer 2 won!') break;
		i++;
	}
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
