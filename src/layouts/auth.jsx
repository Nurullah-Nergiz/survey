import { Outlet } from "react-router-dom";

export const AuthLayouts = () => {
   return (
      <>
         <main className="flex-1">
            <Outlet />
         </main>
      </>
   );
};
