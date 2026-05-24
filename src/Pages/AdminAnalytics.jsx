import React, { useEffect, useState } from "react";

import { Container, Row, Col, Card, Table } from "react-bootstrap";

import { collection, getDocs } from "firebase/firestore";

import { db } from "../firebase";

const AdminAnalytics = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,

    totalDeposits: 0,

    totalWithdrawals: 0,

    totalROI: 0,

    activeInvestments: 0,

    pendingDeposits: 0,

    pendingWithdrawals: 0,
  });

  const [recentTransactions, setRecentTransactions] = useState([]);

  const loadAnalytics = async () => {
    try {
      // USERS
      const usersSnap = await getDocs(collection(db, "users"));

      // DEPOSITS
      const depositsSnap = await getDocs(collection(db, "deposits"));

      // WITHDRAWALS
      const withdrawalsSnap = await getDocs(collection(db, "withdrawals"));

      // INVESTMENTS
      const investmentsSnap = await getDocs(collection(db, "investments"));

      // TRANSACTIONS
      const transactionsSnap = await getDocs(collection(db, "transactions"));

      let depositTotal = 0;

      let withdrawalTotal = 0;

      let roiTotal = 0;

      let activeCount = 0;

      let pendingDeposits = 0;

      let pendingWithdrawals = 0;

      depositsSnap.forEach((docItem) => {
        const data = docItem.data();

        if (data.status === "approved") {
          depositTotal += Number(data.amount) || 0;
        }

        if (data.status === "pending") {
          pendingDeposits++;
        }
      });

      withdrawalsSnap.forEach((docItem) => {
        const data = docItem.data();

        if (data.status === "approved") {
          withdrawalTotal += Number(data.amount) || 0;
        }

        if (data.status === "pending") {
          pendingWithdrawals++;
        }
      });

      transactionsSnap.forEach((docItem) => {
        const data = docItem.data();

        if (data.type === "ROI Profit") {
          roiTotal += Number(data.amount) || 0;
        }
      });

      investmentsSnap.forEach((docItem) => {
        const data = docItem.data();

        if (data.status === "active") {
          activeCount++;
        }
      });

      const recent = [];

      transactionsSnap.forEach((docItem) => {
        recent.push({
          id: docItem.id,

          ...docItem.data(),
        });
      });

      setRecentTransactions(recent.reverse().slice(0, 10));

      setStats({
        totalUsers: usersSnap.size,

        totalDeposits: depositTotal,

        totalWithdrawals: withdrawalTotal,

        totalROI: roiTotal,

        activeInvestments: activeCount,

        pendingDeposits,

        pendingWithdrawals,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <Container className="py-5">
      <h2 className="mb-4">Admin Analytics Dashboard</h2>

      <Row className="g-4 mb-4">
        <Col lg={3}>
          <Card className="p-4 shadow-sm">
            <h6>Total Investors</h6>

            <h2>{stats.totalUsers}</h2>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="p-4 shadow-sm">
            <h6>Total Deposits</h6>

            <h2>${stats.totalDeposits}</h2>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="p-4 shadow-sm">
            <h6>Total Withdrawals</h6>

            <h2>${stats.totalWithdrawals}</h2>
          </Card>
        </Col>

        <Col lg={3}>
          <Card className="p-4 shadow-sm">
            <h6>Total ROI Paid</h6>

            <h2>${stats.totalROI}</h2>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mb-5">
        <Col lg={4}>
          <Card className="p-4 shadow-sm">
            <h6>Active Investments</h6>

            <h2>{stats.activeInvestments}</h2>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="p-4 shadow-sm">
            <h6>Pending Deposits</h6>

            <h2>{stats.pendingDeposits}</h2>
          </Card>
        </Col>

        <Col lg={4}>
          <Card className="p-4 shadow-sm">
            <h6>Pending Withdrawals</h6>

            <h2>{stats.pendingWithdrawals}</h2>
          </Card>
        </Col>
      </Row>

      <Card className="p-4 shadow-sm">
        <h4 className="mb-4">Recent Transactions</h4>

        <Table responsive hover>
          <thead>
            <tr>
              <th>Email</th>

              <th>Type</th>

              <th>Amount</th>

              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {recentTransactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.email}</td>

                <td>{tx.type}</td>

                <td>${tx.amount}</td>

                <td>{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AdminAnalytics;
