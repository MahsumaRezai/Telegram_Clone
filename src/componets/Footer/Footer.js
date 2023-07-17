import { Fragment } from "react";
import classes from './Footer.module.css';
import Footerattch from "../FooterAttch/Footerattch";

const Footer = (props) => {
    return (
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.attch}>
                    <Footerattch />
                </div>
            </div>

        </Fragment>
    )
}
export default Footer;