const ship = (length, startCoord, isX) => {
	const getDetails = () => {
		return { length, startCoord, isX };
	};
	const findAllPos = () => {
		let pos = [];
		if (isX) {
			for (let i = startCoord.y; i <= length; i++)
				pos.push([startCoord.x, i]);
		} else {
			for (let i = startCoord.x; i <= length; i++)
				pos.push([i, startCoord.y]);
		}
		return pos;
	};
	return { getDetails, findAllPos };
};

module.exports = ship;
