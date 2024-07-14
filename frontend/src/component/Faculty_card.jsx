import React from "react";

const Faculty_card = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
        <div className="mb-8">
          <img className="object-center object-cover rounded-full h-36 w-36" src={items.photo} alt="photo"></img>
        </div>
        <div className="text-center">
          <p className="text-xl text-gray-700 font-bold mb-2">{items.title}</p>
          <p className="text-base text-gray-400 font-normal">{items.post}</p>
        </div>
      </div>
    </>
  );
};

export default Faculty_card;
