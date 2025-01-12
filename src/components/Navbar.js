import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import custom styles

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check user's system preference on component mount
  useEffect(() => {
    const darkModePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(darkModePreference);

    // Listen for changes in theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const themeChangeListener = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", themeChangeListener);

    return () => {
      mediaQuery.removeEventListener("change", themeChangeListener);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      } custom-navbar`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Task Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-task">
                New Task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ongoing">
                Ongoing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pending">
                Pending
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/completed">
                Completed
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/master-data">
                Master Data
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
