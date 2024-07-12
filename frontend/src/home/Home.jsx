import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Viewer from "../component/Viewer";
import PrincipalBanner from "../component/PrincipalBanner";

const Home = () => {
  document.title = "GSS || Gamvir Samudra Setu Secondary School";
  return (
    <>
      <Navbar />
      {/* <Warning /> */}
      <Viewer />
      <PrincipalBanner />
      <Footer />
    </>
  );
};

export default Home;
