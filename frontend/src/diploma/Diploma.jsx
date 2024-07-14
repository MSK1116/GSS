import React from "react";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import Diploma_banner from "./Diploma_banner";
import Diploma_Banner2 from "./Diploma_Banner2";
import Diploma_banner3 from "./Diploma_banner3";
import Diploma_price_card from "./Diploma_price_card";

const Diploma = () => {
  document.title = "Diploma at GSS";
  return (
    <>
      <Navbar />
      <Diploma_banner />
      <Diploma_Banner2 />
      <Diploma_banner3 />
      <Diploma_price_card />
      <Footer />
    </>
  );
};

export default Diploma;
