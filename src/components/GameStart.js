import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PlacementBoard from '../containers/PlacementBoard';
import ShipsList from '../containers/ShipsList';
import mainLoop from './mainLoop';
import gameboard from '../factories/gameboard/gameboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	const gb = gameboard();
	const [name, setName] = useState('Player');
	const [nPtr, setPtr] = useState(true);
	const [shipsData, setShipsData] = useState({});
	const [isHor, setIsHor] = useState(true);
	const displayShips = () => {
		const ships = gb.getallShips();
		for (let i = 0; i < ships.length; i++) {
			let ele = document.getElementById(`${ships[i][0]}${ships[i][1]}`);
			ele.classList.add('ship');
		}
		if (gb.getallShips().length === 15) {
			const play = document.getElementById('play');
			play.disabled = false;
		}
	};
	const clearBoard = () => {
		gb.removeAllShips();
		for (let i = 0; i < 10; i++)
			for (let j = 0; j < 10; j++) {
				let ele = document.getElementById(`${i}${j}`);
				ele.classList.remove('ship');
			}
		let ps = document.querySelectorAll('.place-ships');
		for (let i = 0; i < ps.length; i++) ps[i].style.display = null;
	};
	const isDrag = (drag) => {
		let ps = document.querySelectorAll('.place-ships');
		for (let i = 0; i < ps.length; i++) {
			if (drag) {
				ps[i].classList.remove('no-drag');
				ps[i].draggable = true;
				ps[i].addEventListener('click', () => {
					let r = document.getElementById('reset');
					r.classList.remove('reset-highlight');
				});
			} else {
				ps[i].classList.add('no-drag');
				ps[i].draggable = false;
				ps[i].addEventListener('click', () => {
					let r = document.getElementById('reset');
					r.classList.add('reset-highlight');
				});
			}
		}
	};
	useEffect(() => {
		isDrag(false);
	}, []);
	return (
		<div>
			{nPtr ? (
				<div className="name-container">
					<div className="name"> Enter name: </div>
					<div>
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							className="name-input"
						></input>
						<span
							className="but"
							onClick={() => {
								let n = document.getElementsByClassName(
									'name-container'
								);
								n[0].classList.add('remove-name-container');
								setTimeout(() => {
									setPtr(false);
									isDrag(true);
								}, 1000);
							}}
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</span>
					</div>
				</div>
			) : (
				<div style={{ height: '197px' }}></div>
			)}
			<div className="place-area">
				<div>
					<h1>Place Your Ships</h1>
					<PlacementBoard
						arr={arr}
						setShipsData={setShipsData}
						shipsData={shipsData}
						isHor={isHor}
						gb={gb}
						displayShips={displayShips}
					/>
					<div className="btn-area">
						<Link
							to={{
								pathname: '/play',
								ships: shipsData,
								name: name,
							}}
						>
							<button className="btn" id="play" disabled={true}>
								Play
							</button>
						</Link>
						<button
							className="btn"
							onClick={() => {
								clearBoard();
								isDrag(false);
								setShipsData(ml.randShips(gb));
								displayShips();
							}}
						>
							Randomize
						</button>
						<button
							className="btn"
							id="reset"
							onClick={() => {
								clearBoard();
								isDrag(true);
								const play = document.getElementById('play');
								play.disabled = true;
							}}
						>
							Reset
						</button>
					</div>
				</div>
				<div className="ship-container">
					<div>
						<h2>Ships:</h2>
						<div
							className="btn"
							onClick={() => {
								setIsHor(!isHor);
							}}
						>
							&#x1F504;
						</div>
					</div>
					<div
						className="ship-box"
						style={
							isHor
								? { flexDirection: 'column' }
								: { flexDirection: 'row' }
						}
					>
						<ShipsList
							length={5}
							name={'Carrier'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={4}
							name={'Battleship'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={3}
							name={'Destroyer'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={2}
							name={'Cruiser'}
							isHor={isHor}
						></ShipsList>
						<ShipsList
							length={1}
							name={'Patrol'}
							isHor={isHor}
						></ShipsList>
					</div>
				</div>
			</div>
		</div>
	);
}
export default GameStart;
