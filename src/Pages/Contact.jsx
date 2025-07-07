import React from "react";
import Layout from "../components/Layout";
import WeHelp from "../components/Home Components/WeHelp";
import { Link } from "react-router-dom";
import Line from "../components/Line";
import { GrLocation } from "react-icons/gr";
import { LuPhoneCall } from "react-icons/lu";
import { GoGlobe } from "react-icons/go";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      <Layout>
        <div>
          <div>
            <div>
              <div className="contactus-section">
                <div className="">
                  <h2 className="m-lg-3 m-5">CONTACT US</h2>
                  <div className="overlay2 ">
                    <Link to="/" className="custom-button">
                      <>HOME</>
                    </Link>

                    <Link to="/contact-us" className="custom-button ">
                      <>CONTACT US</>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <aside>
                <aside className="contactus-categories m-4">
                  <h3>Contact Details </h3>
                  <div className="line m-1">
                    <Line length={140} color="white" orientation="horizontal" />
                  </div>
                  <div>
                    <GrLocation />
                    <h6>7430 Redwing Rd. Groveland, FL 34736.</h6>
                  </div>
                  <div className="line m-1">
                    <Line length={170} color="white" orientation="horizontal" />
                  </div>
                  <div>
                    <span className="icon">
                      <LuPhoneCall />
                    </span>
                    <h6>For Rental Support</h6>
                    <h6>+1 (667) 439 3624 </h6>
                  </div>
                  <div className="line m-1">
                    <Line length={170} color="white" orientation="horizontal" />
                  </div>
                  <div>
                    <GoGlobe />
                    <h6>The Office Hours</h6>
                    <h6>Mon - Sat: 9:00 AM - 6:00 PM</h6>
                  </div>
                  <div className="line m-1">
                    <Line length={170} color="white" orientation="horizontal" />
                  </div>
                  <div>
                    <CiMail />
                    <h6>Send Us Email</h6>
                    <a
                      href=" 
                    mailto:agriculturalfarmworksrentalllc@outlook.com"
                      className="text-decoration-none text-white"
                    >
                      info@agriculturalfarmsworksrentalllc.com
                    </a>
                  </div>
                </aside>
              </aside>
            </div>
            <div className="col m-5">
              <h3 className="d-flex ">Send A Message</h3>
              <div className="line">
                <Line length={300} color="black" orientation="horizontal" />
              </div>
              <p>Your Email Address Will Not Be Published.</p>
              {/* <p> Required Fields Are Marked With *</p> */}

              {/* <div className="contact-form">
                <form action="submit.php" method="POST">
                  <input
                    type="text"
                    name="name"
                    placeholder="name..........*"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email..........*"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject..........*"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    id=""
                    required
                  ></textarea>
                  <button type="submit"> SEND MESSAGE </button>
                </form>
              </div> */}
            </div>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?q=7430+Redwing+Rd.+Groveland,+FL+34736&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              width="100%"
              height="300"
              // style="border"
              allowFullScreen=""
              frameborder="0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

export default Contact;

// <div style="text-decoration:none; overflow:hidden;max-width:100%;width:1000px;height:70px;"><div id="google-maps-display" style="height:100%; width:100%;max-width:100%;"><iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=7430+Redwing+Rd.+Groveland,+FL+34736&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a class="google-map-html" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="make-map-infor-mation">premium bootstrap themes</a><style>#google-maps-display img{max-height:none;max-width:none!important;background:none!important;}</style></div>
