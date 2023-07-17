import { Fragment } from "react";
import classes from './Head.module.css'
import Headersection from "../Headersection/Headersection";

const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>

            </div>
            <div className={classes.content}>
                <Headersection />

            </div>


        </Fragment>
    )
}
export default Head;
