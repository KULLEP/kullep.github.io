import React from 'react';

import { Button, Input } from 'react-onsenui';

import ToolbarMy from '.././components/ToolbarMy';
import RedirectNoAuth from '.././components/RedirectNoAuth';

const JoinAndAddGame = ({isAuth}) => {

	const submit = () => {
		var nameGame = document.querySelector('.nameGame').value;
		console.log(nameGame);
	};

	return(

		<div>
		<RedirectNoAuth/>

		<ToolbarMy backlink='/player-main-page' heightTitle='Войти в игру' />
		<div className='user-auth-block'>
		<Input
		className='nameGame'
		float
		modifier='material'
		placeholder='ПИН КОД' />
		<Button onClick={submit} className='mt-100'>ОК</Button>
		</div>


		</div>
		);

}


export default JoinAndAddGame;
