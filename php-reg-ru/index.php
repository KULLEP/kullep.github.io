<?

function get_info_reg($id, $domain, $pass, $user_name)
{

// Преобразуем массив в URL-кодированную строку
	$data_t = array( 	 
		'domain_name' => $domain,
		'service_id' => $id,
		'input_format' => 'json',
		'output_content_type' => 'plain',
		'password' => $pass,
		'username' => $user_name
	);

	$data = http_build_query($data_t);

// Создаем параметры контекста
	$options = array('http' => 
		array(
			'method'  => 'GET',
			'header'  => 'Content-type: application/x-www-form-urlencoded',
			'content' => $data
		)
	);

$context  = stream_context_create($options); // Создаём контекст потока
$result = file_get_contents('https://api.reg.ru/api/regru2/service/get_info', false, $context); // Отправляем запрос

$r = json_decode($result);

return($r->answer->services[0]->expiration_date);
}


// Параметры
// 1 - id Услуги
// 2 - Домен
// 3 - Пароль
// 4 - Имя пользователя
echo "Дата окончания услуги - ";
echo (get_info_reg('1', 'test.ru', 'test', 'test'));