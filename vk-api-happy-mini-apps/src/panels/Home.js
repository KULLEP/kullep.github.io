import React from 'react';
import ReactDOM from "react-dom";

import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import List from '@vkontakte/vkui/dist/components/List/List';
import Search from '@vkontakte/vkui/dist/components/Search/Search';
import bridge from '@vkontakte/vk-bridge';

// const onIconClick2 = (e) => {
// 	console.log(e.target.value);
// };



const Home = ({ id, go, fetchedUser, fetchedGroupsInfo }) => {

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

			const result2 = (
				<Group>
				<Cell onClick={go} id_group={result.id} data-to="groupinfo"
				before={result.photo_200 ? <Avatar src={result.photo_200}/> : null}
				description={result.members_count}
				>
				{`${result.name}`}
				</Cell>
				</Group>
				);

			ReactDOM.render(result2, document.querySelector('.resultSearch'));
		};
		getInfoGroupsUser();
	};

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
		<Search onChange={searchInput} />
		<Group>
		<List>
		<Div className='resultSearch'></Div>
		<Div> 

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
		</Group> }

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
