
// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&response_type=token&v=5.103

// https://api.vk.com/method/users.get?user_id=210700286&v=5.52

// popup  - page
// https://oauth.vk.com/authorize?client_id=7348710&display=popup&redirect_uri=https://kullep.github.io/vk_api_happy/&scope=groups&response_type=token&v=5.103&state=123456

// https://oauth.vk.com/authorize?client_id=7348710&display=popup&redirect_uri=https://vk.com/app7348710_260069152&scope=groups&response_type=token&v=5.103



// CODE
// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://vk.com/app7348710_260069152&scope=wall,groups&response_type=code&v=5.103

// ACCESS TOKEN
// https://oauth.vk.com/access_token?client_id=7348710&client_secret=cyyHvSRIS2nQhBjF2Ivo&redirect_uri=https://vk.com/app7348710_260069152&code=17566fe4606a6532fe




// https://oauth.vk.com/access_token?client_id=7348710&client_secret=cyyHvSRIS2nQhBjF2Ivo&redirect_uri=https://vk.com/app7348710_260069152&code=5991c9c25b82a1d145




// $.ajax({
// 	url: `https://oauth.vk.com/access_token?client_id=7348710&client_secret=cyyHvSRIS2nQhBjF2Ivo&redirect_uri=https://vk.com/app7348710_260069152&code=6a3e4ed4c27703922c`,
// 	method: 'POST',
// 	dataType: 'JSONP',
// 	success: function (d) {
// 		console.log(d);
// 	}
// });




// if(localStorage.hasOwnProperty('access_token_this_vk_api_happy')) { // Проверка наличия ключа в куках если он есть
// 	document.getElementById('form_authorized').classList.remove("d-block");
// 	document.getElementById('form_authorized').classList.add("d-none");	
// 	document.getElementById('form_authorized').innerHTML = ''; // Удаление формы
// } else {
// 	document.getElementById('form_access_token').onclick = () => {
// 		let access_token = document.getElementById('form_access_token_input').value;
// 		localStorage.setItem('access_token_this_vk_api_happy', access_token);
// 		window.location = window.location;
// 	}
// }


/* ЭТО ДЛЯ КАЛЕНДАРЯ */
let now = new Date();
let tomorrow = now.getDate()+1;
let month_tt = now.getMonth();


var obj_user_group_info = {
	group_id: '',
	bdate: '',
	user_id: '',
};

var form_post_happy_info = {
	photo_arr: '',
	happy_list_link: '', // Список ссылок именинников
	happy_list_link_with_name: '', // Список ссылок именинников с именами
	start_congratulation: "Сегодня мы спешим поздравить наших сообщников с ДНЕМ РОЖДЕНИЯ!!!\n\n\n",
	birth_num: 0, // Кол-во именинников
owner_id: 1, // Идентификатор пользователя или сообщества, на стене которого должна быть опубликована запись.
friends_only: '', // 1 — запись будет доступна только друзьям, 0 — всем пользователям. По умолчанию публикуемые записи доступны всем пользователям.
from_group: '', // Данный параметр учитывается, если owner_id < 0 (запись публикуется на стене группы). 1 — запись будет опубликована от имени группы, 0 — запись будет опубликована от имени пользователя (по умолчанию).
message: '', // Текст сообщения (является обязательным, если не задан параметр attachments)
attachments: '', // Список объектов, приложенных к записи и разделённых символом ","
publish_date: '', // Дата публикации записи в формате unixtime. Если параметр указан, публикация записи будет отложена до указанного времени.
close_comments: '' //1 — комментарии к записи отключены. 0 — комментарии к записи включены.
};






/*   Получить случайное поздравление и записать его в textarea   */
const get_random_congratulation = () => { 
	let r = Math.round(Math.random()*10);

	if(form_post_happy_info.birth_num == 1) {
		form_post_happy_info.message = congratulation.solo[r];
	} else if (form_post_happy_info.birth_num > 1) {
		form_post_happy_info.message = congratulation.group[r];
	}
	document.getElementById('congratulation_textarea').innerHTML = form_post_happy_info.message;
};

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




const get_info_user = () => {
	VK.api("users.get", {fields: 'online'}, function (data) {		
		obj_user_group_info.user_id = data.response[0].id; 
	});
};
get_info_user();





const getIdGroupUser = () => {	
	VK.api("groups.get", {count: 7}, function (data) {		
		drowGroupsOnLoad(data.response.items);
	});
};



const drowGroupsOnLoad = (groups) => {
	groups.forEach( function(e) {
		VK.api("groups.getById", {group_id: e}, function (data) {		
			let d = data.response[0];
			document.querySelector('#list_group_user').innerHTML +=`
			<a id="${d.id}" onclick="btn_get_group_info($(this).attr('id'));" class="nav-link" href="javascript:void(0);" >
			<li class="list-group-item  ">
			<img class="border border-secondary rounded-circle circle" src="${d.photo_50}" />
			<span class="text-dark h6">${d.name}</span>	
			</li></a>
			`;	
		});

		// sendRequest('groups.getById', {group_id: e}, function (data) {
		// 	let d = data.response[0];
		// 	document.querySelector('#list_group_user').innerHTML +=`
		// 	<a id="${d.id}" onclick="btn_get_group_info($(this).attr('id'));" class="nav-link" href="javascript:void(0);" >
		// 	<li class="list-group-item  ">
		// 	<img class="border border-secondary rounded-circle circle" src="${d.photo_50}" />
		// 	<span class="text-dark h6">${d.name}</span>	
		// 	</li></a>
		// 	`;
		// });
	});

};




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
	document.querySelector('#birth_day_men_date').innerHTML = day + ' ' + month_str;
}





/* ЗАКРЫТЬ ФОРМУ ИНФЫ О ГРУППЕ */
const btn_group_info_users_back = () => {
	document.getElementById('group_info_users').classList.remove("d-block");
	document.getElementById('group_info_users').classList.add("d-none");
}


/*  ОТКРЫТЬ РЕДАКТОР ПОСТА С ПОЗДРАВЛЕНИЕМ  */
const create_post = (e) => {
	document.getElementById('form_post').classList.remove("d-none");
	document.getElementById('form_post').classList.add("d-block");
}

/* ЗАКРЫТЬ РЕДАКТОР ПОСТА */
const btn_form_post_happy_back = () => {
	document.getElementById('form_post').classList.remove("d-block");
	document.getElementById('form_post').classList.add("d-none");
}



/* ОТПРАВИТЬ ПОСТ */
document.getElementById('btn_form_post_happy').onclick = () => {


	let r1 = document.getElementsByName('where_create_post');
	for (var i=0;i<r1.length; i++) {
		if (r1[i].checked) {
			form_post_happy_info.owner_id = i;
		}
	}

	let r2 = document.getElementsByName('who_access_post');
	for (var i=0;i<r2.length; i++) {
		if (r2[i].checked) {
			form_post_happy_info.friends_only = i;
		}
	}

	let r3 = document.getElementsByName('on_what_behalf');
	for (var i=0;i<r3.length; i++) {
		if (r3[i].checked) {
			form_post_happy_info.from_group = i;
		}
	}

	let r4 = document.getElementsByName('comments_post');
	for (var i=0;i<r4.length; i++) {
		if (r4[i].checked) {
			form_post_happy_info.close_comments = i;
		}
	}

	let comm = document.getElementById('congratulation_textarea').value;
	form_post_happy_info.message = comm;

	date_today = new Date();  

	// let t0 = date_today.getSeconds() + 10;
	let t1 = document.getElementById('date_posts_happy_minute').value;
	let t2 = document.getElementById('date_posts_happy_hours').value;
	let t3 = document.getElementById('date_posts_happy_day').value;
	let t4 = document.getElementById('date_posts_happy_month').value;
	let t5 = document.getElementById('date_posts_happy_year').value;

	if(t1 == '') t1 = date_today.getMinutes();
	if(t2 == '') t2 = date_today.getHours();
	if(t3 == '') t3 = date_today.getDate();
	if(t4 == '') t4 = date_today.getMonth();
	if(t5 == '') t5 = date_today.getFullYear();

	var date_post_form = new Date(t5, t4, t3, t2, t1); 


	let this_param_own_id = 1;

	form_post_happy_info.publish_date = date_post_form.getTime() / 1000;

	if(form_post_happy_info.owner_id == 1) {
		this_param_own_id = obj_user_group_info.user_id;
	}
	else if(form_post_happy_info.owner_id == 0) { 
		this_param_own_id = obj_user_group_info.group_id * -1;
	}

	//  form_post_happy_info.photo_arr
  form_post_happy_info.photo_arr = form_post_happy_info.photo_arr.slice(1); // Убрать запятую в начале


  let message_result = form_post_happy_info.start_congratulation + form_post_happy_info.message;

  console.log(message_result);
  VK.api("wall.post", {owner_id: this_param_own_id, attachments: form_post_happy_info.photo_arr, friends_only: form_post_happy_info.friends_only, from_group: form_post_happy_info.from_group, message: message_result, publish_date: form_post_happy_info.publish_date, close_comments: form_post_happy_info.close_comments
  }, function (data) {		
  	console.log(data);
  });

}









/* ОТПРАВИТЬ ПОЗДРАВЛЕНИЕ ИМЕНИННИКАМ  */
const submit_congratulation = (e) => {
	console.log(e);
};


const drowUserBirthDay = (e) => {
	let str = e.slice(1); // Убрать запятую в начале
	if (form_post_happy_info.birth_num > 0) {
		document.getElementById('post_mailing').innerHTML = `
		<button onclick='create_post();' class="mb-1 btn btn-primary">Разместить запись с поздравлением именинников</button>
		<button onclick='submit_congratulation()' class="mb-1 btn btn-primary">Отправить поздравления именинникам</button>
		<hr/>
		`;
	}
	VK.api("users.get", {user_ids: str, fields:'photo_50,quotes,photo_id'}, function (data) {		
		let d = data.response;
		document.getElementById('link_users_list').innerHTML = '';
		document.getElementById('birthday_mans_list').innerHTML = '';
		for(let i=0; i < d.length; i++) {
			form_post_happy_info.happy_list_link += d[i].id+' ';
			form_post_happy_info.happy_list_link_with_name += ' [ id - '+d[i].id+' | '+d[i].first_name+' '+d[i].last_name+' ] ';
			form_post_happy_info.photo_arr += ',photo'+d[i].photo_id;
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
};



const copy_in_buffer = () => {
	console.log(form_post_happy_info.happy_list_link);
	let inputValue = form_post_happy_info.happy_list_link;
	if (inputValue) {
		navigator.clipboard.writeText(inputValue)
		.then(() => {
		})
		.catch(err => {
			console.log('Something went wrong', err);
		})
	}
};


const copy_in_buffer_with_name = () => {
	console.log(form_post_happy_info.happy_list_link_with_name);
	let inputValue = form_post_happy_info.happy_list_link_with_name;
	if (inputValue) {
		navigator.clipboard.writeText(inputValue)
		.then(() => {
		})
		.catch(err => {
			console.log('Something went wrong', err);
		})
	}
};



document.getElementById('birth_day_men').onclick = () => {
	VK.api("groups.getMembers", {group_id: obj_user_group_info.group_id, fields:'bdate'}, function (data) {	
		form_post_happy_info.birth_num = 0;
		regexp = new RegExp(obj_user_group_info.bdate);
		var b_str_user = '';
		for(let i=0; i <= 400; i++) {
			let d = data.response.items[i];
			if(d.bdate != undefined) {
				let text_d = d.bdate;
				if(text_d.match(regexp) != null) {
					form_post_happy_info.birth_num += 1;
					b_str_user += ','+d.id;
				}
			}
		}
		if(form_post_happy_info.birth_num == 0) {
			document.getElementById('birthday_mans_list').innerHTML = `<h3 class="col-12">Именинники не обнаружены</h3>`;
			document.getElementById('post_mailing').innerHTML = '';
			document.getElementById('link_users_list').innerHTML = '';
			form_post_happy_info.happy_list_link = '';
			form_post_happy_info.happy_list_link_with_name = '';
		}
		else {
			drowUserBirthDay(b_str_user);
		}
	});
};





document.getElementById('search_group').onclick = () => {
	document.querySelector('#list_group_user').innerHTML = '';
	let group_name = document.querySelector('#search_group_id').value;
	VK.api("groups.search", {q: group_name}, function (data) {		
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


	// sendRequest('groups.search', {q: group_name}, function (data) {

	// 	for(let i=0; i<=data.response.items.length; i++) {
	// 		let d = data.response.items[i];
	// 		document.querySelector('#list_group_user').innerHTML +=`
	// 		<a id="${d.id}" onclick="btn_get_group_info($(this).attr('id'));" class="nav-link" href="javascript:void(0);" >
	// 		<li class="list-group-item  ">
	// 		<img class="border border-secondary rounded-circle circle" src="${d.photo_50}" />
	// 		<span class="text-dark h6">${d.name}</span>	
	// 		</li></a>
	// 		`;
	// 	}
	// });


}




const draw_img_arr_users_collage = () => {
	let arr_img_users = [
	"https://dummyimage.com/500x250/c98cae/000000.png?text=1",
	"https://dummyimage.com/500x250/8ba8c7/000000.png?text=2",
	"https://dummyimage.com/500x250/8bc7a3/000000.png?text=3",
	"https://dummyimage.com/500x250/ab8f6a/000000.png?text=4",
	"https://dummyimage.com/500x250/ab8f6a/000000.png?text=2",
	"https://dummyimage.com/500x250/ab8f6a/000000.png?text=4"];

	let img_size = 100;
	let k = arr_img_users.length;
	let k2 = k / 2;

	let wh_canvas = document.getElementById("canvas")
	wh_canvas.width = arr_img_users.length * img_size / 2;
	wh_canvas.height = img_size * 2;

	const draw = () => {
		arr_img_users.map((e, i) => {
			let image = new Image();
			image.src = e;
			for(x=0;x<=k;x++) {
				image.onload = () => document.getElementById(`canvas`)
				.getContext('2d')
				.drawImage(image, img_size * (i >= k2 ? i - k2 : i), (i >= k2 ?  img_size : 0), img_size, img_size)
			}

		});
		wh_canvas.toBlob(function(blob) {
  // после того, как Blob создан, загружаем его
  let link = document.createElement('a');
  link.download = 'example.png';

  link.href = URL.createObjectURL(blob);
  link.click();

  // удаляем внутреннюю ссылку на Blob, что позволит браузеру очистить память
  URL.revokeObjectURL(link.href);
}, 'image/png');
	}
	draw();
};
































