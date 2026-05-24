import React, { useEffect, useState } from "react";

import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

import { auth, db } from "../firebase";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; 

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fullname: "",

    phone: "",

    country: "",

    bankName: "",

    accountName: "",

    accountNumber: "",

    cryptoWallet: "",
  });

  const [loading, setLoading] = useState(false);

  // LOAD USER
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = auth.currentUser;

        if (!user) return;

        const docRef = doc(db, "users", user.uid);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData({
            ...userData,

            ...docSnap.data(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  // SAVE PROFILE
  const saveProfile = async () => {
    setLoading(true);

    try {
      const user = auth.currentUser;

      if (!user) return;

      await updateDoc(
        doc(db, "users", user.uid),

        {
          fullname: userData.fullname,

          phone: userData.phone,

          country: userData.country,

          bankName: userData.bankName,

          accountName: userData.accountName,

          accountNumber: userData.accountNumber,

          cryptoWallet: userData.cryptoWallet,
        },
      );

      toast.success("Profile Updated");
    } catch (error) {
      console.log(error);

      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <Card className="p-4 shadow-sm">
            <h2 className="mb-4">Investor Profile</h2>
            <Button
              variant="secondary"
              className="mb-4"
              onClick={() => navigate("/investor/dashboard")}
            >
              ← Back to Dashboard
            </Button>

            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>

                    <Form.Control
                      type="text"
                      value={userData.fullname}
                      onChange={(e) =>
                        setUserData({
                          ...userData,

                          fullname: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>

                    <Form.Control
                      type="text"
                      value={userData.phone}
                      onChange={(e) =>
                        setUserData({
                          ...userData,

                          phone: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>

                <Form.Control
                  type="text"
                  value={userData.country}
                  onChange={(e) =>
                    setUserData({
                      ...userData,

                      country: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <hr />

              <h4 className="mb-3">Withdrawal Details</h4>

              <Form.Group className="mb-3">
                <Form.Label>Bank Name</Form.Label>

                <Form.Control
                  type="text"
                  value={userData.bankName}
                  onChange={(e) =>
                    setUserData({
                      ...userData,

                      bankName: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Account Name</Form.Label>

                <Form.Control
                  type="text"
                  value={userData.accountName}
                  onChange={(e) =>
                    setUserData({
                      ...userData,

                      accountName: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Account Number</Form.Label>

                <Form.Control
                  type="text"
                  value={userData.accountNumber}
                  onChange={(e) =>
                    setUserData({
                      ...userData,

                      accountNumber: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Crypto Wallet</Form.Label>

                <Form.Control
                  type="text"
                  value={userData.cryptoWallet}
                  onChange={(e) =>
                    setUserData({
                      ...userData,

                      cryptoWallet: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Button
                className="w-100"
                onClick={saveProfile}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Profile"}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
