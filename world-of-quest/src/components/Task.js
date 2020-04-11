import React from 'react';
import { Card } from 'react-onsenui';
import QuestionInfo from './QuestionInfo';
import QuestionCardAnswer from './QuestionCardAnswer';
import TimerHeader from './TimerHeader';

const Task = () => {


	return(
		<div>

		<div id='timer'>
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
		</div>
		);

}


export default Task;
