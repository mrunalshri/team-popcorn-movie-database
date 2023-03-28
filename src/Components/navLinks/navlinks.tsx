import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks: React.FC = () => {
  return (
    <nav className="flex w-full flex-wrap items-center justify-center  py-1  shadow-lg">
      <ul className="list-style-none justify-center	flex gap-6 text-xl">
        <li className="hover:opacity-80 focus:opacity-80">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white lg:px-2 font-extrabold"
                : "text-white lg:px-2"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="hover:opacity-80 focus:opacity-80">
          <NavLink
            to="/genres"
            className={({ isActive }) =>
              isActive
                ? "text-white lg:px-2 font-extrabold"
                : "text-white lg:px-2"
            }
          >
            Genres
          </NavLink>
        </li>
        <li className="hover:opacity-80 focus:opacity-80">
          <NavLink
            to="/tvshows"
            className={({ isActive }) =>
              isActive
                ? "text-white lg:px-2 font-extrabold"
                : "text-white lg:px-2"
            }
          >
            TV Shows
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
