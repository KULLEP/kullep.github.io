import React from 'react';

import { SpeedDial, Fab } from 'react-onsenui';
import { Redirect, NavLink } from 'react-router-dom';


import ToolbarMy from '.././components/ToolbarMy';
import GameBlock from '.././components/GameBlock';


const PlayerMainPage = () => {

 
	return(
		<div>

		{ window.infoUser.status !== 'player' ? <Redirect from='/' to='/home'/> : null }

		<ToolbarMy heightTitle='PLAYER' />
		<div className='main-block-page'>
		<div className='formAddGame'>
		</div>
		{
		// Показать блок если есть игра
		(window.infoUser.jsonInfo.activeGame !== '' && window.infoUser.jsonInfo.activeGame !== undefined) ? 
		<GameBlock gameNAME={window.infoUser.jsonInfo.activeGame} /> :
		null }
		{
		 // Показать блок если нету игры
		 (window.infoUser.jsonInfo.activeGame === '') ? 
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
