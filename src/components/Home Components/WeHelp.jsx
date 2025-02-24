import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import Line from "../Line";
import { Link } from "react-router-dom";
import ActionBtn from "../ActionBtn";

const WeHelp = () => {
  return (
    <div className="footer-top-bar   p-lg-4 p-3 text-dark">
      <div className="container">
        <div className="footer-content">
          <div className="headline">
            <strong className="">
              We Help Industry To Utilize The Heavy Equipment Work Better
            </strong>
          </div>
          <div className="d-none d-lg-flex">
            <Line length={50} color="black" orientation="vertical" />
          </div>

          <div className="support">
            <span className="icon">
              <LuPhoneCall />
            </span>
            <span className="text">Get Quick Support +1 352 255 3979</span>
          </div>
          <div className="">
            <Link to="/contact-us">
              <ActionBtn
                content="Contact Us"
                width={"140px"}
                className="learn-more-btn"
                type="button"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeHelp;

// {/* <div className="container">
//   {/* <img src={imageg} class="img-fluid" alt=" we help" /> */}
// </div>; */}
