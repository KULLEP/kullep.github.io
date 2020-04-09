import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import RedirectNoAuth from '.././components/RedirectNoAuth';

const InfoGame = () => {

	return(
		<div>
		<RedirectNoAuth/>
		 
		<ToolbarMy backlink='/player-main-page' heightTitle='Игра' />
		</div>
		);

}


export default InfoGame;
