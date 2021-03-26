import '../styles/App.css';
function PlayerBoard(props) {
	return (
		<div>
			<h3>{props.name}</h3>
			<table>
				<tbody>
					{props.arr.map((inArr, index) => {
						return index === 0 ? (
							<tr key={index}>
								{inArr.map((coords, index) => {
									if (index === 0)
										return (
											<td className="coordinates"></td>
										);
									return (
										<td className="coordinates">
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
											id={`${coords[0]}${coords[1]} ${props.name}`}
											onClick={props.handler}
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

export default PlayerBoard;
