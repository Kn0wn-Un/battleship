const ai = (comp) => {
	const play = () => {
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const res = comp.play(coords);
			if (res !== 'duplicate shot' || res !== 'err') return coords;
		}
	};
	return { play };
};

module.exports = ai;
