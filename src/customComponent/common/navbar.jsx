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

/* 
 We can use Stateless function component, in case when we are not managing state for that component
 --> this.props only works with class components
 --> we can pass prop as param in functional components
 --> also we can destructure the props while passing
*/
/* const Navbar = (props) => {*/
const Navbar = (props) => {
  const { pages } = props;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {pages.map((page) => (
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
