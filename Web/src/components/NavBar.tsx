import { Link } from "react-router-dom";
import Penguin from "../assets/penguin.png";
import Menu from "../assets/menu.svg";

function NavBar({ isMobile }: { isMobile: boolean }) {
  return (
    <div className="w-full h-[5rem] bg-gray-100  flex items-center justify-between px-[min(40px,5vw)]">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={Penguin} alt="Penguin" />
        </div>
        <span className="ml-4 font-bold text-[1.2rem] text-gray-800">
          Sho Watanabe
        </span>
      </div>

      {/* If is mobile, display the menu icon */}
      {isMobile ? (
        <div className="w-10 h-10">
          <img src={Menu} alt="Menu" />
        </div>
      ) : (
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
      )}
    </div>
  );
}
export default NavBar;
