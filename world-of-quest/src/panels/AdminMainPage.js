import React from 'react';
import PropTypes from 'prop-types';

import { Button  } from 'react-onsenui';
import { Redirect } from 'react-router-dom';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import SearchMy from '.././components/SearchMy';
import ToolbarMy from '.././components/ToolbarMy';

const AdminMainPage = ({isAuth}) => {

	console.log(isAuth);


	return(
		<div>

		{ isAuth == '' ? <Redirect from='/' to='/home'/> : null }

		<ToolbarMy heightTitle='ADMIN' />

		<SearchMy/>


		</div>
		);
}



export default AdminMainPage;
