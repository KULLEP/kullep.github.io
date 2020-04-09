import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect } from 'react-router-dom';
import App from '.././App';


export const rerenderNewTreeFunc = (statusRenderer) => {
	if(statusRenderer === '0') {
		ReactDOM.render(
			<React.StrictMode>
			<BrowserRouter>
			<Redirect from='/player-main-page' to='/home'/>
			<Redirect from='/admin-main-page' to='/home'/>
			<App />
			</BrowserRouter>
			</React.StrictMode>,
			document.getElementById('root')
			);
	}
	else if(statusRenderer === '1') {
		ReactDOM.render(
			<React.StrictMode>
			<BrowserRouter>
			<Redirect from='/player-auth' to='/home'/>
			<Redirect from='/player-register' to='/home'/>
			<Redirect from='/admin-auth' to='/home'/>
			<App />
			</BrowserRouter>
			</React.StrictMode>,
			document.getElementById('root')
			);
	}


}
