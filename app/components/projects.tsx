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
    <section id="projects" className="flex flex-col p-4 py-14">
      <div className="">
        <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold">
          Projects
        </h2>
        <p className="text-black mb-4 md:text-lg">
          Lets shed some light on my work
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <BurghExpress />
        <Dandia />
      </div>
      {/* <Questionnaire /> */}
    </section>
  );
};

export default Projects;
