import React, { useEffect, useState } from 'react';
import Board from '../containers/Board';
import mainLoop from './mainLoop';
function App() {
	const [uName, setName] = useState('Player');
	const ml = mainLoop(uName);
	const arr = ml.mkArr();
	useEffect(() => {
		ml.displayShip(ml.Player);
		ml.displayShip(ml.Computer);
		let name = prompt('enter user name', 'Player');
		if (name !== '') setName(name);
	}, []);
	return (
		<div className="App">
			<h3></h3>
			<div className="play-area">
				<Board handler={ml.handleClick} arr={arr} name={uName} />
				<Board handler={() => {}} arr={arr} name={'Computer'} />
			</div>
		</div>
	);
}

export default App;
