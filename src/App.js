import { Fragment } from "react";
import Main from "./componets/UI/Main.js";
import Footer from "./componets/Footer/Footer.js";
import Head from "./componets/Header/Head.js";
import Card from "./componets/Card/Card.js";

const App = () => {
  return (
    <Fragment>
      <Card/>
      <div className="main">
        <Main />
        <Footer />
      </div>
      <div className="head">
        <Head />
      </div>

    </Fragment>
  )
}
export default App
