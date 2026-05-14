import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
      <div className="text-lg font-bold">My Portfolio</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-gray-400">
          Projects
        </Link>
      </div>
    </div>
  );
}
export default NavBar;
