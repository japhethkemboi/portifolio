"use client";
import React from "react";
import Questionnaire from "./questionnaire";
import BurghExpress from "./burghexpress";
import Dandia from "./dandia";
import Image from "next/image";

const Projects = () => {
  const hexToRgba = (hex: string, opacity: number) => {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
      hex = hex
        .split("")
        .map((hex) => hex + hex)
        .join("");
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <section id="projects" className="flex p-4 flex-col py-14 snap-start">
      <div className="text-center">
        <h2 className=" mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold">
          Projects
        </h2>
        <p className="text-black mb-4 md:text-lg">
          Lets shed some light on my work
        </p>
      </div>
      <div className="grid gap-4 grid-cols-2">
        <div
          className="flex flex-col gap-4 rounded p-2 items-center"
          style={{ backgroundColor: hexToRgba("#fc0000", 0.3) }}
        >
          <div className="flex justify-center w-full rounded-lg">
            <Image
              src="/images/burghexpress/3.png"
              alt="BurghExpress"
              width={100}
              height={100}
              className="max-w-none -rotate-45"
            />
            <Image
              src="/images/burghexpress/logo.png"
              alt="BurghExpress"
              width={100}
              height={100}
              className="max-w-none w-auto h-auto"
            />
            <Image
              src="/images/burghexpress/2.png"
              alt="BurghExpress"
              width={100}
              height={100}
              className="max-w-none rotate-12"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">BurghExpress</h3>
          </div>
        </div>
        <div
          className="flex flex-col gap-4 rounded p-2 items-center"
          style={{ backgroundColor: hexToRgba("#fc0000", 0.3) }}
        >
          <div className="flex justify-center w-full rounded-lg">
            <Image
              src="/images/burghexpress/logo.png"
              alt="BurghExpress"
              width={100}
              height={100}
              className="max-w-none aspect-square"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-xl">BurghExpress</h3>
          </div>
        </div>
      </div>
      {/* <BurghExpress />
      <Dandia />
      <Questionnaire /> */}
    </section>
  );
};

export default Projects;
