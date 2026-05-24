import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth"; // <-- this is crucial

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User logged in:", user);
        // setUser(user) or handle login state
      } else {
        console.log("User logged out");
        // setUser(null)
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Login
      const userCredential = await login(email, password);
      const user = userCredential.user;

      // 2️⃣ Fetch Firestore profile
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const userData = userSnap.exists() ? userSnap.data() : null;

      if (!userData) {
        toast.error("User profile not found");
        return;
      }

      // 3️⃣ Only enforce email verification for investors
      if (userData.role === "investor" && !user.emailVerified) {
        toast.error("Please verify your email before logging in.");
        return;
      }

      // 4️⃣ Redirect by role
      if (userData.role === "investor") navigate("/investor/dashboard");
      else if (userData.role === "employee") navigate("/dashboard");
      else if (userData.role === "admin") navigate("/admin/deposits");
      else navigate("/");

      toast.success("Login successful!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
