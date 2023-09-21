// eslint-disable-next-line no-unused-vars
import React from "react";
import notFound from "@/assets/img/404.png";

export const NotFound = () => {
   return (
      <div className="pt-5 flex items-center justify-center">
         <img src={notFound} alt="" />
      </div>
   );
};
