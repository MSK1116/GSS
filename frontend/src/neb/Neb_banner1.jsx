import React from "react";
import { Link } from "react-router-dom";

const Neb_banner1 = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div data-aos="zoom-in" className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h1>You can study</h1>
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Law<br></br>Education<br></br> Computer Science <br></br>Hotel Management
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  At GSS, our +2 programs offer diverse fields of study, including Law, Education, Computer Science, and Hotel Management. The Law program introduces legal concepts and principles, while Education focuses on teaching methods and
                  psychology. Computer Science covers programming and IT skills, and Hotel Management teaches hospitality industry practices. Each program is supported by experienced faculty and modern facilities, providing students with a
                  comprehensive and practical education.
                </p>

                <div data-aos="zoom-in-up" data-aos-delay="100" className="mt-4 md:mt-8">
                  <Link to={"/apply"}>
                    <span className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                      Enroll now
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                data-aos="fade-right"
                alt=""
                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />

              <img
                data-aos="fade-left"
                alt=""
                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Neb_banner1;
