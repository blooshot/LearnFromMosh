import React, { Component } from "react";
import { useState } from "react";
import "./App.css";
import { Outlet, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./customComponent/common/header";
import Products from "./customComponent/products";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "@/services/authService";

library.add(fas, far);

const customNavBarPages = [
  { name: "Home", path: "/" },
  { name: "Admin", path: "/admin" },
  { name: "Products", path: "/products" },
  { name: "Single Product", path: "/product/1" },
  { name: "Cart", path: "/cart" },
  { name: "Movies", path: "/movies" },
  { name: "LoginForm", path: "/login" },
  { name: "Register", path: "/register" },
  { name: "Posts", path: "/posts" },
];

class App extends Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ currentUser: user });
    // console.log("jt>", user);
  }
  render() {
    return (
      <div className="container-fluid py-3">
        <Header pages={customNavBarPages} user={this.state.currentUser} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* <Switch>
        <Route path="/product/tag/1" Component={<Products />} />
      </Switch> */}
        <Outlet />
      </div>
    );
  }
}

/* function App(props) {

  const [count, setCount] = useState(0);

  return (
     <div className="container-fluid py-3">
      <Header pages={props.pages} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
       <Switch>
        <Route path="/product/tag/1" Component={<Products />} />
      </Switch> 
      <Outlet />
    </div> 
  );
} */

export default App;
