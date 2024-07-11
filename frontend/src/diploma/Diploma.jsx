import React from "react";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Footer from "../component/Footer";

const Diploma = () => {
  document.title = "Diploma at GSS";
  return (
    <>
      <Navbar />
      <Warning />
      <Footer />
    </>
  );
};

export default Diploma;
