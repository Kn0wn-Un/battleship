const ship = (shipLen, startCoord, isHorizontal) => {
	const hitPos = [];
	let hitCtr = 0;
	const getDetails = () => {
		return { shipLen, startCoord, isHorizontal, pos: findAllPos() };
	};
	const findAllPos = () => {
		let pos = [];
		if (isHorizontal) {
			for (let i = startCoord.y, j = 1; j <= shipLen; i++, j++)
				pos.push([startCoord.x, i]);
		} else {
			for (let i = startCoord.x, j = 1; j <= shipLen; i++, j++)
				pos.push([i, startCoord.y]);
		}
		return pos;
	};
	const hit = (coord) => {
		const pos = findAllPos();
		for (let i = 0; i < shipLen; i++)
			if (coord.x === pos[i][0] && coord.y === pos[i][1]) {
				hitPos.push([coord.x, coord.y]);
				hitCtr++;
				if (hitCtr === shipLen) return isSunk();
				return 'hit';
			}
		return 'miss';
	};
	const isSunk = () => {
		const pos = findAllPos();
		hitPos.sort();
		if (hitPos.length === pos.length) {
			for (let i = 0; i < shipLen; i++)
				if (hitPos[i][0] !== pos[i][0] && hitPos[i][1] !== pos[i][0])
					return 'err';
			return 'sunk';
		}
		return 'err';
	};
	return { getDetails, findAllPos, hit };
};

module.exports = ship;
