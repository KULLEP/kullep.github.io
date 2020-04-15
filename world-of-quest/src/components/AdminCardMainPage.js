import React from 'react';

import { Button, Card } from 'semantic-ui-react';
import SearchMy from '.././components/SearchMy';
import { NavLink, HashRouter } from 'react-router-dom';
import ListGamesOrGroups from '.././components/ListGamesOrGroups';
import ReactDOM from 'react-dom';

const AdminCardMainPage = ({typeContent, searchText}) => {
  
	const onChangeSearch = (e) => {
		let text = e.target.value;
		ReactDOM.render(
			<HashRouter>
			<ListGamesOrGroups typeContent={typeContent} nameContent={text} />
			</HashRouter>,
			document.querySelector('.list-games-or-groups')
			);
	};



	return(
		<HashRouter>
		<Card fluid>
		<SearchMy onChange={onChangeSearch} searchText={searchText} />
		
		<Card.Content>
		<div className='list-games-or-groups'>
		<ListGamesOrGroups typeContent={typeContent} />
		</div>
		</Card.Content>


		<Card.Content className='center-flex'>
		{
			typeContent === 'games' ? <NavLink class='text-white link-disable' to='create-new-game'>
			<Button
			color='blue'
			content='Создать новую игру'
			icon='add'
			labelPosition='left'
			/>
			</NavLink> : null
		}
		{
			typeContent === 'groups' ? <NavLink class='text-white link-disable' to='create-new-team'>
			<Button
			color='blue'
			content='Создать новую группу'
			icon='add'
			labelPosition='left'
			/>
			</NavLink> : null
		}
		</Card.Content>

		</Card>
		</HashRouter>
		)
}

export default AdminCardMainPage;