import './App.css';
import ai from './factories/ai/ai';
import player from './factories/player/player';
import gameboard from './factories/gameboard/gameboard';
//import ship from './factories/ship/ship';

function App() {
	let pGb = gameboard();
	pGb.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	pGb.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let cGb = gameboard();
	cGb.setShip([2, { x: 0, y: 5 }, false], 'cruiser');
	cGb.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let compPlayer1 = player('Computer 1', pGb, cGb);
	const comp1 = ai(compPlayer1);
	let compPlayer2 = player('Computer 2', cGb, pGb);
	const comp2 = ai(compPlayer2);
	let i = 0;
	let won;
	while (true) {
		const res = i % 2 === 0 ? comp1.play() : comp2.play();
		console.log(res);
		if (/won!/.test(res)) {
			won = res;
			console.log(
				i % 2 === 0
					? `Computer 1 ${cGb.checkAllSunk()}`
					: `Computer 2 ${pGb.checkAllSunk()}`
			);
			break;
		}
		i++;
	}
	console.log(compPlayer1.getDetails());
	console.log(compPlayer2.getDetails());
	const arr = [];
	for (let i = 0; i < 10; i++) {
		let inArr = [];
		for (let j = 0; j < 10; j++) inArr.push([i, j]);
		arr.push(inArr);
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
		let hits = opp.hits;
		for (let i = 0; i < hits.length; i++)
			if (coords[0] === hits[i][0] && coords[1] === hits[i][1]) {
				//console.log(coords);
				//console.log(hits[i]);
				classVal = 'hit';
			}
		hits = player.hits;
		for (let i = 0; i < hits.length; i++)
			if (coords[0] === hits[i][0] && coords[1] === hits[i][1]) {
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
											className={setClass(coords)}
											onClick={() => {
												const coord = {
													x: coords[0],
													y: coords[1],
												};
												console.log(coords);
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
