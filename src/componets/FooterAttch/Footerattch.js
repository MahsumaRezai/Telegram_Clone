import { Fragment } from "react";
import img from '../image/attch.PNG';


const Footerattch = (props) => {
    return (
        <Fragment>
            {props.children}
            <button className='btn'>
                <img src={img} alt="" />

            </button>
        </Fragment>
    )
}
export default Footerattch;