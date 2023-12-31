// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@/context/user";

export const Avatar = () => {
   const { user } = useContext(UserContext);

   return (
      <details className="relative">
         <summary className="mx-3 flex items-center cursor-pointer">
            <img
               src="https://picsum.photos/64/64"
               alt="avatar"
               className="w-12 h-12 p-1 border-2 border-transparent border-t-primary border-l-primary rounded-full"
            />
            <span className="flex flex-col">
               <b className="text-sm">
                  {user?.firstName} {user?.lastName}
               </b>
               <p className="text-xs">{user?.email}</p>
            </span>
         </summary>
         <ul className="p-3 bg-white absolute left-3 right-3">
            <li>
               <Link to="/auth/logout" className="flex gap-1 items-center">
                  <i className="bx bx-log-out"></i>
                  logout
               </Link>
            </li>
         </ul>
      </details>
   );
};
