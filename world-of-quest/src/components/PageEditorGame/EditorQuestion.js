import React from 'react';
import data_json_games from './../../json-info/games.json';
import { Card, Button, Modal } from 'semantic-ui-react';


const EditorQuestion = () => {

 var arrData;

 for (let i = 0; i < data_json_games.length; i++) {
  if(data_json_games[i].game === window.infoUser.editName) {
    arrData = data_json_games[i].questions;
  }
}


const addHint = (e) => {
  let id = +e.target.id;

  let obj = {
    textHint: 'qweqwe',
    minuteToHint: '12.12'

  }


  arrData[id].hints.push(obj);

};

const saveQuest = (e) => {
  let id = +e.target.id;


  console.log(arrData);
  console.log(id);
  console.log(arrData[id]);

};

return (
  <Card className='w-100 overflow-a'>
  <table className="table">
  <thead>
  <tr>
  <th scope="col">Вопрос</th>
  <th scope="col">Элемент</th>
  <th scope="col">Значение</th>
  </tr>
  </thead>
  {
    arrData.map((data, index) => (
      <tbody>

      <th>{index + 1}</th>

      <tr>
      <th></th>
      <th>Вопрос</th>
      <th><textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{data.quest}</textarea></th>
      </tr>

      <tr>
      <th></th>
      <th>Ответ</th>
      <th><input type="text" className="form-control" id="" value={data.answer} /></th>
      </tr>

      <tr>
      <th></th>
      <th>Фото</th>
      <th><input type="text" className="form-control" id="" value={data.photo} /></th>
      </tr>

      <tr>
      <th></th>
      <th>Видео</th>
      <th><input type="text" className="form-control" id="" value={data.video} /></th>
      </tr>

      <tr>
      <th></th>
      <th>Времени на уровень</th>
      <th><input type="text" className="form-control" id="" value={data.timePerLevel} /></th>
      </tr>


      <tr>
      <th></th>
      <th>Подсказки</th>
      <th>

      <th scope="col">#</th>
      <th scope="col">Подсказка</th>
      <th scope="col">Времени на подсказку</th>
      {
        data.hints.map((hint, index) => (

          <tr>
          <th>{index + 1}</th>
          <th><textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{hint.textHint}</textarea></th>
          <th><input type="text" className="form-control" id="" value={hint.minuteToHint} /></th>
          </tr>

          ))


      }

      <tr>
      <th colspan="3">
      <div className='text-center'>
      <Modal trigger={<Button>Добавить подсказку</Button>}>
      <Modal.Header>Редактор подсказки</Modal.Header>
      <Modal.Content >          <input type='text' placeholder='Подсказка' />
      <input type='time'  />
      <Button id={index} onClick={addHint} positive >Сохранить результат</Button>
      </Modal.Content>
      </Modal>
      </div>
      </th>
      </tr>
      </th>
      </tr>




      <tr>
      <th colspan="3">
      <div className='text-center'>
      <Button id={index} onClick={saveQuest} positive >Сохранить результат</Button>
      </div>
      </th>
      </tr>

      </tbody>
      ))
  }

  </table>
  </Card>
  );
}


export default EditorQuestion;