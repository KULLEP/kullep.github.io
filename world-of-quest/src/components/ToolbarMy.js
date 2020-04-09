import React from 'react';

import { BrowserRouter, NavLink } from 'react-router-dom';
import { Page, Button, Input, Toolbar, ToolbarButton, Icon, BackButton } from 'react-onsenui'; 

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './main.css';


const ToolbarMy = ({backlink, heightTitle}) => {


	const exitAccount = () => {
		localStorage.clear();
		window.location = '/home';
	};

	return(

		<div className='topMenu'>

		<Toolbar>
		<div className="left">

		{backlink ?
			<NavLink to={backlink}>
			<BackButton></BackButton>
			</NavLink> : null
		}

		</div>
		<div className="font-arial center">
		{heightTitle}
		</div>

		{ (localStorage.getItem('authLoginStatus') != null && localStorage.getItem('authLoginStatus') != '') ?
			<div className="right">
			<ToolbarButton onClick={exitAccount}>
			EXIT
			</ToolbarButton>
			</div> : null
		}
		
		</Toolbar>   
		/>
		</div>
		)
}

export default ToolbarMy;