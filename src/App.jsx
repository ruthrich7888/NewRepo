import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import EquipmentList from "./Pages/EquipmentList";
import Services from "./Pages/Services";
import Careers from "./Pages/Careers";
import Errorpage from "./Pages/Errorpage";
import { IoReturnUpBackSharp } from "react-icons/io5";
import Head from "./components/Head";

const App = () => {
  function ScrollToHash() {
    const { hash } = useLocation();
    useEffect(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
    return null;
  }
  return (
    <BrowserRouter>
      {/* <Head /> */}
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/equipment-list" element={<EquipmentList />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/errorpage" element={<Errorpage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
