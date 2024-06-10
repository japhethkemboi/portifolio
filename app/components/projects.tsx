"use client";
import React from "react";
import Questionnaire from "./questionnaire";
import BurghExpress from "./burghexpress";
import Dandia from "./dandia";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col py-14 snap-start">
      <div className="px-10">
        <h2 className="text-black mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-extrabold">
          My Work
        </h2>
        <p className="text-black mb-4 text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Lets shed some light on my work
        </p>
      </div>
      <BurghExpress />
      <Dandia />
      <Questionnaire />
    </section>
  );
};

export default Projects;
