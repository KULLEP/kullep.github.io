import React from 'react';
import BlockHint from './BlockHint';


const TaskInfo = () => {

	let info_task = window.infoUser.info_task;

	var task_text = info_task.text; /* Текст вопроса */
	var task_video = info_task.video; /* Видео вопроса */
	var task_photo = info_task.photo; /* Фото вопроса */
	var wins = window.infoUser.info_game.wins; /* Победитель */

	if (wins === '') {
		return(
			<div align='center'>
			{(task_text !== undefined) ? task_text : null}
			<br/>
			{(task_video !== undefined && task_video !== '') ? 
			<video className='mw-100 my-20' controls="controls">
			<source src={task_video} />
			</video> 
			: null}
			<br/>
			{(task_photo !== undefined && task_photo !== '') ? <img className='mw-100' src={task_photo} alt='' /> : null}

			<div id='block_hint'>
			<BlockHint />
			</div>

			</div>
			);
	} else {

		return (
			<div>1
			</div>
			);
	// var name = window.infoUser.jsonInfoTeams; // Назание команды
	// var captain = window.infoUser.jsonInfoTeams.captain; // Капитан
	// // var players = window.infoUser.jsonInfoGame.questions[team_player].players.length; // Игроки
	// var mistakes = window.infoUser.jsonInfoTeams.mistakes; // Ошибки
/*
	return(
		<div align='center'>
		<h2>Результат</h2>
		<br/>
		Победитель : {name} <br/>
		Время : {name} <br/>
		Ошибок : {mistakes} <br/>
		Капитан : {captain} <br/>
		Команда : {captain} <br/>
		</div>
		);
		*/
	}


}


export default TaskInfo;
