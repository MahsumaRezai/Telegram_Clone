import { Fragment } from "react";
import imga2 from '../image/steacker.PNG'

const Shapes = (props) => {
    return (
        <Fragment>
            <div className="shape">
                <button className="btn" onClick={props.onClick}>
                    <img src={imga2} alt="smoe"  />

                </button>
                


            </div>

        </Fragment>
    )
}
export default Shapes;