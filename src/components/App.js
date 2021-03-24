import React, { useEffect, useState } from 'react';
import Board from '../containers/Board';
import mainLoop from './mainLoop';
function App() {
	const [won, setWon] = useState('');
	const [uName, setName] = useState('Player');
	const ml = mainLoop();
	const arr = ml.mkArr();
	//useEffect(() => {
	//	ml.displayShip(ml.Player);
	//	ml.displayShip(ml.Computer);
	//}, []);
	return (
		<div className="App">
			<h3></h3>
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
