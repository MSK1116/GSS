import React from "react";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Footer from "../component/Footer";
import Neb_banner from "./Neb_banner";
import Neb_banner1 from "./Neb_banner1";
import Neb_banner2 from "./Neb_banner2";

const Neb = () => {
  document.title = "+2 at GSS";
  return (
    <>
      <Navbar />
      <Neb_banner />
      <Neb_banner1 />
      <Neb_banner2 />
      <Footer />
    </>
  );
};

export default Neb;
