import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useRef } from "react";
const Navbar = () => {
  let liCollection = [
    {
      id: 1,
      to: "/",
      name: "Home",
    },
    {
      id: 2,
      to: "/projects",
      name: "Projects",
    },
    {
      id: 3,
      to: "/services",
      name: "Services",
    },
    {
      id: 4,
      to: "/about",
      name: "About",
    },

    {
      id: 5,
      to: "/contact",
      name: "Contact",
    },
  ];

  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((prevState) => !prevState);
  };
  // dark mode button
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
  }
  // navbar close automatically
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom p-3 fs-5">
        <Link to="/" className="navbar-brand mx-5">
          Naitik.dev
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            {liCollection.map((liItem) => {
              return (
                <Fragment key={liItem.id}>
                  <li className="nav-item mx-5 ms-3">
                    <NavLink
                      onClick={collapseNav}
                      to={liItem.to}
                      className="nav-link"
                    >
                      {liItem.name}
                    </NavLink>
                  </li>
                </Fragment>
              );
            })}
          </ul>
          <button
            type="button"
            className="btn btn-dark  ms-3 mx-5"
            onClick={handleClick}
          >
            {isDarkMode ? (
              <i className="bi bi-brightness-high-fill"></i>
            ) : (
              <i className="bi bi-moon-fill"></i>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
