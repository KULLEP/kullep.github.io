import $ from "jquery";
import { rerenderNewTreeFunc } from './../RerenderNewTree';

const url = 'http://php.test/php/admin/';


/* ВОЙТИ В КОМАНДУ */
export const ajax_auth_in_team = (code, id_user) => {

	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'auth_in_team.php',
		data: {
			code: code,
			id_user: id_user
		},
		success: function(data){
			//window.infoUser.info_user = JSON.parse(data);
			// IZTM6
			if(data === '0') {
				alert('Такой команды нет');
			}
			else rerenderNewTreeFunc('1');
		}
	});	
};


/* НОВАЯ ИГРА */
export const ajax_create_new_game = (nameGame, dateGame, timeGame) => {

	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'create_new_game.php',
		data: {
			nameGame: nameGame,
			dateGame: dateGame,
			timeGame: timeGame
		},
		success: function(data){
			//window.infoUser.info_user = JSON.parse(data);
			console.log(data);
		}
	});	
};


/* НОВАЯ КОМАНДА */
export const ajax_create_new_team = (nameTeam, randomCode, captain, captain_id) => {
	console.log(nameTeam+' '+randomCode+' '+captain+ ' '+captain_id);
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'create_new_team.php',
		data: {
			nameTeam: nameTeam,
			randomCode: randomCode,
			captain: captain,
			captain_id: captain_id
		},
		success: function(data){
			//window.infoUser.info_user = JSON.parse(data);
			console.log(data);
		}
	});	
};


/* СПИСОК ПОДСКАЗОК ПО ID */
export const ajax_get_list_hints_by_id = (id_game) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_list_hints_by_id.php',
		data: {
			id_game: id_game
		},
		success: function(data){
			window.infoUser.list_info_hints_by_id = JSON.parse(data);
			//console.log(data);
		}
	});	
};


/* СПИСОК ГРУПП ПО ID */
export const ajax_get_list_teams_by_id = (id_game) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_list_teams_by_id.php',
		data: {
			id_game: id_game
		},
		success: function(data){
			window.infoUser.list_info_teams_by_id = JSON.parse(data);
			//console.log(data);
		}
	});	
};


/* СПИСОК ИГРОКОВ ПО ID */
export const ajax_get_list_users_by_id = (id_game) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_list_users_by_id.php',
		data: {
			id_game: id_game
		},
		success: function(data){
			window.infoUser.list_info_users_by_id = JSON.parse(data);
			//console.log(data);
		}
	});	
};


/* СПИСОК ВОПРОСОВ ПО ID */
export const ajax_get_list_tasks_by_id = (id_game) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_list_tasks_by_id.php',
		data: {
			id_game: id_game
		},
		success: function(data){
			window.infoUser.list_info_tasks_by_id = JSON.parse(data);
			//console.log(JSON.parse(data));
		}
	});	
};


/* СПИСОК ГРУПП ИЛИ ИГР */
export const ajax_get_list_games_or_groups = (type) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_list_games_or_groups.php',
		data: {
			type: type
		},
		success: function(data){
			if(type === 'games') {
				window.infoUser.info_games_admin = JSON.parse(data);
			} else if(type === 'teams') {
				window.infoUser.info_teams_admin = JSON.parse(data);
			}
			// console.log(data);
		}
	});	
};



/* СПИСОК ПОЛЬЗОВАТЕЛЕЙ */
export const ajax_get_list_users = () => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_list_users.php',
		data: '',
		success: function(data){
			window.infoUser.list_users_admin = JSON.parse(data);
			// console.log(data);
		}
	});	
};


/* РЕГИСТРАЦИЯ ПОЛЬЗОВАТЕЛЯ */
export const ajax_register_user = (login, password) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'register_user.php',
		data: {
			login: login,
			password: password
		},
		success: function(data){
			//window.infoUser.list_users_admin = JSON.parse(data);
			alert(data);
			if(data === 'Успешная регистрация') {
				window.location = '/#/player-auth';
			}		
		}
	});	
};

/* ДОБАВЛЕНИЕ ИЛИ УДАЛЕНИЕ КОМАНДЫ ИЗ ИГРЫ */
export const ajax_add_or_del_teams_from_game = (id_team, id_game, type) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'add_or_del_teams_from_game.php',
		data: {
			id_team: id_team,
			id_game: id_game,
			type: type
		},
		success: function(data){
			//window.infoUser.list_users_admin = JSON.parse(data);
			//console.log(data);		
		}
	});	
};
