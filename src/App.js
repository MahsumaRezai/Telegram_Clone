import { Fragment } from "react";
import Main from "./componets/UI/Main.js";
import Footer from "./componets/Footer/Footer.js";
import Head from "./componets/Header/Head.js";

const App = () => {
  return (
    <Fragment>
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
