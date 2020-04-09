import React from 'react';

import { NavLink } from 'react-router-dom';
import { Fab, SpeedDial } from 'react-onsenui'; 

import ToolbarMy from '.././components/ToolbarMy';
import FormRegAuth from '.././components/FormRegAuth';

const PlayerAuth = () => {


	return(
		<div className='bg-home h-vh-100'>

		<ToolbarMy backlink='/home' heightTitle='Авторизация Пользователя' />

		<FormRegAuth typeForm='auth' typeUser='player' />

		<div className='user-auth-block'>
		<NavLink class='text-white link-disable' to='player-register'>
		<SpeedDial>
		<Fab>
		+ 
		</Fab>
		</SpeedDial>
		</NavLink>
		</div>
		</div>
		);
}

export default PlayerAuth;
