import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { auth, db } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;

      // 2️⃣ Send email verification
      await sendEmailVerification(user);

      toast.success("Account created! Please verify your email.");

      navigate("/login");

      // 3️⃣ Save user profile in Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: email,
        role: "investor",
        walletBalance: 0,
        totalInvested: 0,
        totalProfit: 0,
        activePlans: 0,
        emailVerified: false,
        createdAt: new Date(),
      });

      // Optional: reset form
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={5}>
          <Button as={Link} to="/investment" variant="dark" className="mb-4">
            ← Back To Investment Page
          </Button>
          <Card className="p-4 shadow">
            <h2 className="mb-4 text-center">Create Investor Account</h2>

            <Form onSubmit={registerUser}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" className="w-100">
                Register
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
