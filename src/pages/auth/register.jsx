// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { registerService } from "@/services/auth";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const registerHandler = (e) => {
      e.preventDefault();
      registerService({ firstName, lastName, email, password })
         .then(({ status, data }) => {
            if (status == 201) {
               console.log(firstName, lastName, email, password);
               Cookies.set("user", JSON.stringify(data));
               navigate("/");
            } else {
               console.log(status, data);
            }
         })
         .catch((err) => console.error(err));
   };

   return (
      <form
         className="h-full mx-10 flex justify-center items-center"
         method="get"
         onSubmit={(e) => registerHandler(e)}>
         <ul className=" p-4 bg-white  shadow-xl shadow-gray-400">
            <li className="mb-3 ">
               <p className="mb-1">
                  First Name
                  <i className="text-red-700">*</i>
               </p>
               <input
                  className=""
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">
                  Last Name
                  <i className="text-red-700">*</i>
               </p>
               <input
                  className=""
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">
                  Email
                  <i className="text-red-700">*</i>
               </p>
               <input
                  className=""
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">
                  Password
                  <i className="text-red-700">*</i>
               </p>
               <input
                  className=""
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </li>
            <li></li>
            <li className="flex justify-between items-center">
               <Link
                  className="py-2 px-3 bg-white border border-gray-500 rounded-xl"
                  to="../login">
                  Login
               </Link>
               <button
                  className="py-2 px-3 text-white bg-primary rounded-xl"
                  type="submit">
                  Register
               </button>
            </li>
         </ul>
      </form>
   );
};
