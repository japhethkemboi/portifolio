"use client";
import React from "react";
import ProjectTile from "./project_tile";
import projects from "./projects.json";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col p-4 py-14 gap-8 border-t bg-white/60"
    >
      <div className="mt-10">
        <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-black dark:text-white">
          Projects
        </h2>
        <p className="mb-4 md:text-lg">Lets shed some light on my work</p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectTile key={index} props={project} />
        ))}
      </div>
      <div className="flex">
        <a href="/projects" className="text-lg text-blue-500 hover:underline">
          View more of my work
        </a>
      </div>
    </section>
  );
};

export default Projects;
