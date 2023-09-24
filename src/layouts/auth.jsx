import { isAuthentication } from "@/guards/authentication";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayouts = () => {
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
         <Outlet />
      </>
   );
};
