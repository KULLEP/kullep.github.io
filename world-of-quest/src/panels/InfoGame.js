import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import RedirectNoAuth from '.././components/RedirectNoAuth';
import Task from '.././components/PageQuestion/Task';
 

const InfoGame = () => {

	return(
		<div>
		<RedirectNoAuth />	 
		<ToolbarMy backlink='/player-main-page' heightTitle='Игра' />

  
		<Task/>
 
		</div>
		);

}


export default InfoGame;
