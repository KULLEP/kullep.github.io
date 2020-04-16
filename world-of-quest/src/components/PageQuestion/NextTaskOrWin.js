import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';


export const answerIsTrue = () => {


	var activeQuestion = window.infoUser.jsonInfoTeams.activeQuestion; // Активный вопрос команды
	window.infoUser.jsonInfoTeams.activeQuestion = +activeQuestion + 1; // Победа +1
	window.infoUser.jsonInfoTeams.activeHint = -1;
	window.infoUser.jsonInfoTeams.nextHint = 0;

	/* alert('Правильно');
	 /window.location = '/#/page-info-game'; */

		ReactDOM.render(<Task/>,document.getElementById('infoGameBlock')); // Отрисовка следующего вопроса


	};

