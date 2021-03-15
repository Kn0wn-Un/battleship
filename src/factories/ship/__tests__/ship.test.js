const ship = require('../ship');

const ship1 = ship(2, { x: 1, y: 1 }, true);

test('Ship test', () => {
	let det = ship1.getDetails();
	let pos = ship1.findAllPos();
	expect(det.length).toBe(2);
	expect(det.startCoord).toEqual({ x: 1, y: 1 });
	expect(det.isX).toBeTruthy();
	expect(pos).toEqual([
		[1, 1],
		[1, 2],
	]);
});
