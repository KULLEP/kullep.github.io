import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Redirect } from 'react-router-dom';
import App from '.././App';


export const rerenderNewTreeFunc = (statusRenderer) => {
	if(statusRenderer === '0') {
		ReactDOM.render(
			<HashRouter>
			<Redirect from='/' to='/home'/>
			<App />
			</HashRouter>,
			document.getElementById('root')
			);
		}
		else if(statusRenderer === '1') {
			ReactDOM.render(
			<HashRouter>
			<Redirect from='/' to='/home'/>
			<App />
			</HashRouter>,
			document.getElementById('root')
			);
		}

	}
