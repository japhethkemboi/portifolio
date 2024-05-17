import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { items } from "./projects.json";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="flex flex-col px-10 py-10">
      <div className="">
        <h2 className="text-black mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold">
          My Work
        </h2>
        <p className="text-black mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Lets shed some light on my work
        </p>
      </div>
      <div className="mt-10 space-y-10 md:space-y-0 gap-4 grid md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <div key={index} className={`flex space-x-3 bg-[${item.bgColor}]`}>
            <Image
              src={item.images[0]}
              alt={item.title}
              width={0}
              height={0}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="bg-opacity-20 flex flex-col py-2">
              <h2
                className={`text-[${item.titleColor}] mb-4 text-xl font-bold`}
              >
                {item.title}
              </h2>
              <p
                className={`text-[${item.textColor}] sm:text-lg lg:text-xl mb-6`}
              >
                {item.desc}
              </p>
              <div className="flex space-x-1 w-full flex-wrap space-y-1 mt-auto">
                {item.stack.map((s, index) => (
                  <span
                    key={index}
                    className="p-1 px-2 text-nowrap text-xs bg-gray-300 text-gray-800 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
