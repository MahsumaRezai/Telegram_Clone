import classes from './Input.module.css'
const Input = (props) => {
    return (
        <div>
            {props.childern}
            <input placeholder="Search" className={classes.input}></input>
        </div>
    )
}
export default Input;
