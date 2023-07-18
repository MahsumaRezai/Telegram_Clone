import classes from './Card.module.css';
import img from '../image/crad.PNG';
import Modal from '../Module/Module'
const Card = (props) => {
    return (
        <Modal>

            <div className={classes.card}>
                {props.children}
                <div>
                    <img src={img} alt="hello" />

                </div>

            </div>
        </Modal>

    )
}
export default Card;