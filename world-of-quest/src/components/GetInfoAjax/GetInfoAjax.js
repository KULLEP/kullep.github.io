import $ from "jquery";

const url = 'http://php.test/php/';


/* ПОЛУЧИТЬ ИНФОРМАЦИЮ О ИГРЕ */
export const ajax_get_info_game = (id_game) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_info_game.php',
		data: {
			id_game: id_game
		},
		success: function(data){
			window.infoUser.info_game = JSON.parse(data);
			//console.log(data);
		}
	});	
};


/* ПОЛУЧИТЬ ИНФОРМАЦИЮ О ЗАДАЧЕ */
export const ajax_get_info_task = (id_game, num) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_info_task.php',
		data: {
			id_game: id_game,
			num: num
		},
		success: function(data){
			window.infoUser.info_task = JSON.parse(data);
			//console.log(data);
		}
	});	
};


/* ПОЛУЧИТЬ ИНФОРМАЦИЮ О КАОМАНДЕ */
export const ajax_get_info_team = (idTeam) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_info_team.php',
		data: {data: idTeam},
		success: function(data){
			window.infoUser.info_team = JSON.parse(data);
			//console.log(data);
		}
	});	
};


/* АВТОРИЗАЦИЯ */
export const ajax_auth = (login, password, status) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'auth.php',
		data: {
			login: login,
			password: password,
			status: status
		},
		success: function(data){
			if(data !== '0') {
				window.infoUser.info_user = JSON.parse(data);
				window.infoUser.status_auth = 1;
			} else alert('Неверный логин или пароль');
			// console.log(data);
		}
	});	
};


/* 
ДОБАВИТЬ ОТВЕТ

id_team - id команды
status - правильный ответ или ложный
new_answers_team - новый список ответов
*/
export const ajax_post_answer = (id_team, answer) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'post_answer.php',
		data: {
			id_team: id_team,			
			answer: answer
		},
		success: function(data){
			alert(data);			
		}
	});	
};


/* НОВАЯ ЗАДАЧА || НОВЫЙ ВОПРОС || НОВОЕ ЗАДАНИЕ */
export const ajax_post_new_task = () => {
	let id_team = window.infoUser.info_team.id;
	let task = +window.infoUser.info_team.active_task;
	let new_task = task + 1;
	console.log(new_task);
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'post_new_task.php',
		data: {
			id_team: id_team,
			task: new_task
		},
		success: function(data){
			//window.infoUser.info_user = JSON.parse(data);
			console.log(data);
		}
	});	
};


/* ПОЛУЧИТЬ ПОДСКАЗКУ */
export const ajax_get_hint = () => {
	let active_task = +window.infoUser.info_team.active_task;
	let active_hint = +window.infoUser.info_team.active_hint;
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'get_hint.php',
		data: {
			active_task: active_task,
			active_hint: active_hint
		},
		success: function(data){
			window.infoUser.active_hint = data;
		}
	});	
};

export const ajax_full_info = () => {
	let status = localStorage.getItem('authStatus');
	let login = localStorage.getItem('authLogin');
	let password = localStorage.getItem('authPassword');
	ajax_auth(login, password, status); /* Загрузка инфы пользователя */
	window.infoUser.status = status; /* Статус пользователя */

    let id_team = window.infoUser.info_user.id_team; // id Команды
    if(id_team !== undefined && id_team !== '0') {
    	ajax_get_info_team(id_team); /* Загрузка инфы команды  */


    let id_game = window.infoUser.info_team.id_game; // id Игры
    let num = window.infoUser.info_team.active_task; // Номер вопроса
    ajax_get_info_task(id_game, num); /* Загрузка инфы задачи  */

    ajax_get_info_game(id_game); /* Загрузка инфы игры  */
    ajax_get_hint(); /* Загрузка подсказки  */
}

};