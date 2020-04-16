import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Form, Button, Card  } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const CreateNewGame = () => {

	var nameGameElement = React.createRef(); // Название игры
	var dateGameElement = React.createRef(); // Дата
	var timeGameElement = React.createRef(); // Время

	const addPostNewGame = () => {
		var obj_result = {};
		let nameGame = nameGameElement.current.value;
		let dateGame = dateGameElement.current.value;
		let timeGame = timeGameElement.current.value;
		console.log(nameGame);
		obj_result = {
			"game": nameGame,
			"dateToStart": dateGame,
			"timeToStart": timeGame
		}
		console.log(obj_result);
		if(nameGame !== '' && dateGame !== '' && timeGame !== '') {
			alert(`Название игры - ${obj_result.game}\nДата начала - ${obj_result.dateToStart}\nВремя начала - ${obj_result.timeToStart}`);
		}
	};




	return(
		<div align='center'>

		<ToolbarMy className='my-20' backlink='admin-main-page' heightTitle='Создание игры' />

		<Card fluid className='w-80 my-20 mt-5'>

		<Card.Content>
		<Form>
		<Form.Field>
		<label>Название</label>
		<input placeholder='Название игры' ref={nameGameElement} required />
		</Form.Field>
		<Form.Field>
		<label>Дата начала - для оповещения</label>
		<input type='date' placeholder='Дата' ref={dateGameElement} required />
		</Form.Field>
		<Form.Field>
		<label>Время начала - для оповещения</label>
		<input type='time' placeholder='Время' ref={timeGameElement} required />
		</Form.Field>
		<div align='center'>
		<Button onClick={addPostNewGame} inverted color='blue'>
		Создать
		</Button>
		</div>
		</Form>
		</Card.Content>

		</Card>

		</div>
		);
}

export default CreateNewGame;
