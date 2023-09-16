import React from "react";

export const Avatar = () => {
   const user = {
      firstName: "Nurullah",
      lastName: "Nergiz",
      imgSrc: "https://picsum.photos/64/64",
   };
   return (
      <div className="mx-3 flex items-center">
         <img
            src={user.imgSrc}
            alt="avatar"
            className="w-10 h-10 p-1 border-2 border-transparent border-t-primary border-l-primary rounded-full"
         />
         <span>
            <b className="text-sm">
               {user.firstName} {user.lastName}
            </b>
         </span>
      </div>
   );
};
