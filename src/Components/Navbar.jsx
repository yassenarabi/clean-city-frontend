import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "nav-link fw-semibold text-decoration-none"
      : "nav-link text-secondary fw-semibold text-decoration-none";

  const activeStyle = { color: "#16a34a", borderBottom: "2px solid #16a34a" };

  return (
    <nav className="px-3 py-2 shadow" style={{ backgroundColor: "#ecfdf5", zIndex: 50 }}>
      <div className="container-xl">
        <div className="d-flex align-items-center justify-content-between" style={{ height: "64px" }}>

          {/* Logo */}
          <NavLink to="/" className="text-decoration-none">
            <h1 className="fw-bolder mb-0" style={{ color: "#166534", fontSize: "1.3rem" }}>
              CleanCity
            </h1>
          </NavLink>

          {/* Desktop Links */}
          <div className="d-none d-lg-flex gap-4 fs-6 fw-semibold">
            <NavLink to="/" className={linkClass}
              style={({ isActive }) => isActive ? activeStyle : {}}>
              Home
            </NavLink>
            <NavLink to="/map" className={linkClass}
              style={({ isActive }) => isActive ? activeStyle : {}}>
              Map
            </NavLink>
            <NavLink to="/reports" className={linkClass}
              style={({ isActive }) => isActive ? activeStyle : {}}>
              Reports
            </NavLink>
            <NavLink to="/companies" className={linkClass}
              style={({ isActive }) => isActive ? activeStyle : {}}>
              Companies
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">
            <i className="fa-solid fa-globe fs-5" style={{ color: "#22c55e", cursor: "pointer" }}></i>

            {/* Desktop Buttons */}
            <button className="btn text-white d-none d-lg-block px-4 py-2"
              style={{ backgroundColor: "#22c55e", borderRadius: "0.5rem" }}>
              Login
            </button>
            <button className="btn text-white d-none d-lg-block px-4 py-2"
              style={{ backgroundColor: "#22c55e", borderRadius: "0.5rem" }}>
              Register
            </button>

            {/* Hamburger */}
            <button
              className="btn text-white d-lg-none px-3 py-1 fs-5"
              style={{ backgroundColor: "#16a34a", borderRadius: "0.5rem" }}
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="d-flex flex-column gap-3 pb-3 pt-2 border-top"
            style={{ borderColor: "#bbf7d0" }}>
            {[
              { to: "/", label: "Home" },
              { to: "/map", label: "Map" },
              { to: "/reports", label: "Reports" },
              { to: "/companies", label: "Companies" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="text-decoration-none fw-semibold"
                style={({ isActive }) => ({
                  color: isActive ? "#16a34a" : "#374151",
                  fontWeight: isActive ? "bold" : "normal",
                })}
              >
                {label}
              </NavLink>
            ))}

            <div className="d-flex gap-3 pt-2">
              <button className="btn text-white flex-fill py-2"
                style={{ backgroundColor: "#22c55e", borderRadius: "0.5rem" }}>
                Login
              </button>
              <button className="btn text-white flex-fill py-2"
                style={{ backgroundColor: "#22c55e", borderRadius: "0.5rem" }}>
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}