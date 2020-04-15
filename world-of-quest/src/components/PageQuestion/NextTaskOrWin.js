import React from 'react';
import ReactDOM from 'react-dom';
import QuestionInfo from './QuestionInfo';
import Task from './Task';


export const answerIsTrue = () => {


	var activeQuestion = window.infoUser.jsonInfoTeams.activeQuestion; // Активный вопрос команды
	window.infoUser.jsonInfoTeams.activeQuestion = +activeQuestion + 1; // Победа +1
	window.infoUser.jsonInfoTeams.activeHint = -1;
	window.infoUser.jsonInfoTeams.nextHint = 0;



	// alert('Правильно');


		// ReactDOM.render(<QuestionInfo activeQuestNum={activeQuestionNum} />,document.getElementById('div_question_info')); // Отрисовка следующего вопроса

//window.location = '/#/page-info-game';
		ReactDOM.render(<Task/>,document.getElementById('infoGameBlock')); // Отрисовка следующего вопроса


	};

