import React from "react";

const Sticker = () => {
  return (
    <>
      <div className="absolute md:-top-36 -top-28 md:-left-28 -left-24 overflow-hidden  z-0   ">
        <svg className="md:w-96 w-80 z-0 h-full object-fill opacity-70 md:opacity-85 fill-yellow-400 " viewBox="0 0 500 670" xmlns="http://www.w3.org/2000/svg">
          <ellipse
            style={{
              strokeWidth: 0,
            }}
            cx="222.906"
            cy="312.795"
            rx="129.388"
            ry="130.029"
          />
        </svg>
      </div>
      <span className="md:text-5xl text-sm font-bold flex flex-col absolute md:top-20  top-24 left-1 z-10  text-center text-white">
        71
        <span className="md:text-sm text-xs text-white left-6">years of excellence!</span>
      </span>
    </>
  );
};

export default Sticker;
