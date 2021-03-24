import React, { useEffect, useState } from 'react';
import Board from '../containers/Board';
import mainLoop from './mainLoop';
function App() {
	const [won, setWon] = useState('');
	const [uName, setName] = useState('Player');
	const [move, setMove] = useState(['Start!']);
	const ml = mainLoop();
	const arr = ml.mkArr();
	useEffect(() => {
		ml.displayShip(ml.Player);
		ml.displayShip(ml.Computer);
	}, []);
	useEffect(() => {
		if (won === '') return;
		console.log(won);
		ml.winner(uName);
	}, [won]);
	return (
		<div className="App">
			<h3>{won === '' ? '' : won + ' won!'}</h3>
			<h3>{move}</h3>
			<div className="play-area">
				<Board
					handler={ml.handleClick}
					arr={arr}
					name={uName}
					setWon={setWon}
				/>
				<Board handler={() => {}} arr={arr} name={'Computer'} />
			</div>
		</div>
	);
}

export default App;
