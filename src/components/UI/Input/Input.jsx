import styles from './Input.module.scss'

const Input = ({value, type, placeholder, onChange }) => {
    return <input value={value} onChange={onChange} type={type} placeholder={placeholder} />
}

export default Input;