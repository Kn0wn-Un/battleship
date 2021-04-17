const ai = (comp) => {
	let nextShots = [];
	let hits = [];
	const play = () => {
		while (true) {
			const coords =
				nextShots.length === 0 ? randShots() : playNextShots();
			const res = comp.play(coords);
			if (/duplicate shot/.test(res) || res === 'err') continue;
			if (/sunk/.test(res)) {
				nextShots = [];
				hits = [];
			}
			if (/hit/.test(res)) {
				hits.push(coords);
				secondShot(coords);
			}
			return res;
		}
	};
	const randShots = () => {
		const c = {};
		c.x = Math.floor(Math.random() * 10);
		c.y = Math.floor(Math.random() * 10);
		return c;
	};
	const secondShot = (c) => {
		if (c.x < 9) nextShots.push({ x: c.x + 1, y: c.y });
		if (c.x > 0) nextShots.push({ x: c.x - 1, y: c.y });
		if (c.y < 9) nextShots.push({ x: c.x, y: c.y + 1 });
		if (c.y > 0) nextShots.push({ x: c.x, y: c.y - 1 });
		if (hits.length > 1) {
			const last = hits[hits.length - 1];
			const prevL = hits[hits.length - 2];
			if (Math.abs(last.x - prevL.x) === 1)
				nextShots = nextShots.filter((v) => v.y === last.y);
			else if (Math.abs(last.y - prevL.y) === 1)
				nextShots = nextShots.filter((v) => v.x === last.x);
		}
	};
	const playNextShots = () => {
		const s = nextShots.pop();
		return s;
	};
	return { play };
};

//module.exports = ai;
export default ai;
