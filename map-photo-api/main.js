var input = document.getElementById("myinput");

setTimeout(() => {
	var ajax = new XMLHttpRequest();
	ajax.open("GET", "search_list.json"); // 3 параметр - , true - для кеширования
	ajax.onload = function() {
		var list = JSON.parse(ajax.responseText); // Парсинг JSON

		new Awesomplete(input, {
			list: list,
			minChars:1, // Минимум символов
			autoFirst:true, // Выделить 1 результат

			filter: function (text, input) { // Вывод только по первой букве
				return text.toLowerCase().indexOf(input.toLowerCase()) == 0;
			},
			replace: function(suggestion) { // После выбора из результата
				document.querySelector('#search_list').classList.remove("d-none");
				document.querySelector('#search_list').classList.add("d-block"); 


				document.querySelector('#search_list').innerHTML = `
				<li class='list-group-item'>
				${suggestion.value}
				</li>`;
			}
		});
	};
	ajax.send();
}, 500);








ymaps.ready(init);

function init () {
	var myMap = new ymaps.Map('map', {
		center: [54.7065, 20.511],
		zoom: 12
	}),

	myPlacemark1 = new ymaps.Placemark([54.710825, 20.5118610], {
		balloonContent: `<b>Дом советов</b><br/>
		<hr class="m-1" />
		<p class="m-1">215 Фото</p>
		<p class="m-1">2015 г.</p>
		<p class="m-1">Краткое описание</p>
		<a class="m-1" data-toggle="modal" data-target="#exampleModal" href="javascript:void(0);">Подробнее</a>
`
	}, {
		iconLayout: 'default#image',
	//	iconImageClipRect: [[69,0], [97, 46]],
		iconImageHref: 'http://balticplus.ru/wp-content/uploads/dom-sovetov-2.jpg',
	//	iconImageSize: [35, 63],
	//	iconImageOffset: [-35, -63]
	});

	myMap.geoObjects.add(myPlacemark1)
}
























