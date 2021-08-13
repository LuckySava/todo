import styles from './Button.module.scss'

const Button = ({children, onClick}) => {
    return <button onClick={onClick} className={styles.main_btn}>{children}</button>
}

export default Button;