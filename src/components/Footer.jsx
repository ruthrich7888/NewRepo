import React, { useState } from "react";
import { Link } from "react-router-dom";
import ActionBtn from "./ActionBtn";
import Line from "./Line";

const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed successfullly with: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };
  const quicklinks = [
    {
      id: 2,
      to: "/about-us",
      content: "AboutUs",
    },

    {
      id: 4,
      to: "/equipment-list",
      content: "EquipmentList",
    },
    {
      id: 6,
      to: "/contact",
      content: "Contact",
    },
    {
      id: 7,
      to: "/careers",
      content: "Careers",
    },
    {
      id: 3,
      to: "/services",
      content: "Services",
    },
  ];

  return (
    <footer className=" bg-dark py-5 text-white">
      <div className="container">
        <div className="d-flex flex-column align-items-center ">
          <div className="d-flex flex-column flex-sm-row align-items-center gap-1 gap-lg-5">
            <div className="d-none d-lg-flex">
              <Line length={"100%"} color="white" orientation="vertical" />
            </div>

            <h6 className="news">
              Newsletter Subscription Get Latest Deals From Us!{" "}
            </h6>

            <div
              className="newsletter-form mt-2 mt-lg-1 mb-4 mb-lg-2 "
              style={{ maxWidth: "434px" }}
            >
              <input
                type="email"
                className="form-control mt-2 "
                placeholder="Enter Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ backgroundColor: "transparent", color: "#fff" }}
              />
              <ActionBtn
                content="Subscribe"
                width={"140px"}
                onClick={handleSubscribe}
                className="subscribe-btn mt-2 ml-2"
                type="button"
              />
            </div>
          </div>
        </div>
        <div className="mt-1 mt-lg-3 mb-4 mb-lg-2 d-flex flex-column align-items-start  p-1">
          <Line length={"100%"} color="white" orientation="horizontal" />
        </div>

        <div className="row mt-4 justify-content-between">
          <div className="col-lg-5">
            <div className="underline">
              <h4 className="m-3">ABOUT - Agricultural Farm Works Rentals </h4>
              <div className="d-flex flex-column align-items-center">
                <div className="line mb-3 mt-2 ">
                  <Line length={340} color="orange" orientation="horizontal" />
                </div>
                <div className="line mb-3">
                  <Line length={280} color="orange" orientation="horizontal" />
                </div>
                <div className="line mb-3 mb-lg-3">
                  <Line length={200} color="orange" orientation="horizontal" />
                </div>
              </div>
            </div>
            <p>
              Agricultural Farm Work Rentals is a pioneering initiative by
              Agricultural Limited Farm Works, revolutionizing how farmers access modern
              farming equipment. Through cutting-edge technology, we offer a
              seamless, cost-effective platform that allows farmers to easily
              rent high-quality agricultural machinery.
            </p>
          </div>
          <div className="col-lg-5">
            <h3 className=" mb-4 mt-3 mt-lg-0 fs-3 ">Quick Links</h3>
            <br />

            <div className="d-flex flex-column gap-2">
              {quicklinks.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.to}
                    className="text-decoration-none text-white"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link.content}{" "}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="terms-container">
        <small>
          &copy; <span className="spanA"> 2024 </span>{" "}
          <span className="spanA1"> Agricultural Farm Works</span>{" "}
          <span> Renting Farm Equipments.</span> Terms & Conditions
        </small>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div>
  <div> top div</div>
  <br />
  <div className="about-links">
    <div>
      <h4> ABOUT - Green Farm Rentals </h4>
      <br />
      <br />
      <br />
      <p>
        Green Farm Rentals, a project of Quipbank Trust Limited, is transforming
        the way farmers access modern farm mechanization. By leveraging
        innovative technology, we provide an easy, affordable platform for
        farmers to rent top-tier agricultural equipment—empowering them to
        increase productivity while promoting sustainable practices. does
        quipbank exist
      </p>
    </div>
    <div>
      <h4> USEFUL LINKS </h4>
      <br />
      <ul>
        <li>
          <a href="#about"> About Green Farm Rentals</a>
        </li>
        <li>
          <a href="equipmentlist"> Equipment List </a>
        </li>
        <li>
          <a href="contactus"> Contact Us </a>
        </li>
      </ul>
      <div>
        <h5>
          {" "}
          @ 2021 Green Farm Rentals - Renting Farm Equipments. Terms &
          Conditions{" "}
        </h5>
      </div>
    </div>
  </div>
</div>; */
}
