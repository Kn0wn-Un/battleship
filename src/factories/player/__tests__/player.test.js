const player = require('../player');
const gameboard = require('../../gameboard/gameboard');
const ai = require('../../ai/ai');

test('Player test', () => {
	let pGb = gameboard();
	pGb.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	pGb.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let cGb = gameboard();
	cGb.setShip([3, { x: 0, y: 5 }, false], 'cruiser');
	cGb.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let plyr = player('player1', pGb, cGb);
	expect(plyr.getDetails()).toEqual({
		name: 'player1',
		ships: [
			[0, 3],
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 3],
			[3, 3],
		],
		hits: [],
		misses: [],
	});
	expect(plyr.play({ x: 0, y: 0 })).toBe('miss');
	expect(plyr.play({ x: 2, y: 5 })).toBe('ship hit cruiser');
	expect(plyr.play({ x: 0, y: 4 })).toBe('miss');
	expect(plyr.play({ x: 1, y: 5 })).toBe('ship hit cruiser');
	expect(plyr.play({ x: 0, y: 6 })).toBe('ship hit destroyer');
	expect(plyr.play({ x: 0, y: 7 })).toBe('ship hit destroyer');
	expect(plyr.play({ x: 0, y: 8 })).toBe('ship hit destroyer');
	expect(plyr.getDetails()).toEqual({
		name: 'player1',
		ships: [
			[0, 3],
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 3],
			[3, 3],
		],
		hits: [
			[0, 6],
			[0, 7],
			[0, 8],
			[1, 5],
			[2, 5],
		],
		misses: [
			[0, 0],
			[0, 4],
		],
	});
	expect(plyr.play({ x: 0, y: 5 })).toBe('ship sunk cruiser');
	expect(plyr.play({ x: 0, y: 9 })).toBe('player1 won!');
});

test('Player test 2', () => {
	let pGb = gameboard();
	pGb.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	pGb.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let cGb = gameboard();
	cGb.setShip([3, { x: 0, y: 5 }, false], 'cruiser');
	cGb.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let plyr1 = player('player1', pGb, cGb);
	expect(plyr1.getDetails()).toEqual({
		name: 'player1',
		ships: [
			[0, 3],
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 3],
			[3, 3],
		],
		hits: [],
		misses: [],
	});
	let plyr2 = player('player2', cGb, pGb);
	expect(plyr2.getDetails()).toEqual({
		name: 'player2',
		ships: [
			[0, 5],
			[0, 6],
			[0, 7],
			[0, 8],
			[0, 9],
			[1, 5],
			[2, 5],
		],
		hits: [],
		misses: [],
	});
	expect(plyr1.play({ x: 0, y: 0 })).toBe('miss');
	expect(plyr2.play({ x: 0, y: 2 })).toBe('miss');
	expect(plyr1.play({ x: 5, y: 8 })).toBe('miss');
	expect(plyr2.play({ x: 1, y: 9 })).toBe('miss');
	expect(plyr1.play({ x: 10, y: 10 })).toBe('err');
	expect(plyr2.play({ x: 2, y: 3 })).toBe('ship hit destroyer');
	expect(plyr1.play({ x: 0, y: 4 })).toBe('miss');
	expect(plyr2.play({ x: 3, y: 3 })).toBe('ship hit destroyer');
	expect(plyr1.play({ x: 0, y: 6 })).toBe('ship hit destroyer');
	expect(plyr2.play({ x: 4, y: 3 })).toBe('miss');
	expect(plyr1.play({ x: 0, y: 5 })).toBe('ship hit cruiser');
	expect(plyr2.play({ x: 1, y: 3 })).toBe('ship hit destroyer');
	expect(plyr1.getDetails()).toEqual({
		name: 'player1',
		ships: [
			[0, 3],
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 3],
			[3, 3],
		],
		hits: [
			[0, 5],
			[0, 6],
		],
		misses: [
			[0, 0],
			[0, 4],
			[5, 8],
		],
	});
	expect(plyr2.getDetails()).toEqual({
		name: 'player2',
		ships: [
			[0, 5],
			[0, 6],
			[0, 7],
			[0, 8],
			[0, 9],
			[1, 5],
			[2, 5],
		],
		hits: [
			[1, 3],
			[2, 3],
			[3, 3],
		],
		misses: [
			[0, 2],
			[1, 9],
			[4, 3],
		],
	});
	expect(plyr1.play({ x: 0, y: 7 })).toBe('ship hit destroyer');
	expect(plyr2.play({ x: 1, y: 1 })).toBe('ship hit cruiser');
	expect(plyr1.play({ x: 0, y: 8 })).toBe('ship hit destroyer');
	expect(plyr2.play({ x: 1, y: 2 })).toBe('ship sunk cruiser');
	expect(plyr1.play({ x: 0, y: 9 })).toBe('ship sunk destroyer');
	expect(plyr2.play({ x: 0, y: 3 })).toBe('player2 won!');
});

test('Player and Computer test', () => {
	let pGb = gameboard();
	pGb.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	pGb.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let cGb = gameboard();
	cGb.setShip([3, { x: 0, y: 5 }, false], 'cruiser');
	cGb.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let plyr1 = player('player1', pGb, cGb);
	expect(plyr1.getDetails()).toEqual({
		name: 'player1',
		ships: [
			[0, 3],
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 3],
			[3, 3],
		],
		hits: [],
		misses: [],
	});
	let plyr2 = player('computer', cGb, pGb);
	expect(plyr2.getDetails()).toEqual({
		name: 'computer',
		ships: [
			[0, 5],
			[0, 6],
			[0, 7],
			[0, 8],
			[0, 9],
			[1, 5],
			[2, 5],
		],
		hits: [],
		misses: [],
	});
	const comp = ai(plyr2);
	expect(plyr1.play({ x: 0, y: 0 })).toBe('miss');
	comp.play();
	expect(plyr1.play({ x: 5, y: 8 })).toBe('miss');
	comp.play();
	expect(plyr1.play({ x: 10, y: 10 })).toBe('err');
	comp.play();
	expect(plyr1.play({ x: 0, y: 4 })).toBe('miss');
	comp.play();
	expect(plyr1.play({ x: 0, y: 6 })).toBe('ship hit destroyer');
	comp.play();
	expect(plyr1.play({ x: 0, y: 5 })).toBe('ship hit cruiser');
	comp.play();
	expect(plyr1.getDetails()).toEqual({
		name: 'player1',
		ships: [
			[0, 3],
			[1, 1],
			[1, 2],
			[1, 3],
			[2, 3],
			[3, 3],
		],
		hits: [
			[0, 5],
			[0, 6],
		],
		misses: [
			[0, 0],
			[0, 4],
			[5, 8],
		],
	});
	expect(plyr1.play({ x: 0, y: 7 })).toBe('ship hit destroyer');
	comp.play();
	expect(plyr1.play({ x: 0, y: 8 })).toBe('ship hit destroyer');
	comp.play();
	expect(plyr1.play({ x: 0, y: 9 })).toBe('ship sunk destroyer');
	comp.play();
	expect(plyr1.play({ x: 2, y: 5 })).toBe('ship hit cruiser');
	comp.play();
	expect(plyr1.play({ x: 1, y: 5 })).toBe('player1 won!');
});
