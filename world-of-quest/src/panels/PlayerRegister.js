import React from 'react';

import { Button, Input } from 'react-onsenui'; 

import ToolbarMy from '.././components/ToolbarMy';


const PlayerRegister = () => {

	return(
		<div>

		<ToolbarMy backlink='/player-auth' heightTitle='Регистрация' />
		<div className='user-auth-block'>
		<Input
		className='mt-10'
		float
		onChange=''
		modifier='material'
		placeholder='Логин' />

		<Input
		className='mt-35'
		float
		onChange=''
		modifier='material'
		placeholder='Пароль' />
		<Button className='mt-100'>ОК</Button>
		</div>

		</div>
		);
}

export default PlayerRegister;
