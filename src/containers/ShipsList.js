import '../styles/App.css';
function ShipsList(props) {
	let arr = [...Array(props.length)];
	const dragStart = (e) => {
		e.dataTransfer.setData('ship_id', e.target.id);
		setTimeout(() => {
			e.target.classList.add('invisible');
		}, 0);
	};
	const dragEnd = (e) => {
		e.target.classList.remove('invisible');
	};
	const dragOver = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div>{props.name}</div>
			<table
				className="place-ships"
				id={arr.length}
				draggable="true"
				onDragStart={dragStart}
				onDragOver={dragOver}
				onDragEnd={dragEnd}
			>
				<tbody>
					{props.isHor ? (
						<tr>
							{arr.map((d, index) => {
								return <td key={index} className="ship"></td>;
							})}
						</tr>
					) : (
						arr.map((d, index) => {
							return (
								<tr key={index}>
									<td className="ship"></td>
								</tr>
							);
						})
					)}
				</tbody>
			</table>
		</div>
	);
}
export default ShipsList;
