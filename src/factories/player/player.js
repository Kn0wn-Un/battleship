const player = (name, pGb, opGb) => {
	const getDetails = () => {
		return {
			name,
			ships: pGb.getallShips(),
			hits: opGb.getHitShots(),
			misses: opGb.getMissShots(),
		};
	};
	const play = (coords) => {
		const res = opGb.receiveAttack(coords);
		if (res === 'all ships sunk')
			if (opGb.checkAllSunk() === 'all ships sunk') return `${name} won!`;
		return `${name} played: ${res}`;
	};
	return { getDetails, play };
};

//module.exports = player;
export default player;
