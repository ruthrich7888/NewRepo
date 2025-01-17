import React from "react";
import Line from "../Line";
import { Link } from "react-router-dom";
// import "./App.css";
import Rectangle9 from "../assets/Rectangle9.png";
import imgabout from "../assets/imgabout.png";
import Rectangle13 from "../assets/Rectangle13.png";
import Rectangle14 from "../assets/Rectangle14.png";
import imgabout1 from "../assets/imgabout1.png";
// <img src={Rectangle9} alt="jum " />;

const WhatWeOffer = () => {
  return (
    <div>
      <div className="top-sec">
        <div className="container">
          <div className="top-section">
            <div className="content">
              <div className="image-container1">
                <img
                  src={imgabout1}
                  alt="construction workers"
                  className="top-image"
                />
              </div>
              <div className="text-container">
                <h6 className="dh6">Agricultural Farm Work Rentals</h6>
                <h1 className="dh1">
                  Providing Smarter, Faster, and More Affordable Farm Equipment
                  Rentals
                </h1>
                <div>
                  <div className="d-flex flex-column align-items-center mb-1 mt-1">
                    <div className="line mb-3 mt-2 ">
                      <Line
                        length={340}
                        color="orange"
                        orientation="horizontal"
                      />
                    </div>
                    <div className="line mb-3">
                      <Line
                        length={280}
                        color="orange"
                        orientation="horizontal"
                      />
                    </div>
                    <div className="line mb-3 mb-lg-3">
                      <Line
                        length={200}
                        color="orange"
                        orientation="horizontal"
                      />
                    </div>
                  </div>
                </div>
                <p className="dp">
                  Agricultural work includes planting, cultivating, and
                  harvesting crops, using machinery and sustainable practices to
                  ensure efficient production and a healthy food supply.
                </p>
                <ul>
                  <li>The Facilities Less Expensive </li>
                  <li> Innovating The Heavy Fleets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="machine-section bottom-sec">
        <div className="image-container">
          <img
            src={Rectangle14}
            alt=" Tractor on the field"
            className="machine-image"
          />

          <div className="tex-container">
            <h3 className="headline "> Worried About The Idling Yard?</h3>
            <p className="subtext">Start Hiring Our Equipment(s) Today!</p>
            <Link to="/about-us">
              <button className="learn-more-btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

{
  /* <div className="bottom-sec">
  <div className="bottom-section container">
    <div className="text-overlay">
      <h3> Worried About The Idling Yard?</h3>
      <p>Start Hiring Our Equipment(s) Today!</p>
      <button>Learn More</button>
      <img
        src={Rectangle14}
        alt=" Tractor on the field"
        className="background-imagee"
      />
    </div>
  </div>
</div>; */
}
{
  /* <div className="bottom-section">
  <div className="text-overlay">
    <h3>Worried About The Idling Yard?</h3>
    <p>Start Hiring Our Equipment(s) Today!</p>
    <button>Learn More</button>
    <img
      src={Rectangle14}
      alt=" Tractor on the field"
      className="background-imagee"
    />
  </div>
}
{
  /* <div className="bottom-section">
          <div className="text-overlay">
            <h3>Worried About The Idling Yard?</h3>
            <p>Start Hiring Our Equipment(s) Today!</p>
            <button>Learn More</button>
            <img
              src={Rectangle14}
              alt=" Tractor on the field"
              className="background-imagee"
            />
          </div> */
}

//  return (
//    <div className="">
//      <div className="container">
//        <div className="">
//          <div className="row top-div">
//            <div className="col-4 col-lg-6">
//              <img src={imgabout1} alt="imgabout" />
//            </div>
//            <div className="col-4 col-lg-6"></div>
//          </div>

//          <div className="image-section ">
//            <div className="background-image">
//              <div className="content-wrapper">
//                <img
//                  src={Rectangle14}
//                  alt="tractor"
//                  className="foreground-image-left"
//                />
//                <div className="foreground-card">
//                  <div className="mini-background">
//                    <div className="text-overlay">
//                      <h3>Worried About The Idling Yard? </h3>
//                      <p>Start Hiring our equipment(s) today!</p>
//                      <button className="cta-btn"> Learn More</button>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
