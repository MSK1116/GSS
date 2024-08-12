import React, { useEffect } from "react";
import List from "../assets/Faculty.json";
import FacultyCard from "../component/Faculty_card";
import Aos from "aos";
import "aos/dist/aos.css";

const Faculty2 = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  const facultyCategories = List.reduce(
    (acc, faculty) => {
      if (faculty.slider !== "true") {
        faculty.dept === "eng" ? acc.eng.push(faculty) : acc.nonEng.push(faculty);
      }
      return acc;
    },
    { eng: [], nonEng: [] }
  );

  const renderFacultySection = (title, facultyList) => (
    <>
      <div className="text-center pb-12">
        <h1 data-aos="fade-down" data-aos-duration="800" className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {facultyList.map(({ id, ...faculty }) => (
          <FacultyCard key={id} items={faculty} />
        ))}
      </div>
    </>
  );

  return (
    <section className="max-w-screen-2xl bg-gray-50 mx-auto p-8 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 data-aos="fade-down" data-aos-duration="600" className="text-base font-bold text-indigo-600">
          They are ready to give their time to you!
        </h2>
        <h1 data-aos="fade-down" data-aos-duration="800" className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Meet our teachers & staff
        </h1>
      </div>
      {renderFacultySection("", facultyCategories.nonEng)}
      {renderFacultySection("Engineering Department", facultyCategories.eng)}
    </section>
  );
};

export default Faculty2;
