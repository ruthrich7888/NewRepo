import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Nav,
  Modal,
  Form,
} from "react-bootstrap";

import {
  FaTruck,
  FaWallet,
  FaChartLine,
  FaMoneyBillWave,
  FaUserCircle,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";
import toast from "react-hot-toast";

import { doc, onSnapshot, collection, addDoc } from "firebase/firestore";

import { onAuthStateChanged, signOut } from "firebase/auth";

import { auth, db } from "../firebase";

import "./InvestorDashboard.css";
import ActiveInvestments from "../components/ActiveInvestments";
import TransactionHistory from "../components/TransactionHistory";
import Notifications from "../components/Notifications";

const InvestorDashboard = () => {
  const handleLogout = async () => {
    await signOut(auth);

    window.location.href = "/login";
  };
  const [userData, setUserData] = useState(null);
  const [showDeposit, setShowDeposit] = useState(false);

  const [depositAmount, setDepositAmount] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("Bank Transfer");

  const [senderName, setSenderName] = useState("");

  const [transactionRef, setTransactionRef] = useState("");
  const [showWithdraw, setShowWithdraw] = useState(false);

  const [withdrawAmount, setWithdrawAmount] = useState("");

  const [withdrawMethod, setWithdrawMethod] = useState("Bank Transfer");

  const [withdrawDetails, setWithdrawDetails] = useState("");

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);

        const unsubscribeUser = onSnapshot(userRef, (docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
        });

        return () => unsubscribeUser();
      }
    });

    return () => unsubscribeAuth();
  }, []);

  const submitDeposit = async () => {
    // VALIDATION
    if (!depositAmount || !senderName || !transactionRef) {
      toast.error("Please fill all fields");

      return;
    }
    try {
      const user = auth.currentUser;

      await addDoc(collection(db, "deposits"), {
        userId: user.uid,

        email: user.email,

        amount: Number(depositAmount),

        paymentMethod,

        senderName,

        transactionRef,

        status: "pending",

        createdAt: new Date(),
      });

      toast.success("Deposit request submitted");

      setShowDeposit(false);

      setDepositAmount("");

      setSenderName("");

      setTransactionRef("");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };
  const submitWithdrawal = async () => {
    if (!withdrawAmount || !withdrawDetails) {
      toast.error("Please fill all fields");

      return;
    }

    try {
      const user = auth.currentUser;

      // CHECK BALANCE
      if (Number(withdrawAmount) > (userData?.walletBalance || 0)) {
        toast.error("Insufficient wallet balance");

        return;
      }

      await addDoc(collection(db, "withdrawals"), {
        userId: user.uid,

        email: user.email,

        amount: Number(withdrawAmount),

        method: withdrawMethod,

        details: withdrawDetails,

        status: "pending",

        createdAt: new Date(),
      });

      toast.success("Withdrawal request submitted");

      setShowWithdraw(false);

      setWithdrawAmount("");

      setWithdrawDetails("");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    }
  };
  if (!userData) {
    return <div className="text-center p-5">Loading Dashboard...</div>;
  }
  return (
    <div className="dashboard-wrapper">
      {/* SIDEBAR */}

      {/* <div className="sidebar">
        <div className="sidebar-logo">EQUIPLEASING</div>

        <Nav className="flex-column sidebar-nav">
          <Nav.Link as={Link} to="/investor/dashboard">
            <FaTruck /> Dashboard
          </Nav.Link>

          <Nav.Link as={Link} to="/investment/plans">
            <FaChartLine /> Investments
          </Nav.Link>

          <Nav.Link as={Link} to="/investor/transactions">
            <FaMoneyBillWave /> Transactions
          </Nav.Link>

          <Nav.Link as={Link} to="/investor/profile">
            <FaUserCircle /> Profile
          </Nav.Link>
        </Nav>
      </div> */}

      {/* MAIN CONTENT */}

      <div className="dashboard-content">
        {/* TOPBAR */}

        <div className="topbar">
          <div>
            <h2>Truck Partnership Dashboard</h2>
            <p>{userData?.email}</p>
          </div>

          <Button className="fund-btn" onClick={() => setShowDeposit(true)}>
            Fund Wallet
          </Button>
        </div>

        <Modal show={showDeposit} onHide={() => setShowDeposit(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Fund Wallet</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Deposit Amount</Form.Label>

                <Form.Control
                  type="number"
                  placeholder="Enter amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Payment Method</Form.Label>

                <Form.Select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option>Bank Transfer</option>

                  <option>Zelle</option>

                  <option>CashApp</option>

                  <option>Crypto</option>

                  <option> Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Sender Name</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter sender name"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Transaction Reference</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter transaction reference"
                  value={transactionRef}
                  onChange={(e) => setTransactionRef(e.target.value)}
                />
              </Form.Group>

              <Button className="w-100" onClick={submitDeposit}>
                Submit Deposit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal
          show={showWithdraw}
          onHide={() => setShowWithdraw(false)}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Withdraw Funds</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Amount</Form.Label>

                <Form.Control
                  type="number"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Withdrawal Method</Form.Label>

                <Form.Select
                  value={withdrawMethod}
                  onChange={(e) => setWithdrawMethod(e.target.value)}
                >
                  <option>Bank Transfer</option>

                  <option>Zelle</option>

                  <option>CashApp</option>

                  <option>Crypto</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Payment Details</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter bank info, wallet address, etc."
                  value={withdrawDetails}
                  onChange={(e) => setWithdrawDetails(e.target.value)}
                />
              </Form.Group>

              <Button className="w-100" onClick={submitWithdrawal}>
                Submit Withdrawal
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Container fluid>
          {/* STAT CARDS */}

          <Row className="g-4 mb-4">
            <Col lg={3} md={6}>
              <Card className="stat-card">
                <div className="stat-icon">
                  <FaWallet />
                </div>

                <h6>Wallet Balance</h6>

                <h2>${userData?.walletBalance || 0}</h2>

                <span className="positive">+12.5%</span>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="stat-card">
                <div className="stat-icon">
                  <FaChartLine />
                </div>

                <h6>Total Profit</h6>

                <h2>${userData?.totalProfit || 0}</h2>

                <span className="positive">+8.2%</span>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="stat-card">
                <div className="stat-icon">
                  <FaTruck />
                </div>

                <h6>Active Trucks</h6>

                <h2>{userData?.activePlans || 0}</h2>

                <span className="positive">Running</span>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card className="stat-card">
                <div className="stat-icon">
                  <FaMoneyBillWave />
                </div>

                <h6>Weekly ROI</h6>

                <h2>${userData?.weeklyProfit || 0}</h2>

                <span className="positive">Paid Weekly</span>
              </Card>
            </Col>
          </Row>

          {/* ACTION BUTTONS */}

          <Row className="mb-4">
            <Col lg={12}>
              <div className="action-buttons">
                <Button
                  className="withdraw-btn "
                  onClick={() => setShowWithdraw(true)}
                >
                  <FaMoneyBillWave /> Withdrawals{" "}
                </Button>
              </div>
            </Col>
          </Row>

          {/* INVESTMENT TABLE */}

          <Row className="mb-4">
            <Col lg={12}>
              <h2>Active Investments</h2>
              <ActiveInvestments />
              <TransactionHistory />
              <Notifications />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default InvestorDashboard;
