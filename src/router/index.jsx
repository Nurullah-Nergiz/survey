// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages";
import { DefaultLayout } from "@/layouts/default";
import { Login } from "@/pages/auth/login";
import { Register } from "@/pages/auth/register";
import { NewSurvey } from "@/pages/newSurvey";
import { AuthLayouts } from "@/layouts/auth";
import { Logout } from "@/pages/auth/logout";
import { NotFound } from "@/pages/NotFound";
import { SurveyDetail } from "@/pages/surveys/detail";
import { isAuthentication } from "@/guards/authentication";

export const router = createBrowserRouter([
   {
      element: isAuthentication() ? (
         <DefaultLayout />
      ) : (
         <Navigate to="/auth/login" />
      ),
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "new",
            element: <NewSurvey />,
         },
         {
            path: "surveys/:id",
            element: <SurveyDetail />,
         },
         {
            path: "*",
            element: <NotFound />,
         },
      ],
   },
   {
      path: "auth",
      element: !isAuthentication() ? <AuthLayouts /> : <Navigate to="/" />,
      children: [
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "logout",
            element: <Logout />,
         },
      ],
   },
]);
