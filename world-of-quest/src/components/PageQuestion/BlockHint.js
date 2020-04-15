import React from 'react';

const BlockHint = () => {

     var team_player = +window.infoUser.jsonInfo.team; // Номер команды игрока
	 var info_team_player =  window.infoUser.jsonInfoTeams; // Информация о команде игрока
	 var activeHint = +info_team_player.activeHint; // Активная подсказка команды
	 var activeQuestion = +info_team_player.activeQuestion; // Следующий вопрос команды
	 var hintText; // Подсказка на вопрос

	 if (activeHint > -1 && !!window.infoUser.jsonInfoGame.questions[activeQuestion].hints[activeHint]) {
	 	hintText = window.infoUser.jsonInfoGame.questions[activeQuestion].hints[activeHint].textHint;  
	 } else if (activeHint === -1 && window.infoUser.jsonInfoGame.questions[activeQuestion - 1] !== undefined) {
	 	let lastHnt = +window.infoUser.jsonInfoGame.questions[activeQuestion - 1].hints.length - 1;
	 	hintText = window.infoUser.jsonInfoGame.questions[activeQuestion - 1].hints[lastHnt].textHint
	 } else hintText = '';


	 return(
	 	<div>
	 	{hintText}
	 	</div>
	 	);
	 


	}


	export default BlockHint;
