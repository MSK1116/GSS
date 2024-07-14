import React from "react";
import { Link } from "react-router-dom";

const Neb_banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl rounded-lg">
        <section className="overflow-hidden md:h-screen  bg-[url(/IMG_DIR/GamvirFull1.jpg)] bg-cover bg-top bg-no-repeat">
          <div className="bg-black/50  p-8  md:h-screen md:p-12 lg:px-16 lg:py-24">
            <div className="text-left ">
              <h2 className="text-2xl font-bold mt-10 text-white sm:text-3xl md:text-5xl">+2 at Gamvir</h2>

              <p className=" max-w-lg text-white/90 mt-8 md:mt-6 md:block md:text-lg md:leading-relaxed">
                Our +2 program at GSS is designed to offer students advanced education in a supportive and challenging environment. We provide streams in Computer Science, Management, and Humanities, each with a curriculum that prepares students for
                higher education and professional careers.
              </p>

              <div className="mt-4 sm:mt-8 hidden md:block">
                <Link to={"/contact"}>
                  <span className=" rounded-full bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">Have a query?</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Neb_banner;
