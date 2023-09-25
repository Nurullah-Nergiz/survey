import { isAuthentication } from "@/guards/authentication";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayouts = () => {
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
         <main className="flex-1">{isLogin ? <Outlet /> : ""}</main>
      </>
   );
};
