import React from 'react';
import { Card, Button, Input } from 'react-onsenui';
import { ajax_post_answer, ajax_full_info, ajax_post_new_task } from './../GetInfoAjax/GetInfoAjax';

const TaskCardAnswer = () => {



	const checkAnswer = () => {
		var id_team = window.infoUser.info_team.id; // ID Команды
		var answerEnter = document.querySelector('.inputAnswer').value.toLowerCase(); /* Введённый ответ */
		ajax_post_answer(id_team, answerEnter);
		ajax_full_info();
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


export default TaskCardAnswer;
