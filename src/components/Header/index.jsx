import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Header = () => {
   return (
      <header className="h-16 mt-3 px-4 bg-white flex items-center justify-between shadow-md">
         <Link to="/">
            <span className="py-1 px-2 bg-primary text-white rounded-lg">
               Survey App
            </span>
         </Link>
         <Avatar />
      </header>
   );
};
