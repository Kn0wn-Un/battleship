import { Link } from 'react-router-dom';
import PlacementBoard from '../containers/PlacementBoard';
import mainLoop from './mainLoop';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	return (
		<div>
			<h1>Place Your Ships</h1>
			<PlacementBoard
				arr={arr}
				handler={(e) => {
					console.log(e.target.id);
				}}
			/>
			<Link to="/play">
				<button>Play</button>
			</Link>
		</div>
	);
}
export default GameStart;
