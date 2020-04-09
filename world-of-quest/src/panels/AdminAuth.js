import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, NavLink } from 'react-router-dom';
import { Fab, Button, Input, SpeedDial } from 'react-onsenui'; 

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import $ from 'jquery';

import ToolbarMy from '.././components/ToolbarMy';
import FormRegAuth from '.././components/FormRegAuth';
 

const AdminAuth = () => {


	return(

		<div className='bg-home h-vh-100'>
		<ToolbarMy backlink='/home' heightTitle='Авторизация Админа' />

		<FormRegAuth typeForm='auth' typeUser='admin' />

		</div>
		);
}

export default AdminAuth;
