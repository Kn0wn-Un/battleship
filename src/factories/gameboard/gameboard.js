const ship = require('../ship/ship');

const gameboard = () => {
	const allShipsPos = [];
	const shotsMiss = [];
	const shotsHit = [];
	const ships = {};
	let sunkCtr = 0;
	const setShip = (det, type) => {
		if (canPlaceShip(det)) {
			ships[type] = ship(...det);
			let pos = ships[type].getDetails().pos;
			allShipsPos.push(...pos);
			return pos;
		}
		return 'err';
	};
	const canPlaceShip = (det) => {
		for (let i = 0; i < allShipsPos.length; i++)
			if (
				allShipsPos[i][0] === det[1].x &&
				allShipsPos[i][1] === det[1].y
			)
				return false;
		let testShip = ship(...det);
		let pos = testShip.getDetails().pos;
		for (let j = 0; j < pos.length; j++)
			for (let i = 0; i < allShipsPos.length; i++)
				if (
					allShipsPos[i][0] === pos[j][0] &&
					allShipsPos[i][1] === pos[j][1]
				)
					return false;
		return true;
	};
	const getallShips = () => {
		return allShipsPos.sort();
	};
	const getHitShots = () => {
		return shotsHit.sort();
	};
	const getMissShots = () => {
		return shotsMiss.sort();
	};
	const receiveAttack = (coords) => {
		if (isDupShot(coords)) return 'duplicate shot';
		for (let i = 0; i < allShipsPos.length; i++)
			if (
				coords.x === allShipsPos[i][0] &&
				coords.y === allShipsPos[i][1]
			) {
				shotsHit.push([coords.x, coords.y]);
				const sh = findHitShip(coords);
				const hit = ships[sh].hit(coords);
				if (hit === 'ship sunk') {
					sunkCtr++;
					if (sunkCtr === Object.keys(ships).length)
						return checkAllSunk();
					return `${hit} ${sh}`;
				} else return `${hit} ${sh}`;
			}
		shotsMiss.push([coords.x, coords.y]);
		return 'miss';
	};
	const isDupShot = (coords) => {
		for (let i = 0; i < shotsMiss.length; i++)
			if (coords.x === shotsMiss[i][0] && coords.y === shotsMiss[i][1])
				return true;
		for (let i = 0; i < shotsHit.length; i++)
			if (coords.x === shotsHit[i][0] && coords.y === shotsHit[i][1])
				return true;
		return false;
	};
	const findHitShip = (coords) => {
		for (let i in ships) {
			let pos = ships[i].findAllPos();
			for (let j = 0; j < pos.length; j++)
				if (pos[j][0] === coords.x && pos[j][1] === coords.y) return i;
		}
		return 'err';
	};
	const checkAllSunk = () => {
		shotsHit.sort();
		allShipsPos.sort();
		if (shotsHit.length !== allShipsPos.length) return 'no';
		for (let i = 0; i < allShipsPos.length; i++)
			if (
				shotsHit[i][0] !== allShipsPos[i][0] ||
				shotsHit[i][1] !== allShipsPos[i][1]
			)
				return 'no';
		return 'all ships sunk';
	};
	return {
		setShip,
		getallShips,
		receiveAttack,
		checkAllSunk,
		canPlaceShip,
		getHitShots,
		getMissShots,
	};
};

module.exports = gameboard;
