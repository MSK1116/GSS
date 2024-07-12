import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Warning from "../component/Warning";
import Viewer from "../component/Viewer";
import PrincipalBanner from "../component/PrincipalBanner";
import Sticker from "../component/Sticker";

const Home = () => {
  document.title = "GSS || Gamvir Samudra Setu Secondary School";
  return (
    <>
      <Navbar />
      <Sticker />
      <Viewer />
      <PrincipalBanner />
      <Footer />
    </>
  );
};

export default Home;
