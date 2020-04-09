import React from 'react';
import PropTypes from 'prop-types';

import { Button, SpeedDial, Fab, Input } from 'react-onsenui';
import { Redirect } from 'react-router-dom';

import ToolbarMy from '.././components/ToolbarMy';

import data_json_games from '.././json-info/games.json';

const InfoGame = ({isAuth}) => {

	var gameName = window.infoUser.jsonInfo.activeGame;

	var arr_g;

	for(let i = 0; i < data_json_games.length; i++) {
		if(data_json_games[i].game == gameName) {	 
			arr_g = data_json_games[i];
			break;
		}
	}

	console.log(arr_g);

	const submit = () => {
		var nameGame = document.querySelector('.nameGame').value;
		console.log(nameGame);
	};

	return(
		<div>

		{ isAuth == '' ? <Redirect from='/' to='/home'/> : null }

		<ToolbarMy backlink='/player-main-page' heightTitle='Игра' />



		</div>
		);

}


export default InfoGame;
