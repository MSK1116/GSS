import React, { useEffect } from "react";
import List from "../assets/Faculty.json";
import Faculty_card from "../component/Faculty_card";

const Faculty2 = () => {
  const cardFac = List.filter((data) => data.slider != "true" && data.dept != "eng");
  const cardFac1 = List.filter((data) => data.slider != "true" && data.dept == "eng");

  return (
    <>
      <section className="max-w-screen-2xl   mx-auto p-8 sm:px-6 lg:px-4 py-12 ">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-indigo-600">They are ready to give their time to you!</h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Meet our teachers & staff</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5  gap-6">
          {cardFac.map((cardFac) => (
            <Faculty_card key={cardFac.id} items={cardFac} />
          ))}
        </div>
        <div className="text-center pb-12">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Engineering Department</h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-6">
          {cardFac1.map((cardFac1) => (
            <Faculty_card key={cardFac1.id} items={cardFac1} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Faculty2;
