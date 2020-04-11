import React from 'react';
import { SearchInput } from 'react-onsenui'; // Only import the necessary components
import { Divider, Header, Icon, Table, Button, Segment, Input, Card } from 'semantic-ui-react';
import SearchMy from '.././components/SearchMy';
import { NavLink, BrowserRouter } from 'react-router-dom';
import ListGamesOrGroups from '.././components/ListGamesOrGroups';
import ReactDOM from 'react-dom';

const AdminCardMainPage = ({typeContent, searchText}) => {

	const onChangeSearch = (e) => {
		let text = e.target.value;
		ReactDOM.render(
			<BrowserRouter>
			<ListGamesOrGroups typeContent={typeContent} nameContent={text} />
			</BrowserRouter>,
			document.querySelector('.main-block-page')
			);
	};



	return(
		<BrowserRouter>
		<Card fluid>
		<SearchMy onChange={onChangeSearch} searchText={searchText} />
		
		<Card.Content>
		<div className='main-block-page'>
		<BrowserRouter>
		<ListGamesOrGroups typeContent={typeContent} />
		</BrowserRouter>
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
		</BrowserRouter>
		)
}

export default AdminCardMainPage;