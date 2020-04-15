import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect } from 'react-router-dom';
import data_json_teams from './../../json-info/teams.json';
import { Card, Button, Input, Segment, Form, Grid, Divider, Header  } from 'semantic-ui-react';

const EditorTeamsPlayers = () => {

 var arrData = data_json_teams;
 var nameGame = window.infoUser.editName;


 /* NEW JSON TEAM */
 if(window.infoUser.newJsonInfoTeams.length !== 0) {
  arrData = window.infoUser.newJsonInfoTeams;
}
/* NEW JSON TEAM */

const addTeam = (e) => {
  let id = e.target.id;
  for (let i = 0; i < arrData.length; i++) {
    if (arrData[i].code === id) {
      arrData[i].game = nameGame;
      window.infoUser.newJsonInfoTeams = arrData;
      ReactDOM.render(<EditorTeamsPlayers />,document.getElementById('editorTeamsPlayersCard'));
        break;
      }
  }
  console.log(arrData);
  alert('В консоли результат');
};

const delTeam = (e) => {
  let id = e.target.id;

  for (let i = 0; i < arrData.length; i++) {
    if (arrData[i].code === id) {
      arrData[i].game = '';
      window.infoUser.newJsonInfoTeams = arrData;
      ReactDOM.render(<EditorTeamsPlayers />,document.getElementById('editorTeamsPlayersCard'));
        break;
      }
    }
    console.log(arrData);
    alert('В консоли результат');
  };


  return (
   <div align='center'>
   <Segment placeholder>
   <Grid columns={2} relaxed='very' stackable>
   <Grid.Column>
   <Header>Список не участвующих команд</Header>
   {
    arrData.map(e => {
      if(e.game !== window.infoUser.editName) {
        return (
          <Card>
          <Card.Content>
          <Card.Header>{e.name}</Card.Header>
          <Card.Meta>Игроков - {e.players.length}</Card.Meta>
          <Card.Description>
          <strong>Капитан - </strong> {e.captain}
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
          <Button id={e.code} onClick={addTeam} basic color='green'>
          Добавить
          </Button>
          </div>
          </Card.Content>
          </Card>
          )
      }
    })
  }
  </Grid.Column>

  <Grid.Column>
  <Header>Список участников</Header>
  {
    arrData.map(e => {
      if(e.game == window.infoUser.editName) {
        return (
          <Card>
          <Card.Content>
          <Card.Header>{e.name}</Card.Header>
          <Card.Meta>Игроков - {e.players.length}</Card.Meta>
          <Card.Description>
          <strong>Капитан - </strong> {e.captain}
          </Card.Description>
          </Card.Content>
          <Card.Content extra>
          <div className='ui two buttons'>
          <Button id={e.code} onClick={delTeam} basic color='red'>
          Удалить
          </Button>
          </div>
          </Card.Content>
          </Card>
          )
      }
    })
  }
  </Grid.Column>
  </Grid>

  <Divider className='d-none d-md-block' vertical>|||</Divider>
  </Segment>
  </div>
  );
}


export default EditorTeamsPlayers;