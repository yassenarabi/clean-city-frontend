import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "relative text-green-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-600"
      : "text-gray-600 hover:text-black text-decoration-none ";

  return (
    <>
      <nav className="p-4 bg-emerald-100 shadow-xl z-50 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink to="/" className="text-decoration-none">
              <h1 className="font-extrabold text-xl  text-green-800">
                CleanCity
              </h1>
            </NavLink>

            {/* Desktop Links */}
            <div className="flex-1 flex justify-center">
              <div className="hidden  lg:flex space-x-6 text-lg font-semibold sm:hidden">
                <NavLink to="/" className={linkClass  } >
                  Home
                </NavLink>
                <NavLink to="/map" className={linkClass}>
                  Map
                </NavLink>
                <NavLink to="/reports" className={linkClass}>
                  Reports
                </NavLink>
                <NavLink to="/companies" className={linkClass}>
                  Companies
                </NavLink>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4 ">
              <i className="text-xl text-green-500 fa-solid  fa-globe cursor-pointer"></i>

              {/* Desktop Buttons */}
              <button className="hidden sm:hidden lg:flex  rounded-lg bg-green-500 py-2 px-4 text-white shadow-md hover:shadow-lg hover:shadow-green-500/40">
                Login
              </button>
              <button className="hidden sm:hidden lg:flex rounded-lg bg-green-500 py-2 px-4 text-white shadow-md hover:shadow-lg hover:shadow-green-500/40">
                Register
              </button>

              {/* Hamburger Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden bg-green-600 text-white p-2 rounded text-2xl leading-none"
              >
                {open ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="flex flex-col gap-3 pb-4 pt-2 border-t border-green-200">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/map"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                Map
              </NavLink>
              <NavLink
                to="/reports"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700"
                }
              >
                Reports
              </NavLink>
              <NavLink
                to="/companies"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-green-600 font-bold" : "text-gray-700" 
                }
              >
                Companies
              </NavLink>

              <div className="flex gap-3 pt-2">
                <button className="flex-1 rounded-lg bg-green-500 py-2 px-4 text-white shadow-md">
                  Login
                </button>
                <button className="flex-1 rounded-lg bg-green-500 py-2 px-4 text-white shadow-md">
                  Register
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
