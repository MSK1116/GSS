import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Viewer from "../component/Viewer";

const Home = () => {
  document.title = "GSS || Gamvir Samudra Setu Secondary School";
  return (
    <>
      <Navbar />
      {/* <Warning /> */}
      <Viewer />
      <Footer />
    </>
  );
};

export default Home;
