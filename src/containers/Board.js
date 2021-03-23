import '../styles/App.css';
function Board(props) {
	return (
		<div>
			<h3>{props.name}</h3>
			<table>
				<tbody>
					{props.arr.map((inArr, index) => {
						return (
							<tr key={index}>
								{inArr.map((coords, index) => {
									return (
										<td
											key={index}
											id={`${props.name} ${coords[0]}${coords[1]}`}
											onClick={() => {
												const coord = {
													x: coords[0],
													y: coords[1],
												};
												props.handler(coord);
											}}
										>
											{''}
										</td>
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

export default Board;
