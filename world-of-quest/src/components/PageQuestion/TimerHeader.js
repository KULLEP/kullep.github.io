import React from 'react';
import Timer from 'react-compound-timer';
import { answerIsTrue } from './NextTaskOrWin';

const TimerHeader = () => {

	var totalTime = 0;
	var info_team_player =  window.infoUser.jsonInfoTeams; // Информация о команде игрока
	var activeQuestion = +info_team_player.activeQuestion; // Активный вопрос команды
	var activeHint = +info_team_player.activeHint; // Активная подсказка команды
	var nextHint = +info_team_player.nextHint; // Следующая подсказка команды
	var infoQuest = window.infoUser.jsonInfoGame.questions[activeQuestion]; // Информация о игре
	var minuteToNextHint; // Времени в минутах на вопрос
	var textHeaderTime; // Текст " До конца "


	for(let i = 0; i <= activeHint; i++) {
		totalTime += +infoQuest.hints[i].minuteToHint;
	}
	totalTime = totalTime.toFixed(5);


	if(nextHint > infoQuest.hints.length - 1 && +totalTime < +infoQuest.timePerLevel) {
		minuteToNextHint = infoQuest.timePerLevel - totalTime; 
		textHeaderTime = 'До следующего вопроса';
		totalTime = infoQuest.timePerLevel;
	} else {
		minuteToNextHint = infoQuest.hints[nextHint].minuteToHint;  
		textHeaderTime = `До ${nextHint + 1} подсказки`;
	}
	minuteToNextHint *= 60 * 1000;



const rendererNewTimer = () => {
	if(nextHint > infoQuest.hints.length - 1 && +totalTime === +infoQuest.timePerLevel) {
	 answerIsTrue();
} else {
	window.infoUser.jsonInfoTeams.activeHint = +activeHint + 1;
	window.infoUser.jsonInfoTeams.nextHint = +nextHint + 1;
}

window.location = '/#/';
}


return (
	<div className='timeHeader'>

	<div className='timeHeader-span'>
	<Timer
	initialTime={minuteToNextHint}
	direction="backward"
	checkpoints={[
		{
			time: 0,
			callback: () => rendererNewTimer(),
		}
		]}
		>
		{() => (  
			<React.Fragment>{textHeaderTime}<br/>
			<Timer.Minutes />:
			<Timer.Seconds />
			</React.Fragment>
			)}
		</Timer>
		</div> 
		</div>

		)
}


export default TimerHeader;
