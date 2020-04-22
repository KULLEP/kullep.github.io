import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Form, Button, Card } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import { ajax_get_list_users, ajax_create_new_team  } from '.././components/GetInfoAjax/AdminAjax';


const CreateNewGame = () => {

	ajax_get_list_users();


	var usersList = window.infoUser.list_users_admin; /* Список пользователей */
	var randomCode = ''; /* Случайный код для группы */
	var captain = ''; /* Капитан */
	var captain_id = ''; /* ID Капитана */
	var nameTeamElement = React.createRef(); /* Название группы */
	var obj_result = {}; /* Результат */

	const randomCodeFunc = () => {
		var symbols = "ABCDEFGHIKLMNOPQRSTVXYZ0123456789";
		for(let i = 0; i < 5; i++) {
			var randomIndex = Math.floor(Math.random() * symbols.length);
			randomCode += symbols[randomIndex];
		}
	};
	randomCodeFunc();


	const getCaptain = (e) => {
		captain_id = e.target.value;
		let users = window.infoUser.list_users_admin;
		users.filter(e => {
			if(e.id == captain_id) {
				captain = e.login;
			}
		})
	};

	const addNewGroup = () => {
		let nameTeam = nameTeamElement.current.value;
		if(nameTeam !== '' && randomCode !== '') {
			ajax_create_new_team(nameTeam, randomCode, captain, captain_id);
			alert(`Название игры - ${nameTeam}\nКапитан - ${captain}\nКод для доступа к группе - ${randomCode}`);
		}
	};



	return(
		<div align='center'>
		<ToolbarMy className='my-20' backlink='admin-main-page' heightTitle='Создание группы' />
		<Card fluid className='w-80 my-20 mt-5'>
		<Card.Content>
		<Form>

		<Form.Field>
		<label>Название</label>
		<input placeholder='Название группы' ref={nameTeamElement} required />
		</Form.Field>

		<Form.Field>
		<label for="captainSelect">Капитан</label>
		<select onChange={getCaptain} class="form-control" id="captainSelect">
		<option></option>
		{
			usersList.map((data) => {
				return <option value={data.id}>{data.login}</option>	 
			})
		}
		</select>
		</Form.Field>

		<div align='center'>
		<Button onClick={addNewGroup} inverted color='blue'>
		Создать
		</Button>
		</div>
		</Form>
		</Card.Content>

		</Card>

		</div>
		);
}




export default CreateNewGame;
