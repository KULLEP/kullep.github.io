import data_json_games from '../json-info/games.json';

export const getInfoGamesJson = () => {

for(let i = 0; i < data_json_games.length; i++) { // Перебор игр
	    let active_game = window.infoUser.jsonInfo.activeGame; // Текущая игра пользователя
	    let game = data_json_games[i].game;
	    if(active_game === game)
	    {
	    	window.infoUser.jsonInfoGame = data_json_games[i];
	    }
	}

}