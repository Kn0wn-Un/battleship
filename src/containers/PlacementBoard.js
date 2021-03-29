import '../styles/App.css';
import gameboard from '../factories/gameboard/gameboard';
function PlacementBoard(props) {
	const temp = gameboard();
	const sd = props.shipsData;
	const displayShips = () => {
		const ships = temp.getallShips();
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(`${ships[i][0]}${ships[i][1]}`);
			ele.classList.add('ship');
		}
		if (ships.length === 15) {
			const play = document.getElementById('play');
			play.disabled = false;
		}
	};
	const drop = (e) => {
		e.preventDefault();
		const len = Number(e.dataTransfer.getData('ship_id'));
		const ship = document.getElementById(len);
		ship.style.display = 'block';
		const id = e.target.id;
		const coords = { x: Number(id[0]), y: Number(id[1]) };
		if (temp.canPlaceShip([len, coords, props.isHor])) {
			temp.setShip([len, coords, props.isHor]);
			displayShips();
			ship.style.display = 'none';
			if (len === 5) sd['Carrier'] = [len, coords, props.isHor];
			if (len === 4) sd['Battleship'] = [len, coords, props.isHor];
			if (len === 3) sd['Destroyer'] = [len, coords, props.isHor];
			if (len === 2) sd['Cruiser'] = [len, coords, props.isHor];
			if (len === 1) sd['Patrol'] = [len, coords, props.isHor];
			props.setShipsData(sd);
			console.log(sd);
		}
	};
	const dragOver = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<table className="place-board">
				<tbody>
					{props.arr.map((inArr, index) => {
						return index === 0 ? (
							<tr key={index}>
								{inArr.map((coords, index) => {
									if (index === 0)
										return (
											<td
												key={index}
												className="coordinates"
											></td>
										);
									return (
										<td key={index} className="coordinates">
											{String.fromCharCode(index + 64)}
										</td>
									);
								})}
							</tr>
						) : (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return index === 0 ? (
										<td className="coordinates" key={index}>
											{coords[0] + 1}
										</td>
									) : (
										<td
											key={index}
											id={`${coords[0]}${coords[1]}`}
											onDrop={drop}
											onDragOver={dragOver}
										></td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default PlacementBoard;
