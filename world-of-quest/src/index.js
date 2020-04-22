import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';



window.infoUser = {

	info_team: {},
	info_user: {},
	info_task: {},
	info_game: {},
	status: '',
	active_hint: '',
	info_teams_admin: [],
	info_games_admin: [],
	list_users_admin: [],
	editID: '',
	list_info_teams_by_id: [],
	list_info_users_by_id: [],
	list_info_tasks_by_id: [],
	list_info_hints_by_id: [],
	status_auth: 0,

	timer_is_run: false,
	timeIntervalFullInfo: false,
	game_is_start_second: false
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
