// src/components/Viewer.jsx
import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img2 from "/IMG_DIR/GamvirFull2.jpg";
import img1 from "/IMG_DIR/GamvirFull1.jpg";
import img3 from "/IMG_DIR/child1.jpeg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Viewer = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });
  return (
    <>
      <section className="max-w-screen-2xl overflow-hidden h-screen md:mt-10 mt-14 p-8 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 data-aos="zoom-in-down" className=" text-3xl font-extrabold text-red-500 md:text-3xl">
              Shree Gamvir Samudra Setu Secondary School
            </h2>

            <p className=" mt-6  text-gray-500 md:mt-4 md:block">
              <span data-aos="zoom-in-down" data-aos-delay="500" className=" font-semibold">
                {" "}
                “सर्वोत्कृष्टता तर्फको प्रयत्न"
              </span>
              <br></br>
              <span data-aos="zoom-in-down" data-aos-delay="600">
                Empowering young minds with knowledge, creativity, and the confidence to explore, grow, and succeed in their educational journey is key to fostering lifelong learning and achievement.
              </span>
            </p>

            <div className="mt-4 md:mt-8">
              <Link to={"/apply"}>
                <span data-aos="zoom-out-up" data-aos-delay="700" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                  Apply Now
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out-left">
          <Carousel dynamicHeight={true} autoPlay interval={3000} infiniteLoop={true} showArrows={true} showThumbs={false}>
            <div>
              <img src={img1} className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" alt="Image 1" />
              <p className="legend mt-10">समुद्र भवन</p>
            </div>
            <div>
              <img src={img2} className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" alt="Image 2" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img src={img3} className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" alt="Image 3" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Viewer;
