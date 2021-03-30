import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GameStart from './components/GameStart';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/play" component={App}></Route>
			<Route exact path="/start">
				<GameStart />
			</Route>
			<Redirect from="/" to="/start" />
		</Switch>
	</Router>,
	document.getElementById('root')
);
