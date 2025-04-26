import React from "react";
import Layout from "../components/Layout";
import WeHelp from "../components/Home Components/WeHelp";
import Line from "../components/Line";
import { Link } from "react-router-dom";
import { LuWatch } from "react-icons/lu";
import ItemList from "../components/assets/ItemList.png";
import ItemList2 from "../components/assets/ItemList2.png";
import ItemList1 from "../components/assets/ItemList1.png";
import Rectangle17 from "../components/assets/Rectangle17.png";
import Category from "../components/assets/Category.png";

const EquipmentList = () => {
  return (
    <>
      <Layout>
        <div>
          <div className="excavators-section">
            <div className="">
              <h2>EXCAVATORS</h2>
              <div className="overlay2 ">
                <Link to="/" className="custom-button">
                  <>HOME</>
                </Link>

                <Link to="/#categories1" className="custom-button">
                  <>
                    <a hre="#"> CATEGORY</a>
                  </>
                </Link>
                <Link to="/equipment-list" className="custom-button">
                  <>EXCAVATORS</>
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div className="layout-container">
              <div className="">
                <aside className="categories">
                  <h3>CATEGORIES</h3>
                  <ul>
                    <li> EXCAVATORS</li>
                    <li> SCISSOR LIFT</li>
                    <li> BOOM LIFT</li>
                    <li> FORKLIFT</li>
                    <li> COMPACTION</li>
                    <li> ROLLER </li>
                  </ul>
                </aside>
              </div>

<<<<<<< HEAD
              <div className="col">
                <main className="rental-container border border-3 border-danger">
                  <div className="rental-box">
                    <div className="pricing">
                      <LuWatch className="luwatch" />
=======
              <div className="col container ">
                <main className="rental-contai ">
                  <div>
                    <div className="rental-box">
                      <div className="pricing">
                        <LuWatch className="luwatch" />
>>>>>>> 62eda0b515fca9f6115996beeaaa35712729bc7d

                        <span> $500/Day</span>
                        <span> $2,500/Day</span>
                        <span> $7,500/Month</span>
                      </div>

<<<<<<< HEAD
                    <div className="line1 m-1">
                      <Line
                        length={"100%"}
                        color="black"
                        orientation="horizontal"
                      />
                    </div>
                    <h6 className="ph6">Two Way Delivery: $58.00</h6>
                    <div className="line1 m-1">
                      <Line
                        length={"100%"}
                        color="black"
                        orientation="horizontal"
                      />
                    </div>
                    <div className="details1">
                      <div className="d-block d-md-flex">
                        <div>
                          <div className="left1">
                            <p>. Brand: Caterpillar 320 GC</p>
                            <p>. Manufacture Year: 2021</p>
                            <p>. Digging Depth: 22 feet</p>
                            <p>. operating Weight: 22,500lbs</p>
                          </div>
                          <div className="right1">
                            <p>. Brand: Genie GS-1930</p>
                            <p>. Manufacture Year: 2019</p>
                            <p>. Platform Height: 19 feet</p>
                            <p>. Lift Capacity: 500lbs</p>
                          </div>
                        </div>
                        <div>
                          <div className="trp-card">
                            <div className="">
                              <p className="total-p1">
                                <h5 className="strong fw-bolder">
                                  {" "}
                                  Total Rental Price
                                </h5>{" "}
                                <h6 className="">Incl. Taxes</h6>
                                <h5 className="strong fw-bolder"> $8,025.00</h5>
                                <div className="line m-2">
                                  <Line
                                    length={"100%"}
                                    color="black"
                                    orientation="horizontal"
                                  />
                                </div>
                              </p>
                              <button className="r-btn">
                                <h5>RESERVE</h5>
                              </button>
                            </div>
=======
                      <div className="line1 m-1">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <h6 className="ph6">Two Way Delivery: $58.00</h6>
                      <div className="line1 m-1 ">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <div className="details1">
                        <div className="d-block d-md-flex">
                          <div>
                            <div className="left1">
                              <p>. Brand: Caterpillar 320 GC</p>
                              <p>. Manufacture Year: 2021</p>
                              <p>. Digging Depth: 22 feet</p>
                              <p>. operating Weight: 22,500lbs</p>
                            </div>
                            <div className="right1">
                              <p>. Brand: Genie GS-1930</p>
                              <p>. Manufacture Year: 2019</p>
                              <p>. Platform Height: 19 feet</p>
                              <p>. Lift Capacity: 500lbs</p>
                            </div>
                          </div>
                          <div>
                            <div className="trp-card">
                              <div className="">
                                <p className="total-p1">
                                  <h5 className="strong fw-bolder">
                                    {" "}
                                    Total Rental Price
                                  </h5>{" "}
                                  <h6 className="">Incl. Taxes</h6>
                                  <h5 className="strong fw-bolder">
                                    {" "}
                                    $8,025.00
                                  </h5>
                                  <div className="line m-1">
                                    <Line
                                      length={"100%"}
                                      color="black"
                                      orientation="horizontal"
                                    />
                                  </div>
                                </p>
                                <button className="r-btn">
                                  <h5>RESERVE</h5>
                                </button>
                              </div>
                            </div>
>>>>>>> 62eda0b515fca9f6115996beeaaa35712729bc7d
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="rental-box">
                      <div className="pricing">
                        <LuWatch className="luwatch" />
                        <span> $400/Day</span>
                        <span> $1,200/Day</span>
                        <span> $3,500/Month</span>
                      </div>

                      <div className="line1 m-1">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <h6 className="ph6">Two Way Delivery: $48.00</h6>
                      <div className="line1 m-1 ">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <div className="details1">
                        <div>
                          <div className="left1">
                            <p>. Brand: JLG 600AJ</p>
                            <p>. Manufacture Year: 2020</p>
                            <p>. Platform Height: 60 feet</p>
                            <p>. Horizontal Reach: 39 feet</p>
                          </div>
                          <div className="right1">
                            <p>. Brand: Toyota 8FGCU25</p>
                            <p>. Manufacture Year: 2018</p>
                            <p>. Lift Capacity: 5,000lbs</p>
                            <p>. Lift Height: 189inches</p>
                          </div>
                          <div className="trp-card">
                            <div>
                              <p className="total-p1">
                                <h5 className="strong fw-bolder">
                                  {" "}
                                  Total Rental Price
                                </h5>{" "}
                                <h6 className="">Incl. Taxes</h6>
                                <h5 className="strong fw-bolder"> $3,745.00</h5>
<<<<<<< HEAD
                                <div className="line m-2">
                                  <Line
                                    length={145}
=======
                                <div className="line m-1">
                                  <Line
                                    length={"100%"}
>>>>>>> 62eda0b515fca9f6115996beeaaa35712729bc7d
                                    color="black"
                                    orientation="horizontal"
                                  />
                                </div>
                              </p>
                              <button className="r-btn">
                                <h5>RESERVE</h5>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="rental-box">
                      <div className="pricing">
                        <LuWatch className="luwatch" />
                        <span> $250.00/Day</span>
                        <span> $750.00/Day</span>
                        <span> $2,200/Month</span>
                      </div>

                      <div className="line1 m-1">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <h6 className="ph6">Two Way Delivery: $43.00</h6>
                      <div className="line1 m-1">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <div className="details1">
<<<<<<< HEAD
                        <div>
=======
                        <div className="">
>>>>>>> 62eda0b515fca9f6115996beeaaa35712729bc7d
                          <div className="left1">
                            <p>. Brand: BomagBW 120 AD-5</p>
                            <p>. Manufacture Year: 2019</p>
                            <p>. Operating Weight: 5,300lbs</p>
                            <p>. Drum Width: 47 inches</p>
                          </div>
                          <div className="right1">
                            <p>. Brand: Hamm HD 12 VV</p>
                            <p>. Manufacture Year: 2020</p>
                            <p>. Operating Weight: 6,500lbs</p>
                            <p>. drum Width: 47 Inches</p>
                          </div>
                          <div className="trp-card">
                            <div>
                              <p className="total-p1">
                                <h5 className="strong fw-bolder">
                                  {" "}
                                  Total Rental Price
                                </h5>{" "}
                                <h6 className="">Incl. Taxes</h6>
                                <h5 className="strong fw-bolder"> $2,354.00</h5>
<<<<<<< HEAD
                                <div className="line m-2">
                                  <Line
                                    length={145}
=======
                                <div className="line1 m-1">
                                  <Line
                                    length={"100%"}
>>>>>>> 62eda0b515fca9f6115996beeaaa35712729bc7d
                                    color="black"
                                    orientation="horizontal"
                                  />
                                </div>
                              </p>
                              <button className="r-btn">
                                <h5>RESERVE</h5>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                  {/* <div>
                    <div className="rental-box">
                      <div className="pricing">
                        <LuWatch className="luwatch" />
                        <span> $250.00/Day</span>
                        <span> $750.00/Day</span>
                        <span> $2,200/Month</span>
                      </div>

                      <div className="line1 m-1">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <h6 className="ph6">Two Way Delivery: $43.00</h6>
                      <div className="line1 m-1">
                        <Line
                          length={"100%"}
                          color="black"
                          orientation="horizontal"
                        />
                      </div>
                      <div className="details1">
                        <div>
                          <div className="left1">
                            <p>. Brand: BomagBW 120 AD-5</p>
                            <p>. Manufacture Year: 2019</p>
                            <p>. Operating Weight: 5,300lbs</p>
                            <p>. Drum Width: 47 inches</p>
                          </div>
                          <div className="right1">
                            <p>. Brand: Hamm HD 12 VV</p>
                            <p>. Manufacture Year: 2020</p>
                            <p>. Operating Weight: 6,500lbs</p>
                            <p>. drum Width: 47 Inches</p>
                          </div>
                          <div className="trp-card">
                            <div>
                              <p className="total-p1">
                                <h5 className="strong fw-bolder">
                                  {" "}
                                  Total Rental Price
                                </h5>{" "}
                                <h6 className="">Incl. Taxes</h6>
                                <h5 className="strong fw-bolder"> $2,354.00</h5>
                                <div className="line1 m-1">
                                  <Line
                                    length={"100%"}
                                    color="black"
                                    orientation="horizontal"
                                  />
                                </div>
                              </p>
                              <button className="r-btn">
                                <h5>RESERVE</h5>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div> */}
                </main>
              </div>
            </div>
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

<div className="excavators-section "></div>;

export default EquipmentList;

{
  /* <div className="mt-3 mt-lg-5 m-5">
  <img src={Category} alt=" categories" />
</div>; */
}

//  <div className="m-5">
//    <div className="mb-5 reserveimg">
//      <img src={ItemList} alt="" />
//    </div>

//    <div className="mb-5">
//      <img src={ItemList1} alt="" />
//    </div>
//    <div>
//      <img src={ItemList2} alt="" />
//    </div>
//  </div>;
