const ai = (comp) => {
	const play = () => {
		while (true) {
			const coords = {};
			coords.x = Math.floor(Math.random() * 10);
			coords.y = Math.floor(Math.random() * 10);
			const res = comp.play(coords);
			if (/duplicate shot/.test(res) || res === 'err') continue;
			return res;
		}
	};
	return { play };
};

//module.exports = ai;
export default ai;