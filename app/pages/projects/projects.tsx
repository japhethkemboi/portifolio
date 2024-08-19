"use client";
import React, { useEffect, useState } from "react";
import ProjectTile from "./components/project_tile";
import projects from "./components/projects.json";
import Image from "next/image";
import { CgClose, CgOptions } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import Project from "./components/project";

const Projects = () => {
  const [modalImg, setModalImg] = useState("");
  const [project, setProject] = useState<Object>();
  useEffect(() => {
    modalImg
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [modalImg]);

  return (
    <>
      {project && <Project props={projects[3]} setModalImage={setModalImg} />}
      <section id="projects" className="flex flex-col overflow-auto p-4 gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-black dark:text-white">
            Projects
          </h2>
          <p className="text-xs text-black/80">
            Lets shed some light on my work
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <div className="relative rounded-full flex grow border items-center">
            <RiSearchLine className="absolute left-3" />
            <input
              className="grow bg-transparent rounded-full p-2 px-10 items-center"
              placeholder="Search a project, tag or keyword"
            />
            <button className="absolute right-3">
              <CgClose />
            </button>
          </div>
          <button className="p-2 hover:opacity-70 rounded-full hover:bg-black/40">
            <CgOptions size={28} />
          </button>
        </div>
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4 gap-8 w-full">
          {projects.map((project, index) => (
            <ProjectTile
              key={index}
              props={project}
              setModalImage={setModalImg}
            />
          ))}
        </div>
      </section>
      {modalImg && (
        <div className="fixed z-40 flex flex-col top-0 bottom-0 justify-center items-center gap-4 overflow-hidden w-full min-h-screen bg-gray-950/80 backdrop-blur">
          <div className="relative shrink-0 w-full h-3/4 overflow-hidden">
            <Image
              src={modalImg}
              alt="alt screenshot"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <button
            onClick={() => setModalImg("")}
            className="right-3 rounded-full bg-white/90 flex gap-2 items-center p-4 border hover:opacity-80 hover:scale-110"
          >
            <CgClose />
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;
