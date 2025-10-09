import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="px-4 md:px-14 navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-semibold ${
                      isActive
                        ? "text-blue-500 border-b-blue-600"
                        : "text-gray-700"
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/app"
                  className={({ isActive }) =>
                    `font-semibold ${
                      isActive
                        ? "text-blue-500 border-b-blue-600"
                        : "text-gray-700"
                    }`
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `font-semibold ${
                      isActive
                        ? "text-blue-500 border-b-blue-600"
                        : "text-gray-700"
                    }`
                  }
                  to="/installation"
                >
                  Installations
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="flex justify-start items-center gap-1">
            <img
              className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] object-cover"
              src={logo}
              alt=""
            />
            <h1 className="text-12px md:text-[18px] font-bold  text-[#632ee3]">
              HERO.IO
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "text-blue-500 border-b-blue-600"
                      : "text-gray-700"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app"
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "text-blue-500 border-b-blue-600"
                      : "text-gray-700"
                  }`
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `font-semibold ${
                    isActive
                      ? "text-blue-500 border-b-blue-600"
                      : "text-gray-700"
                  }`
                }
                to="/installation"
              >
                Installations
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            target="_bank"
            to="https://github.com/"
            className="btn bg-[#632ee3] text-white"
          >
            <FaGithub size={18} /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
