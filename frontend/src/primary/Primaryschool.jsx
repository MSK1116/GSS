import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Warning from "../component/Warning";

const Primaryschool = () => {
  document.title = "Primary Schooling at GSS";
  return (
    <>
      <Navbar />
      <Warning />
      <Footer />
    </>
  );
};

export default Primaryschool;
