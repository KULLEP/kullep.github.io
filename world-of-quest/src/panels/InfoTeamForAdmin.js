import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Card, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ajax_get_list_users_by_id } from './../components/GetInfoAjax/AdminAjax';

const InfoGameForAdmin = () => {



	var id_this_game = window.infoUser.editID;
	ajax_get_list_users_by_id(id_this_game);
	var infoPlayers = window.infoUser.list_info_users_by_id;

	return(
		<div align='center'>
		<ToolbarMy className='my-20' backlink='admin-main-page' heightTitle={`Информация о группе ${id_this_game}`} />
		<Card fluid className='w-80 my-20 mt-5'>
		<Card.Content>

		<div align='center'>
		<Table celled>
		<Table.Header>
		<Table.Row>
		<Table.HeaderCell>Игрок</Table.HeaderCell>
		<Table.HeaderCell>Правильных ответов в этой игре</Table.HeaderCell>
		<Table.HeaderCell>Ложных ответов в этой игре</Table.HeaderCell>
		<Table.HeaderCell>Правильных ответов всего</Table.HeaderCell>
		<Table.HeaderCell>Ложных ответов всего</Table.HeaderCell>
		</Table.Row>
		</Table.Header>
		<Table.Body>
		{
			infoPlayers.map(data => {
				return (
					<Table.Row>
					<Table.Cell>{data.login}</Table.Cell>
					<Table.Cell>{data.answerIsTrue}</Table.Cell>
					<Table.Cell>{data.answerIsFalse}</Table.Cell>
					<Table.Cell>{data.totalAnswerIsTrue}</Table.Cell>
					<Table.Cell>{data.totalAnswerIsFalse}</Table.Cell>
					</Table.Row>
					)
			})
		}
		</Table.Body>
		</Table>
		</div>

		</Card.Content>
		</Card>
		</div>
		);

}


export default InfoGameForAdmin;
