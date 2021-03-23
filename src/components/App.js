import React, { useEffect, useState } from 'react';
import Board from '../containers/Board';
import mainLoop from './mainLoop';
import ai from '../factories/ai/ai';
import player from '../factories/player/player';
import gameboard from '../factories/gameboard/gameboard';
function App() {
	const [won, setWon] = useState('');
	const [uName, setName] = useState('Player');
	const ml = mainLoop();
	const arr = ml.mkArr();
	const gb1 = gameboard();
	gb1.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	gb1.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	const gb2 = gameboard();
	gb2.setShip([2, { x: 0, y: 5 }, false], 'cruiser');
	gb2.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	const Player1 = player('Player', gb1, gb2);
	const compPlayer2 = player('Computer', gb2, gb1);
	const c2 = ai(compPlayer2);
	function handleClick(coord) {
		let res = Player1.play(coord);
		if (/won!/.test(res)) {
			setWon(Player1.getDetails().name);
		}
		ml.updateGameBoard(Player1, compPlayer2);
		setTimeout(() => {
			res = c2.play();
			if (/won!/.test(res)) {
				setWon(c2.getDetails().name);
			}
			ml.updateGameBoard(compPlayer2, Player1);
		}, 1000);
	}
	useEffect(() => {
		ml.displayShip(Player1);
		ml.displayShip(compPlayer2);
	}, []);
	useEffect(() => {
		if (won === '') return;
		console.log(won);
		ml.winner(won);
	}, [won]);
	return (
		<div className="App">
			<h3>{won === '' ? '' : won + ' won!'}</h3>
			<div className="play-area">
				<Board handler={handleClick} arr={arr} name={uName} />
				<Board handler={handleClick} arr={arr} name={'Computer'} />
			</div>
		</div>
	);
}

export default App;
