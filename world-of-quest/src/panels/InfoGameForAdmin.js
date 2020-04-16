import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Card, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const InfoGameForAdmin = () => {

	var infoTeams = window.infoUser.jsonInfoTeams;

	return(
		<div align='center'>
		<ToolbarMy className='my-20' backlink='admin-main-page' heightTitle={`Информация о игре ${window.infoUser.editName}`} />
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
					<Table.Cell>{data.activeQuestion}</Table.Cell>
					<Table.Cell>{data.activeHint}</Table.Cell>
					<Table.Cell>{data.falseAnswer}</Table.Cell>
					<Table.Cell>{data.trueAnswer}</Table.Cell>
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
