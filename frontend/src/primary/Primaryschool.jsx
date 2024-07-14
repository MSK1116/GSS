import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Pri_banner from "./Pri_banner";
import Pri_banner2 from "./Pri_banner2";
import Pri_banner3 from "./Pri_banner3";
import Pri_banner4 from "./Pri_banner4";

const Primaryschool = () => {
  document.title = "Primary Schooling at GSS";
  return (
    <>
      <Navbar />
      <Pri_banner />
      <Pri_banner2 />
      <Pri_banner4 />
      <Footer />
    </>
  );
};

export default Primaryschool;
