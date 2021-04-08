import heart from '../styles/images/pixel-heart.png';
import gh from '../styles/images/MarkLight.png';
function Footer() {
	return (
		<div className="ftr">
			<div>
				made with{' '}
				<img src={heart} className="heart-beat" alt="love"></img> by
				Darshan
			</div>
			<div>
				<a
					href="https://github.com/Kn0wn-Un/battleship"
					target="_blank"
					rel="noreferrer"
				>
					view source <img src={gh} alt="on github"></img>
				</a>
			</div>
		</div>
	);
}
export default Footer;
