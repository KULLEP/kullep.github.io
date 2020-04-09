import React from 'react';
import PropTypes from 'prop-types';

import { Button, SpeedDial, Fab, Input } from 'react-onsenui';
import { Redirect } from 'react-router-dom';

import ToolbarMy from '.././components/ToolbarMy';

 

const JoinAndAddGame = ({isAuth}) => {

	const submit = () => {
		var nameGame = document.querySelector('.nameGame').value;
		console.log(nameGame);
	};

	return(
		<div>

		{ isAuth == '' ? <Redirect from='/' to='/home'/> : null }

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
