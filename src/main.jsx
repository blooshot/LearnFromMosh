import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieLister from "./customComponent/movies.jsx";
import Counters from "./customComponent/basiCounter/counters.jsx";
import Homapage from "./customComponent/basiCounter/homepage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/movies",
        element: <MovieLister />,
      },
      {
        path: "/counter",
        element: <Counters />,
      },
    ],
  },
  {
    path: "/home",
    element: <Homapage />,
  },
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
