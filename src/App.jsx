import { useState } from "react";
import "./App.css";
import { Outlet, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./customComponent/common/header";
import Products from "./customComponent/products";

library.add(fas, far);
function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid py-3">
      <Header pages={props.pages} />
      {/* <Switch>
        <Route path="/product/tag/1" Component={<Products />} />
      </Switch> */}
      <Outlet />
    </div>
  );
}

export default App;
