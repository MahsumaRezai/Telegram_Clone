import classes from './Card.module.css';
import Modal from '../Module/Module'
const CardAttch = (props) => {
    return (
        <Modal>

            <div className={classes.card}>
                {props.children}
                <button onClick={props.onClose} className="btn">
                    <h1>Hello</h1>

                </button>

            </div>
        </Modal>

    )
}
export default CardAttch;