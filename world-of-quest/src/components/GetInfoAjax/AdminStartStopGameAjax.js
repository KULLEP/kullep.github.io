import $ from "jquery";

const url = 'http://php.test/php/admin/';


/* ПОЛУЧИТЬ МИНУТЫ И ИЗМЕНИТЬ */
export const ajax_get_and_edit_time = (id_game) => {
	$.ajax({
		async: false,
		method: 'GET',
		url: url + 'edit_time.php',
		data: {
			id_game: id_game
		},
		success: function(data){
			console.log(data);
		}
	});	
};
