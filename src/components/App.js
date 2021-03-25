import React, { useEffect, useState } from 'react';
import Board from '../containers/Board';
import mainLoop from './mainLoop';
function App() {
	const [uName, setName] = useState('Player');
	const ml = mainLoop(uName);
	const arr = ml.mkArr();
	useEffect(() => {
		ml.displayShip(ml.Player, ml.Computer);
		//ml.displayShip(ml.Computer, ml.Player);
		let name = prompt('enter user name', 'Player');
		if (name === '') setName('A Shy Guy');
		else if (name === null) setName('Player');
		else setName(name);
	}, []);
	return (
		<div>
			<h3>
				{'Start!'}
				<span></span>
			</h3>
			<div className="play-area">
				<Board handler={ml.handleClick} arr={arr} name={uName} />
				<Board handler={() => {}} arr={arr} name={'Computer'} />
			</div>
		</div>
	);
}

export default App;
