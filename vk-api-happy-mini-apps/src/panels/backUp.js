import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List';
import Search from '@vkontakte/vkui/dist/components/Search/Search';
import bridge from '@vkontakte/vk-bridge';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { Calendar } from "@happysanta/vk-app-ui";

import View from '@vkontakte/vkui/dist/components/View/View';
import ReactDOM from "react-dom";
/* Там где большой пробел
 <Search onChange={onChangeS} />
 <SearchInput />
<Button size="xl" level="2"  >
Найти группу
</Button>
*/



const onIconClick2 = (e) => {
	console.log(e.target.value);
};


const searchInput = (e) => {

	async function getInfoGroupsUser() {
		const data = await bridge.send("VKWebAppCallAPIMethod", {
			"method": "groups.getById",
			"params": {
				"fields": 'members_count',
				"group_ids": e.target.value,
				"access_token": window.obj_user_group_info.user_auth_token,
				"v": "5.103"
			}
		});
		let result = data.response[0];
		//console.log(result);

		return(
			<Group>
			<Cell onClick={go} id_group={result.id} data-to="groupinfo"
			before={result.photo_200 ? <Avatar src={result.photo_200}/> : null}
			description={result.members_count}
			>
			{`${result.name}`}
			</Cell>
			</Group>
			)

		// document.querySelector('.resultSearch').innerHTML = `
		// <div id_group="${result.id}" data-to="groupinfo" class="Cell Cell--ios Cell--m">
		// <div role="button" class="Tappable Tappable--ios Cell__in Tappable--inactive">
		// <div class="Cell__before">
		// <div class="Cell__before-in">
		// <div class="Avatar Avatar--ios Avatar--type-default">
		// <div class="Avatar__in">
		// <img class="Avatar__img" src="${result.photo_200}" style="width: 48px; height: 48px; border-radius: 50%;">
		// </div>
		// </div>
		// </div>
		// </div>
		// <div class="Cell__main">
		// <div class="Cell__children">
		// ${result.name}
		// </div>
		// <div class="Cell__description">
		// ${result.members_count}
		// </div>
		// </div>
		// <div class="Cell__indicator">
		// </div>
		// <div class="Cell__aside">
		// </div>
		// </div>
		// </div>
		// `;
	};
	getInfoGroupsUser();

	const element = (
		<div>
		<h1>Привет, мир!</h1>
		<h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
		</div>
		);
	ReactDOM.render(
		element,
		document.querySelector('.hhh')
		);
};

 

const Home = ({ id, go, fetchedUser, fetchedGroupsInfo }) => {



	return(
		<Panel id={id}>
		<PanelHeader>Поздравление с ДР</PanelHeader>
		{fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
			<Cell
			before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
			description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
			{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
			</Group>
		}

		<Group>
		<Div>

		<Div className='hhh'></Div>

		<Search onChange={searchInput} />



		<Group>
		<List>
		<Div> 

		<Group id='resultSearch'>

		</Group>

		{fetchedGroupsInfo &&
			<Group>
			{ fetchedGroupsInfo.response.map(function(e) {
				return(
					<Cell onClick={go} id_group={e.id} data-to="groupinfo"
					before={e.photo_200 ? <Avatar src={e.photo_200}/> : null}
					description={e.members_count}
					>
					{`${e.name}`}
					</Cell>
					)
			})
		}
		</Group>}



		</Div>
		</List>
		</Group>

		</Div>
		</Group>
		</Panel>
		);
}

Home.propTypes = {
	fetchedGroupsInfo: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
	}),
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	share: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};



export default Home;
