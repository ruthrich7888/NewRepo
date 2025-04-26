import React from "react";
import Head from "./Head";
// import head from "../components/Head"
import Footer from "./Footer";
// import Head from "./components/Head";


const Layout = ({ children }) => {
  return (
    <>
      <Head />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
