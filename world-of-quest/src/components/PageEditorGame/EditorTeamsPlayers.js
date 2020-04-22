import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, Segment, Grid, Divider, Header  } from 'semantic-ui-react';
import { ajax_get_list_games_or_groups, ajax_add_or_del_teams_from_game } from './../GetInfoAjax/AdminAjax';



const EditorTeamsPlayers = () => {


  var id_this_game = window.infoUser.editID;
  ajax_get_list_games_or_groups('teams');  /* ЗАГРУЗКА СПИСКА ИГРОКОВ */

  var infoTeams = window.infoUser.info_teams_admin;


  
  const addTeam = (e) => {
    let id_team = e.target.id;
    ajax_add_or_del_teams_from_game(id_team, id_this_game, 'add');
    ReactDOM.render(<EditorTeamsPlayers />,document.getElementById('editorTeamsPlayersCard'));
  };


  const delTeam = (e) => {
    let id_team = e.target.id;
    ajax_add_or_del_teams_from_game(id_team, id_this_game, 'del');
    ReactDOM.render(<EditorTeamsPlayers />,document.getElementById('editorTeamsPlayersCard'));
  };


  return (
   <div align='center'>
   <Segment placeholder>
   <Grid columns={2} relaxed='very' stackable>
   <Grid.Column>
   <Header>Список не участвующих команд</Header>
   {
    infoTeams.filter(e => {
      return (e.id_game != id_this_game)
    }).map(e => {
      return (
        <Card>
        <Card.Content>
        <Card.Header>{e.name}</Card.Header>
        <Card.Meta>Игроков - {JSON.parse(e.id_users).length}</Card.Meta>
        <Card.Description>
        <strong>Капитан - </strong> {e.captain_name}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
        <Button id={e.id} onClick={addTeam} basic color='green'>
        Добавить
        </Button>
        </div>
        </Card.Content>
        </Card>
        )
    })
  }
  </Grid.Column>

  <Grid.Column>
  <Header>Список участников</Header>
  {
   infoTeams.filter(e => {
    return (e.id_game == id_this_game)
  }).map(e => {
    return (
      <Card>
      <Card.Content>
      <Card.Header>{e.name}</Card.Header>
      <Card.Meta>Игроков - {JSON.parse(e.id_users).length}</Card.Meta>
      <Card.Description>
      <strong>Капитан - </strong> {e.captain_name}
      </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <div className='ui two buttons'>
      <Button id={e.id} onClick={delTeam} basic color='red'>
      Удалить
      </Button>
      </div>
      </Card.Content>
      </Card>
      )
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