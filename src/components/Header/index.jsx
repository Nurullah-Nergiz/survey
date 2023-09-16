import { Avatar } from "./Avatar";

export const Header = () => {
   return (
      <header className="h-16 p-4 flex items-center justify-between">
         <div className="a">logo</div>
         <Avatar />
      </header>
   );
};
