import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, NavLink } from 'react-router-dom';
import { Fab, Button, Input, SpeedDial } from 'react-onsenui'; 

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import $ from 'jquery';

import ToolbarMy from '.././components/ToolbarMy';

import data_json_admin from '../json-info/admins.json';
import data_json_player from '../json-info/users.json';

const FormRegAuth = ({typeForm, typeUser}) => {

	const submit = () => {
		if(typeForm == 'auth') {
			var statusUser;
			var data_json;
			if(typeUser == 'admin') {
				data_json = data_json_admin;
				statusUser = 'admin';
			}
			else if (typeUser == 'player') {
				data_json = data_json_player;
				statusUser = 'player';
			}
			let loginInp = document.querySelector('.inputLogin').value;
			let passInp = document.querySelector('.inputPassword').value;
			for(let i = 0; i < data_json.length; i++) {
				let log = data_json[i].login;
				let pas = data_json[i].password;
				if(loginInp == log && passInp == pas)
				{
					localStorage.setItem('authLoginName', log);
					localStorage.setItem('authLoginStatus', statusUser);
					window.location = '/home';
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
