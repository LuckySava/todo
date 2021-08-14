import styles from './App.module.scss';
import Input from './components/UI/Input/Input';
import Button from './components/UI/Button/Button'
import { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';

function App() {

  const [value, setValue] = useState('');

  const getInputValue = (e) => {
    setValue(e.target.value)
  }

  const [task, setTask] = useState([])

  const onButtonClick = (e) => {
    e.preventDefault();
    setTask([...task, { id: task.length, checked: false, body: value.trim(), editmode: false }]);

    setValue('')
  }

  const handleDelete = (id) => {
    const newArr = [...task.filter((task, ind) => ind + 1 !== id)]
    setTask(newArr)

  }

  useEffect(() => {
    setValue(value)
  }, [value])

  function replaceAt(array = task, index = 0) {
    const ret = array.slice(0);
    let doneOrNot = ret[index].checked;
    ret[index].checked = !doneOrNot;

    return ret;
  }

  function changeEditmode(array = task, index = 0) {
    const ret = array.slice(0);
    let doneOrNot = ret[index].editmode;

    ret[index].editmode = !doneOrNot;

    return ret;
  }

  function changeBody(array = task, index = 0, body) {
    const ret = array.slice(0);
    let doneOrNot = ret[index].editmode;

    ret[index].body = body;
    ret[index].editmode = !doneOrNot;

    return ret;
  }

  const handleChecked = (id) => {
    const newTodos = replaceAt(task, id);
    setTask(newTodos)

  }

  const handleEdit = (id) => {
    const newTodos = changeEditmode(task, id)
    setTask(newTodos)
  }

  const getEditModeValue = (obj) => {

    if (!obj.hasOwnProperty('body')) {
      const newTodos = changeEditmode(task, obj.id)
      setTask(newTodos)
      return;
    }

    const newTodos = changeBody(task, obj.id, obj.body);
    setTask(newTodos);
  }

  function compareBodyDesc( a, b ) {
    if ( a.body < b.body ){
      return -1;
    }
    if ( a.body > b.body ){
      return 1;
    }
    return 0;
  }

  function compareBodyAsc( a, b ) {
    if ( a.body < b.body ){
      return 1;
    }
    if ( a.body > b.body ){
      return -1;
    }
    return 0;
  }

  const handleOnChange = (e) => {
    const type = e.target.value;

    if (!type) return;

    switch (type) {
      case 'id-desc':
        const sortedDataIdDesc = [...task].sort((a, b) => b['id'] - a['id']);
        setTask(sortedDataIdDesc);
        break;
      case 'id-asc':
        const sortedDataIdAsc = [...task].sort((a, b) => a['id'] - b['id']);
        setTask(sortedDataIdAsc);
        break;
      case 'body-desc':
        const sortBodyDesc = [...task].sort(compareBodyDesc)
        setTask(sortBodyDesc);
        break;
      case 'body-asc':
        const sortBodyAsc = [...task].sort(compareBodyAsc)
        setTask(sortBodyAsc);
        break;
      default:
        console.log('Sorry, nothing match');
    }
    
  }

  return (
    <>
      <section className={styles.app}>
        <div className={styles.container}>

          <h2 className={styles.main_header}>My First Todo App</h2>

          <form className={styles.main_form}>
            <Input value={value} onChange={getInputValue} type='text' placeholder="Enter your task here" />
            <Button taskCount={task.length} disabled={value.length ? false : true} onClick={onButtonClick}>Create Task</Button>
          </form>

          {
            task.length
              ? <h2 className={`${styles.todo_title} ${styles.todo_header}`}>Your Tasks:</h2>
              : <h2 className={`${styles.todo_title_empty} ${styles.todo_header}`}>Nothing to do!</h2>
          }

          <div className={styles.info_panel}>
            <select onChange={handleOnChange} className={styles.select}>
              <option value="">Please make your choose</option>
              <option value="id-asc">Sort by Id (ASC)</option>
              <option value="id-desc">Sort by Id (DESC)</option>
              <option value="body-asc">Sort by Text (ASC)</option>
              <option value="body-desc">Sort by Text (DESC)</option>
            </select>
          </div>

          <div className={styles.tasks}>

            {
              task.map((item, ind) => <Todo
                key={ind}
                checked={item.checked}
                editMode={item.editmode}
                del={handleDelete}
                done={handleChecked}
                edit={handleEdit}
                getEditModeValue={getEditModeValue}
                number={ind + 1}
                body={item.body} />)
            }

          </div>
        </div>
      </section>
    </>
  );
}

export default App;
