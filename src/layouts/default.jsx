/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { isAuthentication } from "@/guards/authentication";

export const DefaultLayout = () => {
   const navigate = useNavigate();
   const [isLogin] = useState(isAuthentication());

   useEffect(() => {
      if (!isLogin) {
         navigate("/auth/login");
         return;
      }
   }, [isLogin]);

   return (
      <>
         <Header />
         <main className="flex-1">{isLogin ? <Outlet /> : ""}</main>
      </>
   );
};
