const gameboard = require('../gameboard');

test('Gameboard 1 test', () => {
	let gb1 = gameboard();
	expect(gb1.setShip([2, { x: 1, y: 1 }, true])).toEqual([
		[1, 1],
		[1, 2],
	]);
	expect(gb1.setShip([4, { x: 0, y: 3 }, false])).toEqual([
		[0, 3],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
	expect(gb1.setShip([2, { x: 1, y: 1 }, true])).toBe('err');
	expect(gb1.setShip([3, { x: 3, y: 1 }, true])).toEqual('err');
	expect(gb1.getAllShips()).toEqual([
		[1, 1],
		[1, 2],
		[0, 3],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
});
