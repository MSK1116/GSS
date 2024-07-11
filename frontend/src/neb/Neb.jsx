import React from "react";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Footer from "../component/Footer";

const Neb = () => {
  document.title = "+2 at GSS";
  return (
    <>
      <Navbar />
      <Warning />
      <Footer />
    </>
  );
};

export default Neb;
