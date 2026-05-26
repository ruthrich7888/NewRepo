import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import FAQAccordion from "../components/FAQAccordion";

import {
  FaTruck,
  FaWallet,
  FaChartLine,
  FaMoneyCheckAlt,
} from "react-icons/fa";

import "./investment.css";

const InvestmentPage = () => {
  const navigate = useNavigate();

  const [amount, setAmount] = useState(5000);

  const [duration, setDuration] = useState(7);

  const [plan, setPlan] = useState("Starter Fleet");

  const roiRates = {
    "Starter Fleet": 0.05,
    "Agro Haul": 0.08,
    "Heavy Logistics": 0.12,
  };

  const weeklyReturn = amount * roiRates[plan];

  const weeks = duration / 7;

  const monthlyReturn = weeklyReturn * weeks;

  return (
    <div className="investment-page">
      {/* HERO SECTION */}
      <section className="investment-hero">
        <div className="hero-overlay">
          <Container>
            <Row className="align-items-center min-vh-100">
              <Col lg={7}>
                <div className="hero-content">
                  <span className="hero-badge">Truck Partnership Program</span>

                  <h1>Invest In Agricultural Truck Transportation</h1>

                  <p>
                    Participate in active transportation and logistics
                    operations through short-term truck revenue partnerships
                    backed by real equipment and haulage operations.
                  </p>

                  <div className="hero-buttons">
                    <Button
                      className="invest-btn"
                      onClick={() => navigate("/investment/register")}
                    >
                      Start Investing
                    </Button>

                    <Button
                      variant="light"
                      className="plan-btn"
                      onClick={() => {
                        document
                          .querySelector(".plans-section")
                          ?.scrollIntoView({
                            behavior: "smooth",
                          });
                      }}
                    >
                      View Plans
                    </Button>
                  </div>
                </div>
              </Col>

              <Col lg={5}>
                <Card className="stats-card">
                  <Card.Body>
                    <div className="stat-item">
                      <h3>$2.4M+</h3>
                      <p>Transportation Volume</p>
                    </div>

                    <div className="stat-item">
                      <h3>48</h3>
                      <p>Active Trucks</p>
                    </div>

                    <div className="stat-item">
                      <h3>86%</h3>
                      <p>Fleet Utilization</p>
                    </div>

                    <div className="stat-item">
                      <h3>Weekly</h3>
                      <p>Payout Cycles</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <Container>
          <div className="section-title text-center">
            <h2>How It Works</h2>
            <p>Participate in short-term transportation operations.</p>
          </div>

          <Row>
            <Col md={3}>
              <Card className="how-card">
                <Card.Body>
                  <FaTruck className="how-icon" />
                  <h4>Choose Plan</h4>
                  <p>Select a transportation partnership plan.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="how-card">
                <Card.Body>
                  <FaWallet className="how-icon" />
                  <h4>Fund Cycle</h4>
                  <p>Fund active truck transportation operations.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="how-card">
                <Card.Body>
                  <FaChartLine className="how-icon" />
                  <h4>Revenue Growth</h4>
                  <p>Trucks generate operational transportation revenue.</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="how-card">
                <Card.Body>
                  <FaMoneyCheckAlt className="how-icon" />
                  <h4>Receive Payouts</h4>
                  <p>Receive projected weekly profit participation.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* INVESTMENT PLANS */}
      <section className="plans-section">
        <Container>
          <div className="section-title text-center">
            <h2>Truck Partnership Plans</h2>
            <p>Choose a transportation participation plan.</p>
          </div>

          <Row>
            <Col lg={4}>
              <Card className="plan-card">
                <Card.Body>
                  <span className="plan-tag">Starter Fleet</span>

                  <h3>$500 - $2,000</h3>

                  <ul>
                    <li>Projected Weekly Return: 4% - 6%</li>
                    <li>7 - 30 Day Cycles</li>
                    <li>Weekly Payouts</li>
                    <li>Reinvestment Enabled</li>
                  </ul>

                  <Button
                    className="plan-button"
                    onClick={() => navigate("/investment/register")}
                  >
                    Participate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="plan-card featured-plan">
                <Card.Body>
                  <span className="plan-tag featured-tag">Agro Haul Plan</span>

                  <h3>$2,000 - $10,000</h3>

                  <ul>
                    <li>Projected Weekly Return: 6% - 8%</li>
                    <li>7 - 30 Day Cycles</li>
                    <li>Priority Fleet Access</li>
                    <li>Weekly Payouts</li>
                  </ul>

                  <Button
                    className="plan-button"
                    onClick={() => navigate("/investment/register")}
                  >
                    Participate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4}>
              <Card className="plan-card">
                <Card.Body>
                  <span className="plan-tag">Heavy Logistics</span>

                  <h3>$10,000+</h3>

                  <ul>
                    <li>Projected Weekly Return: 8% - 12%</li>
                    <li>Premium Fleet Operations</li>
                    <li>Dedicated Transport Routes</li>
                    <li>Weekly Payouts</li>
                  </ul>

                  <Button
                    className="plan-button"
                    onClick={() => navigate("/investment/register")}
                  >
                    Participate Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ROI CALCULATOR */}
      <section className="calculator-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="calculator-card">
                <Card.Body>
                  <div className="section-title text-center">
                    <h2>ROI Calculator</h2>
                    <p>
                      Estimate projected transportation participation returns.
                    </p>
                  </div>

                  <Row>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Investment Amount</Form.Label>
                        <Form.Control
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                        />
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Duration</Form.Label>

                        <Form.Select
                          value={duration}
                          onChange={(e) => setDuration(Number(e.target.value))}
                        >
                          <option value={7}>7 Days</option>

                          <option value={14}>14 Days</option>

                          <option value={30}>30 Days</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>Plan Type</Form.Label>

                        <Form.Select
                          value={plan}
                          onChange={(e) => setPlan(e.target.value)}
                        >
                          <option value="Starter Fleet">Starter Fleet</option>

                          <option value="Agro Haul">Agro Haul</option>

                          <option value="Heavy Logistics">
                            Heavy Logistics
                          </option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  <div className="calculator-results">
                    <div className="result-box">
                      <h5>Projected Weekly Return</h5>
                      <h3>${weeklyReturn.toFixed(2)}</h3>
                    </div>

                    <div className="result-box">
                      <h5>Projected Monthly Return</h5>
                      <h3>${monthlyReturn.toFixed(2)}</h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <Container>
          <div className="cta-box text-center">
            <h2>Start Participating In Transportation Operations Today</h2>

            <p>Join active agricultural transportation partnerships.</p>

            <Button className="cta-btn" as={Link} to="/investment/register">
              Create Investor Account
            </Button>
          </div>
          <div>
            <Testimonials />
            <FAQAccordion />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default InvestmentPage;
