import { Fragment } from "react";
import ReactDom from 'react-dom'

const Back = (props) => {
    return (
        <div>

        </div>
    )
}
const overly = props => {
    return (
        <div>
        </div>
    )
}





const Module = () => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Back />)}
            {ReactDom.createPortal(<overly />)}

        </Fragment>

    )

}
export default Module;