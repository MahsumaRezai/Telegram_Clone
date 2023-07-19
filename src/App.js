import { Fragment, useState } from "react";
import Main from "./componets/UI/Main.js";
import Footer from "./componets/Footer/Footer.js";
import Head from "./componets/Header/Head.js";
import Card from "./componets/Card/Card.js";

const App = () => {
    const [cartIsShow, setCartIsShow] = useState(false);
    const showCartHandler = () => {
        setCartIsShow(true)
    }
    const hideCartHandler = () => {
        setCartIsShow(false)
    }
    return (
        <Fragment>
            {cartIsShow && <Card onClose={hideCartHandler} />}
            <div className="main">
                <Main />
                <Footer onShowCart={showCartHandler} />
            </div>
            <div className="head">
                <Head />
            </div>

        </Fragment>
    )
}
export default App
