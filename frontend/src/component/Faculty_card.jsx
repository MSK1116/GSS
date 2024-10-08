import React, { useEffect } from "react";
import Aos from "aos";

const Faculty_card = ({ items }) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <div>
        <div className="w-full rounded-lg p-12 flex flex-col justify-center items-center hover:shadow-lg">
          <div className="mb-8 overflow-hidden">
            <img className="object-center object-cover rounded-full h-36 w-36 " src={items.photo} alt="photo"></img>
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-700 font-bold mb-2">{items.title}</p>
            <p className="text-base text-gray-400 font-normal">{items.post}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faculty_card;
