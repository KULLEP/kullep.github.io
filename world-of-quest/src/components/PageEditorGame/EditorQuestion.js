import React from 'react';
import { Card, Button, Modal } from 'semantic-ui-react';
import { ajax_get_list_tasks_by_id, ajax_get_list_hints_by_id } from './../GetInfoAjax/AdminAjax';

const EditorQuestion = () => {


  var id_this_game = window.infoUser.editID; /* ID ТЕКУЩЕЙ ИГРЫ */
  ajax_get_list_tasks_by_id(id_this_game);  /* ЗАГРУЗКА СПИСКА ВОПРОСОВ */
  ajax_get_list_hints_by_id(id_this_game); /* ЗАГРУЗКА СПИСКА ПОДСКАЗОК */


  var infoTask = window.infoUser.list_info_tasks_by_id;
  var infoHint = window.infoUser.list_info_hints_by_id;



  const addHint = (e) => {
    // let id = +e.target.id;

    // let obj = {
    //   textHint: 'qweqwe',
    //   minuteToHint: '12.12'

    // }
    // arrData[id].hints.push(obj);
  };



  const saveQuest = (e) => {
  //  let id = +e.target.id;
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
      infoTask.map((data, index) => (
        <tbody>

        <th>{index + 1}</th>

        <tr>
        <th></th>
        <th>Вопрос</th>
        <th><textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{data.text}</textarea></th>
        </tr>

        <tr>
        <th></th>
        <th>Ответ</th>
        <th><input type="text" className="form-control" id="" value={data.answers} /></th>
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
        <th><input type="text" className="form-control" id="" value={data.time} /></th>
        </tr>


        <tr>
        <th></th>
        <th>Подсказки</th>
        <th>

        <th scope="col">#</th>
        <th scope="col">Подсказка</th>
        <th scope="col">Времени на подсказку</th>
        {
          infoHint.map((hint, index) => (
            <tr>
            <th>{index + 1}</th>
            <th><textarea className="form-control" id="exampleFormControlTextarea1" rows="3">{hint.text_hint}</textarea></th>
            <th><input type="text" className="form-control" id="" value={hint.minute_to_hint} /></th>
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