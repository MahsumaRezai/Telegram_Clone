import { Fragment } from "react";
import imag1 from '../image/telegarm.PNG';
import imga2 from '../image/steacker.PNG'

const Shapes = (props) => {
    return (
        <Fragment>
            <div className="shape">
                <button className="btn" onClick={props.onClick}>
                    <img src={imga2} alt="smoe"  />

                </button>
                <button className="btn" type="submit">
                    <img src={imag1} alt="yes" />

                </button>


            </div>

        </Fragment>
    )
}
export default Shapes;