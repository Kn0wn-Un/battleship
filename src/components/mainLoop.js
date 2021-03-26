import ai from '../factories/ai/ai';
import player from '../factories/player/player';
import gameboard from '../factories/gameboard/gameboard';
const mainLoop = (uName) => {
	const gb1 = gameboard();
	const gb2 = gameboard();
	const Player = player(uName, gb1, gb2);
	const Computer = player('Computer', gb2, gb1);
	const c2 = ai(Computer);
	let moves = [];
	const randShips = () => {
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const h = Math.floor(Math.random() * 2) === 0 ? true : false;
			if (gb2.canPlaceShip([5, coords, h], 'Carrier')) {
				gb2.setShip([5, coords, h], 'Carrier');
				break;
			}
		}
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const h = Math.floor(Math.random() * 2) === 0 ? true : false;
			if (gb2.canPlaceShip([4, coords, h], 'Battleship')) {
				gb2.setShip([4, coords, h], 'Battleship');
				break;
			}
		}
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const h = Math.floor(Math.random() * 2) === 0 ? true : false;
			if (gb2.canPlaceShip([3, coords, h], 'Destroyer')) {
				gb2.setShip([3, coords, h], 'Destroyer');
				break;
			}
		}
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const h = Math.floor(Math.random() * 2) === 0 ? true : false;
			if (gb2.canPlaceShip([2, coords, h], 'Cruiser')) {
				gb2.setShip([2, coords, h], 'Cruiser');
				break;
			}
		}
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const h = Math.floor(Math.random() * 2) === 0 ? true : false;
			if (gb2.canPlaceShip([1, coords, h], 'Patrol')) {
				gb2.setShip([1, coords, h], 'Patrol');
				break;
			}
		}
	};
	randShips();
	const userShips = (s) => {
		console.log(s);
		for (let i in s) {
			gb1.setShip([...s[i]], i);
		}
	};
	const winner = (name) => {
		updateGameBoard(Player);
		updateGameBoard(Computer);
		const h = document.querySelector('h1');
		h.innerHTML = `${name} won!`;
		h.classList.add('won');
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++) {
				let ele = document.getElementById(
					`${i}${j} ${Player.getDetails().name}`
				);
				ele.classList.add('won');
			}
	};
	const displayMoves = () => {
		const h = document.querySelector('h1');
		h.innerHTML = moves[moves.length - 1];
	};
	const displayShip = (player, opp) => {
		const ships = player.getDetails().ships;
		const name = opp.getDetails().name;
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
		for (let i = -1; i < 10; i++) {
			let inArr = [];
			for (let j = -1; j < 10; j++) inArr.push([i, j]);
			arr.push(inArr);
		}
		return arr;
	};
	const wait = (isWait) => {
		const name = Player.getDetails().name;
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++) {
				let ele = document.getElementById(`${i}${j} ${name}`);
				isWait
					? ele.classList.add('wait')
					: ele.classList.remove('wait');
			}
	};
	const handleClick = (e) => {
		const coord = { x: Number(e.target.id[0]), y: Number(e.target.id[1]) };
		let res = Player.play(coord);
		if (/won!/.test(res)) {
			winner(Player.getDetails().name);
			return;
		} else moves.push(res);
		wait(true);
		updateGameBoard(Player);
		setTimeout(() => {
			res = c2.play();
			if (/won!/.test(res)) {
				winner(Computer.getDetails().name);
				return;
			} else moves.push(res);
			wait(false);
			updateGameBoard(Computer);
		}, 1000);
		console.log(coord);
	};
	return {
		displayShip,
		updateGameBoard,
		mkArr,
		winner,
		handleClick,
		userShips,
		Player,
		Computer,
	};
};

export default mainLoop;
