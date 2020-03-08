
// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&response_type=token&v=5.103

// https://api.vk.com/method/users.get?user_id=210700286&v=5.52

// popup  - page
// https://oauth.vk.com/authorize?client_id=7348710&display=popup&redirect_uri=https://kullep.github.io/vk_api_happy/&scope=groups&response_type=token&v=5.103&state=123456

// https://oauth.vk.com/authorize?client_id=7348710&display=popup&redirect_uri=https://vk.com/app7348710_260069152&scope=groups&response_type=token&v=5.103




// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://vk.com/app7348710_260069152&scope=group&response_type=code&v=5.103




// https://oauth.vk.com/access_token?client_id=7348710&client_secret=cyyHvSRIS2nQhBjF2Ivo&redirect_uri=https://vk.com/app7348710_260069152&code=5991c9c25b82a1d145




// $.ajax({
// 	url: `https://oauth.vk.com/access_token?client_id=7348710&client_secret=cyyHvSRIS2nQhBjF2Ivo&redirect_uri=https://vk.com/app7348710_260069152&code=6a3e4ed4c27703922c`,
// 	method: 'POST',
// 	dataType: 'JSONP',
// 	success: function (d) {
// 		console.log(d);
// 	}
// });

// Загрузка мемов
// $.ajax({
// 	type: 'POST',
// 	url: `https://oauth.vk.com/access_token?client_id=7348710&client_secret=cyyHvSRIS2nQhBjF2Ivo&redirect_uri=https://vk.com/app7348710_260069152`,
// 	data: 'code=a4cd56eaaac5afe5d6',
// 	success: function(data){
// 		console.log(data)
// 		//$('#main_block_memes').html(data);
// 	}
// });




if(localStorage.hasOwnProperty('access_token_this_vk_api_happy')) { // Проверка наличия ключа в куках если он есть
	document.getElementById('form_authorized').classList.remove("d-block");
	document.getElementById('form_authorized').classList.add("d-none");	
	document.getElementById('form_authorized').innerHTML = ''; // Удаление формы
} else {
	document.getElementById('form_access_token').onclick = () => {
	let access_token = document.getElementById('form_access_token_input').value;
	localStorage.setItem('access_token_this_vk_api_happy', access_token);
	window.location = window.location;
}
}


 


let now = new Date();
let tomorrow = now.getDate()+1;
let month_tt = now.getMonth();
var obj_user_group_info = {
	group_id: '',
	bdate: '',
}
obj_user_group_info.bdate += tomorrow+'.'+month_tt;
document.querySelector('#birth_day_men_date').innerHTML = obj_user_group_info.bdate;


function GetUrl(method, params) {
	if(!method) throw new new Error('Нет метода');
	params = params || {}; // Либо равны либо пустой объект
	params['access_token'] = localStorage.getItem('access_token_this_vk_api_happy');
	return `https://api.vk.com/method/${method}?${$.param(params)}&v=5.103`;
}


const sendRequest = (method, params, func) => {
	$.ajax({
		url: GetUrl(method, params),
		method: 'GET',
		dataType: 'JSONP',
		success: func
	});
}


const getIdGroupUser = () => {
	sendRequest('groups.get', {count: 7}, function (data) {
		drowGroupsOnLoad(data.response.items);
	});
}



const drowGroupsOnLoad = (groups) => {

	groups.forEach( function(e) {

		sendRequest('groups.getById', {group_id: e}, function (data) {
			let d = data.response[0];
			document.querySelector('#list_group_user').innerHTML +=`
			<a id="${d.id}" onclick="btn_get_group_info($(this).attr('id'));" class="nav-link" href="javascript:void(0);" >
			<li class="list-group-item  ">
			<img class="border border-secondary rounded-circle circle" src="${d.photo_50}" />
			<span class="text-dark h6">${d.name}</span>	
			</li></a>
			`;
		});
	});

}




getIdGroupUser();


const btn_get_group_info = (e) => {
	document.querySelector('#group_info_users').classList.add("d-block");
	document.querySelector('#group_info_users').classList.remove("d-none");
	document.querySelector('body').classList.add("bg-dark-1");
	obj_user_group_info.group_id = e; // ID Группы в объект
}


const string_date_text = (e) => {
	let month = e.date._a[1];
	let day = e.date._a[2];

	let month_str;
	let month_date;

	switch (month) {
		case 0:
		month_str = "Января";
		month_date = 1;
		break;

		case 1:
		month_str = "Февраля";
		month_date = 2;
		break;

		case 2:
		month_str = "Марта";
		month_date = 3;
		break;

		case 3:
		month_str = "Апреля";
		month_date = 4;
		break;

		case 4:
		month_str = "Мая";
		month_date = 5;
		break;

		case 5:
		month_str = "Июня";
		month_date = 6;
		break;

		case 6:
		month_str = "Июоя";
		month_date = 7;
		break;

		case 7:
		month_str = "Августа";
		month_date = 8;
		break;

		case 8:
		month_str = "Сентября";
		month_date = 9;	
		break;

		case 9:
		month_str = "Октабря";
		month_date = 10;
		break;

		case 10:
		month_str = "Ноября";
		month_date = 11;
		break;

		case 11:
		month_str = "Декабря";
		month_date = 12;
		break;

		default:
		alert( "Нет таких значений" );
	}

	obj_user_group_info.bdate = day+'.'+month_date;;
	document.querySelector('#birth_day_men_date').innerHTML =day + ' ' + month_str;
}


const drowUserBirthDay = (e) => {
	let str = e.slice(1); // Убрать запятую в наале


	sendRequest('users.get', {user_ids: str, fields:'photo_50,quotes'}, function (data) {

		let d = data.response;

		document.getElementById('link_users_list').innerHTML = '';
		document.getElementById('birthday_mans_list').innerHTML = '';

		for(let i=0; i < d.length; i++) {


			document.getElementById('link_users_list').innerHTML += `<p>https://vk.com/id${d[i].id}</p>`;


			document.getElementById('birthday_mans_list').innerHTML += `
			<a id="${d[i].id}" class="col-6 nav-link" href="https://vk.com/id${d[i].id}" >
			<li class="list-group-item">

			<img class="border border-secondary rounded-circle circle" src="${d[i].photo_50}" />
			<span class="text-dark h6">${d[i].last_name} ${d[i].first_name}</span>	

			</li></a>
			`
		}
	});
}




document.getElementById('birth_day_men').onclick =() => {
	sendRequest('groups.getMembers', {group_id: obj_user_group_info.group_id, fields:'bdate'}, function (data) {
		
		regexp = new RegExp(obj_user_group_info.bdate);
		let birth_num = 0;
		var b_str_user = '';

		for(let i=0; i<= 400; i++) {
			let d = data.response.items[i];

			if(d.bdate != undefined) {
				let text_d = d.bdate;

				if(text_d.match(regexp) != null) {
					birth_num += 1;
					b_str_user += ','+d.id;
				}
			}
		}

		if(birth_num == 0) {
			document.getElementById('birthday_mans_list').innerHTML = `<h3 class="col-12">Вы не обнаружили именинников</h3>`;
		}
		else {
			drowUserBirthDay(b_str_user);
		}
	});
}





document.getElementById('search_group').onclick =() => {
	document.querySelector('#list_group_user').innerHTML = '';
	let group_name = document.querySelector('#search_group_id').value;
	sendRequest('groups.search', {q: group_name}, function (data) {
		for(let i=0; i<=data.response.items.length; i++) {
			let d = data.response.items[i];
			document.querySelector('#list_group_user').innerHTML +=`
			<a id="${d.id}" onclick="btn_get_group_info($(this).attr('id'));" class="nav-link" href="javascript:void(0);" >
			<li class="list-group-item  ">
			<img class="border border-secondary rounded-circle circle" src="${d.photo_50}" />
			<span class="text-dark h6">${d.name}</span>	
			</li></a>
			`;
		}
	});
}
