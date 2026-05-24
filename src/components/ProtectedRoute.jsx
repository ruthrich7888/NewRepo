import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { auth, db } from "../firebase";

import { onAuthStateChanged } from "firebase/auth";

import { doc, getDoc } from "firebase/firestore";

const ProtectedRoute = ({ children, allowedRole }) => {
  const [loading, setLoading] = useState(true);

  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAuthorized(false);

        setLoading(false);

        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const userData = userSnap.data();

          if (userData.role === allowedRole) {
            setAuthorized(true);
          } else {
            setAuthorized(false);
          }
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        console.log(error);

        setAuthorized(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, [allowedRole]);

  if (loading) {
    return <div className="p-5 text-center">Loading...</div>;
  }

  if (!authorized) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
