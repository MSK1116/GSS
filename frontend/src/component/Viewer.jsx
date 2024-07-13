// src/components/Viewer.jsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Viewer = () => {
  return (
    <>
      <section className="max-w-screen-2xl overflow-hidden h-screen md:mt-10 mt-14 p-8 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className=" text-3xl font-extrabold text-red-500 md:text-3xl">Shree Gamvir Samudra Setu Secondary School</h2>

            <p className=" mt-6  text-gray-500 md:mt-4 md:block">
              <span className=" font-semibold"> “सर्वोत्कृष्टता तर्फको प्रयत्न"</span>
              <br></br>
              Empowering young minds with knowledge, creativity, and the confidence to explore, grow, and succeed in their educational journey is key to fostering lifelong learning and achievement.
            </p>

            <div className="mt-4 md:mt-8">
              <a href="#" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div>
          <Carousel dynamicHeight={true} autoPlay interval={3000} infiniteLoop={true} showArrows={true} showThumbs={false}>
            <div>
              <img
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/294982712_1752018298481172_5948095007949087131_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZT5uHUOWnGEQ7kNvgEzF8Mb&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCaCIpS1j-_7stJ8PVrdj_sIxJcqA9P9CO7c-pFjcrGPg&oe=6696B1F7"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                alt="Image 1"
              />
              <p className="legend mt-10">समुद्र भवन</p>
            </div>
            <div>
              <img
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t39.30808-6/294982712_1752018298481172_5948095007949087131_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ZT5uHUOWnGEQ7kNvgEzF8Mb&_nc_ht=scontent.fktm21-1.fna&oh=00_AYCaCIpS1j-_7stJ8PVrdj_sIxJcqA9P9CO7c-pFjcrGPg&oe=6696B1F7"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                alt="Image 2"
              />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img
                src="https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/66319246_904671999882477_2743657247925075968_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=jp2X1YFceYYQ7kNvgH5-Xac&_nc_ht=scontent.fktm21-1.fna&oh=00_AYBKFLij5XZAO5XsGSnRj-YQIrGlWOmKLNAV09ieNuAlBg&oe=66B8301D"
                className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
                alt="Image 3"
              />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Viewer;
