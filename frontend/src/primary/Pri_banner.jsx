import React from "react";

const Pri_banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl rounded-lg">
        <section className="overflow-hidden md:h-screen  bg-[url(/IMG_DIR/GamvirFull1.jpg)] bg-cover bg-top bg-no-repeat">
          <div className="bg-black/50  p-8  md:h-screen md:p-12 lg:px-16 lg:py-24">
            <div className="text-left ">
              <h2 className="text-2xl font-bold mt-10 text-white sm:text-3xl md:text-5xl">Schooling at Gamvir</h2>

              <p className=" max-w-lg text-white/90 mt-8 md:mt-6 md:block md:text-lg md:leading-relaxed">
                Gamvir Samudra Setu, is one of the well known technical schools established in 2073 BS under Technical Education in Community School (TECS) affiliated to Council for Technical Education & Vocational Training (CTEVT) which is leading
                technical education board in Nepal.
              </p>

              <div className="mt-4 sm:mt-8 hidden md:block">
                <a href="#" className=" rounded-full bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Pri_banner;
