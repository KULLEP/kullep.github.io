<?php

require_once __DIR__ . '/vendor/autoload.php';

$global_result = '';



function draw_graph($id, $date_1, $date_2, $metrics, $dimensions, $graph, $wh_ht, $name) {
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

	if($dimensions == 'ym:s:visitDuration') { // Время на сайте
		$total = ( int )$d->totals[0];
		$total_rows = $d->total_rows;
		$times = round($total / $total_rows, 1); // Округление
	} elseif ($dimensions == 'ym:s:bounce') { // Отказы
		$reject_no = 'Не отказов - '.$d->data[0]->metrics[0]; // Не отказ
		$reject_yes ='Отказов - '. $d->data[1]->metrics[0]; //Отказ
	}

	$metrika_name = ''; // Имя метрики
	$metrika_num = ''; // Значение метрики

	for($i = 0; $i < $arr_length; $i++) {
		$text = $d->data[$i]->dimensions[0]->name;
		//$text = substr($text, 0, 40);
		$metrika_name .= $text.'|';
		$metrika_num .= $d->data[$i]->metrics[0].',';
	}

$result_name = substr($metrika_name, 0, -1); // Удаление запятой
$result_num = substr($metrika_num, 0, -1); // Удаление запятой


$str_0 = '0:|';
$str_1 = '1:|';
$str_2 = '2:|';
$str_3 = '3:|';
$str_4 = '4:|';

for($i = 0; $i < $arr_length; $i++) {
	if($graph == 'lc' || $graph == 'bvg') {
		$text = $d->data[$i]->dimensions[0]->name;
		$result = explode(' ',$text);
		$str_0 .= $result[0].'|';
		$str_1 .= $result[1].'|';
		$str_2 .= $result[2].'|';
		$str_3 .= $result[3].'|';
		$str_4 .= $result[4].'|';
	}
}
$mega_result = $str_0.$str_1.$str_2.$str_3.$str_4;


$html_l = "<div style='justify-content: center; display: flex;font-family: sans-serif;'><h3>".$name."</h3></div>";



if($dimensions == 'ym:s:visitDuration') { // Время на сайте
	$html_l .= "<div style='justify-content: center; display: flex;font-family: sans-serif;'><p>Среднее время - ".$times."</p></div><br/>";
}elseif ($dimensions == 'ym:s:bounce') { // Отказы
	$html_l .= "<div style='justify-content: center; display: flex;font-family: sans-serif;'><p>".$reject_no."</p></div>";
	$html_l .= "<div style='justify-content: center; display: flex;font-family: sans-serif;'><p>".$reject_yes."</p></div><br/>";
}





if($graph == 'lc') {
	if($dimensions == 'ym:s:visitDuration' || $dimensions == 'ym:s:pageViews') {
		$html_l .= '
		<div style="text-align: center; margin-bottom:20px;">
		<img style="-webkit-user-select: none;margin: auto;" src="https://chart.googleapis.com/chart?cht='.$graph.'&chd=t:'.$result_num.'&chs='.$wh_ht.'&chds=a">
		</div><br/><br/>
		';
	} else {
		$html_l .= '
		<div style="text-align: center; margin-bottom:20px;">
		<img style="-webkit-user-select: none;margin: auto;" src="https://chart.googleapis.com/chart?cht='.$graph.'&chd=t:'.$result_num.'&chs='.$wh_ht.'&chxt=x,x,x,x,x&chxl='.$mega_result.'&chds=a">
		</div><br/><br/>
		';
	}
} else {
	$html_l .= '
	<div style="text-align: center; margin-bottom:20px;">
	<img style="-webkit-user-select: none;margin: auto;" src="https://chart.googleapis.com/chart?cht='.$graph.'&chd=t:'.$result_num.'&chs='.$wh_ht.'&chl='.$result_name.'&chds=a">
	</div><br/><br/>
	';
}



global $global_result;
$global_result .= $html_l;
}


function draw_pdf() {
	$mpdf = new \Mpdf\Mpdf();
	global $global_result;
	$mpdf->WriteHTML($global_result);
	$mpdf->Output();
}


function recommendations($text) {
	global $global_result;
	$global_result .= $text.'<br/><br/><br/><br/>';
}

// Параметры для - draw_graph();
// 1 - id 44147844
// 2 - Дата от = '2020-03-13'
// 3 - Дата до = '2020-03-17'
// 4 - metrics = ym:pv:pageviews,ym:pv:users
// 5 - dimensions = ym:pv:title
// 6 - График - [p - круг], [p3 - 3d круг], [lc - линейный график], [bvg - гистограмма]
// 7 - Ширина, Высота

$id = 44147844;
$date1 = '2020-03-13';
$date2 = '2020-03-17';



draw_graph($id, $date1, $date2, 'ym:s:visits', 'ym:s:date', 'lc', '600x200', 'Посетители');
recommendations('Возможная рекомендация после 1 графика');
draw_graph($id, $date1, $date2, 'ym:s:visits', 'ym:s:trafficSource', 'p', '800x200', 'Источнк трафика');
draw_graph($id, $date1, $date2, 'ym:s:visits', 'ym:s:pageViews', 'lc', '600x200', 'Глубина просмотра (детально)');
draw_graph($id, $date1, $date2, 'ym:s:visits', 'ym:s:visitDuration', 'lc', '600x200', 'Время на сайте (детально)');
draw_graph($id, $date1, $date2, 'ym:s:visits', 'ym:s:bounce', 'lc', '600x200', 'Отказность');

recommendations('Рекомндация');

//draw_graph(44147844, '2020-03-13', '2020-03-17', 'ym:s:visits', 'ym:s:trafficSource', 'bvg', '400x400');
global $global_result;
$global_result = "<div style='justify-content: center; display: flex;font-family: sans-serif;'><h3>Отчёт за период с ".$date1." по ".$date2."</h3></div>" . $global_result;


draw_pdf();


?>



