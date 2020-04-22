import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Button } from 'semantic-ui-react';
import ReactDOM from 'react-dom';
import CardListContent from '.././components/PageEditorGame/CardListContent';


const EditGameForAdmit = (props) => {


	const getCardContent = (e) => {
		var idBtn = e.target.id;

		if (idBtn === 'btnQuestions') {
			ReactDOM.render(
				<CardListContent typeContent='questions'/>,
				document.getElementById('cardContent')
				);
			ReactDOM.render(
				<Button.Group>
				<Button id='btnQuestions' onClick={getCardContent} positive >Вопросы</Button>
				<Button.Or text='|||' />
				<Button id='btnPlayers' onClick={getCardContent} >Участники</Button>
				</Button.Group>,
				document.getElementById('btnOption')
				);
		} else if (idBtn === 'btnPlayers') {
			ReactDOM.render(
				<CardListContent typeContent='groups'/>,
				document.getElementById('cardContent')
				);
			ReactDOM.render(
				<Button.Group>
				<Button id='btnQuestions' onClick={getCardContent} >Вопросы</Button>
				<Button.Or text='|||' />
				<Button id='btnPlayers' onClick={getCardContent} positive>Участники</Button>
				</Button.Group>,
				document.getElementById('btnOption')
				);
		}
	};

	return(	
		<div align='center'>
		<ToolbarMy backlink='/admin-main-page' heightTitle={`Редактор ${window.infoUser.editID} игры`} />	
		<div id='btnOption'>
		<Button.Group>
		<Button id='btnQuestions' onClick={getCardContent} positive >Вопросы</Button>
		<Button.Or text='|||' />
		<Button id='btnPlayers' onClick={getCardContent} >Участники</Button>
		</Button.Group>
		</div>
		<br/><br/><br/>

		<div id='cardContent'>
		<CardListContent typeContent='questions' />
		</div>



		</div>

		);

}


export default EditGameForAdmit;
