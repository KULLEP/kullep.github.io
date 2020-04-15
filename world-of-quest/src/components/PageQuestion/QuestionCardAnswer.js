import React from 'react';
import { Card, Button, Input } from 'react-onsenui';
import ReactDOM from 'react-dom';
import { answerIsTrue } from './NextTaskOrWin';


const QuestionCardAnswer = () => {


	const checkAnswer = () => {

 		let activeQuestionNum = +window.infoUser.jsonInfoTeams.activeQuestion; // Текущий номер вопроса
	 	let answerEnter = document.querySelector('.inputAnswer').value.toLowerCase(); // Введённый ответ
	 	let trueAnswer = window.infoUser.jsonInfoGame.questions[activeQuestionNum].answer.toLowerCase(); // Правильный ответ

	 	if(answerEnter === trueAnswer) {
	 		answerIsTrue();
	 	} else {
	 		let mistake = +window.infoUser.jsonInfoTeams.mistakes + 1;
	 		window.infoUser.jsonInfoTeams.mistakes = mistake;
	 		alert('Не правильно');
	 		/*
			// 	ЗАПРОС НА +1 К НЕПРАВИЛЬНЫМ ОТВЕТАМ КОМАНДЫ И ПОЛЬЗОВАТЕЛЯ
			*/
		}

	};

	return(
		<Card className='card-question'>
		<div align='center'>
		<Input
		className='inputAnswer'
		float
		modifier='material'
		placeholder='Ответ' />
		<Button modifier="large--cta" onClick={checkAnswer} className='mt-35'>ОК</Button>
		</div>
		</Card>
		);

}


export default QuestionCardAnswer;
