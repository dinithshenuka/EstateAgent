import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHeart, faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          Estate Agent
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Navigation Items */}
        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarNav"
        >
          {/* Center Menu */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-2">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/agents">
                Agents
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Right Menu */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item px-2">
              <Link className="nav-link d-flex align-items-center" to="/search">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Search
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link
                className="nav-link d-flex align-items-center"
                to="/favorites"
              >
                <FontAwesomeIcon icon={faHeart} className="me-2" />
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
