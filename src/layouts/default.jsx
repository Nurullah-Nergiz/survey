import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const DefaultLayout = () => {
   return (
      <>
         <Header />
         <main className="flex-1">
            <Outlet />
         </main>
      </>
   );
};
