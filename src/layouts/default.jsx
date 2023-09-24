/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { isAuthentication } from "@/guards/authentication";

export const DefaultLayout = () => {
   const navigate = useNavigate();
   let isLogin = false;

   useEffect(() => {
      isLogin = isAuthentication();
      if (isLogin === true) {
         navigate("/");
      }
   }, [isLogin]);

   return (
      <>
         <Header />
         <main className="flex-1">
            <Outlet />
         </main>
      </>
   );
};
