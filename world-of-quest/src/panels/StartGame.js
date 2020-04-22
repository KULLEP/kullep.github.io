import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { ajax_get_and_edit_time } from './../components/GetInfoAjax/AdminStartStopGameAjax';

const StartGame = () => {


  let id_game = window.localStorage.getItem('id_game');

  


  if(window.infoUser.game_is_start_second === true) {
    setTimeout(() => { clearInterval(window.interval_second); }, 0);
  }
  window.infoUser.game_is_start_second = false;

  /* Повторить с интервалом 5 секунд */
  window.interval_second = setInterval(() => {
    if (window.location.hash === '#/start-game') {
     /* Повторить с интервалом 5 секунды */
     let timer_interval_2 = setInterval(() => {
       ajax_get_and_edit_time(id_game);
       console.log('-5 seconds');
     }, 5000);
     setTimeout(() => { clearInterval(timer_interval_2); }, 5000);
   }
 }, 5000);
  window.infoUser.game_is_start_second = true;


  return (
    <div>
    <ToolbarMy backlink='admin-main-page' heightTitle='Режим игры' />
    </div>
    );
}


export default StartGame;