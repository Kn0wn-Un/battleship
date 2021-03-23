const mainLoop = () => {
	//const turn = () => {
	//
	//};
	const winner = (name) => {
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++) {
				let ele = document.getElementById(`${name} ${i}${j}`);
				ele.classList.add('won');
			}
	};
	const displayShip = (player) => {
		const ships = player.getDetails().ships;
		const name = player.getDetails().name;
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(
				`${name} ${ships[i][0]}${ships[i][1]}`
			);
			ele.classList.add('ship');
		}
	};
	const updateGameBoard = (player, opp) => {
		console.log(player.getDetails());
		const shipsHit = player.getDetails().hits;
		const name = player.getDetails().name;
		for (let i = 0; i < shipsHit.length; i++) {
			let ele = document.getElementById(
				`${name} ${shipsHit[i][0]}${shipsHit[i][1]}`
			);
			ele.classList.add('hit');
		}
		const shipsMiss = player.getDetails().misses;
		for (let i = 0; i < shipsMiss.length; i++) {
			let ele = document.getElementById(
				`${name} ${shipsMiss[i][0]}${shipsMiss[i][1]}`
			);
			ele.classList.add('miss');
		}
	};
	const mkArr = () => {
		const arr = [];
		for (let i = 0; i < 10; i++) {
			let inArr = [];
			for (let j = 0; j < 10; j++) inArr.push([i, j]);
			arr.push(inArr);
		}
		return arr;
	};
	return { displayShip, updateGameBoard, mkArr, winner };
};

export default mainLoop;
