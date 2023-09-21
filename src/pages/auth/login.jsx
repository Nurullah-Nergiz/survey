// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../../services/auth";
import Cookies from "js-cookie";

export const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const navigate = useNavigate();

   const handler = (e) => {
      e.preventDefault();
      loginService({ email, password })
         .then(({ status, data }) => {
            if (status == 200) {
               Cookies.set("user", JSON.stringify(data));
               navigate("/");
            }
         })
         .catch((err) => console.error(err));
   };

   return (
      <form
         className="h-full mx-10 flex justify-center items-center"
         onSubmit={handler}>
         <ul className=" p-4 bg-white shadow-lg">
            <li className="h-20"></li>
            <li className="mb-3 ">
               <p className="mb-1">Email</p>
               <input
                  className="bg-gray-100"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </li>
            <li className="mb-3 ">
               <p className="mb-1">Password</p>
               <input
                  className="bg-gray-100"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </li>
            <li>
               <Link to="/register">Create new account</Link>
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
