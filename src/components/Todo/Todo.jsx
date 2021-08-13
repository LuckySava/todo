import styles from './Todo.module.scss'

import {ReactComponent as EditBtn} from '../../assets/svg/edit-button.svg';
import {ReactComponent as SaveBtn} from '../../assets/svg/diskette.svg';
import {ReactComponent as DoneBtn} from '../../assets/svg/approved.svg';
import {ReactComponent as DeleteBtn} from '../../assets/svg/delete.svg';

const Todo = ({body, number, del}) => {

  const handleClick = (e) => del(number);

    return <div className={styles.task}>

      <span className={styles.task__number}>{number}</span>

    <p className={styles.task__text}>
      {body}
    </p>

    <div className={styles.task__controls}>

      <div className={`${styles.edit_btn} ${styles.btns_control}`}><EditBtn /></div>
      <div className={`${styles.save_btn} ${styles.btns_control}`}><SaveBtn /></div>
      <div className={`${styles.done_btn} ${styles.btns_control}`}><DoneBtn /></div>
      <div onClick={handleClick} className={`${styles.delete_btn} ${styles.btns_control}`}><DeleteBtn /></div>

    </div>

  </div>
}

export default Todo;