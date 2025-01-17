import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Home Components/Hero";
import EquipmentCategorie from "../components/Home Components/EquipmentCategorie";
import WeHelp from "../components/Home Components/WeHelp";
import WhatWeOffer from "../components/Home Components/WhatWeOffer";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <EquipmentCategorie />
        <WhatWeOffer />
        <WeHelp />
      </Layout>
    </>
  );
};

export default Homepage;
