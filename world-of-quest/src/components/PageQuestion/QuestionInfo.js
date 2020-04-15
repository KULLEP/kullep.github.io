import React from 'react';
import BlockHint from './BlockHint';


const QuestionInfo = ({activeQuestNum}) => {

	if(activeQuestNum !== window.infoUser.jsonInfoGame.questions.length) {
		activeQuestNum = +activeQuestNum;
	var textQuest = window.infoUser.jsonInfoGame.questions[activeQuestNum].quest; // Текст вопроса
	var videoQuest = window.infoUser.jsonInfoGame.questions[activeQuestNum].video; // Видео вопроса
	var photoQuest = window.infoUser.jsonInfoGame.questions[activeQuestNum].photo; // Фото вопроса

	return(
		<div align='center'>
		{(textQuest !== undefined) ? textQuest : null}
		<br/>
		{(videoQuest !== undefined && videoQuest !== '') ? 
		<video className='mw-100 my-20' controls="controls">
		<source src={videoQuest} />
		</video> 
		: null}
		<br/>
		{(photoQuest !== undefined && photoQuest !== '') ? <img className='mw-100' src={photoQuest} alt='' /> : null}

		<div id='block_hint'>
		<BlockHint />
		</div>

		</div>
		);

} else {
 
	var name = window.infoUser.jsonInfoTeams; // Назание команды
	var captain = window.infoUser.jsonInfoTeams.captain; // Капитан
	// var players = window.infoUser.jsonInfoGame.questions[team_player].players.length; // Игроки
	var mistakes = window.infoUser.jsonInfoTeams.mistakes; // Ошибки

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
}


}


export default QuestionInfo;
