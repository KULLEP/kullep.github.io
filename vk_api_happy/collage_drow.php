<?php

$arr = $_POST['arr'];

$new_arr = json_decode($arr);

include 'collage.php';

$images = $new_arr;

// $images = array(
// 	"https://sun9-59.userapi.com/wMM1fC9mn2ze9EZwVUoLL32OAHrzC-OWANiFtg/9f6pPZjAxfI.jpg?ava=1",
// 	"https://sun9-59.userapi.com/wMM1fC9mn2ze9EZwVUoLL32OAHrzC-OWANiFtg/9f6pPZjAxfI.jpg?ava=1",
// 	"https://sun9-59.userapi.com/wMM1fC9mn2ze9EZwVUoLL32OAHrzC-OWANiFtg/9f6pPZjAxfI.jpg?ava=1",
// 	"https://sun9-56.userapi.com/c852124/v852124279/1dc0f9/2GdZj1R-uco.jpg",
// 	"https://sun9-6.userapi.com/ubAEC1gAplLoiqnIQXy6ZrGVYyguNo_m7mLRsA/9Cd_MjpQILM.jpg",
// 	"https://sun9-56.userapi.com/c852124/v852124279/1dc0f9/2GdZj1R-uco.jpg"
// );


$time = time();
$type = 'jpg';
$imageObj = new Collage($images);
$imageObj->execute();
$imageObj->saveFile("img/{$time}.jpg", $type);

echo "<img src=\"images/{$time}.{$type}\" />";





