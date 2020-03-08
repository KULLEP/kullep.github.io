
// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&response_type=token&v=5.103

// https://api.vk.com/method/users.get?user_id=210700286&v=5.52

$.ajax({
	url: GetUrl('https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=&scope=groups&response_type=token&v=5.103'),
	method: 'GET',
	dataType: 'JSONP',
	success: function (d) {
		console.log(d);
	}
});





function GetUrl(method, params) {
	if(!method) throw new new Error('Нет метода');
	params = params || {}; // Либо равны либо пустой объект

	params['access_token'] = 'cf70cd71dfa05276180a0746150e4a92cb7caa3ae6fadfade8befa8b6bc3e588bd499c67883401c33bf97';

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
		console.log('gg '+e);
		$.ajax({
			url: GetUrl('groups.getMembers', e),
			method: 'GET',
			dataType: 'JSONP',
			success: function (d) {
				console.log(d);
			}
		});
	});


	// var html = '';
	// for (let i=0; i< groups.length; i++) {
	// 	let g = groups[i];

	// 	html += `
	// 	<li class="list-group-item disabled">
	// 	<a target="_blank" href=vk.com/id${g.screen_name} >
	// 	<img src="${g.photo_200}" />
	// 	<span>${g.name}</span>	
	// 	</a>
	// 	</li>
	// 	`;
	// }
}


getIdGroupUser();





