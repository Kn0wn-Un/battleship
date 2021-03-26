import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import GameStart from './components/GameStart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/play" component={App}></Route>
			<Route path="/">
				<GameStart />
			</Route>
		</Switch>
	</Router>,
	document.getElementById('root')
);
