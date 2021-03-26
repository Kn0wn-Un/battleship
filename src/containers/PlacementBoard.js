import '../styles/App.css';
import gameboard from '../factories/gameboard/gameboard';
function PlacementBoard(props) {
	const temp = gameboard();
	const sd = props.shipsData;
	const displayShips = () => {
		const ships = temp.getallShips();
		console.log(ships);
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(`${ships[i][0]}${ships[i][1]}`);
			ele.classList.add('ship');
		}
	};
	const drop = (e) => {
		e.preventDefault();
		const len = Number(e.dataTransfer.getData('ship_id'));
		const ship = document.getElementById(len);
		ship.style.display = 'block';
		const id = e.target.id;
		const coords = { x: Number(id[0]), y: Number(id[1]) };
		if (temp.canPlaceShip([len, coords, true])) {
			temp.setShip([len, coords, true]);
			displayShips();
			ship.style.display = 'none';
			if (len === 5) sd.a = [len, coords, true];
			if (len === 4) sd.b = [len, coords, true];
			if (len === 3) sd.c = [len, coords, true];
			if (len === 2) sd.d = [len, coords, true];
			if (len === 1) sd.e = [len, coords, true];
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
											onClick={props.handler}
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
