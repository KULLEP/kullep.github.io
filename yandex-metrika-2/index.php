<?php

require_once __DIR__ . '/vendor/autoload.php';

$global_result = '';


function draw_graph($id, $date_1, $date_2, $metrics, $dimensions, $graph, $wh_ht) {
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
	$metrika_name = ''; // Имя метрики
	$metrika_num = ''; // Значение метрики

for($i = 0; $i < $arr_length; $i++) {
	$metrika_name .= $d->data[$i]->dimensions[0]->name.'|';
	$metrika_num .= $d->data[$i]->metrics[0].',';
}

$result_name = substr($metrika_name, 0, -1); // Удаление запятой
$result_num = substr($metrika_num, 0, -1); // Удаление запятой


$html_l = '
<div style="text-align: center; margin-bottom:20px;">
<img style="-webkit-user-select: none;margin: auto;" src="https://chart.googleapis.com/chart?cht='.$graph.'&chd=t:'.$result_num.'&chs='.$wh_ht.'&chl='.$result_name.'&chds=a">
</div>
';

global $global_result;
$global_result .= $html_l;
}


function draw_pdf() {
$mpdf = new \Mpdf\Mpdf();
global $global_result;
$mpdf->WriteHTML($global_result);
$mpdf->Output();
}
// Параметры для - the_user_clicks_info();
// 1 - id 44147844
// 2 - Дата от = '2020-03-13'
// 3 - Дата до = '2020-03-17'
// 4 - metrics = ym:pv:pageviews,ym:pv:users
// 5 - dimensions = ym:pv:title
// 6 - График - [p3 - круг], [lc - линейный график], [bvg - гистограмма]
// 7 - Ширина, Высота



draw_graph(44147844, '2020-03-13', '2020-03-17', 'ym:s:visits', 'ym:s:date', 'p3', '600x200');
 
draw_graph(44147844, '2020-03-13', '2020-03-17', 'ym:s:visits', 'ym:s:trafficSource', 'lc', '900x300');

draw_graph(44147844, '2020-03-13', '2020-03-17', 'ym:s:visits', 'ym:s:trafficSource', 'bvg', '400x400');

draw_pdf();

?>



