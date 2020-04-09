import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { Calendar, Box, Gray } from "@happysanta/vk-app-ui";
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';

import onChange from './GroupInfo';


const osName = platform();


async function wallPost() {
	const wallPostResult = await bridge.send("VKWebAppShowWallPostBox", {
		"message": window.obj_user_group_info.start_congratulation+'\n\n'+window.obj_user_group_info.happy_list_name_congratulation+'\n\n'+window.obj_user_group_info.random_congratulation,
		attachments: window.obj_user_group_info.happy_list_photo_congratulation,
	});
};

const getDate = (e) => {
	console.log(e);
};

const randomCongratulation = () => {
	let r = Math.round(Math.random()*10);
	window.obj_user_group_info.random_congratulation = congratulation[r];
	document.querySelector('.Textarea__el').value = window.obj_user_group_info.random_congratulation;
};


const PostOptions = ({id, go}) => {

  // С настройками
  if(window.obj_user_group_info.nameTitleOptions == 1 ) {
  	return(

  		<Panel id={id}>
  		<PanelHeader 
  		left={<PanelHeaderButton onClick={go} data-to="groupinfo">
  		{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
  		</PanelHeaderButton>}
  		>Пост с настройками
  		</PanelHeader>

  		<Group>

  		<Cell asideContent={<Switch defaultChecked />}>
  		Комментарии к записям
  		</Cell>
  		<Cell asideContent={<Switch disabled />}>
  		От имени группы (если это возможно)
  		</Cell>


  		<Div align='center'>

  		<Cell>
  		Дата публикации <br/>
  		<Calendar onChange={getDate} />
  		</Cell>

 
  		<Button onClick={randomCongratulation} mode="outline">Случайное поздравление</Button>
  		

  		<Box>
  		<Textarea className='randCongBlock'  placeholder="Поздравление" rows={1} />

  		</Box>


  		<Button onClick={wallPost} mode="commerce">Разместить пост</Button>

  		</Div>


  		</Group>
  		</Panel>
  		);
  } 
  // Без настроек
  else if(window.obj_user_group_info.nameTitleOptions == 0 ) {
  	return(

  		<Panel id={id}>
  		<PanelHeader 
  		left={<PanelHeaderButton onClick={go} data-to="groupinfo">
  		{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
  		</PanelHeaderButton>}
  		>Пост без настроек
  		</PanelHeader>
  		<Group>
  		<Div align='center'>
  		<Button onClick={randomCongratulation} mode="outline">Случайное поздравление</Button> 		
  		<Box>
  		<Textarea className='randCongBlock'  placeholder="Поздравление" rows={1} />
  		</Box>
  		<Button onClick={wallPost} mode="commerce">Разместить пост</Button>
  		</Div>
  		</Group>
  		</Panel>
  		);
  }

}


const congratulation = [

"Очень приятно вас поздравлять ! \n Хочу в этот праздник вам пожелать \n Чтоб била энергия жизни ключом \n Любая работа была нипочем",

"Вам есть чем гордиться , что праздновать ,\n Куда никогда не опаздывать ,\n О чем волноваться , чем жить ,\n И дело , что стоит любить !",

"Желаю здоровья , активности ,\n В работе – большой продуктивности !\n Ценить коллектив , без сомнения ,\n Всегда быть его украшением !",

"Желаем счастья в этот день,\n Тепла от всех кто будет рядом.\n Улыбок светлых на лице\n И солнечных лучей в награду.\n Желаем множества удач,\n Желаем молодости вечной,\n Пусть все исполнятся мечты\n И счастье будет бесконечным!",

"Поздравляю любимую группу с Днём Рожденья. Желаю ей процветания. И спасибо всем, кто активно участвуют в её жизни.",

"Желаем счастья в этот день,\n Тепла от всех кто будет рядом.\n Улыбок светлых на лице\n И солнечных лучей в награду.\n Желаем множества удач,\n Желаем молодости вечной,\n Пусть все исполнятся мечты\n И счастье будет бесконечным!",

"Поздравляю любимую группу с Днём Рожденья. Желаю ей процветания. И спасибо всем, кто активно участвуют в её жизни.",

"Очень приятно вас поздравлять ! \n Хочу в этот праздник вам пожелать \n Чтоб била энергия жизни ключом \n Любая работа была нипочем",

"Поздравляю любимую группу с Днём Рожденья. Желаю ей процветания. И спасибо всем, кто активно участвуют в её жизни.",

"Поздравляю любимую группу с Днём Рожденья. Желаю ей процветания. И спасибо всем, кто активно участвуют в её жизни.",

];









PostOptions.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default PostOptions;
