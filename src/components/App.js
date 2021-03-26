import React, { useEffect, useState } from 'react';
import PlayerBoard from '../containers/PlayerBoard';
import ComputerBoard from '../containers/ComputerBoard';
import mainLoop from './mainLoop';
function App(props) {
	const [uName, setName] = useState('Player');
	const ml = mainLoop(uName);
	const arr = ml.mkArr();
	ml.userShips(props.location.state);
	useEffect(() => {
		ml.displayShip(ml.Player, ml.Computer);
		ml.displayShip(ml.Computer, ml.Player);
		let name = prompt('enter user name', 'Player');
		if (name === '') setName('A Shy Guy');
		else if (name === null) setName('Player');
		else setName(name);
	}, []);
	return (
		<div>
			<h1>
				{'Start!'}
				<span></span>
			</h1>
			<div className="play-area">
				<PlayerBoard handler={ml.handleClick} arr={arr} name={uName} />
				<ComputerBoard arr={arr} />
			</div>
		</div>
	);
}

export default App;
