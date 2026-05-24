import React from "react";

import { Nav, Button } from "react-bootstrap";

import { Link, Outlet, useNavigate } from "react-router-dom";

import {
  FaTruck,
  FaChartLine,
  FaMoneyBillWave,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { signOut } from "firebase/auth";

import { auth } from "../firebase";

import "../Pages/InvestorDashboard.css";

const InvestorLayout = () => {
  const navigate = useNavigate();

  // LOGOUT
  const handleLogout = async () => {
    await signOut(auth);

    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      {/* SIDEBAR */}

      <div className="sidebar">
        <div className="sidebar-logo">EQUIPLEASING</div>

        <Nav className="flex-column sidebar-nav">
          <Nav.Link as={Link} to="/investor/dashboard">
            <FaTruck />
            Dashboard
          </Nav.Link>

          <Nav.Link as={Link} to="/investment/plans">
            <FaChartLine />
            Investments
          </Nav.Link>

          <Nav.Link as={Link} to="/investor/transactions">
            <FaMoneyBillWave />
            Transactions
          </Nav.Link>

          <Nav.Link as={Link} to="/investor/profile">
            <FaUserCircle />
            Profile
          </Nav.Link>

          <Button variant="danger" className="mt-4" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </Button>
        </Nav>
      </div>

      {/* PAGE CONTENT */}

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default InvestorLayout;
