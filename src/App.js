import styles from './App.module.scss';
import Input from './components/UI/Input/Input';
import Button from './components/UI/Button/Button'
import { useEffect, useState } from 'react';
import Todo from './components/Todo/Todo';
// import {ReactComponent as EditBtn} from './assets/svg/edit-button.svg';
// import {ReactComponent as SaveBtn} from './assets/svg/diskette.svg';
// import {ReactComponent as DoneBtn} from './assets/svg/approved.svg';
// import {ReactComponent as DeleteBtn} from './assets/svg/delete.svg';

function App() {

const [value, setValue] = useState('');

const getInputValue =(e) => {
  setValue(e.target.value)
}

const [task, setTasks] = useState([])

const onButtonClick = (e) => {
  e.preventDefault();
  setTasks([...task, value.trim()])
  setValue('')
}

useEffect(() => {
  setValue(value)
},[value, task])

const handleDelete = (id) => {
  console.log(id);
  setTasks([...task.filter((task, ind) => ind+1 !== id)])
}

  return (
    <>
    <section className={styles.app}>
      <div className={styles.container}>


        <form className={styles.main_form}>
          <Input value={value} onChange={getInputValue} type='text' placeholder="Enter your task here"/>
          <Button onClick={onButtonClick}>Create Task</Button>
        </form>

        {
          task.length
          ? <h2 className={`${styles.todo_title} ${styles.todo_header}`}>Your Tasks:</h2>
          : <h2 className={`${styles.todo_title_empty} ${styles.todo_header}`}>Nothing to do!</h2>
        }

        <div className={styles.tasks}>
      
          {task.map((item, ind) => <Todo del={handleDelete} number={ind+1} key={ind} body={item} />)}

        </div>
      </div>
    </section>
    </>
  );
}

export default App;
