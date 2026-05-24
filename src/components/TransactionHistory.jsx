import React, { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { db, auth } from "../firebase";

import { Card, Table, Badge } from "react-bootstrap";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const user = auth.currentUser;

    if (!user) return;

    const querySnapshot = await getDocs(collection(db, "transactions"));

    const transactionList = [];

    querySnapshot.forEach((docItem) => {
      const data = docItem.data();

      if (data.userId === user.uid) {
        transactionList.push({
          id: docItem.id,

          ...data,
        });
      }
    });

    setTransactions(transactionList);
  };

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, "transactions"),

      (snapshot) => {
        const transactionList = [];

        snapshot.forEach((docItem) => {
          const data = docItem.data();

          if (data.userId === user.uid) {
            transactionList.push({
              id: docItem.id,

              ...data,
            });
          }
        });

        setTransactions(transactionList.reverse());
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <Card className="p-4 mt-4">
      <h4 className="mb-4">Transaction History</h4>

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

              <td>${tx.amount}</td>

              <td>
                <Badge
                  bg={
                    tx.status === "approved"
                      ? "success"
                      : tx.status === "pending"
                        ? "warning"
                        : tx.status === "paid"
                          ? "primary"
                          : "secondary"
                  }
                >
                  {tx.status}
                </Badge>
              </td>

              <td>{tx.createdAt?.toDate?.()?.toLocaleString?.() || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default TransactionHistory;
