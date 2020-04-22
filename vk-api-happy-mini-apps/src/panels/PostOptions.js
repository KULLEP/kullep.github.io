import React from 'react';
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import { Calendar, Box } from "@happysanta/vk-app-ui";
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';

// import onChange from './GroupInfo';


const osName = platform();


const getDate = (e) => {
  console.log(e);
};

const randomCongratulation = () => {
  let r = Math.round(Math.random()*10);
  window.obj_user_group_info.random_congratulation = congratulation[r];
  document.querySelector('.Textarea__el').value = window.obj_user_group_info.random_congratulation;
};




const PostOptions = ({id, go}) => {

  var commentsCloseOrOpen = 0; /* 0 - комментарии включены, 1 - комментарии отключены */
  var postWallGroupOrUserVal = true; /* true - group, false - user */
  var postId;

  const postWallGroupOrUser = (e) => {
  postWallGroupOrUserVal = e.target.checked; // true, false
  if(postWallGroupOrUserVal === true) {
    ReactDOM.render(
      <p id='text_post_wall_switch'>Запись на стену группы</p>,
      document.getElementById("text_post_wall_switch"));
  } else if(postWallGroupOrUserVal === false) {
    ReactDOM.render(
      <p id='text_post_wall_switch'>Запись на свою стену</p>,
      document.getElementById("text_post_wall_switch"));
  }
};

const commentsClose = (e) => {
  commentsCloseOrOpen = +!e.target.checked; // true - 1, false - 0 
  if(commentsCloseOrOpen === 1) {
    ReactDOM.render(
     <p id='text_comments_switch'>Комментарии к записям отключены</p>,
     document.getElementById("text_comments_switch"));
  } else if(commentsCloseOrOpen === 0) {
    ReactDOM.render(
     <p id='text_comments_switch'>Комментарии к записям включены</p>,
     document.getElementById("text_comments_switch"));
  }
};

async function wallPost() {
  if(postWallGroupOrUserVal === true) { // На стену группы
    postId = '-' + window.obj_user_group_info.group_id;
  } else if(postWallGroupOrUserVal === false) { // На стену пользователя
   postId = window.obj_user_group_info.user_id;
 }


 const wallPostResult = await bridge.send("VKWebAppShowWallPostBox", {
  "owner_id": postId,
  "close_comments": commentsCloseOrOpen,
  "message": window.obj_user_group_info.start_congratulation+'\n\n'+window.obj_user_group_info.happy_list_name_congratulation+'\n\n'+window.obj_user_group_info.random_congratulation,
  attachments: window.obj_user_group_info.happy_list_photo_congratulation,
});
};




// С настройками
if(window.obj_user_group_info.nameTitleOptions === '1' ) {
  return(
    <Panel id={id}>

    <PanelHeader 
    left={<PanelHeaderButton onClick={go} data-to="groupinfo">
    {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
    </PanelHeaderButton>}
    >Пост с настройками
    </PanelHeader>

    <Group>

    <Cell asideContent={<Switch onChange={postWallGroupOrUser} defaultChecked />}>
    <p id='text_post_wall_switch'>Запись на стену группы</p>
    </Cell>

    <Cell asideContent={<Switch onChange={commentsClose} defaultChecked />}>
    <p id='text_comments_switch'>Комментарии к записям включены</p>
    </Cell>


    <Cell asideContent={<Switch disabled />}>
    <p id='text_from_group_of_user_switch'>От имени группы (если это возможно)</p>
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
else if(window.obj_user_group_info.nameTitleOptions === '0' ) {
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
