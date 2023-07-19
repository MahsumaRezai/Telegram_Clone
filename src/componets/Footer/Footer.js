import { Fragment, useState } from "react";
import classes from './Footer.module.css';
import Footerattch from "../FooterAttch/Footerattch";
import Shapes from "../Shape/Shapes";
import Button from "../Button/Button";

const Footer = (props) => {
    const [input, setinput] = useState('');
    const formHandler = (event) => {
        event.preventDefault();
        console.log(input);
        setinput('')
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
                        <div className={classes.form}>
                            <input onChange={inputHanlder} className="input" />
                            <Button />
                        </div>
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