import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import Home from './panels/Home';
import GroupInfo from './panels/GroupInfo';
import PostOptions from './panels/PostOptions';

const App = () => {


	const [activePanel, setActivePanel] = useState('home');

	const [fetchedUser, setUser] = useState(null);
	const [fetchedGroupsInfo, setGroupsInfo] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);


	const publish_date_by_default = () => {
		var date = new Date();
		var day = date.getDate() + 1;
		date.setDate(day);
		date.setHours('9', '0', '0');
		window.obj_user_group_info.publish_date = Math.round(date.getTime() / 1000);
	}
	publish_date_by_default();


	useEffect(() => {

		async function fetchToken() {
			const token_t = await bridge.send("VKWebAppGetAuthToken", {
				"app_id": 7348710,
				"scope":"friends,groups",
			})
			window.obj_user_group_info.user_auth_token = token_t.access_token;
			fetchData();
		}
		
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user); 
			window.obj_user_group_info.user_id = user.id;
			fetchGroupData();
		};
		async function fetchGroupData() {
			const groupsUserConst = await bridge.send("VKWebAppCallAPIMethod", {
				"method": "groups.get",
				"params": {
					count: 15,
					"user_ids": window.obj_user_group_info.user_id,
					"access_token": window.obj_user_group_info.user_auth_token,
					"v": "5.103"
				}
			});
			let str_res = groupsUserConst.response.items.join(',');
			getInfoGroupsUser(str_res).catch(alert);
		};
		async function getInfoGroupsUser(str_arr) {
			const groupsUserData = await bridge.send("VKWebAppCallAPIMethod", {
				"method": "groups.getById",
				"params": {
					"fields": 'members_count',
					"group_ids": str_arr,
					"access_token": window.obj_user_group_info.user_auth_token,
					"v": "5.103"
				}
			})
			setGroupsInfo(groupsUserData); 
			setPopout(null);
		};

		fetchToken();

	}, []);


	const go = e => {
		if(e.currentTarget.attributes.id_group !== undefined && e.currentTarget.attributes.id_group !== null) {
			window.obj_user_group_info.group_id = e.currentTarget.attributes.id_group.value;
		}

		if(e.currentTarget.attributes.nameTitleOptions !== undefined && e.currentTarget.attributes.nameTitleOptions !== null) {
			window.obj_user_group_info.nameTitleOptions = e.currentTarget.attributes.nameTitleOptions.value;
		}

		// console.log(e.currentTarget.dataset.to);
		setActivePanel(e.currentTarget.dataset.to);
	};
	
	return (
		<View activePanel={activePanel} popout={popout}>
		<Home fetchedGroupsInfo={fetchedGroupsInfo} id='home' fetchedUser={fetchedUser} go={go} />
		<GroupInfo id='groupinfo' go={go} />
		<PostOptions id='postoptions' go={go} />
		</View>
		);


	}


	export default App;

