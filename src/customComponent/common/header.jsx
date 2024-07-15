import React, { Component } from "react";
import Navbar from "./navbar";

const Header = (props) => {
  return (
    <header className="container-fluid py-3">
      <Navbar pages={props.pages} user={props.user} />
    </header>
  );
};

export default Header;
