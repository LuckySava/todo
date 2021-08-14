import styles from './Todo.module.scss'

import { ReactComponent as EditBtn } from '../../assets/svg/edit-button.svg';
import { ReactComponent as SaveBtn } from '../../assets/svg/diskette.svg';
import { ReactComponent as DoneBtn } from '../../assets/svg/approved.svg';
import { ReactComponent as DeleteBtn } from '../../assets/svg/delete.svg';
import Input from '../UI/Input/Input';
import { useState } from 'react';

const Todo = ({ body, number, del, done, edit, checked, editMode, getEditModeValue }) => {

  const handleDelete = () => del(number);
  const handleCheck = () => done(number-1);
  const handleEdit = () => edit(number-1);

  const [bodyText, setBodyText] = useState({})

  const handleEditMode = (e) => {
    setBodyText({body: e.target.value, id:number - 1});
  }

  const handleSaveTask = () =>{
    getEditModeValue(bodyText);
  } 

  return <>

    <div className={`${styles.task} ${checked ? styles.task_checked : styles.task_not_checked}`}>

      <span className={styles.task__number}>{number}</span>

{
  editMode
  ? <textarea onChange={handleEditMode} name="editMode" className={styles.custom_textarea} defaultValue={body}></textarea>
  : <p className={styles.task__text}>{body}</p>
}
      

      <div className={styles.task__controls}>

        {
          editMode
          ? <div onClick={handleSaveTask}className={`${styles.save_btn} ${styles.btns_control}`}><SaveBtn /></div>
          : <div onClick={handleEdit} className={`${styles.edit_btn} ${styles.btns_control} ${checked ? styles.edit_btn_disabled : ''}`}><EditBtn /></div>
        }
        
        <div onClick={handleCheck} className={`${styles.done_btn} ${styles.btns_control} ${editMode ? styles.done_btn_disabled : ''}`}><DoneBtn /></div>
        <div onClick={handleDelete} className={`${styles.delete_btn} ${styles.btns_control} ${editMode ? styles.delete_btn_disabled : ''}`}><DeleteBtn /></div>

      </div>

    </div>
  </>
}

export default Todo;