import React from "react";
import { equipments } from "../../data/data";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-b overlay">
        <div className="container content conc">
          <h1 className="fs-2.5 onestop pt-5">
            Your One-Stop Source For All Equipment Rental Needs
          </h1>
          <div className="search-bar">
            <div className="">
              <input
                type="text"
                placeholder="Search For Something..."
                className="search-input"
              />
              <button className="search-button">Search</button>
            </div>

            <p className="fs-1.2 pt-5">
              Top-Of-The-Line Equipment Ready At Flexible Rates Around
            </p>
          </div>
        </div>
        <div className="equipment-card">
          <h2>Find The Right Equipment</h2>
          <input
            type="text"
            placeholder="   Equipment Name....."
            className="input-field"
          />
          <input
            type="text"
            placeholder="   Rental Duration Date....."
            className="input-field"
          />
          <button className="find-button fw-medium"> FIND EQUIPMENT</button>
        </div>
      </div>
      <div>
        <div className="p-3 mt-5 ">
          <p className="d-flex  justify-content-center pt-5">
            We Promise To Find You The Right Equipment.
          </p>
          <h2
            className="fw-bold d-flex justify-content-center"
            id="categories1"
          >
            Browse Machinery Categories
          </h2>
        </div>{" "}
        <div className="categories-container">
          {equipments.map((equipment) => {
            return (
              <div className="category-item" key={equipment._id}>
                <img src={equipment.Image} alt={equipment.title} />
<<<<<<< HEAD
                <h5> {equipment.title} </h5>
=======
                <h5 className=""> {equipment.title} </h5>
>>>>>>> 62eda0b515fca9f6115996beeaaa35712729bc7d
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="hero-b">
  <div className="container"></div>
  <div>
    <div>
      <h1>YOUR ONE-STOP SOURCE FOR ALL EQUIPMENT RENTALS NEEDS</h1>
    </div>
  </div>
  <div>
    <div className="categories-container">
      {equipments.map((equipment) => {
        return (
          <div className="category-item" key={equipment.id}>
            <img src={equipment.Image} alt=" {item.title} " />
            <h5> {equipment.title} </h5>
          </div>
        );
      })}
    </div>
  </div>
</div>; */
}
{
  /* <div className="hero-b over">
        <div className="container">
          <h1 className="text-white d-flex justify-content-center align-content-center fs-3">
            YOUR ONE-STOP SOURCE FOR ALL EQUIPMENT RENTALS NEEDS
          </h1>
        </div> */
}
