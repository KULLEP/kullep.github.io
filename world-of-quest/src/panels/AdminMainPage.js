import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, HashRouter } from 'react-router-dom';
import ToolbarMy from '.././components/ToolbarMy';
import { Button } from 'semantic-ui-react';
import AdminCardMainPage from '.././components/AdminCardMainPage';


const AdminMainPage = () => {

	const getCardContent = (e) => {

		var idBtn = e.target.id;

		if (idBtn === 'btnGames') {
			ReactDOM.render(
				<AdminCardMainPage typeContent='games' searchText='Поиск игр' />,
				document.getElementById('cardContent')
				);
			ReactDOM.render(
				<Button.Group>
				<Button id='btnGames' onClick={getCardContent} positive >Игры</Button>
				<Button.Or text='|||' />
				<Button id='btnGroups' onClick={getCardContent} >Группы</Button>
				</Button.Group>,
				document.getElementById('btnOption')
				);
		} else if (idBtn === 'btnGroups') {
			ReactDOM.render(
				<AdminCardMainPage typeContent='groups' searchText='Поиск групп' />,
				document.getElementById('cardContent')
				);
			ReactDOM.render(
				<Button.Group>
				<Button id='btnGames' onClick={getCardContent} >Игры</Button>
				<Button.Or text='|||' />
				<Button id='btnGroups' onClick={getCardContent} positive>Группы</Button>
				</Button.Group>,
				document.getElementById('btnOption')
				);
		}



	};


	return(

		<div align='center'>

		{ window.infoUser.status !== 'admin' ? <Redirect from='/' to='/home'/> : null }
		<ToolbarMy heightTitle='Админ' />	
		<div id='btnOption'>
		<Button.Group>
		<Button id='btnGames' onClick={getCardContent} positive >Игры</Button>
		<Button.Or text='|||' />
		<Button id='btnGroups' onClick={getCardContent}>Группы</Button>
		</Button.Group>
		</div>
		<br/><br/>
		<div id='cardContent' className='col-md-10 col-sm-12 p-0'>
		<HashRouter>
		<AdminCardMainPage typeContent='games' searchText='Поиск игр' />
		</HashRouter>
		</div>


		</div>
		);
}

export default AdminMainPage;
