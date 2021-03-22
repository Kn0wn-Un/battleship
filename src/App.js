import './App.css';
import ai from './factories/ai/ai';
import player from './factories/player/player';
import gameboard from './factories/gameboard/gameboard';
//import ship from './factories/ship/ship';
import React, { useEffect, useState } from 'react';
function App() {
	const [won, setWon] = useState('');
	let c1 = gameboard();
	c1.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	c1.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let c2 = gameboard();
	c2.setShip([2, { x: 0, y: 5 }, false], 'cruiser');
	c2.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let compPlayer1 = player('Computer 1', c1, c2);
	const comp1 = ai(compPlayer1);
	let compPlayer2 = player('Computer 2', c2, c1);
	const comp2 = ai(compPlayer2);
	function mainLoop() {
		while (true) {
			let res = comp1.play();
			if (/won!/.test(res)) {
				setWon(res);
				console.log(won);
				console.log(`Computer 1 ${c2.checkAllSunk()}`);
				return;
			}
			res = comp2.play();
			if (/won!/.test(res)) {
				setWon(res);
				console.log(won);
				console.log(`Computer 2 ${c1.checkAllSunk()}`);
				return;
			}
		}
	}
	const arr = [];
	for (let i = 0; i < 10; i++) {
		let inArr = [];
		for (let j = 0; j < 10; j++) inArr.push([i, j]);
		arr.push(inArr);
	}
	useEffect(() => {
		mainLoop();
		updateGameBoard();
	}, []);
	function updateGameBoard() {
		console.log(compPlayer1.getDetails());
		console.log(compPlayer2.getDetails());
		let shipsHit = compPlayer1.getDetails().hits;
		for (let i = 0; i < shipsHit.length; i++) {
			let ele = document.getElementById(
				`${shipsHit[i][0]}${shipsHit[i][1]}`
			);
			ele.classList.add('hit');
		}
		shipsHit = compPlayer2.getDetails().hits;
		for (let i = 0; i < shipsHit.length; i++) {
			let ele = document.getElementById(
				`${shipsHit[i][0]}${shipsHit[i][1]}`
			);
			ele.classList.add('hit');
		}
	}
	function setClass(coords) {
		const player = compPlayer1.getDetails();
		const opp = compPlayer2.getDetails();
		let ships = player.ships;
		let classVal;
		for (let i = 0; i < ships.length; i++)
			if (coords[0] === ships[i][0] && coords[1] === ships[i][1])
				classVal = 'ship';
		ships = opp.ships;
		for (let i = 0; i < ships.length; i++)
			if (coords[0] === ships[i][0] && coords[1] === ships[i][1])
				classVal = 'ship';
		let h = opp.hits;
		for (let i = 0; i < h.length; i++)
			if (coords[0] === h[i][0] && coords[1] === h[i][1]) {
				//console.log(coords);
				//console.log(hits[i]);
				classVal = 'hit';
			}
		h = player.hits;
		for (let i = 0; i < h.length; i++)
			if (coords[0] === h[i][0] && coords[1] === h[i][1]) {
				classVal = 'hit';
			}
		//const misses = opp.misses;
		//for (let i = 0; i < misses.length; i++)
		//	if (coords[0] === misses[i][0] && coords[1] === misses[i][1])
		//		return 'miss';
		return classVal;
	}
	return (
		<div className="App">
			<h3>{won}</h3>
			<br />
			<br />
			<table>
				<tbody>
					{arr.map((inArr, index) => {
						return (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return (
										<td
											key={index}
											id={`${coords[0]}${coords[1]}`}
											className={setClass(coords)}
											onClick={() => {
												const coord = {
													x: coords[0],
													y: coords[1],
												};
												console.log(coords);
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
