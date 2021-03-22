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
		let i = 0;
		while (true) {
			let res = i % 2 === 0 ? comp1.play() : comp2.play();
			if (/won!/.test(res)) {
				setWon(res);
				return;
			}
			i++;
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
		setShips(compPlayer1);
		setShips(compPlayer2);
		updateGameBoard(compPlayer1, compPlayer2);
		updateGameBoard(compPlayer2, compPlayer1);
	}, []);
	useEffect(() => {
		console.log(won);
	}, [won]);
	function setShips(player) {
		const ships = player.getDetails().ships;
		const name = player.getDetails().name;
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(
				`${name} ${ships[i][0]}${ships[i][1]}`
			);
			ele.classList.add('ship');
		}
	}
	function updateGameBoard(player, opp) {
		console.log(player.getDetails());
		const shipsHit = player.getDetails().hits;
		const name = opp.getDetails().name;
		for (let i = 0; i < shipsHit.length; i++) {
			let ele = document.getElementById(
				`${name} ${shipsHit[i][0]}${shipsHit[i][1]}`
			);
			ele.classList.add('hit');
		}
		const shipsMiss = player.getDetails().misses;
		for (let i = 0; i < shipsMiss.length; i++) {
			let ele = document.getElementById(
				`${name} ${shipsMiss[i][0]}${shipsMiss[i][1]}`
			);
			ele.classList.add('miss');
		}
	}
	return (
		<div className="App">
			<h3>{won}</h3>
			<br />
			<br />
			<h3>Computer 1</h3>
			<table>
				<tbody>
					{arr.map((inArr, index) => {
						return (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return (
										<td
											key={index}
											id={`Computer 1 ${coords[0]}${coords[1]}`}
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
			<br />
			<br />
			<h3>Computer 2</h3>
			<table>
				<tbody>
					{arr.map((inArr, index) => {
						return (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return (
										<td
											key={index}
											id={`Computer 2 ${coords[0]}${coords[1]}`}
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
