import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../components/assets/logooV.jpg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  IoMdMenu,
  IoMdClose,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io";
import ActionBtn from "./ActionBtn";
import { links } from "../data/data";
import Line from "./Line";
import { PiHeadphones } from "react-icons/pi";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const navLinks = [
    {
      id: 1,
      to: "/equipment-list",
      content: "EQUIPMENT LIST",
    },

    {
      id: 2,
      to: "/about-us",
      content: "ABOUT US",
    },

    {
      id: 4,
      to: "/careers",
      content: "CAREERS",
    },
    {
      id: 6,
      to: "/contact",
      content: "CONTACT US",
    },
  ];

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="bg-white header py-3 position-sticky top-0 ">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} width={"120px"} alt="brand Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {expanded ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex gap-3">
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
          </Nav>
          <Nav className="ms-auto d-lg-flex gap-2 gap-lg-5 links">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  to={link.to}
                  className={
                    location.pathname === link.to
                      ? "fw-medium  action"
                      : " nav-link mylinks"
                  }
                >
                  {link.content}
                </Link>
              );
            })}
          </Nav>

          <Nav className="ms-auto d-lg-flex gap-3"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
