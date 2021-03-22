//const ai = require('../ai');
const player = require('../../player/player');
const gameboard = require('../../gameboard/gameboard');

test('ai', () => {
	let pGb = gameboard();
	pGb.setShip([2, { x: 1, y: 1 }, true], 'cruiser');
	pGb.setShip([4, { x: 0, y: 3 }, false], 'destroyer');
	let cGb = gameboard();
	cGb.setShip([3, { x: 0, y: 5 }, false], 'cruiser');
	cGb.setShip([4, { x: 0, y: 6 }, true], 'destroyer');
	let compPlayer = player('Computer', pGb, cGb);
	//const comp = ai(compPlayer);
	expect(compPlayer.getDetails()).toEqual({
		name: 'Computer',
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
	//should fail this test cause random move
	//expect(comp.play()).toEqual({ x: 0, y: 0 });
});
