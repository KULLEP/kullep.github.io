import React from 'react';
import { Card, Button, Input } from 'react-onsenui';
import ReactDOM from 'react-dom';
import QuestionInfo from './QuestionInfo';

const QuestionCardAnswer = () => {

 	 var team_player = +window.infoUser.jsonInfo.team; // Номер команды игрока
	 var info_game = window.infoUser.jsonInfoGame; // Информация о игре
	 var info_team_player =  window.infoUser.jsonInfoGame.teams[team_player]; // Информация о команде игрока




	 const checkAnswer = () => {

 		let activeQuestionNum = +info_game.teams[team_player].activeQuestion; // Текущий номер вопроса
	 	let answerEnter = document.querySelector('.inputAnswer').value.toLowerCase(); // Введённый ответ
	 	let trueAnswer = info_game.questions[activeQuestionNum].answer.toLowerCase(); // Правильный ответ
		let totalQuestions = info_game.questions.length; // Кол-во вопросов всего

		if(answerEnter === trueAnswer) {
			/*
			ЗАПРОС НА +1 К ПРАВИЛЬНЫМ ОТВЕТАМ КОМАНДЫ И ПОЛЬЗОВАТЕЛЯ
			ЗАПРОС НА ИЗМЕНЕНИЕ НОМЕРА ОТВЕТА В games.json
			*/
			activeQuestionNum += 1; // Победа +1
			window.infoUser.jsonInfoGame.teams[team_player].activeQuestion = activeQuestionNum;
			console.log(window.infoUser.jsonInfoGame);
			alert('Правильно');

			document.querySelector('.footer-answer-count').innerHTML = `${activeQuestionNum} / ${totalQuestions}`;
			
			ReactDOM.render(<QuestionInfo activeQuestNum={activeQuestionNum} />,document.getElementById('div_question_info')); // Отрисовка следующего вопроса

			if(activeQuestionNum === totalQuestions) { // ОКОНЧАТЕЛЬНАЯ ПОБЕДА
				alert('Команда ' + info_team_player.name + ' победила !');
				/*
				ЗАПРОС НА ИЗМЕНЕНИЕ WINS в games.json
				*/
			}	 		
		} else {
			let mistake = +window.infoUser.jsonInfoGame.teams[team_player].mistakes + 1;
			window.infoUser.jsonInfoGame.teams[team_player].mistakes = mistake;
			alert('Не правильно');
	 		/*
			ЗАПРОС НА +1 К НЕПРАВИЛЬНЫМ ОТВЕТАМ КОМАНДЫ И ПОЛЬЗОВАТЕЛЯ
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
		<Button modifier="large--cta"onClick={checkAnswer} className='mt-35'>ОК</Button>
		</div>
		</Card>
		);

}


export default QuestionCardAnswer;
