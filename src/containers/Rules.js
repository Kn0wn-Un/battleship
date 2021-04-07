import { Link } from 'react-router-dom';
function Rules() {
	return (
		<div className="rule">
			<h1>Rules for BattleShip</h1>
			<div>
				<h2>Game Objective:</h2>
				<p>
					The object of Battleship is to try and sink all of the other
					player(computer) before they sink all of your ships. All of
					the other player's ships are somewhere on his/her board. You
					try and hit them by clicking the coordinates of one of the
					squares on the board. The other player also tries to hit
					your ships. Neither you nor the other player can see the
					other's board so you must try to guess where they are. The
					game has two boards: the right (smaller) board for the
					player's ships and the left (larger) for recording the
					player's guesses.
				</p>
			</div>
			<div>
				<h2>Starting a New Game:</h2>
				<p>
					Each player places the 5 ships somewhere on their board. The
					ships can only be placed vertically or horizontally.
					Diagonal placement is not allowed. No part of a ship may
					hang off the edge of the board. Ships may not overlap each
					other. No ships may be placed on another ship. Once the
					guessing begins, the players may not move the ships. The 5
					ships are: Carrier (occupies 5 spaces), Battleship (4),
					Destroyer (3), Cruiser (2), and Patrol (1).
				</p>
			</div>
			<div>
				<h2>Playing the Game:</h2>
				<p>
					Player take turn guessing by clicking the coordinates. The
					game responds with "hit" or "miss" as appropriate. The board
					is marked with colors: green for hit, red for miss. For
					example, if you click F6 and your opponent does not have any
					ship located at F6, game would respond with "miss". The
					board records the miss F6 by coloring it red. When all of
					the squares that one your ships occupies have been hit, the
					ship will be sunk. As soon as all of one player's ships have
					been sunk, the game ends.
				</p>
			</div>

			<Link to="/start">
				<button className="btn play-btn">Start Game!</button>
			</Link>
		</div>
	);
}
export default Rules;
