import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GameStart from './components/GameStart';
import Footer from './containers/Footer';
import Rules from './containers/Rules';
import ReactTooltip from 'react-tooltip';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from 'react-router-dom';
ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/play" component={App}></Route>
			<Route exact path="/start">
				<GameStart />
			</Route>
			<Route exact path="/rules">
				<Rules />
			</Route>
			<Redirect from="/" to="/start" />
		</Switch>
		<div className="info" data-tip data-for="registerTip" href="/">
			<Link to="/rules">&#x24D8;</Link>
		</div>
		<ReactTooltip id="registerTip" place="bottom" effect="solid">
			How to play?
		</ReactTooltip>
		<Footer />
	</Router>,
	document.getElementById('root')
);
