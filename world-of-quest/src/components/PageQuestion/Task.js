import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-onsenui';
import TaskInfo from './TaskInfo';
import TaskCardAnswer from './TaskCardAnswer';
import TimerHeader from './TimerHeader';
import FooterTaskCount from './FooterTaskCount';
import { ajax_full_info } from './../GetInfoAjax/GetInfoAjax';


const Task = () => {




	if(window.infoUser.timeIntervalFullInfo === true) {
		setTimeout(() => { clearInterval(window.IntervalFullInfo); }, 0);
	}
	window.infoUser.timeIntervalFullInfo = false;

	/* Повторить с интервалом 5 секунд */
	window.IntervalFullInfo = setInterval(() => {
		if(window.location.hash === '#/page-info-game') {
			/* Повторить с интервалом 5 секунд */
			let time_interval = setInterval(() => {
				if (window.location.hash === '#/page-info-game') {
					ajax_full_info();
					console.log('FULL INFO');
					ReactDOM.render(
						<Card className='card-question'>
						<TaskInfo />
						</Card>,document.getElementById('content_card_answer_id'));
					ReactDOM.render(<FooterTaskCount/>,document.getElementById('footerTaskCount'));	
				}
			}, 5000);
			setTimeout(() => { clearInterval(time_interval); }, 5000);
		}
	}, 5000);
	
	window.infoUser.timeIntervalFullInfo = true;



	return(
		<div>

		<div id='div_timer'>
		<TimerHeader />
		</div>

		<div className='content-card-answer'>

		<div id='content_card_answer_id'>
		<Card className='card-question'>
		<TaskInfo />
		</Card>
		</div>

		<TaskCardAnswer />
		</div>

		<div id='footerTaskCount'>
		<FooterTaskCount />
		</div>

		</div>
		);

}


export default Task;
