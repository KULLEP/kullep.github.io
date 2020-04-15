import React from 'react';
import { Card } from 'react-onsenui';
import QuestionInfo from './QuestionInfo';
import QuestionCardAnswer from './QuestionCardAnswer';
import TimerHeader from './TimerHeader';
import FooterAnswerCount from './FooterAnswerCount';


const Task = () => {


	return(
		<div>
		 
		<div id='timeBlock'>
	 
		<TimerHeader />
	 
		</div>

		<div className='content-card-answer'>


		<Card className='card-question'>
		<div id='div_question_info'>
		<QuestionInfo activeQuestNum={0} />
		</div>
		</Card>

		<QuestionCardAnswer />

		</div>

		<FooterAnswerCount />

		</div>
		);

}


export default Task;
