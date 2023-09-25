import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
   const navigate = useNavigate();

   useEffect(() => {
      Cookies.remove("user");
      navigate("/auth/login");
   });

   return <>logout user</>;
};
