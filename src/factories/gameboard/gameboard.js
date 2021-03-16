const ship = require('../ship/ship');

const gameboard = () => {
	const allShips = [];
	const setShip = (det) => {
		for (let i = 0; i < allShips.length; i++)
			if (allShips[i][0] === det[1].x && allShips[i][1] === det[1].y)
				return 'err';
		const ship1 = ship(...det);
		let pos = ship1.getDetails().pos;
		for (let j = 0; j < pos.length; j++)
			for (let i = 0; i < allShips.length; i++)
				if (
					allShips[i][0] === pos[j][0] &&
					allShips[i][1] === pos[j][1]
				)
					return 'err';
		allShips.push(...pos);
		return pos;
	};
	const getAllShips = () => {
		return allShips;
	};
	return { setShip, getAllShips };
};

module.exports = gameboard;
