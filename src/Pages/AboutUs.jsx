import React from "react";
import Layout from "../components/Layout";
import WeHelp from "../components/Home Components/WeHelp";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Layout>
        <div>
          <div>
            <div>
              <div className="aboutus-section">
                <div className="">
                  <h2 className="m-lg-3 m-5">ABOUT US</h2>
                  <div className="overlay2 ">
                    <Link to="/" className="custom-button">
                      <>HOME</>
                    </Link>

                    <Link to="/about-us" className="custom-button ">
                      <>ABOUT US</>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <h5 className="mt-5">About Us</h5>
              <div className="text-block">
                <p>
                  Welcome to Agricultural Farm Rental LLC, where we are
                  dedicated to providing top-quality farm equipment and
                  agricultural solutions to support the growth and success of
                  farmers and agricultural businesses. Our goal is to make
                  farming more efficient and accessible by offering reliable,
                  well-maintained equipment for rent at competitive prices.
                </p>
              </div>
              <h4>Our Mission</h4>
              <div className="text-block">
                <p>
                  Our mission is to simplify farming operations and maximize
                  productivity by offering affordable, flexible, and efficient
                  rental solutions. We understand the challenges faced by modern
                  farmers, and we aim to provide the tools necessary to help
                  them thrive without the financial burden of purchasing
                  expensive equipment.
                </p>
              </div>
              <h4>What We Offer</h4>
              <div className="text-block">
                <p>
                  At Agricultural Farm Rental LLC, we offer a wide range of
                  farming equipment, from tractors and plows to specialized
                  harvesting machinery. Whether you're managing a small family
                  farm or a large agricultural operation, we have the equipment
                  to meet your needs. All our equipment is regularly serviced
                  and maintained to ensure optimal performance in the field.
                </p>
              </div>
              <h5>Why Choose Us?</h5>
              <ul>
                <li>
                  Quality & Reliability: Our equipment undergoes regular
                  maintenance to ensure it performs at its best.
                </li>
                <li>
                  Flexible Rental Plans: We offer daily, weekly, and seasonal
                  rental options to fit your farming schedule.
                </li>
                <li>
                  Affordable Solutions: We provide competitive pricing, ensuring
                  you get the best value for your investment.
                </li>
              </ul>
              <h5>Our Commitment to Sustainability</h5>
              <div className="text-block">
                <p>
                  We are committed to promoting sustainable farming practices.
                  By offering rental options, we help reduce waste and encourage
                  the efficient use of resources, contributing to
                  environmentally responsible agriculture.
                </p>
              </div>
              <h5>Get In Touch</h5>
              <div className="text-block">
                <p>
                  Agricultural Farm Rental LLC is here to support your farming
                  journey. Whether you’re planning for the upcoming season or
                  need specific equipment for a project, we are ready to assist.
                  Contact us today to learn more about how we can help you
                  achieve your agricultural goals.
                </p>
              </div>
              <h5>Visit Us</h5>
              <div className="text-block">
                <p>
                  You can find us at 7430 Redwing Rd. Groveland, FL 34736. For
                  more information or to speak with a member of our team, feel
                  free to reach out via phone or email. We look forward to
                  working with you!
                </p>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stat">
              <h2>2</h2>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <div className="stat">
              <h2>100</h2>
              <p>MACHINERIES</p>
            </div>
            <div className="stat">
              <h2>200</h2>
              <p>CUSTOMERS</p>
            </div>
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

export default AboutUs;
