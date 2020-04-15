import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import RedirectNoAuth from '.././components/RedirectNoAuth';
import Task from '.././components/PageQuestion/Task';
import { getInfoGamesJson } from '.././components/GetInfoGamesJson';
 

const InfoGame = () => {

	getInfoGamesJson();

	return(
		<div>
		<RedirectNoAuth />	 
		<ToolbarMy backlink='/player-main-page' heightTitle='Игра' />

		<div id='infoGameBlock'>
		 
		<Task/>
	 
		</div>

		</div>
		);

}


export default InfoGame;
