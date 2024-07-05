import React, { Component } from "react";
import Navbar from "./navbar";

const Header = (props) => {
  return (
    <header className="container-fluid py-3">
      <Navbar pages={props.pages} />
    </header>
  );
};

export default Header;
