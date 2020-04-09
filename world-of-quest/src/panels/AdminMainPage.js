import React from 'react';

import { Redirect } from 'react-router-dom';

import SearchMy from '.././components/SearchMy';
import ToolbarMy from '.././components/ToolbarMy';


const AdminMainPage = () => {

	return(
		<div>

		{ window.infoUser.status !== 'admin' ? <Redirect from='/' to='/home'/> : null }

		<ToolbarMy heightTitle='ADMIN' />
		<SearchMy/>

		</div>
		);
}

export default AdminMainPage;
