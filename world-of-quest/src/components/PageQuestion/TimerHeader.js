import React from 'react';
import Timer from 'react-compound-timer';
import ReactDOM from 'react-dom';


const TimerHeader = () => {

	var time = JSON.parse(window.infoUser.info_team.time_to_next_hint);
	//let time = +window.infoUser.info_team.time_to_next_hint;


	var nextHint = +window.infoUser.info_team.active_hint + 1;
	var textHeaderTime = `До ${nextHint} подсказки`;

	if(window.infoUser.timer_is_run === true) {
		setTimeout(() => { clearInterval(window.timeInterval); }, 0);
	}

	window.infoUser.timer_is_run = false;

	/* Повторить с интервалом 5 секунд */
	window.timeInterval = setInterval(() => {
		if (window.location.hash === '#/page-info-game') {
		 let status = window.infoUser.status; // id Команды
		 let time = JSON.parse(window.infoUser.info_team.time_to_next_hint);
		 /* Повторить с интервалом 1 секунды */
		 let timer_interval_2 = setInterval(() => {
		 	if (window.location.hash === '#/page-info-game') {
		 		time.second -= 1;
		 		ReactDOM.render(
		 			<span id='block_seconds'>{time.second}</span>
		 			,document.getElementById('block_seconds'));	
		 	}
		 }, 1000);
		 setTimeout(() => { clearInterval(timer_interval_2); }, 5000);
		}
	}, 5000);
	
	window.infoUser.timer_is_run = true;


	return (
		<div className='timeHeader'>

		<div className='timeHeader-span'>

		<React.Fragment>{textHeaderTime}<br/>
		<span id='block_minutes'>{time.minute}</span>:
		<span id='block_seconds'>{time.second}</span>
		</React.Fragment>

		</div> 
		</div>

		)


// return (
// 	<div className='timeHeader'>

// 	<div className='timeHeader-span'>
// 	<Timer
// 	initialTime={+window.infoUser.info_team.time_to_next_hint * 60 * 1000}
// 	direction="backward"
// 	>
// 	<React.Fragment>{textHeaderTime}<br/>
// 	<Timer.Minutes />:
// 	<Timer.Seconds /><br/>
// 	</React.Fragment>

// 	</Timer>
// 	</div> 
// 	</div>

// 	)
}


export default TimerHeader;
