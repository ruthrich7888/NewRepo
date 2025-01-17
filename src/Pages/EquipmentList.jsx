import React from "react";
import Layout from "../components/Layout";
import WeHelp from "../components/Home Components/WeHelp";
import { Link } from "react-router-dom";
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
          <div className="">
            <div className="excavators-section ">
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
            <div className="row ">
              <div className="col-3">
                <div className="mt-3 mt-lg-5 m-5">
                  <img src={Category} alt=" categories" />
                </div>
              </div>
              <div className="col-6">
                <div className="m-5">
                  <div className="mb-5 reserveimg">
                    <img src={ItemList} alt="" />
                  </div>

                  <div className="mb-5">
                    <img src={ItemList1} alt="" />
                  </div>
                  <div>
                    <img src={ItemList2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WeHelp />
      </Layout>
    </>
  );
};

export default EquipmentList;
