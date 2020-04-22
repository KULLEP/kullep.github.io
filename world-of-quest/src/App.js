import React from 'react';

import { Route } from 'react-router-dom';


import Home from './panels/Home';
import AdminAuth from './panels/AdminAuth';
import AdminMainPage from './panels/AdminMainPage';
import PlayerAuth from './panels/PlayerAuth';
import PlayerRegister from './panels/PlayerRegister';
import PlayerMainPage from './panels/PlayerMainPage';
import InfoGame from './panels/InfoGame';
import CreateNewGame from './panels/CreateNewGame';
import CreateNewTeam from './panels/CreateNewTeam';
import InfoGameForAdmin from './panels/InfoGameForAdmin';
import InfoTeamForAdmin from './panels/InfoTeamForAdmin';
import EditGameForAdmit from './panels/EditGameForAdmit';
import StartGame from './panels/StartGame';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './components/main.css';

// import data_json_admins from './json-info/admins.json';
// import data_json_users from './json-info/users.json';
// import data_json_teams from './json-info/teams.json';

import 'bootstrap-4-react';


import { ajax_full_info } from './components/GetInfoAjax/GetInfoAjax';

const App = () => {



// Проверка авторизации пользователя через куки
const accessAccount = () => {
  if(localStorage.getItem('authLogin') !== null && localStorage.getItem('authPassword') !== null) {
    ajax_full_info();
    // let status = localStorage.getItem('authStatus');
    // let login = localStorage.getItem('authLogin');
    // let password = localStorage.getItem('authPassword');
    // ajax_auth(login, password, status); /* Загрузка инфы пользователя */

    // let id_team = window.infoUser.info_user.id_team; // id Команды
    // ajax_get_info_team(id_team);  Загрузка инфы команды  
    // window.infoUser.status = status; // Статус пользователя

    // let id_game = window.infoUser.info_team.id_game; // id Игры
    // let num = window.infoUser.info_team.active_task; // Номер вопроса
    // ajax_get_info_task(id_game, num); /* Загрузка инфы задачи  */
    
    // ajax_get_info_game(id_game); /* Загрузка инфы игры  */
  }
}
accessAccount();





return (
  <div>

  <Route exact path='/' component={Home} />
  <Route exact path='/home' component={Home} />

  <Route path='/player-auth' render={ () => <PlayerAuth />} />
  <Route path='/player-register' component={PlayerRegister} />
  <Route path='/player-main-page' render={ () => <PlayerMainPage />} />

  <Route path='/admin-auth' component={AdminAuth} />
  <Route path='/admin-main-page' render={ () => <AdminMainPage /> } />
  <Route path='/info-game-for-admin' render={ () => <InfoGameForAdmin /> } />
  <Route path='/edit-game-for-admin' render={ () => <EditGameForAdmit /> } />
  <Route path='/info-team-for-admin' render={ () => <InfoTeamForAdmin /> } />


  <Route path='/create-new-game' component={CreateNewGame} />
  <Route path='/create-new-team' component={CreateNewTeam} />


  <Route path='/page-info-game' component={InfoGame} />
  <Route path='/start-game' component={StartGame} />

  </div>
  );
}


export default App;