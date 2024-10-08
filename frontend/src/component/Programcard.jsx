import React from "react";
import { Link } from "react-router-dom";

const Programcard = ({ items }) => {
  return (
    <>
      <div>
        <article data-aos="fade-up" data-aos-duration="1000" className="flex bg-white transition hover:shadow-xl rounded-lg">
          <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time data-aos="fade-left" data-aos-duration="1000" className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
              <span>{items.info1}</span>
              <span className="w-px flex-1 bg-gray-900/10"></span>
              <span>{items.info2}</span>
            </time>
          </div>

          <div data-aos="fade-right" data-aos-duration="1000" className="hidden sm:block sm:basis-56 overflow-hidden">
            <img alt="" src={items.thumb} className="aspect-square h-full w-full object-cover hover:scale-105 transition-all duration-700" />
          </div>
          <div className="flex flex-1 flex-col justify-between">
            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
              <a href="#">
                <h3 className="font-bold uppercase text-gray-900">{items.title}</h3>
              </a>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">{items.description}</p>
            </div>

            <div data-aos="zoom-in" data-aos-duration="1000" className="sm:flex sm:items-end sm:justify-end">
              <Link to={items.link}>
                <span className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">Read More</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Programcard;
