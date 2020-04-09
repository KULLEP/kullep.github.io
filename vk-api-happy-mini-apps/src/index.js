import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import App from "./App";
import '@happysanta/vk-app-ui/dist/vkappui.css';





window.obj_user_group_info = {
	group_id: '',
	bdate: '',
	user_id: '',
	user_auth_token: '',
	objGroupsInfo: [],
	nameTitleOptions: '',
	start_congratulation: 'Сегодня мы спешим поздравить наших сообщников с ДНЕМ РОЖДЕНИЯ !!!! \n\n\n',
	random_congratulation: '',
	happy_list_name_congratulation: '', // Именинники для поста
	happy_list_photo_congratulation: '', // Фотографии именинников для поста
};



window._hsMobileUI = true; // тут условие которое ставит true/false в зависимости от устройства.
// Init VK  Mini App
bridge.send("VKWebAppInit");

ReactDOM.render(<App />, document.getElementById("root"));


// if (process.env.NODE_ENV === "development") {
//   import("./eruda").then(eruda => {}); //runtime download
// }
