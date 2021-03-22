import React, { useEffect, useState } from 'react';
import mainLoop from './mainLoop';
import ai from './factories/ai/ai';
import player from './factories/player/player';
import gameboard from './factories/gameboard/gameboard';
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
			setWon(res);
		}
		res = c2.play();
		if (/won!/.test(res)) {
			setWon(res);
		}
		ml.updateGameBoard(Player1, compPlayer2);
		ml.updateGameBoard(compPlayer2, Player1);
	}
	useEffect(() => {
		ml.displayShip(Player1);
		ml.displayShip(compPlayer2);
	}, []);
	useEffect(() => {
		console.log(won);
	}, [won]);
	return (
		<div className="App">
			<h3>{won}</h3>
			<br />
			<br />
			<h3>{uName}</h3>
			<table>
				<tbody>
					{arr.map((inArr, index) => {
						return (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return (
										<td
											key={index}
											id={`${uName} ${coords[0]}${coords[1]}`}
											onClick={() => {
												const coord = {
													x: coords[0],
													y: coords[1],
												};
												handleClick(coord);
											}}
										>
											{''}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<br />
			<br />
			<h3>Computer</h3>
			<table>
				<tbody>
					{arr.map((inArr, index) => {
						return (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return (
										<td
											key={index}
											id={`Computer ${coords[0]}${coords[1]}`}
											onClick={() => {
												const coord = {
													x: coords[0],
													y: coords[1],
												};
												console.log(coord);
											}}
										>
											{''}
										</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default App;
