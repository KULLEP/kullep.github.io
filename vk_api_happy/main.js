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

console.log(3122222222222222222222222231);