import React from 'react';

import { Button, Input } from 'react-onsenui'; 

import { rerenderNewTreeFunc } from './RerenderNewTree';
import { ajax_auth } from './GetInfoAjax/GetInfoAjax';



const FormRegAuth = ({typeForm, typeUser}) => {

	const submit = () => {

		let loginInp = document.querySelector('.inputLogin').value;
		let passInp = document.querySelector('.inputPassword').value;

		if(typeForm === 'auth') {

			if(typeUser === 'admin') {
				ajax_auth(loginInp, passInp, 'admin');
				if(window.infoUser.status_auth === 1) {
					localStorage.setItem('authStatus', 'admin');
					localStorage.setItem('authLogin', loginInp);
					localStorage.setItem('authPassword', passInp);
					rerenderNewTreeFunc('1');
				}

			}
			else if (typeUser === 'player') {
				ajax_auth(loginInp, passInp, 'player');
				if(window.infoUser.status_auth === 1) {
					localStorage.setItem('authStatus', 'player');
					localStorage.setItem('authLogin', loginInp);
					localStorage.setItem('authPassword', passInp);
					rerenderNewTreeFunc('1');
				}
			}

		}
	}

	return(
		<div>

		<div className='user-auth-block'>
		<Input
		className='inputLogin text-white_total'
		float
		modifier='material'
		placeholder='Логин' />
		<Input
		className='inputPassword text-white_total mt-35'
		float
		modifier='material'
		placeholder='Пароль' />
		<Button onClick={submit} className='mt-100'>ОК</Button>
		</div>

		</div>
		);
}

export default FormRegAuth;
