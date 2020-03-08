
// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&response_type=token&v=5.103

// https://api.vk.com/method/users.get?user_id=210700286&v=5.52

// popup  - page
// https://oauth.vk.com/authorize?client_id=7348710&display=popup&redirect_uri=https://kullep.github.io/vk_api_happy/&scope=groups&response_type=token&v=5.103&state=123456

// https://oauth.vk.com/authorize?client_id=7348710&display=popup&redirect_uri=https://vk.com/app7348710_260069152&scope=groups&response_type=token&v=5.103



// $.ajax({
// 	url: `https://api.vk.com/method/groups.getById?group_ids=102087446&access_token=cb6a9ab3a5be20e329d7a60255b71be1414c6287934805a6dfe6d976820edd989da46d43dcd4d32122c0d&v=5.103`,
// 	method: 'GET',
// 	dataType: 'JSONP',
// 	success: function (d) {
// 		console.log(d);
// 	}
// });

var date_birthday;


function GetUrl(method, params) {
	if(!method) throw new new Error('Нет метода');
	params = params || {}; // Либо равны либо пустой объект

	params['access_token'] = '97317c86d006e0ff3fcd1c5c740471ff6a3eb1b89a6cc66cc11e7c5fadf2b38732e803fbe377aa5f0d3a4';

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
		console.log(data);
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

			<img class="border border-secondary rounded-circle circle" src="${d.photo_100}" />
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

	console.log(e);
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

	date_birthday = day+'.'+month_date;;
	document.querySelector('#birth_day_men_date').innerHTML =day + ' ' + month_str;
}







document.getElementById('search_group').onclick =() => {

	document.querySelector('#list_group_user').innerHTML = '';

	let group_name = document.querySelector('#search_group_id').value;



	sendRequest('groups.search', {q: group_name}, function (data) {
		for(let i=0; i<=data.response.items.length; i++) {

			let d = data.response.items[i];
			console.log(data);
			document.querySelector('#list_group_user').innerHTML +=`
			<a class="nav-link" id='${d.id}' href='#' >
			<li class="list-group-item  ">

			<img class="border border-secondary rounded-circle circle" src="${d.photo_100}" />
			<span class="text-dark h6">${d.name}</span>	

			</li></a>
			`;
		}
	});

}