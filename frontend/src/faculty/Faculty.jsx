import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Faculty_slider from "./Faculty_slider";
import Faculty2 from "./Faculty2";

const Faculty = () => {
  document.title = "Faculty || GSS";
  return (
    <>
      <Navbar />
      <Faculty_slider />
      <Faculty2 />
      <Footer />
    </>
  );
};

export default Faculty;
