const gameboard = require('../gameboard');

test('Gameboard 1 test', () => {
	let gb1 = gameboard();
	expect(gb1.setShip([2, { x: 1, y: 1 }, true])).toEqual([
		[1, 1],
		[1, 2],
	]);
});
