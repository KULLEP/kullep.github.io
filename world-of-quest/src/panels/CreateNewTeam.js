import React from 'react';
import ToolbarMy from '.././components/ToolbarMy';
import { Form, Input, TextArea, Select, Button, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const CreateNewGame = () => {

	var nameGameElement = React.createRef(); // Название игры


	const addPostNewGame = () => {


		let nameGame = nameGameElement.current.value;
		console.log(nameGame);

	};




	return(
		<div align='center'>

		<ToolbarMy backlink='admin-main-page' heightTitle='Создание игры' />


		<input type='text' placeholder='name' ref={nameGameElement} />
		
		<Segment inverted>
		<Form inverted>
		<Form.Group widths='equal'>
		<Form.Input fluid label='First name' placeholder='First name' />
		<Form.Input fluid label='Last name' placeholder='Last name' />
		</Form.Group>
		<Form.Checkbox label='I agree to the Terms and Conditions' />
		<Button type='submit'>Submit</Button>
		</Form>
		</Segment>

		<Button inverted color='blue'>
		Создать
		</Button>

		</div>
		);
}

export default CreateNewGame;
