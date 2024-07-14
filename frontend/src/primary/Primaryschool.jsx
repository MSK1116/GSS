import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Warning from "../component/Warning";
import Pri_banner from "./Pri_banner";

const Primaryschool = () => {
  document.title = "Primary Schooling at GSS";
  return (
    <>
      <Navbar />
      <Pri_banner />
      <Footer />
    </>
  );
};

export default Primaryschool;
