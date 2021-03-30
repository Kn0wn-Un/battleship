import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlacementBoard from '../containers/PlacementBoard';
import ShipsList from '../containers/ShipsList';
import mainLoop from './mainLoop';
import gameboard from '../factories/gameboard/gameboard';
import '../styles/App.css';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	const gb = gameboard();
	const [name, setName] = useState('Player');
	const [shipsData, setShipsData] = useState({});
	const [isHor, setIsHor] = useState(true);
	const displayShips = () => {
		const ships = gb.getallShips();
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(`${ships[i][0]}${ships[i][1]}`);
			ele.classList.add('ship');
			//ele.draggable = true;
		}
		if (gb.getallShips().length === 15) {
			const play = document.getElementById('play');
			play.disabled = false;
		}
	};
	const clearBoard = () => {
		gb.removeAllShips();
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++) {
				let ele = document.getElementById(`${i}${j}`);
				ele.classList.remove('ship');
			}
	};
	return (
		<div>
			<div>
				<span>Enter Name:</span>
				<input
					value={name}
					onChange={(e) => {
						setName(e.target.value);
						console.log(e.target.value);
					}}
				></input>
			</div>
			<div className="place-area">
				<div>
					<h1>Place Your Ships</h1>
					<PlacementBoard
						arr={arr}
						setShipsData={setShipsData}
						shipsData={shipsData}
						isHor={isHor}
						gb={gb}
						displayShips={displayShips}
					/>
					<Link
						to={{
							pathname: '/play',
							ships: shipsData,
							name: name,
						}}
					>
						<button id="play" disabled={true}>
							Play
						</button>
					</Link>
					<button
						onClick={() => {
							clearBoard();
							setShipsData(ml.randShips(gb));
							displayShips();
						}}
					>
						Randomaize
					</button>
					<button
						onClick={() => {
							window.location.reload();
						}}
					>
						Reset
					</button>
				</div>
				<div className="ship-container">
					<div>
						<h2>Ships:</h2>
						<button
							onClick={() => {
								setIsHor(!isHor);
							}}
						>
							&#x1F504;
						</button>
					</div>
					<div
						className="ship-box"
						style={
							isHor
								? { flexDirection: 'column' }
								: { flexDirection: 'row' }
						}
					>
						<ShipsList
							length={5}
							name={'Carrier'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={4}
							name={'Battleship'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={3}
							name={'Destroyer'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={2}
							name={'Cruiser'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={1}
							name={'Patrol'}
							isHor={isHor}
						></ShipsList>
					</div>
				</div>
			</div>
		</div>
	);
}
export default GameStart;
