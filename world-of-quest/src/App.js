import React from 'react';

import { Route } from 'react-router-dom';


import Home from './panels/Home';
import AdminAuth from './panels/AdminAuth';
import AdminMainPage from './panels/AdminMainPage';
import PlayerAuth from './panels/PlayerAuth';
import PlayerRegister from './panels/PlayerRegister';
import PlayerMainPage from './panels/PlayerMainPage';
import JoinAndAddGame from './panels/JoinAndAddGame';
import InfoGame from './panels/InfoGame';
import CreateNewGame from './panels/CreateNewGame';
import CreateNewTeam from './panels/CreateNewTeam';
import InfoGameForAdmin from './panels/InfoGameForAdmin';
import InfoTeamForAdmin from './panels/InfoTeamForAdmin';
import EditGameForAdmit from './panels/EditGameForAdmit';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './components/main.css';

import data_json_admins from './json-info/admins.json';
import data_json_users from './json-info/users.json';
import data_json_teams from './json-info/teams.json';

const App = () => {


// Проверка авторизации пользователя через куки
const accessAccount = () => {
  if(localStorage.getItem('authLoginName') !== '' && localStorage.getItem('authLoginName') !== null) {
    let name =  localStorage.getItem('authLoginName');
    var data_json;

    if(localStorage.getItem('authLoginStatus') === 'admin') {
      data_json = data_json_admins;
      window.infoUser.status = 'admin'; 
      window.infoUser.jsonInfoTeams = data_json_teams; // ЗАГРУЗКА ВСЕХ КОМАНД
    }
    else if (localStorage.getItem('authLoginStatus') === 'player') {
      data_json = data_json_users;
      window.infoUser.status = 'player';
    }
    for(let i = 0; i < data_json.length; i++) { // ЗАГРУЗКА ПРОФИЛЯ
      if(data_json[i].login === name)
      {
        window.infoUser.jsonInfo = data_json[i];
      }
      for(let i = 0; i < data_json.length; i++) { // ЗАГРУЗКА КОМАНДЫ
        if(window.infoUser.jsonInfo.team === data_json_teams[i].code) {
         window.infoUser.jsonInfoTeams = data_json_teams[i]; 
       }
     }
   }
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


  <Route path='/join-and-add-game' component={JoinAndAddGame} />
  <Route path='/page-info-game' component={InfoGame} />


  </div>
  );
}


export default App;