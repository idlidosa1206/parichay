import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  color: #fdff00;
  background-color: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.8)" : "white"};
  height: 75px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border: black;
  transition: background-color 0.3s ease; /* Smooth transition for background color */
  z-index: 1000; /* Ensure the navbar stays on top */

  /* Add shadow when scrolled */
  ${({ scrolled }) =>
    scrolled &&
    `
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `}
`;

export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #4d4dff;
  }
`;

export const NavMenu = styled.div`
  color: #fdff00;
  background-color: #000000;
  display: flex;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  justify-content: space-between;
  position: relative; /* Position relative for dropdown */
`;

export const NavDropdown = styled.div`
  position: relative;
  cursor: pointer;
  &::before {
    content: "";
    border: solid #000; /* Use a color that contrasts with the background */
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px 3px;
    margin-right: 5px;
    margin-top: -20px;
    transform: ${({ active }) =>
      active ? "rotate(-135deg)" : "rotate(45deg)"};
    transition: transform 0.2s ease;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: ${({ visible }) => (visible ? "block" : "none")};
  background-color: white;
  padding: 10px;
`;

export const DropdownLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: block;
  text-align: left;
  padding: 8px 16px;
  &:hover {
    background-color: #4d4dff;
  }
`;
