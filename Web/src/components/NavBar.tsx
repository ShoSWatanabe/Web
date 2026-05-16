import { Link, useLocation } from "react-router-dom";
import Penguin from "../assets/nav/penguin.png";
import Menu from "../assets/nav/menu.svg";
import { useState } from "react";

function NavBar({ isMobile }: { isMobile: boolean }) {
  // Use current path to underline the nav page you are on
  const path = useLocation().pathname;

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuTextClass = "px-10 py-3 rounded-[5vw] flex justify-center";
  return (
    <>
      {/* This is the side bar nav for mobile responsiveness */}
      {showMenu && isMobile && (
        <div
          className="w-screen h-screen fixed bg-black/50 z-99"
          onClick={() => setShowMenu(false)}
        >
          <div className="h-screen right-0 bg-white absolute">
            <div className="text-gray-500 text-[1.5rem] flex flex-col pt-8 px-5 gap-4">
              <Link to="/" className="hover:text-gray-400">
                {path === "/" ? (
                  <div className={menuTextClass + " bg-gray-200"}>Home</div>
                ) : (
                  <div className={menuTextClass}>Home</div>
                )}
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                {path === "/about" ? (
                  <div className={menuTextClass + " bg-gray-200"}>About</div>
                ) : (
                  <div className={menuTextClass}>About</div>
                )}
              </Link>
              <Link to="/projects" className="hover:text-gray-400">
                {path === "/projects" ? (
                  <div className={menuTextClass + " bg-gray-200"}>Projects</div>
                ) : (
                  <div className={menuTextClass}>Projects</div>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Here is the nav */}
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
          <div className="w-10 h-10" onClick={() => setShowMenu(true)}>
            <img src={Menu} alt="Menu" />
          </div>
        ) : (
          <div className="space-x-4 text-gray-500">
            <Link to="/" className="hover:text-gray-400">
              {path === "/" ? <u>Home</u> : "Home"}
            </Link>
            <span>|</span>
            <Link to="/about" className="hover:text-gray-400">
              {path === "/about" ? <u>About</u> : "About"}
            </Link>
            <span>|</span>
            <Link to="/projects" className="hover:text-gray-400">
              {path === "/projects" ? <u>Projects</u> : "Projects"}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
export default NavBar;
