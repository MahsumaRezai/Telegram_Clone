import { Fragment, useState } from "react";
import Main from "./componets/UI/Main.js";
import Footer from "./componets/Footer/Footer.js";
import Head from "./componets/Header/Head.js";
import Card from "./componets/Card/Card.js";
import CardAttch from "./componets/Card/CardAttch.js";

const App = () => {
    const [cartIsShow, setCartIsShow] = useState(false);
    const showCartHandler = () => {
        setCartIsShow(true)
    }
    const hideCartHandler = () => {
        setCartIsShow(false)
    }
    const [cartIsShowatt, setCartIsShowatt] = useState(false);
    const showCartHandleratt = () => {
        setCartIsShowatt(true)
    }
    const hideCartHandleratt = () => {
        setCartIsShowatt(false)
    }
    return (
        <Fragment>
            {cartIsShow && <Card onClose={hideCartHandler} />}
            {cartIsShowatt && <CardAttch onClose={hideCartHandleratt} />}
            <div className="main">
                <Main />
                <Footer onShowCart={showCartHandler} onShowCartatt={showCartHandleratt} />
            </div>
            <div className="head">
                <Head />
            </div>

        </Fragment>
    )
}
export default App
