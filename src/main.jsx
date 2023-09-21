import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

import "./assets/css/tailwind.css";

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
   <RouterProvider router={router}></RouterProvider>
);
