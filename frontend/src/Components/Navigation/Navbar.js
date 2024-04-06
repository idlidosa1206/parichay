import React from "react";
import "./Navbar.css";
import { BiSearch } from 'react-icons/bi';
import { IconContext } from "react-icons";

const Navbar = () => {
  const navigationItems = [
    { title: "EXPENSES", id: 1, path: "../../pages/expenses" },
    { title: "FEATURES", id: 2, path: "/features" },
    { title: "OVERVIEW", id: 3, path: "/overview" },
  ];

  return (
    /*<nav>
      <ul>
        {navigationItems.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </nav>*/
    <>
      <div className="navdes">
        <div className="flex-container">
          {/* /*{navigationItems.map((item) => (
            <a href="../../pages/expense" key={item.id}>
              <button className="btn">
                <li>{item.title}</li>
              </button>
            </a>
          ))}*/ }
          <li className="btn"><a href="../../pages/expense.jsx">Expense</a></li>
        </div>
        {/*<img
          className="logo"
          alt="Budgetbuddy"
          src={require("../../img/bblogo.png")}
        />*/}

        <div className="flex-container">
          <button id="login-btn">Login </button>
          <button id="signup-btn">Sign Up! </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;