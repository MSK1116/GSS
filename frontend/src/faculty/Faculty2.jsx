import React from "react";
import List from "../assets/Faculty.json";
import Faculty_card from "../component/Faculty_card";

const Faculty2 = () => {
  const cardFac = List.filter((data) => data.slider != "true" && data.dept != "eng");
  const cardFac1 = List.filter((data) => data.slider != "true" && data.dept == "eng");
  return (
    <>
      <section class="w-screen  bg-gray-50 mx-auto p-8 sm:px-6 lg:px-4 py-12 ">
        <div class="text-center pb-12">
          <h2 class="text-base font-bold text-indigo-600">They are ready to give their time to you!</h2>
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Meet our teachers & staff</h1>
        </div>
        <div class="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-6">
          {cardFac.map((cardFac) => (
            <Faculty_card key={cardFac.id} items={cardFac} />
          ))}
        </div>
        <div class="text-center pb-12">
          <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">Engineering Department</h1>
        </div>
        <div class="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5  gap-6">
          {cardFac1.map((cardFac1) => (
            <Faculty_card key={cardFac1.id} items={cardFac1} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Faculty2;
