import React from "react";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Footer from "../component/Footer";

const See = () => {
  document.title = " 8 to 10 at GSS";
  return (
    <>
      <Navbar />
      <Warning />
      <Footer />
    </>
  );
};

export default See;
