import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlacementBoard from '../containers/PlacementBoard';
import ShipsList from '../containers/ShipsList';
import mainLoop from './mainLoop';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	const [shipsData, setShipsData] = useState({});
	useEffect(() => {
		return () => {
			console.log(shipsData);
		};
	}, []);
	return (
		<div>
			<h1>Place Your Ships</h1>
			<PlacementBoard
				arr={arr}
				handler={(e) => {
					console.log(e.target.id);
				}}
				setShipsData={setShipsData}
				shipsData={shipsData}
			/>
			<h2>Ships:</h2>
			<div>
				<ShipsList length={5}></ShipsList>
				<ShipsList length={4}></ShipsList>
				<ShipsList length={3}></ShipsList>
				<ShipsList length={2}></ShipsList>
				<ShipsList length={1}></ShipsList>
			</div>
			<Link to={{ pathname: '/play', state: shipsData }}>
				<button>Play</button>
			</Link>
		</div>
	);
}
export default GameStart;
