import { useEffect, useState } from "react";

import { collection, onSnapshot } from "firebase/firestore";

import { db, auth } from "../firebase";

import { Row, Col, Card, Badge } from "react-bootstrap";

const ActiveInvestments = () => {
  const [investments, setInvestments] = useState([]);

  const fetchInvestments = async () => {
    try {
      const user = auth.currentUser;

      if (!user) return;

      const querySnapshot = await getDocs(collection(db, "investments"));

      const userInvestments = [];

      querySnapshot.forEach((docItem) => {
        const data = docItem.data();

        if (data.userId === user.uid) {
          userInvestments.push({
            id: docItem.id,

            ...data,
          });
        }
      });

      setInvestments(userInvestments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, "investments"),

      async (snapshot) => {
        await updateWeeklyProfits();

        const userInvestments = [];

        snapshot.forEach((docItem) => {
          const data = docItem.data();

          if (data.userId === user.uid) {
            userInvestments.push({
              id: docItem.id,

              ...data,
            });
          }
        });

        setInvestments(userInvestments);
      },
    );

    return () => unsubscribe();
  }, []);

  return (
    <Row className="mt-4">
      {investments.map((inv) => {
        const amount = Number(inv.amount) || 0;

        const roi = Number(inv.weeklyROI) || 0;

        const progress = Number(inv.progress) || 0;

        const duration = Number(inv.duration) || 0;

        const weeks = Math.ceil(duration / 7);

        const earnings = ((amount * roi) / 100) * progress;

        return (
          <Col lg={4} key={inv.id} className="mb-3">
            <Card className="p-4 shadow-sm h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">{inv.planName}</h5>

                <Badge bg={inv.status === "active" ? "success" : "secondary"}>
                  {inv.status}
                </Badge>
              </div>

              <p>
                Amount:
                <strong> ${amount}</strong>
              </p>

              <p>
                Weekly ROI:
                <strong> {roi}%</strong>
              </p>

              <p>
                Progress:
                <strong>
                  {" "}
                  {progress} / {weeks} weeks
                </strong>
              </p>

              <p>
                Earnings:
                <strong> ${earnings.toFixed(2)}</strong>
              </p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default ActiveInvestments;
