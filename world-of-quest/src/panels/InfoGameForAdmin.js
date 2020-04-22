import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Card, Table, Button } from 'semantic-ui-react';
import { ajax_get_list_teams_by_id } from './../components/GetInfoAjax/AdminAjax';
import { NavLink } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';


const InfoGameForAdmin = () => {


	const set_id_game = () => {
		let id_game = window.infoUser.editID
		window.localStorage.setItem('id_game', id_game)
	};

	var id_this_game = window.infoUser.editID;
	ajax_get_list_teams_by_id(id_this_game);
	var infoTeams = window.infoUser.list_info_teams_by_id;

	return(
		<div align='center'>
		<ToolbarMy className='my-20' backlink='admin-main-page' heightTitle={`Информация о игре ${window.infoUser.editID}`} />
		<Card fluid className='w-80 my-20 mt-5'>
		<Card.Content>

		<div align='center'>
		<Table celled>
		<Table.Header>
		<Table.Row>
		<Table.HeaderCell>Команда</Table.HeaderCell>
		<Table.HeaderCell>Текущий вопрос</Table.HeaderCell>
		<Table.HeaderCell>Текущая подсказка</Table.HeaderCell>
		<Table.HeaderCell>Правильных ответов</Table.HeaderCell>
		<Table.HeaderCell>Ложных ответов</Table.HeaderCell>
		</Table.Row>
		</Table.Header>
		<Table.Body>
		{
			infoTeams.map(data => {
				return (
					<Table.Row>
					<Table.Cell>{data.name}</Table.Cell>
					<Table.Cell>{data.active_task}</Table.Cell>
					<Table.Cell>{data.active_hint}</Table.Cell>
					<Table.Cell>{data.total_true_answers}</Table.Cell>
					<Table.Cell>{data.total_false_answers}</Table.Cell>
					</Table.Row>
					)
			})
		}
		</Table.Body>
		</Table>
		</div>
		</Card.Content>
		</Card>


		<div className='mt-4'>
		<NavLink class='text-white link-disable' to='start-game'>
		<Button
		onClick={set_id_game}
		color='blue'
		content='Начать игру'
		icon='add'
		labelPosition='left'
		/>
		</NavLink> 
		</div>
		</div>
		);

}


export default InfoGameForAdmin;
