import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';

window.infoUser = {
	jsonInfo: [],
	jsonInfoGame: [],
	jsonInfoTeams: [],
	status: '',
	login: '',
	answerIsTrue: 0,
	answerIsFalse: 0,
	gameIfAdmin: '',
	editName: '',
	codeTeam: '',
	newJsonInfoUsers: []
};

ReactDOM.render(
	<HashRouter>
	<App />
	</HashRouter>,
	document.getElementById('root')
	);

	// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
