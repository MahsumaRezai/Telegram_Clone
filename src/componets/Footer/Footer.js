import { Fragment } from "react";
import classes from './Footer.module.css';
import Footerattch from "../FooterAttch/Footerattch";
import Shapes from "../Shape/Shapes";

const Footer = (props) => {
    //const [input, setinput] = useState('');
    const formHandler = (event) => {


    }

    return (
        <Fragment>

            <div className={classes.footer}>

                <div className={classes.attch}>
                    <Footerattch onClick={props.onShowCartatt} />

                    <form onSubmit={formHandler}>
                        <input />
                    </form>
                </div>
                <div>
                    <Shapes onClick={props.onShowCart} />
                </div>
            </div>

        </Fragment>
    )
}
export default Footer;