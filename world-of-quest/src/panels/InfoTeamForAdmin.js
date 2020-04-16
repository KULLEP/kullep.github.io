import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Card, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const InfoGameForAdmin = () => {

	var thisTeamCode = window.infoUser.editName;
	var allTeams = window.infoUser.jsonInfoTeams;
	var allUsers = window.infoUser.newJsonInfoUsers;
	var infoTeams;
	var infoPlayers = [];

	for(let i = 0; i < allTeams.length; i++) { // Парсинг команд с соответствующим code
		if(thisTeamCode === allTeams[i].code) {
			infoTeams = allTeams[i];
		}
	}

	for(let i = 0; i < allUsers.length; i++) { // Парсинг пользователей с соответствующим code
		if(thisTeamCode === allUsers[i].team) {
			infoPlayers.push(allUsers[i]);
		}
	}

	return(
		<div align='center'>
		<ToolbarMy className='my-20' backlink='admin-main-page' heightTitle={`Информация о группе ${infoTeams.name}`} />
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
					<Table.Cell>{data.activeQuestion}</Table.Cell>
					<Table.Cell>{data.activeHint}</Table.Cell>
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
