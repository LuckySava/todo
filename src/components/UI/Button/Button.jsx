import styles from './Button.module.scss'

const Button = ({children, onClick, disabled}) => {
    console.log(disabled);
    return <button disabled={disabled} onClick={onClick} className={`${styles.main_btn} ${disabled ? styles.main_btn__disabled : ''}`}>{children}</button>
}

export default Button;