import { Link } from 'react-router-dom';
import { useState } from 'react';
import PlacementBoard from '../containers/PlacementBoard';
import ShipsList from '../containers/ShipsList';
import mainLoop from './mainLoop';
import '../styles/App.css';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	const [shipsData, setShipsData] = useState({});
	const [isHor, setIsHor] = useState(true);
	return (
		<div>
			<div className="place-area">
				<div>
					<h1>Place Your Ships</h1>
					<PlacementBoard
						arr={arr}
						setShipsData={setShipsData}
						shipsData={shipsData}
						isHor={isHor}
					/>
					<Link
						to={{
							pathname: '/play',
							ships: shipsData,
							name: 'Player',
						}}
					>
						<button id="play" disabled={true}>
							Play
						</button>
					</Link>
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
