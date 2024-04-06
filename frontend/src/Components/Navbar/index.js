import React, { useState } from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavDropdown,
  DropdownMenu,
} from "./NavbarElements";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Nav>
        <NavMenu>
          <div className="flex-container">
            <NavLink to="/home">Home</NavLink>
            {/* Render dropdown toggle and menu */}
            <NavDropdown onClick={toggleDropdown} active={dropdownOpen}>
              Help Pages
              <DropdownMenu visible={dropdownOpen}>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/houses">Houses</NavLink>
                <NavLink to="/healthcare">Health</NavLink>
                <NavLink to="/education">Education</NavLink>
              </DropdownMenu>
            </NavDropdown>
            <NavLink to="/helpline">Helpline</NavLink>
            <NavLink to="/chat">Chat</NavLink>
          </div>
        </NavMenu>
        <div className="flex-container">
          <Link to="/profile">
            <button id="login-btn">Profile</button>
          </Link>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
