import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { Calendar } from "@happysanta/vk-app-ui";
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';

import PostOptions from './PostOptions';

const osName = platform();


const postMessageForUsers = () => {
	alert('В данный момент кнопка на ремонте. \n\n Извеняюсь за предоставленные неудобства');
};

const copy_in_buffer = () => {
	let inputValue = window.obj_user_group_info.happy_list_name_congratulation;
	if (inputValue) {
		navigator.clipboard.writeText(inputValue)
		.then(() => {
		})
		.catch(err => {
			alert('Произошла ошибка при копировании', err);
		})
	}
};



const GroupInfo = ({id, go}) => (

	<Panel id={id}>
	<PanelHeader 
	left={<PanelHeaderButton onClick={go} data-to="home">
	{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
	</PanelHeaderButton>}
	>Информация о группе
	</PanelHeader>


	<Div align='center'>Когда день рождения у пользователя ?</Div>

	<Div align='center'>
	<Calendar onChange={onChange} />
	</Div>

	<Div align='center' className='happyDataDiv'></Div>
	


	<br/>
	<Div align='center'>
	<Group header={<Header mode="secondary">Разместить пост</Header>}>

	<Button nameTitleOptions='1' onClick={go} data-to="postoptions" mode="commerce">С настройками</Button>
	<br/>
	<br/>
	<Button nameTitleOptions='0' onClick={go} data-to="postoptions" mode="commerce">Без настроек</Button>
	<br/>
	<br/>
	<Button onClick={postMessageForUsers} mode="primary">Разослать сообщения с поздравлениями</Button>
	<br/>
	<br/>
	<Button onClick={copy_in_buffer} mode="primary">Скопировать имена с фамилиями как ссылки</Button>

	</Group>
	</Div>

	</Panel>
	);

const onChange = (e) => {
	let day = e._d.toString().substring(8, 10);
	let month = e._d.toString().substring(4, 7);
	let month_str;
	let month_date;

	switch (month) {
		case "Jan":
		month_str = "Января";
		month_date = 1;
		break;

		case "Feb":
		month_str = "Февраля";
		month_date = 2;
		break;

		case "Mar":
		month_str = "Марта";
		month_date = 3;
		break;

		case "Apr":
		month_str = "Апреля";
		month_date = 4;
		break;

		case "May":
		month_str = "Мая";
		month_date = 5;
		break;

		case "Jun":
		month_str = "Июня";
		month_date = 6;
		break;

		case "Jul":
		month_str = "Июоя";
		month_date = 7;
		break;

		case "Aug":
		month_str = "Августа";
		month_date = 8;
		break;

		case "Sep":
		month_str = "Сентября";
		month_date = 9;	
		break;

		case "Oct":
		month_str = "Октабря";
		month_date = 10;
		break;

		case "Nov":
		month_str = "Ноября";
		month_date = 11;
		break;

		case "Dec":
		month_str = "Декабря";
		month_date = 12;
		break;

		default:
		alert( "Нет таких значений" );
	}


	let str_res;
	str_res = e._d.toString().substring(0, 15);
	document.querySelector('.happyDataDiv').innerHTML = `<h3>${day} ${month_str}</h3>`;

	async function getGroupsUser() {
		const groupsUserConst = await bridge.send("VKWebAppCallAPIMethod", {
			"method": "users.search",
			"params": {
				group_id: window.obj_user_group_info.group_id,
				count: 500,
				birth_day: day,
				birth_month: month_date,
				has_photo: 1,  
				fields:'photo_id,photo_50,bdate',
				access_token: window.obj_user_group_info.user_auth_token,
				v: "5.103"
			}
		})
		window.obj_user_group_info.happy_list_name_congratulation = '';

		for (var i in groupsUserConst.response.items) {
			window.obj_user_group_info.happy_list_name_congratulation += ' [id'+groupsUserConst.response.items[i].id+'|' + groupsUserConst.response.items[i].first_name + ' '+groupsUserConst.response.items[i].last_name+ 
			'] '+
			'';
		}

		window.obj_user_group_info.happy_list_photo_congratulation = '';
		if(groupsUserConst.response.items.length > 11) {
			for (let i = 0; i < 10; i++) {
				if (groupsUserConst.response.items[i].photo_id != undefined && groupsUserConst.response.items[i].photo_id != null) {
					window.obj_user_group_info.happy_list_photo_congratulation += ',photo'+groupsUserConst.response.items[i].photo_id;
				}
			}
			window.obj_user_group_info.happy_list_photo_congratulation = window.obj_user_group_info.happy_list_photo_congratulation.slice(1); // Удалить запятую в начале
			// console.log(window.obj_user_group_info.happy_list_photo_congratulation);

		}
		document.querySelector('.happyDataDiv').innerHTML += `
		<h3>Найдено ${groupsUserConst.response.count} именинников</h3>
		`;
	};
	getGroupsUser();

};

GroupInfo.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default GroupInfo;
