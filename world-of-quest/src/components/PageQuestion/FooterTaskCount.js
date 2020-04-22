import React from 'react';


const FooterTaskCount = () => {

	let true_answers = window.infoUser.info_team.entered_answers; /* Вопросы на которые ответила команда */
	if (window.infoUser.info_team.entered_answers !== '') {
		true_answers = JSON.parse(true_answers).length;
	} else true_answers = 0;


	let total_answers = JSON.parse(window.infoUser.info_task.answers).length; /* Все вопросы */

	return(
		<div className='footer-answer-count bg-white'>{true_answers} / {total_answers}</div>
		);

}


export default FooterTaskCount;


