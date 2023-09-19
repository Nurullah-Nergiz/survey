import { redirect } from "react-router-dom";

export const Logout = () => {
   redirect("/auth/login");
   return <>logout user</>;
};
