

var api_m = {
	url_table: 'https://api-metrika.yandex.net/stat/v1/data',
	url_pdf: 'https://metrika.yandex.ru/dashboard',
	ids: '',
	metrics: 'ym:s:pageviews',
	date1: '',
	date2: ''

}


document.getElementById('submit').onclick = () => {

	api_m.ids = id.value;
	api_m.date1 = from.value;
	api_m.date2 = to.value;
	let period_n = api_m.date1+'.'+api_m.date2;

	if(api_m.ids == '') alert('Введите id');
	else if (api_m.date1 == '') alert('Введите дату начала периода');
	else if (api_m.date2 == '') alert('Введите дату окончания периода');
	else {
		window.open(`https://metrika.yandex.ru/dashboard?period=${period_n}6&id=${api_m.ids}&format=pdf`);
	}




	// $.ajax({
	// 	url: api_m.url_pdf,
	// 	type: 'GET',
	// 	data: {
	// 		id: api_m.ids,
	// 		period: period_n,
	// 		format:pdf
	// 	},
	// 	dataType: 'json',
	// }).done(function(data){
	// 	console.log(data);
	// });
}















/*
var docInfo = {
	
	info: {
		title:'Тестовый документ PDF',
		author:'Viktor',
		subject:'Theme',
		keywords:'Ключевые слова'
	},
	
	pageSize:'A4',
	pageOrientation:'landscape',//'portrait'
	pageMargins:[50,50,30,60],
	
	header:function(currentPage,pageCount) {
		return {
			text: currentPage.toString() + 'из' + pageCount,
			alignment:'right',
			margin:[0,30,10,50]
		}
	},
	
	footer:[
		{
			text:'нижний колонтитул',
			alignment:'center',//left  right
		}
	],
	
	content: [
	
		{
			text:'Текст определенного параграфа',
			fontSize:20,
			margin:[150,80, 30,0]
			//pageBreak:'after'
		},
		
		{
			text:'Текст определенного параграфа № 2',
			style:'header'
			//pageBreak:'before'
		},
		
		{
			columns:[
			
				{
					width:'auto',
					text:'Текст колонки №1'
				},
				{
					width:150,
					text:'Текст колонки №2'
				},
				
				{
					width:'*',
					text:'Текст колонки №3'
				},
				
				{
					width:'10%',
					text:'Текст колонки №4'
				},
			
			],
			columnGap: 20
		},
		
		{
			table:{
				widths:['*','auto',150,'*'],
				
				body:[
					['Первая','Вторая','Третья','Четвертая'],
					['Первая','Вторая','Третья','Четвертая'],
					[{text:'текстовое содержимое',bold:true},'Вторая','Третья','Четвертая']
				],
				headerRows:1
			}
		},
		
		{
			ul: [
			
				'Пункт 1',
				'Пункт 2',
				'Пункт 3',
				'Пункт 4',
				{
					text:'Пункт 5',
					bold:true
				}
			
			]
		},
		
		{
			ol: [
			
				'Пункт 1',
				'Пункт 2',
				'Пункт 3',
				'Пункт 4',
				{
					text:'Пункт 5',
					bold:true
				}
			
			]
		}
		
	
	],
	
	styles: {
		header: {
			fontSize:25,
			bold:true,
			alignment:'right'
		}
	}
}

pdfMake.createPdf(docInfo).download('name.pdf');

*/