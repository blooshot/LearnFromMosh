import React, { Component } from "react";
import { Link } from "react-router-dom";
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
const Navbar = ({ totalCounter }) => {
  return (
    <>
      <NavigationMenu>
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
      </NavigationMenu>

      {/* <Badge>{this.props.totalCounter}</Badge> */}
      <Badge>{totalCounter}</Badge>
    </>
  );
};

export default Navbar;
