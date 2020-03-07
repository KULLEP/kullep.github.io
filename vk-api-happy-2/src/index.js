import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import bridge from '@vkontakte/vk-bridge';
import App from './App';
import $ from "jquery";
// import registerServiceWorker from './sw';
// Init VK  Mini App
bridge.send('VKWebAppInit');

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

 ReactDOM.render(<App />, document.getElementById('root'));


$.ajax({
	url: 'https://api.vk.com/method/groups.get?count=3&access_token=cb6a9ab3a5be20e329d7a60255b71be1414c6287934805a6dfe6d976820edd989da46d43dcd4d32122c0d&v=5.103',
	method: 'GET',
	dataType: 'JSONP',
	success: function (data) {


console.log(data);
let g = data.response.items.join(',');
		console.log(g);
		$.ajax({
			url: `https://api.vk.com/method/groups.getById?group_ids=${g}}&access_token=cb6a9ab3a5be20e329d7a60255b71be1414c6287934805a6dfe6d976820edd989da46d43dcd4d32122c0d&v=5.103`,
			method: 'GET',
			dataType: 'JSONP',
			success: function (d) {
				console.log(d);
			}
		});




	}
});