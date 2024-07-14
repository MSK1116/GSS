import React from "react";
import ProgramList from "../assets/Program.json";
import Programcard from "./Programcard";

const Program = () => {
  return (
    <>
      <section className="max-w-screen-2xl p-8 bg-gray-50  ">
        <h1 className=" text-3xl mb-4  font-bold text-red-500">Our Programs</h1>
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
