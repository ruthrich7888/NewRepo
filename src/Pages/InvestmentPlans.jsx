import React, { useState, useEffect } from "react";
import {
  doc,
  updateDoc,
  addDoc,
  collection,
  increment,
  runTransaction,
} from "firebase/firestore";
import toast from "react-hot-toast";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const InvestmentPlans = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  // 🚀 SAFE INVESTMENT ENGINE
  const handleInvest = async (plan) => {
    if (loading) return;
    setLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) {
        toast.error("Please login");
        return;
      }

      const userRef = doc(db, "users", user.uid);

      await runTransaction(db, async (transaction) => {
        const userSnap = await transaction.get(userRef);
        if (!userSnap.exists()) throw new Error("User not found");

        const userData = userSnap.data();

        // Prevent duplicate active plan of the same type
        const investmentsSnapshot = await getDocs(
          collection(db, "investments"),
        );
        const hasActivePlan = investmentsSnapshot.docs.some(
          (inv) =>
            inv.data().userId === user.uid &&
            inv.data().planName === plan.name &&
            inv.data().status === "active",
        );
        if (hasActivePlan) throw new Error("You already have this active plan");

        if ((userData.walletBalance || 0) < plan.amount)
          throw new Error("Insufficient wallet balance");

        // Deduct wallet
        transaction.update(userRef, {
          walletBalance: userData.walletBalance - plan.amount,
          activePlans: increment(1),
          totalInvested: increment(plan.amount),
        });

        // Create investment
        const investRef = doc(collection(db, "investments"));
        transaction.set(investRef, {
          userId: user.uid,
          email: user.email,
          planName: plan.name,
          amount: plan.amount,
          weeklyROI: plan.roi,
          duration: plan.duration,
          status: "active",
          progress: 0,
          createdAt: new Date(),
          lastUpdate: new Date(),
        });
      });

      toast.success("Investment Activated Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      {/* 🔙 BACK BUTTON (NOW CORRECTLY PLACED) */}
      <Button
        variant="secondary"
        className="mb-4"
        onClick={() => navigate("/investor/dashboard")}
      >
        ← Back to Investor Dashboard
      </Button>

      <h2 className="mb-5 text-center">Truck Partnership Plans</h2>

      <Row>
        {plans.map((plan) => (
          <Col lg={4} className="mb-4" key={plan.id}>
            <Card className="p-4 h-100 shadow-sm">
              <h3>{plan.name}</h3>

              <h1 className="my-4">${plan.amount}</h1>

              <p>
                Weekly ROI: <strong>{plan.roi}%</strong>
              </p>

              <p>
                Duration: <strong>{plan.duration} Days</strong>
              </p>

              <Button
                variant="dark"
                disabled={loading}
                onClick={() => handleInvest(plan)}
              >
                {loading ? "Processing..." : "Invest Now"}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default InvestmentPlans;
