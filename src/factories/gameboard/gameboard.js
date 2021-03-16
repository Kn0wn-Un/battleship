import ship from '../ship/ship';
const gameboard = () => {
	const setShip = (det) => {
		const ship = ship(...det);
		let pos = ship.getDetails().pos;
		return pos;
	};
};

module.exports = gameboard;
