import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlacementBoard from '../containers/PlacementBoard';
import ShipsList from '../containers/ShipsList';
import mainLoop from './mainLoop';
import '../styles/App.css';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	const [shipsData, setShipsData] = useState({});
	const [isHor, setIsHor] = useState(true);
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
				setShipsData={setShipsData}
				shipsData={shipsData}
				isHor={isHor}
			/>
			<h2>Ships:</h2>
			<div className="ship-box">
				<ShipsList length={5} isHor={isHor}></ShipsList>
				<ShipsList length={4} isHor={isHor}></ShipsList>
				<ShipsList length={3} isHor={isHor}></ShipsList>
				<ShipsList length={2} isHor={isHor}></ShipsList>
				<ShipsList length={1} isHor={isHor}></ShipsList>
			</div>
			<Link to={{ pathname: '/play', state: shipsData }}>
				<button>Play</button>
			</Link>
			<button
				onClick={() => {
					setIsHor(!isHor);
				}}
			>
				Rotate
			</button>
		</div>
	);
}
export default GameStart;
