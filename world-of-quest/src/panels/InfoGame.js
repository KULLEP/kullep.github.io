import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import RedirectNoAuth from '.././components/RedirectNoAuth';
import Task from '.././components/Task';
import { getInfoGamesJson } from '.././components/GetInfoGamesJson';


const InfoGame = () => {

	getInfoGamesJson();

	return(
		<div>
		<RedirectNoAuth />	 
		<ToolbarMy backlink='/player-main-page' heightTitle='Игра' />

		<div className='hint_block'></div>

		<Task/>

		<div className='footer-answer-count'>0 / 0</div>

		</div>
		);

}


export default InfoGame;
