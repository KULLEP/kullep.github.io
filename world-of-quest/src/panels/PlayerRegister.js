import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, NavLink } from 'react-router-dom';
import { Page, Fab, Button, Input, Toolbar, ToolbarButton, Icon, BackButton, SpeedDial } from 'react-onsenui'; 

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


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
