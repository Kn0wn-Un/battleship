import heart from '../styles/images/pixel-heart.png';
import gh from '../styles/images/MarkLight.png';
import ghl from '../styles/images/GHWhite.png';
function Footer() {
	return (
		<div className="ftr">
			<div>
				made with <img src={heart} alt="love"></img>
			</div>
			<div>
				<a href="https://github.com/Kn0wn-Un/battleship">
					view source <img src={gh} alt="on github"></img>
				</a>
			</div>
		</div>
	);
}
export default Footer;
