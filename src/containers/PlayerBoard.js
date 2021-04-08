import '../styles/style.css';
import { Link } from 'react-router-dom';
function PlayerBoard(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<table>
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
			<div className="btn-area">
				<Link to="/battleship/start">
					<button className="btn">Restart</button>
				</Link>
			</div>
		</div>
	);
}

export default PlayerBoard;
