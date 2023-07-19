import { Fragment, useState } from "react";
import classes from './Footer.module.css';
import Footerattch from "../FooterAttch/Footerattch";
import Shapes from "../Shape/Shapes";

const Footer = (props) => {
    const [input, setinput] = useState('');
    const formHandler = (event) => {
        event.preventDefault();
        console.log(input);


    }
    const inputHanlder = (event) => {
        setinput(event.target.value);
    }

    return (
        <Fragment>

            <div className={classes.footer}>

                <div className={classes.attch}>
                    <Footerattch onClick={props.onShowCartatt} />

                    <form onSubmit={formHandler}>
                        <input onChange={inputHanlder} />
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