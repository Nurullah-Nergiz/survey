import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
   const [firstName, setFirstName] = useState();
   return (
      <form className="h-full mx-10 flex justify-center items-center">
         <ul className=" p-4 bg-white shadow-lg">
            <li className="mb-3 ">
               <p className="mb-1">First Name</p>
               <input
                  className="bg-gray-100"
                  type="email"
                  onChange={(e) => setFirstName(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">Last Name</p>
               <input
                  className="bg-gray-100"
                  type="email"
                  onChange={(e) => setFirstName(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">Email</p>
               <input
                  className="bg-gray-100"
                  type="email"
                  onChange={(e) => setFirstName(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">Password</p>
               <input
                  className="bg-gray-100"
                  type="password"
                  onChange={(e) => setFirstName(e.target.value)}
               />
            </li>
            <li>
               <Link to="/register">Register</Link>
            </li>
            <li>
               <button
                  className="py-2 px-3 bg-primary rounded-lg"
                  type="submit">
                  Login
               </button>
            </li>
         </ul>
      </form>
   );
};
