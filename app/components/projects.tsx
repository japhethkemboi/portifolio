"use client";
import React from "react";
import Questionnaire from "./questionnaire";
import BurghExpress from "./projects/burghexpress";
import Dandia from "./dandia";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col p-4 py-14 gap-8">
      <div className="">
        <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black dark:text-white">
          Projects
        </h2>
        <p className="mb-4 md:text-lg">Lets shed some light on my work</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <BurghExpress />
        <Dandia />
      </div>
      <div className="grid grid-cols-2">
        <Questionnaire />
      </div>
    </section>
  );
};

export default Projects;
