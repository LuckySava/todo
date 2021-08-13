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
    setTask([...task, { id: task.length, checked: false, body: value.trim() }])
    setValue('')
  }

  useEffect(() => {
    setValue(value)
  }, [value])

  const handleDelete = (id) => {
    console.log(id);
    setTask([...task.filter((task, ind) => ind + 1 !== id)])
  }

  function replaceAt(array = task, index = 0) {
    const ret = array.slice(0);
    let doneOrNot = ret[index].checked;
    ret[index].checked = !doneOrNot;
    
    return ret;
  }

  const handleChecked = (id) => {
    const newTodos = replaceAt(task, id);
    setTask(newTodos)

  }



  return (
    <>
      <section className={styles.app}>
        <div className={styles.container}>


          <form className={styles.main_form}>
            <Input value={value} onChange={getInputValue} type='text' placeholder="Enter your task here" />
            <Button disabled={value.length ? false : true} onClick={onButtonClick}>Create Task</Button>
          </form>

          {
            task.length
              ? <h2 className={`${styles.todo_title} ${styles.todo_header}`}>Your Tasks:</h2>
              : <h2 className={`${styles.todo_title_empty} ${styles.todo_header}`}>Nothing to do!</h2>
          }

          <div className={styles.tasks}>

            {
              task.map((item, ind) => <Todo
                key={ind}
                checked={item.checked}
                del={handleDelete}
                done={handleChecked}
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
