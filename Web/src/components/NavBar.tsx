import { Link } from "react-router-dom";
import Penguin from "../assets/penguin.png";

function NavBar() {
  return (
    <div className="w-full h-[5rem] bg-gray-100  flex items-center justify-between px-4">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={Penguin} alt="Penguin" />
        </div>
        <span className="ml-2 font-bold font-sans text-[1.5rem] text-gray-800">
          Sho Watanabe
        </span>
      </div>
      <div className="space-x-4 text-gray-500">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <span>|</span>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <span>|</span>
        <Link to="/projects" className="hover:text-gray-400">
          Projects
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
