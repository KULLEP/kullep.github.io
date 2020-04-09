import React from 'react';

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
