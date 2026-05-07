import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#ecfdf5" }} className="shadow px-4 py-5 my-3">
      <div className="container" style={{ maxWidth: "75%" }}>
        <footer
          className="d-flex flex-column flex-md-row align-items-center justify-content-between px-4 py-3 rounded-3"
          style={{ backgroundColor: "#065f46" }}
        >
          {/* Copyright */}
          <span className="text-white small text-center mb-3 mb-md-0">
            © 2026 CLEANCITY EGYPT. CIVIC DUTY & ENVIRONMENTAL STEWARDSHIP.
          </span>

          {/* Logo */}
          <Link to="/" className="text-decoration-none mb-3 mb-md-0">
            <h1 className="fw-bolder mb-0" style={{ color: "#4ade80", fontSize: "1.3rem" }}>
              CleanCity
            </h1>
          </Link>

          {/* Links */}
          <ul className="list-unstyled d-flex flex-wrap gap-3 mb-0">
            <li>
              <a href="#" className="text-white-50 small text-decoration-none">
                PRIVACY POLICY
              </a>
            </li>
            <li>
              <a href="#" className="text-white-50 small text-decoration-none">
                TERMS OF SERVICE
              </a>
            </li>
            <li>
              <a href="#" className="text-white-50 small text-decoration-none">
                CONTACT MUNICIPALITY
              </a>
            </li>
            <li>
              <a href="#" className="text-white-50 small text-decoration-none">
                FAQ
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}