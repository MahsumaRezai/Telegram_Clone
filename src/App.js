import { Fragment } from "react";
import Main from "./componets/UI/Main.js";
import Footer from "./componets/Footer/Footer.js";

const App = () => {
  return (
    <Fragment>
      <div className="main">
        <Main />
        <Footer />
      </div>

    </Fragment>
  )
}
export default App
