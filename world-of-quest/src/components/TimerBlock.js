import React from 'react';
import Timer from 'react-compound-timer';
import ReactDOM from 'react-dom';
import TimerHeader from './TimerHeader';


const TimerBlock = () => {

     var team_player = +window.infoUser.jsonInfo.team; // Номер команды игрока
	 var info_game = window.infoUser.jsonInfoGame; // Информация о игре
	 var info_team_player =  window.infoUser.jsonInfoGame.teams[team_player]; // Информация о команде игрока

	 var activeQuestion = +info_team_player.activeQuestion; // Активный вопрос команды
	 var activeHint = +info_team_player.activeHint; // Активная подсказка команды
	 var hintText = info_game.questions[activeQuestion].hints[activeHint].textHint; // Подсказка на вопрос
	 var minuteToNextHint = info_game.questions[activeQuestion].hints[activeHint].minuteToHint; // Времени в минутах на вопрос

	 minuteToNextHint *= 60 * 1000;

	 console.log(hintText);
	 console.log(info_game.questions[activeQuestion].hints[activeHint]);



	const rendererNewTimer = () => {
		document.querySelector('.hint-block').innerHTML = hintText;
		ReactDOM.render(
			<TimerHeader />,
			document.querySelector('#timer')
			);
	}


	return (
		<div className='timeHeader'>
		<div className='timeHeader-span'>
		<Timer
		initialTime='1'
		direction="backward"
		checkpoints={[
			{
				time: 0,
				callback: () => rendererNewTimer(),
			}
			]}
			>
			{() => (  
				<React.Fragment>До подсказки <br/>
				<Timer.Minutes />:
				<Timer.Seconds />
				</React.Fragment>
				)}
			</Timer>
			</div>
			<div id='result'></div>
			</div>

			)

}


export default TimerBlock;
