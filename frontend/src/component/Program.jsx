import React, { useEffect } from "react";
import ProgramList from "../assets/Program.json";
import Programcard from "./Programcard";
import Aos from "aos";
import "aos/dist/aos.css";

const Program = () => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  });
  return (
    <>
      <section className="max-w-screen-2xl p-8 bg-gray-50  ">
        <h1 data-aos="fade-right" className=" text-3xl mb-4  font-bold text-red-500">
          Our Programs
        </h1>
        <div className=" grid md:grid-cols-2 md:grid-rows-3 gap-5">
          {ProgramList.map((ProgramList) => (
            <Programcard key={ProgramList.id} items={ProgramList} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Program;
