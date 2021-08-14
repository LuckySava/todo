import styles from './Button.module.scss'

const Button = ({ children, onClick, disabled, taskCount }) => {
    return <button
        disabled={disabled}
        onClick={onClick}
        className={`${styles.main_btn} ${disabled ? styles.main_btn__disabled : ''}`}>
        {children}
        {
            taskCount > 0 && <span className={styles.task_count}>{taskCount}</span>
        }
    </button>
}

export default Button;