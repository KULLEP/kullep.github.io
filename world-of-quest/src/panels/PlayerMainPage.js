import React from 'react';
import PropTypes from 'prop-types';

import { Button, SpeedDial, Fab } from 'react-onsenui';
import { Redirect, NavLink } from 'react-router-dom';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import ToolbarMy from '.././components/ToolbarMy';
import GameBlock from '.././components/GameBlock';
import ReactDOM from 'react-dom';

const PlayerMainPage = ({isAuth}) => {

	console.log(window.infoUser.jsonInfo.activeGame);


	return(
		<div>

		{ isAuth == '' ? <Redirect from='/' to='/home'/> : null }

		<ToolbarMy heightTitle='PLAYER' />

		<div className='main-block-page'>

		<div className='formAddGame'>
		</div>

		{
		// Показать блок если есть игра
		(window.infoUser.jsonInfo.activeGame != '') ? 
		<GameBlock gameNAME={window.infoUser.jsonInfo.activeGame} /> :
		null }

		{
		 // Показать блок если нету игры
		 (window.infoUser.jsonInfo.activeGame == '') ? 
		 <div className='user-auth-block'>
		 <NavLink to='/join-and-add-game'>
		 <SpeedDial>
		 <Fab>
		 +
		 </Fab>
		 </SpeedDial>
		 </NavLink>	 
		 </div> :
		 null }

		 </div>

		 </div>
		 );

}


export default PlayerMainPage;
