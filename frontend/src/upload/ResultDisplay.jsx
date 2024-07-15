import React from "react";

const ResultDisplay = ({ jsonData }) => {
  return (
    <>
      <div className="max-w-screen-2xl p-8 mb-10 bg-gray-100 h-96 overflow-y-auto">
        <h1 className=" text-red-500">Please verify the result</h1>
        <pre className=" text-black/95 text-pretty">{jsonData}</pre>
      </div>
    </>
  );
};

export default ResultDisplay;
