import classes from './Card.module.css';
import img from '../image/crad.PNG';
import Modal from '../Module/Module'
const Card = (props) => {
    return (
        <Modal>

            <div className={classes.card}>
                {props.children}
                <button onClick={props.onClose} className="btn">
                    <img src={img} alt="hello" />

                </button>

            </div>
        </Modal>

    )
}
export default Card;