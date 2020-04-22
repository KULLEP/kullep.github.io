import React from 'react';
import { Redirect } from 'react-router-dom';
import ToolbarMy from '.././components/ToolbarMy';
import { Button, Input } from 'react-onsenui';
import { Card } from 'react-onsenui';
import { ajax_auth_in_team } from './../components/GetInfoAjax/AdminAjax';

const PlayerMainPage = () => {


	const submit = () => {
		var code = document.getElementById('code').value;
		var id_user = window.infoUser.info_user.id;
		ajax_auth_in_team(code, id_user);
	};


	return (
		<div align='center'>
		{ window.infoUser.status !== 'player' ? <Redirect from='/' to='/home'/> : null }

		{ (window.infoUser.info_user.id_team !== '' && window.infoUser.info_user.id_team !== '0') ? <Redirect from='/' to='/page-info-game'/> : null }


		<ToolbarMy className='my-20' heightTitle='Присоединиться к команде' />

		<Card className='w-50'>	
		<div>
		<div className='user-auth-block'>
		<Input
		id='code'
		float
		modifier='material'
		placeholder='ПИН КОД' />
		<Button onClick={submit} className='mt-100'>ОК</Button>
		</div>
		</div>
		</Card>

		</div>
		)
};


export default PlayerMainPage;
