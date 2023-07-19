import classes from './Card.module.css';
import Modal from '../Module/Module'
const CardAttch = (props) => {
    return (
        <Modal>

            <div className={classes.card}>
                {props.children}
                <button onClick={props.onClose} className="btn">
                    <div className={classes.text}>
                        <h1>Hello</h1>
                        <p className={classes.para}>I am Masoumeh Rezai and who are you?</p>
                    </div>



                </button>

            </div>
        </Modal>

    )
}
export default CardAttch;