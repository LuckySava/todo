import styles from './App.module.scss';
import Input from './components/UI/Input/Input';
import Button from './components/UI/Button/Button'
import { useEffect, useState } from 'react';

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
},[value])


  return (
    <>
    <section className={styles.app}>
      <div className={styles.container}>
        <form className={styles.main_form}>
          <Input value={value} onChange={getInputValue} type='text' placeholder="Enter your task here"/>
          <Button onClick={onButtonClick}>Create Task</Button>
        </form>

        <div className="tasks">
          
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
