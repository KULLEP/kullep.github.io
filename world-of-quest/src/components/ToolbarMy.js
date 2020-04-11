import React from 'react';

import { NavLink } from 'react-router-dom';
import { Toolbar, ToolbarButton, BackButton } from 'react-onsenui'; 

import { rerenderNewTreeFunc } from './RerenderNewTree';

const ToolbarMy = ({backlink, heightTitle}) => {


	const exitAccount = () => {
		localStorage.clear();
		window.infoUser.status = '';
		rerenderNewTreeFunc('0');
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

		{ (localStorage.getItem('authLoginStatus') !== null && localStorage.getItem('authLoginStatus') !== '') ?
		<div className="right">
		<ToolbarButton onClick={exitAccount}>
		EXIT
		</ToolbarButton>
		</div> : null
	}

	</Toolbar>   
	</div>
	)
}

export default ToolbarMy;