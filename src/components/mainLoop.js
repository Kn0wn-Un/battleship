import ai from '../factories/ai/ai';
import player from '../factories/player/player';
import gameboard from '../factories/gameboard/gameboard';
const mainLoop = () => {
	const gb1 = gameboard();
	gb1.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	gb1.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	const gb2 = gameboard();
	gb2.setShip([2, { x: 0, y: 5 }, false], 'cruiser');
	gb2.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	const Player = player('Player', gb1, gb2);
	const Computer = player('Computer', gb2, gb1);
	const c2 = ai(Computer);
	let moves = [];
	const winner = (name) => {
		const h = document.querySelector('h3');
		h.innerHTML = `${name} won!`;
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++) {
				let ele = document.getElementById(`${i}${j} ${name}`);
				ele.classList.add('won');
			}
	};
	const displayMoves = () => {
		const h = document.querySelector('h3');
		h.innerHTML = moves.length === 0 ? 'Start!' : moves[moves.length - 1];
	};
	const displayShip = (player) => {
		const ships = player.getDetails().ships;
		const name = player.getDetails().name;
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(
				`${ships[i][0]}${ships[i][1]} ${name}`
			);
			ele.classList.add('ship');
		}
	};
	const updateGameBoard = (player) => {
		console.log(player.getDetails());
		const shipsHit = player.getDetails().hits;
		const name = player.getDetails().name;
		for (let i = 0; i < shipsHit.length; i++) {
			let ele = document.getElementById(
				`${shipsHit[i][0]}${shipsHit[i][1]} ${name}`
			);
			ele.classList.add('hit');
		}
		const shipsMiss = player.getDetails().misses;
		for (let i = 0; i < shipsMiss.length; i++) {
			let ele = document.getElementById(
				`${shipsMiss[i][0]}${shipsMiss[i][1]} ${name}`
			);
			ele.classList.add('miss');
		}
		displayMoves();
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
	function handleClick(e) {
		const coord = { x: Number(e.target.id[0]), y: Number(e.target.id[1]) };
		let res = Player.play(coord);
		if (/won!/.test(res)) {
			updateGameBoard(Player);
			updateGameBoard(Computer);
			winner(Player.getDetails().name);
			return;
		} else moves.push(res);
		updateGameBoard(Player);
		setTimeout(() => {
			res = c2.play();
			if (/won!/.test(res)) {
				updateGameBoard(Player);
				updateGameBoard(Computer);
				winner(Player.getDetails().name);
				return;
			} else moves.push(res);
			updateGameBoard(Computer);
		}, 1000);
		console.log(coord);
	}
	return {
		displayShip,
		updateGameBoard,
		mkArr,
		winner,
		handleClick,
		Player,
		Computer,
	};
};

export default mainLoop;
