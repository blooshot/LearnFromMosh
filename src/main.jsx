import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieLister from "./customComponent/movies.jsx";
import Counters from "./customComponent/basiCounter/counters.jsx";
import Homapage from "./customComponent/basiCounter/homepage.jsx";
import Header from "./customComponent/common/header.jsx";
import Products from "./customComponent/products.jsx";
import SingleProduct from "./customComponent/SingleProduct.jsx";
import ErrorPage from "./customComponent/common/error-page.jsx";
import AdminDash from "./customComponent/admin/admin-dashboard";
import AdminUsers from "./customComponent/admin/admin-users.jsx";
import path from "path";
import { element } from "prop-types";
import MovieForm from "./customComponent/movieForm.jsx";

const customNavBarPages = [
  { name: "Home", path: "/" },
  { name: "Admin", path: "/admin" },
  { name: "Products", path: "/products" },
  { name: "Single Product", path: "/product/1" },
  { name: "Cart", path: "/cart" },
  { name: "Movies", path: "/movies" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App pages={customNavBarPages} />,
    children: [
      {
        path: "/movies",
        element: <MovieLister />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/counter",
        element: <Counters />,
      },
      {
        path: "/home",
        element: <Homapage />,
      },
      {
        path: "/movie/:id?",
        element: <MovieForm />,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <AdminDash />,
    children: [
      {
        path: "/admin/users",
        element: <AdminUsers />,
      },
    ],
  },
  // {
  //   path: "/home",
  //   element: <Homapage />,
  // },
  /* {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterUser />,
  }, */
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
