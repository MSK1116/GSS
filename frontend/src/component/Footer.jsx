import React from "react";
import { FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" hidden md:block max-w-screen-2xl p-8 container mx-auto md:px-20px  footer  footer-center bg-yellow-300 text-white  ">
        <div className="flex md:flex-row flex-col justify-center w-full md:justify-between">
          <div className=" md:text-left flex flex-col text-center justify-center overflow-hidden">
            <img
              className=" object-cover mb-4 rounded-full h-36 w-36 hover:scale-105 transition-all duration-700"
              src="https://images.squarespace-cdn.com/content/v1/5e0849d5b75e913537ba6e4b/1580072657793-FQHY1078YO7V1B6O3A5C/Target%2BLogo%2B_%2BPictorial%2BLogo%2BExample%2B_%2BMill%2BCreek%2BCreative.png"
              alt="photo"></img>
            <h1 className=" font-extrabold">GSS Sec. School</h1>
            <h1>Mahalaxmi Nagarpalika-2, Imadol, Lalitpur, Nepal</h1>
          </div>
          <div className="flex flex-col  text-left">
            <h1 className=" text-blue-600 mb-4 text-[18px] ">Quick Link</h1>
            <Link to={"/contact"}>
              <a>Contact us</a>
            </Link>
            <Link to={"/faculty"}>Faculty</Link>
            <a>Result</a>
            <Link to={"/apply"}>
              <a>Apply</a>
            </Link>
          </div>
          <div className="flex flex-col  text-left">
            <h1 className=" text-blue-600 mb-4 text-[18px] ">Quick contact</h1>

            <span className="flex flex-row items-center ">
              <FaPhoneAlt className="w-6 h-6" /> +01 5201303
            </span>
            <span className="flex flex-row items-center ">
              <FaPhoneAlt className="w-6 h-6" /> +01 5204323
            </span>

            <span className="flex flex-row items-center ">
              <MdEmail className="w-6 h-6" /> gamvir09@gmail.com
            </span>
            <span className="flex flex-row items-center ">
              <MdEmail className="w-6 h-6" /> gamvirengdep073@gmail.com
            </span>
          </div>
          <Navigation />
        </div>
        <h1 className=" flex flex-row">
          Crafted by GSS alumni:
          <a target="blank" href="https://www.manishmahato.info.np/">
            Manish Singh Mahato
          </a>
        </h1>
      </footer>

      <footer className="block md:hidden footer footer-center bg-yellow-500 text-primary-content p-10">
        <aside>
          <img
            className=" object-center object-cover rounded-full w-20 h-20"
            src="https://images.squarespace-cdn.com/content/v1/5e0849d5b75e913537ba6e4b/1580072657793-FQHY1078YO7V1B6O3A5C/Target%2BLogo%2B_%2BPictorial%2BLogo%2BExample%2B_%2BMill%2BCreek%2BCreative.png"></img>
          <p className="font-bold">
            GSS
            <br />
            Mahalaxmi Nagarpalika-2, Imdol, Lalitpur
          </p>
          <p>Copyright © ${new Date().getFullYear()} - All right reserved</p>
        </aside>
        <span className=" flex flex-row">
          Crafted by:
          <a href="https://www.manishmahato.info.np/" target="blanl">
            Manish Singh Mahato
          </a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
