const gameboard = require('../gameboard');

test('Gameboard 1 test', () => {
	let gb1 = gameboard();
	expect(gb1.canPlaceShip([2, { x: 1, y: 1 }, true])).toBeTruthy();
	expect(gb1.setShip([2, { x: 1, y: 1 }, true], 'cruiser')).toEqual([
		[1, 1],
		[1, 2],
	]);
	expect(gb1.canPlaceShip([4, { x: 0, y: 3 }, false])).toBeTruthy();
	expect(gb1.setShip([4, { x: 0, y: 3 }, false], 'destroyer')).toEqual([
		[0, 3],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
	expect(gb1.canPlaceShip([2, { x: 1, y: 1 }, true])).toBeFalsy();
	expect(gb1.canPlaceShip([3, { x: 3, y: 1 }, true])).toBeFalsy();
	expect(gb1.getallShips()).toEqual([
		[0, 3],
		[1, 1],
		[1, 2],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
	expect(gb1.checkAllSunk()).toBe('no');
	expect(gb1.receiveAttack({ x: 0, y: 0 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 1231, y: 10 })).toBe('err');
	expect(gb1.receiveAttack({ x: 0, y: 20 })).toBe('err');
	expect(gb1.receiveAttack({ x: 10, y: 10 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 1, y: 2 })).toBe('ship hit cruiser');
	expect(gb1.receiveAttack({ x: 1, y: 1 })).toBe('ship sunk cruiser');
	expect(gb1.receiveAttack({ x: 1, y: 1 })).toBe('duplicate shot');
	expect(gb1.getHitShots()).toEqual([
		[1, 1],
		[1, 2],
	]);
	expect(gb1.getMissShots()).toEqual([
		[0, 0],
		[10, 10],
	]);
	expect(gb1.checkAllSunk()).toBe('no');
	expect(gb1.receiveAttack({ x: 2, y: 3 })).toBe('ship hit destroyer');
	expect(gb1.receiveAttack({ x: 0, y: 1 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 1, y: 0 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 2, y: 1 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 2, y: 0 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 2, y: 0 })).toBe('duplicate shot');
	expect(gb1.getMissShots()).toEqual([
		[0, 0],
		[0, 1],
		[1, 0],
		[10, 10],
		[2, 0],
		[2, 1],
	]);
	expect(gb1.receiveAttack({ x: 3, y: 3 })).toBe('ship hit destroyer');
	expect(gb1.receiveAttack({ x: 1, y: 3 })).toBe('ship hit destroyer');
	expect(gb1.checkAllSunk()).toBe('no');
	expect(gb1.getHitShots()).toEqual([
		[1, 1],
		[1, 2],
		[1, 3],
		[2, 3],
		[3, 3],
	]);
	expect(gb1.receiveAttack({ x: 3, y: 0 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 0, y: 2 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 1, y: 4 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 4, y: 4 })).toBe('miss');
	expect(gb1.receiveAttack({ x: 0, y: 3 })).toBe('all ships sunk');
	expect(gb1.checkAllSunk()).toBe('all ships sunk');
});

test('Gameboard 2 test', () => {
	let gb2 = gameboard();
	expect(gb2.canPlaceShip([2, { x: 10, y: 0 }, false])).toBeFalsy();
	expect(gb2.canPlaceShip([4, { x: 0, y: 8 }, true])).toBeFalsy();
	expect(gb2.canPlaceShip([3, { x: 0, y: 5 }, false])).toBeTruthy();
	expect(gb2.setShip([3, { x: 0, y: 5 }, false], 'cruiser')).toEqual([
		[0, 5],
		[1, 5],
		[2, 5],
	]);
	expect(gb2.canPlaceShip([4, { x: 0, y: 6 }, true])).toBeTruthy();
	expect(gb2.setShip([4, { x: 0, y: 6 }, true], 'destroyer')).toEqual([
		[0, 6],
		[0, 7],
		[0, 8],
		[0, 9],
	]);
	expect(gb2.getallShips()).toEqual([
		[0, 5],
		[0, 6],
		[0, 7],
		[0, 8],
		[0, 9],
		[1, 5],
		[2, 5],
	]);
	expect(gb2.checkAllSunk()).toBe('no');
	expect(gb2.receiveAttack({ x: 0, y: 0 })).toBe('miss');
	expect(gb2.receiveAttack({ x: 2, y: 5 })).toBe('ship hit cruiser');
	expect(gb2.receiveAttack({ x: 1, y: 5 })).toBe('ship hit cruiser');
	expect(gb2.receiveAttack({ x: 2, y: 1 })).toBe('miss');
	expect(gb2.getHitShots()).toEqual([
		[1, 5],
		[2, 5],
	]);
	expect(gb2.getMissShots()).toEqual([
		[0, 0],
		[2, 1],
	]);
	expect(gb2.checkAllSunk()).toBe('no');
	expect(gb2.receiveAttack({ x: 0, y: 7 })).toBe('ship hit destroyer');
	expect(gb2.receiveAttack({ x: 1, y: 7 })).toBe('miss');
	expect(gb2.receiveAttack({ x: 1, y: 7 })).toBe('duplicate shot');
	expect(gb2.getMissShots()).toEqual([
		[0, 0],
		[1, 7],
		[2, 1],
	]);
	expect(gb2.receiveAttack({ x: 0, y: 6 })).toBe('ship hit destroyer');
	expect(gb2.receiveAttack({ x: 0, y: 8 })).toBe('ship hit destroyer');
	expect(gb2.checkAllSunk()).toBe('no');
	expect(gb2.getHitShots()).toEqual([
		[0, 6],
		[0, 7],
		[0, 8],
		[1, 5],
		[2, 5],
	]);
	expect(gb2.receiveAttack({ x: 3, y: 0 })).toBe('miss');
	expect(gb2.receiveAttack({ x: 0, y: 2 })).toBe('miss');
	expect(gb2.receiveAttack({ x: 1, y: 4 })).toBe('miss');
	expect(gb2.receiveAttack({ x: 4, y: 4 })).toBe('miss');
	expect(gb2.receiveAttack({ x: 0, y: 5 })).toBe('ship sunk cruiser');
	expect(gb2.receiveAttack({ x: 0, y: 9 })).toBe('all ships sunk');
	expect(gb2.checkAllSunk()).toBe('all ships sunk');
});
