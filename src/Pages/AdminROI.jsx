import React from "react";

import { Container, Card, Button } from "react-bootstrap";

import { updateWeeklyProfits } from "../utils/investmentUtils";

const AdminROI = () => {
  return (
    <Container className="py-5">
      <Card className="p-5 text-center">
        <h2 className="mb-4">ROI Processing Engine</h2>

        <p className="mb-4">
          Run weekly ROI payouts for all active investments.
        </p>

        <Button size="lg" onClick={updateWeeklyProfits}>
          Run Weekly ROI
        </Button>
      </Card>
    </Container>
  );
};

export default AdminROI;
