
// https://oauth.vk.com/authorize?client_id=7348710&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&response_type=token&v=5.103

// https://api.vk.com/method/users.get?user_id=210700286&v=5.52





function GetUrl(method, params) {
	if(!method) throw new new Error('Нет метода');
	params = params || {}; // Либо равны либо пустой объект

	params['access_token'] = '13fd0eb705cecb91251a6f3c3a76656d2988b1780fb74a6148b573af00a08be166d14d37094645f59ab3c';

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



	console.log(groups);

	groups.forEach( function(e) {

		$.ajax({
			url: GetUrl('groups.getById', e),
			method: 'GET',
			dataType: 'JSONP',
			success: function (d) {
				console.log(d);
			}
		});
	});

	var html = '';

	for (let i=0; i< groups.length; i++) {
		let g = groups[i];

		html += `
		<li class="list-group-item disabled">
		<a target="_blank" href=vk.com/id${groups['i']} >
		<img src="" />
		<span></span>	
		</a>
		</li>
		`;
	}
}


getIdGroupUser();





