import React from 'react';
import { Button, Input } from 'react-onsenui'; 
import ToolbarMy from '.././components/ToolbarMy';
import { ajax_register_user } from './../components/GetInfoAjax/AdminAjax';


const PlayerRegister = () => {


	const submit_reg = () => {
		let login = document.getElementById('login').value;
		let password = document.getElementById('password').value;
		ajax_register_user(login, password);
	};


	return(
		<div>

		<ToolbarMy backlink='/player-auth' heightTitle='Регистрация' />
		<div className='user-auth-block'>
		<Input
		id='login'
		className='mt-10'
		float
		onChange=''
		modifier='material'
		placeholder='Логин' />

		<Input
		id='password'
		className='mt-35'
		float
		onChange=''
		modifier='material'
		placeholder='Пароль' />
		<Button onClick={submit_reg} className='mt-100'>ОК</Button>
		</div>

		</div>
		);
}

export default PlayerRegister;
