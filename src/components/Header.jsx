import React from "react";
import Line from "./Line";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logooV from "../components/assets/logooV.jpg";
import { Link, useLocation } from "react-router-dom";
import { PiHeadphones } from "react-icons/pi";

const Header = () => {
  const navLinks = [
    { id: 1, to: "/", content: "HOME" },

    {
      id: 4,
      to: "/equipment-list",
      content: "EQUIPMENT LIST",
    },

    {
      id: 2,
      to: "/about-us",
      content: "ABOUT US",
    },

    // {
    //   id: 4,
    //   to: "/equipment-list",
    //   content: "EQUIPMENT LIST",
    // },
    {
      id: 6,
      to: "/contact",
      content: "CONTACT US",
    },
  ];
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={logooV} alt="logo" />
          </Link>
        </div>

        <div className="contact-info">
          <div className="d-none d-lg-flex">
            <Line length={40} color="black" orientation="vertical" />
          </div>
          <PiHeadphones style={{ fontSize: "30px" }} className="icon" />

          <span className="fw-bold d-inline-block">
            {" "}
            GET QUICK SUPPORT +1 800 8730 000
          </span>
          <div className="d-none d-lg-flex">
            <Line length={40} color="black" orientation="vertical" />
          </div>
        </div>
        <nav className="nav-links">
          <ul>
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.to}
                  className={
                    location.pathname === link.to
                      ? "fw-medium action"
                      : " nav-link mylinks"
                  }
                >
                  {link.content}{" "}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

{
  /* <PiHeadphones />; */
}
