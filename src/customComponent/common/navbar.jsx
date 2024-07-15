import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { forIn } from "lodash";

/* 
 We can use Stateless function component, in case when we are not managing state for that component
 --> this.props only works with class components
 --> we can pass prop as param in functional components
 --> also we can destructure the props while passing
*/
/* const Navbar = (props) => {*/
const Navbar = (props) => {
  const { pages, user } = props;
  let fpage = [...pages];
  if (user != null && Object.keys(user).length != 0) {
    fpage = pages.filter((p) => p.name != "LoginForm" && p.name != "Register");
    fpage.push({ name: "LogOut", path: "/logout" });
    // console.log(fpage);
  }
  console.log("nv", user);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {fpage.map((page) => (
                <li className="nav-item" key={page.name}>
                  <NavLink
                    className={`nav-link ${({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""}`}
                    aria-current="page"
                    to={page.path}
                    {...props}
                  >
                    {page.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex">
            <span className="badge text-bg-success">
              {user != null && Object.keys(user).length != 0
                ? user.name
                : "No Sessions"}
            </span>
          </div>
        </div>
      </nav>

      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Link1
            </NavigationMenuLink>{" "}
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Link2
            </NavigationMenuLink>{" "}
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Cart Items
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}

      {/* <Badge>{this.props.totalCounter}</Badge> */}
      {/* <Badge>{totalCounter}</Badge> */}
    </>
  );
};

export default Navbar;
