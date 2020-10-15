import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Employees System</span>

        <ul className="navbar-nav">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/employees">employees</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
