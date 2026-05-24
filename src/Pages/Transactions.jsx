import React, { useEffect, useState } from "react";

import { Container, Card, Table, Badge, Button } from "react-bootstrap";

import { auth, db } from "../firebase";

import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;

    // DEPOSITS
    const depositsQuery = query(
      collection(db, "deposits"),

      where("userId", "==", user.uid),
    );

    // WITHDRAWALS
    const withdrawalsQuery = query(
      collection(db, "withdrawals"),

      where("userId", "==", user.uid),
    );

    // INVESTMENTS
    const investmentsQuery = query(
      collection(db, "investments"),

      where("userId", "==", user.uid),
    );

    const unsubDeposits = onSnapshot(
      depositsQuery,

      (snapshot) => {
        const depositData = snapshot.docs.map((doc) => ({
          id: doc.id,

          type: "Deposit",

          ...doc.data(),
        }));

        setTransactions((prev) => [
          ...prev.filter((t) => t.type !== "Deposit"),

          ...depositData,
        ]);
      },
    );

    const unsubWithdrawals = onSnapshot(
      withdrawalsQuery,

      (snapshot) => {
        const withdrawalData = snapshot.docs.map((doc) => ({
          id: doc.id,

          type: "Withdrawal",

          ...doc.data(),
        }));

        setTransactions((prev) => [
          ...prev.filter((t) => t.type !== "Withdrawal"),

          ...withdrawalData,
        ]);
      },
    );

    const unsubInvestments = onSnapshot(
      investmentsQuery,

      (snapshot) => {
        const investmentData = snapshot.docs.map((doc) => ({
          id: doc.id,

          type: "Investment",

          ...doc.data(),
        }));

        setTransactions((prev) => [
          ...prev.filter((t) => t.type !== "Investment"),

          ...investmentData,
        ]);
      },
    );

    return () => {
      unsubDeposits();

      unsubWithdrawals();

      unsubInvestments();
    };
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Transaction History</h2>
      <Button
        variant="secondary"
        className="mb-4"
        onClick={() => navigate("/investor/dashboard")}
      >
        ← Back to Dashboard
      </Button>
      <Card className="p-3 shadow-sm">
        <Table responsive hover>
          <thead>
            <tr>
              <th>Type</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.type}</td>

                <td>${tx.amount || 0}</td>

                <td>
                  <Badge
                    bg={
                      tx.status === "approved"
                        ? "success"
                        : tx.status === "pending"
                          ? "warning"
                          : "secondary"
                    }
                  >
                    {tx.status || "completed"}
                  </Badge>
                </td>

                <td>
                  {tx.createdAt
                    ?.toDate?.()

                    ?.toLocaleString?.() || "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default Transactions;
