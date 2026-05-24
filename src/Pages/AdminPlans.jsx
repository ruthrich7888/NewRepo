import React, { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Table,
  Badge,
} from "react-bootstrap";

import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const AdminPlans = () => {
  const [plans, setPlans] = useState([]);

  const [formData, setFormData] = useState({
    name: "",

    minAmount: "",

    maxAmount: "",

    roi: "",

    duration: "",

    description: "",
  });

  // LOAD PLANS LIVE
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "plans"),

      (snapshot) => {
        const plansList = [];

        snapshot.forEach((docItem) => {
          plansList.push({
            id: docItem.id,

            ...docItem.data(),
          });
        });

        setPlans(plansList);
      },
    );

    return () => unsubscribe();
  }, []);

  // CREATE PLAN
  const createPlan = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "plans"), {
        name: formData.name,

        minAmount: Number(formData.minAmount),

        maxAmount: Number(formData.maxAmount),

        roi: Number(formData.roi),

        duration: Number(formData.duration),

        description: formData.description,

        status: "active",

        createdAt: new Date(),
      });

      toast.success("Plan Created");

      setFormData({
        name: "",

        minAmount: "",

        maxAmount: "",

        roi: "",

        duration: "",

        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE PLAN
  const deletePlan = async (id) => {
    try {
      await deleteDoc(doc(db, "plans", id));
    } catch (error) {
      console.log(error);
    }
  };

  // TOGGLE STATUS
  const toggleStatus = async (id, currentStatus) => {
    try {
      await updateDoc(
        doc(db, "plans", id),

        {
          status: currentStatus === "active" ? "inactive" : "active",
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">Investment Plan Manager</h2>

      <Row>
        <Col lg={5}>
          <Card className="p-4 shadow-sm">
            <h4 className="mb-4">Create New Plan</h4>

            <Form onSubmit={createPlan}>
              <Form.Group className="mb-3">
                <Form.Label>Plan Name</Form.Label>

                <Form.Control
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      name: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Minimum Amount</Form.Label>

                <Form.Control
                  type="number"
                  value={formData.minAmount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      minAmount: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Maximum Amount</Form.Label>

                <Form.Control
                  type="number"
                  value={formData.maxAmount}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      maxAmount: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Weekly ROI %</Form.Label>

                <Form.Control
                  type="number"
                  value={formData.roi}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      roi: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Duration (Days)</Form.Label>

                <Form.Control
                  type="number"
                  value={formData.duration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      duration: e.target.value,
                    })
                  }
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Description</Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,

                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Button type="submit" className="w-100">
                Create Plan
              </Button>
            </Form>
          </Card>
        </Col>

        <Col lg={7}>
          <Card className="p-4 shadow-sm">
            <h4 className="mb-4">Existing Plans</h4>

            <Table responsive hover>
              <thead>
                <tr>
                  <th>Name</th>

                  <th>ROI</th>

                  <th>Duration</th>

                  <th>Status</th>

                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {plans.map((plan) => (
                  <tr key={plan.id}>
                    <td>{plan.name}</td>

                    <td>{plan.roi}%</td>

                    <td>{plan.duration}d</td>

                    <td>
                      <Badge
                        bg={plan.status === "active" ? "success" : "secondary"}
                      >
                        {plan.status}
                      </Badge>
                    </td>

                    <td>
                      <Button
                        size="sm"
                        variant="warning"
                        className="me-2"
                        onClick={() => toggleStatus(plan.id, plan.status)}
                      >
                        Toggle
                      </Button>

                      <Button
                        size="sm"
                        variant="danger"
                        onClick={() => deletePlan(plan.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPlans;
