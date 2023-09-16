// eslint-disable-next-line no-unused-vars
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { DefaultLayout } from "../layouts/default";

export const router = createBrowserRouter([
   {
      element: <DefaultLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
]);
