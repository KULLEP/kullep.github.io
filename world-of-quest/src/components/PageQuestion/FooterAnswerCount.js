import React from 'react';


const FooterAnswerCount = () => {

 let activeQuest = window.infoUser.jsonInfoTeams.activeQuestion;
 let totalQuest = window.infoUser.jsonInfoGame.questions.length;

	return(
		<div className='footer-answer-count bg-white'>{activeQuest} / {totalQuest}</div>
		);

}


export default FooterAnswerCount;


