import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectNoAuth = () => (
	window.infoUser.status === '' ? <Redirect from='/' to='/home'/> : null
	)

export default RedirectNoAuth;