// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { DefaultLayout } from "../layouts/default";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { NewSurvey } from "../pages/newSurvey";

export const router = createBrowserRouter([
   {
      element: <DefaultLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "new",
            element: <NewSurvey />,
         },
      ],
   },
   {
      path: "login",
      element: <Login />,
   },
   {
      path: "register",
      element: <Register />,
   },
]);
