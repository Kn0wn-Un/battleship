const ship = require('../ship');

const ship1 = ship(2, { x: 1, y: 1 }, true);

test('Ship 1 test', () => {
	let det = ship1.getDetails();
	expect(det.shipLen).toBe(2);
	expect(det.startCoord).toEqual({ x: 1, y: 1 });
	expect(det.isHorizontal).toBeTruthy();
	expect(det.pos).toEqual([
		[1, 1],
		[1, 2],
	]);
	expect(ship1.hit({ x: 1, y: 2 })).toBe('ship hit');
	expect(ship1.hit({ x: 1, y: 1 })).toBe('ship sunk');
	expect(ship1.hit({ x: 0, y: 0 })).toBe('ship miss');
});

test('Ship 2 test', () => {
	const ship2 = ship(4, { x: 0, y: 3 }, false);
	let det = ship2.getDetails();
	expect(det.shipLen).toBe(4);
	expect(det.startCoord).toEqual({ x: 0, y: 3 });
	expect(det.isHorizontal).toBeFalsy();
	expect(det.pos).toEqual([
		[0, 3],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
	expect(ship2.hit({ x: 1, y: 1 })).toBe('ship miss');
	expect(ship2.hit({ x: 2, y: 3 })).toBe('ship hit');
	expect(ship2.hit({ x: 0, y: 3 })).toBe('ship hit');
	expect(ship2.hit({ x: 0, y: 4 })).toBe('ship miss');
	expect(ship2.hit({ x: 3, y: 3 })).toBe('ship hit');
	expect(ship2.hit({ x: 1, y: 3 })).toBe('ship sunk');
});
