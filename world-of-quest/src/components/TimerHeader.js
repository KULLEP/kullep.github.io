import React from 'react';
import Timer from 'react-compound-timer';


const TimerHeader = () => {

	 var team_player = +window.infoUser.jsonInfo.team; // Номер команды игрока
	 var info_game = window.infoUser.jsonInfoGame; // Информация о игре
	 var info_team_player =  window.infoUser.jsonInfoGame.teams[team_player]; // Информация о команде игрока
	 var activeQuestion = +info_team_player.activeQuestion; // Активный вопрос команды
	 var activeHint = +info_team_player.activeHint; // Активная подсказка команды
	 var nextHint = +info_team_player.nextHint; // Следующая подсказка команды
	 var minuteToNextHint = info_game.questions[activeQuestion].hints[nextHint].minuteToHint; // Времени в минутах на вопрос
	 minuteToNextHint *= 60 * 1000;


	 const rendererNewTimer = () => {

	 	if(nextHint === info_game.questions[activeQuestion].hints.length - 1) {
	 		console.log('LAST HINT AND NEXT QUEST');
	 		window.infoUser.jsonInfoGame.teams[team_player].activeQuestion = +activeQuestion + 1;
	 		window.infoUser.jsonInfoGame.teams[team_player].activeHint = -1;
	 		window.infoUser.jsonInfoGame.teams[team_player].nextHint = 0;
	 	} else {
	 		window.infoUser.jsonInfoGame.teams[team_player].activeHint = +activeHint + 1;
	 		window.infoUser.jsonInfoGame.teams[team_player].nextHint = +nextHint + 1;
	 	}

	 	window.location = '/#/';
	 	// ReactDOM.render(		 
	 	// 	<BlockHint/>,
	 	// 	document.getElementById('block_hint')
	 	// 	);


	 	// ReactDOM.render(		 
	 	// 	<TimerHeader/>,
	 	// 	document.getElementById('timer')
	 	// 	);
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
	 			<React.Fragment>До подсказки <br/>
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
