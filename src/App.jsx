import { useEffect } from "react";
import React from "react";
// import { Analytics } from "@vercel/analytics/react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import EquipmentList from "./Pages/EquipmentList";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Errorpage from "./Pages/Errorpage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import TrainingPage from "./Pages/TraningPage";
import EmployeeHandbook from "./components/EmployeeHandbook";
import ITPolicies from "./components/ITPolicies";
import SafetyProcedures from "./components/SafetyProcedures";
import OnboardingDashboard from "./components/OnboardingDashboard";
import EmployeeDownloads from "./components/EmployeeDownloads";
import InvestmentPage from "./pages/InvestmentPage";
import Register from "./pages/Register";
import InvestorDashboard from "./pages/InvestorDashboard";
import AdminDeposits from "./pages/AdminDeposits";
import InvestmentPlans from "./pages/InvestmentPlans";
import AdminWithdrawals from "./pages/AdminWithdrawals";
import AdminROI from "./pages/AdminROI";
import AdminAnalytics from "./pages/AdminAnalytics";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPlans from "./pages/AdminPlans";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import InvestorLayout from "./layouts/InvestorLayout";

import "react-toastify/dist/ReactToastify.css";

import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { IoReturnUpBackSharp } from "react-icons/io5";
import Head from "./components/Head";
import Maintenance from "./components/Maintenance";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  const isMaintenance = import.meta.env.VITE_MAINTENANCE === "true";

  if (isMaintenance) {
    return <Maintenance />;
  }

  function ScrollToHash() {
    const { hash } = useLocation();
    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
    return null;
  }
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* <Head /> */}
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/equipment-list" element={<EquipmentList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/errorpage" element={<Errorpage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/investment/register" element={<Register />} />
          <Route path="/investment/plans" element={<InvestmentPlans />} />
          <Route
            path="/investor"
            element={
              <ProtectedRoute allowedRole="investor">
                <InvestorLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<InvestorDashboard />} />

            <Route path="transactions" element={<Transactions />} />

            <Route path="profile" element={<Profile />} />
          </Route>
          {/* <Route
            path="/investor/profile"
            element={
              <ProtectedRoute allowedRole="investor">
                <Profile />
              </ProtectedRoute>
            }
          /> */}
          {/* <Route
            path="/investor/transactions"
            element={
              <ProtectedRoute allowedRole="investor">
                <Transactions />
              </ProtectedRoute>
            }
          /> */}
          <Route
            path="/admin/roi"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminROI />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/admin/roi" element={<AdminROI />} /> */}
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminAnalytics />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute allowedRole="employee">
                <Dashboard />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/investor/dashboard"
            element={
              <ProtectedRoute allowedRole="investor">
                <InvestorDashboard />
              </ProtectedRoute>
            }
          /> */}

          {/* <Route path="/admin/deposits" element={<AdminDeposits />} /> */}
          <Route
            path="/admin/deposits"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminDeposits />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/admin/withdrawals" element={<AdminWithdrawals />} /> */}

          <Route
            path="/admin/withdrawals"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminWithdrawals />
              </ProtectedRoute>
            }
          />
          <Route
            path="/training"
            element={
              <PrivateRoute>
                <TrainingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/employee-handbook"
            element={
              <PrivateRoute>
                <EmployeeHandbook />
              </PrivateRoute>
            }
          />
          <Route
            path="/safety-procedures"
            element={
              <PrivateRoute>
                <SafetyProcedures />
              </PrivateRoute>
            }
          />

          <Route
            path="/onboarding-dashboard"
            element={
              <PrivateRoute>
                <OnboardingDashboard />
              </PrivateRoute>
            }
          />
          <Route path="/investor/dashboard" element={<InvestorDashboard />} />
          <Route
            path="/employee-downloads"
            element={
              <PrivateRoute>
                <EmployeeDownloads />
              </PrivateRoute>
            }
          />

          <Route
            path="/it-policies"
            element={
              <PrivateRoute>
                <ITPolicies />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/plans"
            element={
              <ProtectedRoute allowedRole="admin">
                <AdminPlans />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* <Analytics /> */}
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
};

export default App;
