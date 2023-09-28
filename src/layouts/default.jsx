/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import { Outlet, useNavigate, useRoutes } from "react-router-dom";
import { Header } from "../components/Header";
import {
   getAuthenticatedUser,
   isAuthentication,
} from "@/guards/authentication";
import { UserContext } from "@/context/user";
import Cookies from "js-cookie";

export const DefaultLayout = () => {
   const navigate = useNavigate();
   const [isLogin] = useState(isAuthentication());

   const shareData = useMemo(() => getAuthenticatedUser(), [isLogin]);

   useEffect(() => {
      if (!isLogin) {
         navigate("/auth/login");
      }
   }, [isLogin]);

   return (
      <>
         <UserContext.Provider value={shareData}>
            <Header />
            <main className="flex-1">{isLogin ? <Outlet /> : ""}</main>
         </UserContext.Provider>
      </>
   );
};
