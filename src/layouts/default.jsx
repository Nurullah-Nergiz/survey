import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Nav } from "../components/Nav";

export const DefaultLayout = () => {
   return (
      <>
         <Header />
         <Nav />
         <main>
            <Outlet />
         </main>
      </>
   );
};
