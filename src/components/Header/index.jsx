import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export const Header = () => {
   return (
      <header className="h-16 flex items-center justify-between">
         <Link to="/">Logo</Link>
         <Avatar />
      </header>
   );
};
