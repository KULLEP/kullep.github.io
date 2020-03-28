<?php



function the_user_clicks_info($id, $date_1, $date_2, $metrics, $dimensions, $id_div, $name_func, $graph) {
	$url = 'https://api-metrika.yandex.ru/stat/v1/data';

	$params = [
		'ids'         => $id,
   		'metrics'     => $metrics, // ym:pv:pageviews,ym:pv:users
   		'dimensions'  => $dimensions,
   		'date1'       => $date_1,
   		'date2'       => $date_2,
   		'lang'		  => 'ru',
   	];

   	$get_cont = file_get_contents( $url . '?' . http_build_query($params) );
   	$d = json_decode($get_cont);
$arr_length = count($d->data); // Длина массива
$result_str = ''; // Результат для вывода

for($i = 0; $i < $arr_length; $i++) {
	if($graph == 'corechart') {
		$result_str .= '["'.$d->data[$i]->dimensions[0]->name.'",'.$d->data[$i]->metrics[0].'],';
	} elseif($graph == 'line') {
		$result_str .= '['.substr($d->data[$i]->dimensions[0]->name, 8).','.$d->data[$i]->metrics[0].'],';
	}
}




if($graph == 'corechart') {
	$html_l = "
	google.charts.load('current', {'packages':['".$graph."']});
	google.charts.setOnLoadCallback(".$name_func.");

	function ".$name_func."() {
		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Slices');
		data.addRows([" . $result_str."]);
		var options = {
			'title':'Источник трафика',
			pieHole: 0.4,
		};
		var chart = new google.visualization.PieChart(document.getElementById('".$id_div."'));
		chart.draw(data, options);
	}";
} 
elseif($graph == 'line') {
	$html_l = "
	google.charts.load('current', {'packages':['".$graph."']});
	google.charts.setOnLoadCallback(".$name_func.");

	function ".$name_func."() {
		var data = new google.visualization.DataTable();
		data.addColumn('number', 'День');
		data.addColumn('number', 'Посетители');
		data.addRows([" . $result_str."]);
		var options = {
			chart: {
				title: 'Посетители',
				subtitle: ''
				},
				width: 700,
				height: 400
			};
			var chart = new google.charts.Line(document.getElementById('".$id_div."'));
			chart.draw(data, google.charts.Line.convertOptions(options));
		}";
	}
	
	return($html_l);
}

// Параметры для - the_user_clicks_info();
// 1 - id 44147844
// 2 - Дата от = '2020-03-13'
// 3 - Дата до = '2020-03-17'
// 4 - metrics = ym:pv:pageviews,ym:pv:users
// 5 - dimensions = ym:pv:title
// 6 - div - id блока
// 7 - Любое название функции для отрисовки, не должна повторяться
// 8 - График - corechart, line
?>


<html>
<head>
	<!--Load the AJAX API-->
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
	<script type="text/javascript">

		<? echo the_user_clicks_info(44147844, '2020-03-13', '2020-03-17', 'ym:s:visits', 'ym:s:trafficSource', 'the_user_clicks_info_div', 'the_user_clicks_info_1', 'corechart'); ?>

		<? echo the_user_clicks_info(44147844, '2020-03-13', '2020-03-17', 'ym:s:visits', 'ym:s:date', 'linechart_material', 'the_user_clicks_info_2', 'line'); ?> 
	</script>

	 
</head>

<body>
	<!--Div that will hold the pie chart-->
	<div id="the_user_clicks_info_div" style="width: 600px; height: 500px;"></div>

	<div id="linechart_material"></div>


 

</body>
</html>


