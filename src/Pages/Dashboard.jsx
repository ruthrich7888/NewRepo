import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      toast.error("Logout failed: " + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1>Welcome, {currentUser?.displayName || currentUser?.email}!</h1>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Announcements</div>
            <div className="card-body">
              <p>
                Welcome to the employee dashboard. Stay updated with company
                news.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Calendar / Schedule</div>
            <div className="card-body">
              <ul>
                <li>Meeting on Monday 10 AM</li>
                <li>Training on Wednesday 2 PM</li>
                <li>Deadline for report: Friday</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Documents & SOPs</div>
            <div className="card-body">
              <ul>
                <li>
                  <Link to="/employee-handbook">
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#4CAF50",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Access the full Employee Handbook
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/safety-procedures">
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#f44336",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Review our Safety Procedures
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/it-policies">
                    <button
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "#008CBA",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "16px",
                      }}
                    >
                      Read the IT Policies
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h1>Welcome to Your Dashboard</h1>
              <p>Here you can access everything you need to get started!</p>

              <Link to="/training">
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Go to Training Program
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-header">Analytics Snapshot</div>
            <div className="card-body">
              <p>Revenue: $1,000,000</p>
              <p>Employees: 50</p>
              <p>Projects: 25</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <div className="card-header">Tasks / To-Do</div>
            <div className="card-body">
              <ul>
                <li>Complete quarterly report</li>
                <li>Attend team meeting</li>
                <li>Update profile information</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5 text-center">
        <p>
          Contact: support@company.com | Last updated:{" "}
          {new Date().toLocaleDateString()}
        </p>
      </footer>
    </div>
  );
};

export default Dashboard;
