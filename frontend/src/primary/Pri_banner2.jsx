import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import { MdOutlineSportsTennis } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Pri_banner2 = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-7  lg:flex  lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <strong className="font-extrabold text-red-700 sm:block"> Why GSS ?</strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              At GSS, we are dedicated to providing a holistic education that fosters academic excellence, personal growth, and social responsibility. Our well-rounded curriculum is designed to nurture students' intellectual, physical, and emotional
              development.
            </p>
          </div>
        </div>
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:flex lg:items-center">
            <div className="w-full grid grid-cols-2 place-content-evenly gap-10 ">
              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <MdOutlineSportsTennis className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">ECA & CCA</h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">We offer diverse activities, including sports, arts, and cultural events, ensuring students develop a range of skills.</p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <FaHandsHelping className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Community Engagement</h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">We encourage students to participate in community service, fostering a sense of social responsibility and civic engagement.</p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <FaBuilding className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Modern Facilities</h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">Our school is equipped with state-of-the-art classrooms, science laboratories, a well-stocked library, and sports facilities.</p>
                </div>
              </div>

              <div className="md:flex md:items-start md:-mx-4">
                <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  <HiAcademicCap className="w-6 h-6" />
                </span>

                <div className="mt-4 md:mx-4 md:mt-0">
                  <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Academic Excellence </h1>

                  <p className="mt-3 text-gray-500 dark:text-gray-300">Our curriculumspans various subjects with a strong emphasis on critical thinking, problem-solving, and creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pri_banner2;
