import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

const Pri_banner = () => {
  return (
    <>
      <div data-aos="zoom-out" className="max-w-screen-2xl rounded-lg">
        <section className="overflow-hidden md:h-screen  bg-[url(/IMG_DIR/child1.jpeg)] bg-cover bg-top bg-no-repeat">
          <div className="bg-black/50  p-8  md:h-screen md:p-12 lg:px-16 lg:py-24">
            <div className="text-left ">
              <h2 data-aos="fade-down" data-aos-duration="900" className="text-2xl font-bold mt-10 text-white sm:text-3xl md:text-5xl">
                Schooling at Gamvir
              </h2>

              <p data-aos="zoom-in-down" data-aos-duration="1000" className=" max-w-lg text-white/90 mt-8 md:mt-6 md:block md:text-lg md:leading-relaxed">
                At GSS, we are dedicated to providing a holistic education that fosters academic excellence, personal growth, and social responsibility. Our well-rounded curriculum is designed to nurture students' intellectual, physical, and
                emotional development.
              </p>

              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" className="mt-4 sm:mt-8 hidden md:block">
                <Link to={"/contact"}>
                  <span href="#" className=" rounded-full bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                    Have a query?
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pri_banner;
