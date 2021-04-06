import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PlacementBoard from '../containers/PlacementBoard';
import ShipsList from '../containers/ShipsList';
import mainLoop from './mainLoop';
import gameboard from '../factories/gameboard/gameboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSync } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';
function GameStart() {
	const ml = mainLoop();
	const arr = ml.mkArr();
	const gb = gameboard();
	const [name, setName] = useState('XX_destr0yer_XX');
	const [nPtr, setPtr] = useState(true);
	const [shipsData, setShipsData] = useState({});
	const [isHor, setIsHor] = useState(true);
	const shipTypes = [
		['Carrier', 5],
		['Battleship', 4],
		['Destroyer', 3],
		['Cruiser', 2],
		['Patrol', 1],
	];
	useEffect(() => {
		if (name === 'XX_destr0yer_XX') return;
		localStorage.setItem('name', name);
		console.log(localStorage.name);
	}, [name]);
	useEffect(() => {
		if (!localStorage.name) setName('XX_destr0yer_XX');
		else setName(localStorage.name);
	}, []);
	const displayShips = () => {
		const ships = gb.getallShips();
		console.log(ships);
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
		setShipsData({});
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
								const pa = document.querySelector(
									'.place-area'
								);
								n[0].classList.add('remove-name-container');
								setTimeout(() => {
									setPtr(false);
								}, 1000);
								pa.classList.add('move-up');
							}}
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</span>
					</div>
				</div>
			) : null}
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
						<FontAwesomeIcon
							className="rotate"
							icon={faSync}
							onClick={() => {
								setIsHor(!isHor);
							}}
						/>
					</div>
					<div
						className="ship-box"
						style={
							isHor
								? { flexDirection: 'column' }
								: { flexDirection: 'row' }
						}
					>
						{shipTypes.map((data, index) => {
							return (
								<ShipsList
									key={index}
									length={data[1]}
									name={data[0]}
									isHor={isHor}
								></ShipsList>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
export default GameStart;
