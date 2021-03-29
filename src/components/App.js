import React, { useEffect } from 'react';
import PlayerBoard from '../containers/PlayerBoard';
import ComputerBoard from '../containers/ComputerBoard';
import mainLoop from './mainLoop';
function App(props) {
	if (props.location.name === undefined) {
		window.location.replace('/start');
	}
	const ml = mainLoop(props.location.name);
	const arr = ml.mkArr();
	ml.userShips(props.location.ships);
	window.onbeforeunload = function () {
		return 'Progress will be lost!, are you sure?';
	};
	useEffect(() => {
		ml.displayShip(ml.Player, ml.Computer);
		//ml.displayShip(ml.Computer, ml.Player);
	}, []);
	return (
		<div>
			<h1>
				{'Start!'}
				<span></span>
			</h1>
			<div className="play-area">
				<PlayerBoard
					handler={ml.handleClick}
					arr={arr}
					name={props.location.name}
				/>
				<ComputerBoard arr={arr} />
			</div>
		</div>
	);
}

export default App;
